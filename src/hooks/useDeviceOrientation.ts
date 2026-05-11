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
      const { beta, gamma } = event;
      if (beta === null || gamma === null) return;

      const isLandscape = typeof window !== "undefined" && 
                          window.innerWidth > window.innerHeight;

      // In Portrait: beta is pitch (tilt forward/backward)
      // In Landscape: gamma is often the tilt axis when held sideways
      const tiltValue = isLandscape ? gamma : beta;

      // Adjusted thresholds for landscape vs portrait
      // When landscape, gamma ranges from -90 to 90
      // When portrait, beta ranges from -180 to 180
      
      if (isLandscape) {
        // Landscape logic (device on forehead)
        // Gamma ~ 0 is vertical
        // Increase threshold to 55 degrees to prevent accidental triggers
        if (gamma > 55) {
          setTiltState("correct");
        } else if (gamma < -55) {
          setTiltState("pass");
        } else {
          setTiltState("neutral");
        }
      } else {
        // Portrait logic
        // Increase thresholds to be more deliberate (Vertical is ~90)
        if (beta < 35) { // Was 50
          setTiltState("correct");
        } else if (beta > 145) { // Was 130
          setTiltState("pass");
        } else {
          setTiltState("neutral");
        }
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [isEnabled, permissionGranted]);

  return { tiltState, permissionGranted, requestPermission };
};
