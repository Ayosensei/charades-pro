"use client";

import { useState, useEffect, useCallback } from "react";

export type TiltState = "neutral" | "correct" | "pass";

export const useDeviceOrientation = (isEnabled: boolean) => {
  const [tiltState, setTiltState] = useState<TiltState>("neutral");
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);

  const requestPermission = useCallback(async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        setPermissionGranted(permission === "granted");
        return permission === "granted";
      } catch (error) {
        console.error("Device orientation permission error:", error);
        setPermissionGranted(false);
        return false;
      }
    } else {
      // Non-iOS or older browsers
      setPermissionGranted(true);
      return true;
    }
  }, []);

  useEffect(() => {
    if (!isEnabled || permissionGranted === false) return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      // beta is the front-to-back tilt in degrees, where 0 is flat on a table
      // When vertical (on forehead), beta is usually around 90.
      const beta = event.beta; 
      
      if (beta === null) return;

      // SPEC:
      // Neutral: Vertical (~90)
      // Correct (Tilt Forward): ~45 (shifted downward)
      // Pass (Tilt Backward): ~135 (shifted upward)
      
      if (beta < 50) {
        setTiltState("correct");
      } else if (beta > 130) {
        setTiltState("pass");
      } else {
        setTiltState("neutral");
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [isEnabled, permissionGranted]);

  return { tiltState, permissionGranted, requestPermission };
};
