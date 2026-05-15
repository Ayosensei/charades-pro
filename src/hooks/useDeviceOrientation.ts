"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export type TiltState = "neutral" | "correct" | "pass";

/** Returns true if the device is currently in landscape orientation */
function getIsLandscape(): boolean {
  if (typeof window === "undefined") return false;
  // Prefer the Screen Orientation API
  if (window.screen?.orientation?.type) {
    return window.screen.orientation.type.startsWith("landscape");
  }
  // Fallback: window.orientation (deprecated but still works on many mobile devices)
  if (typeof window.orientation === "number") {
    return Math.abs(window.orientation) === 90;
  }
  // Last resort: check aspect ratio
  return window.innerWidth > window.innerHeight;
}

export const useDeviceOrientation = (isEnabled: boolean) => {
  const [tiltState, setTiltState] = useState<TiltState>("neutral");
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);
  
  // Track landscape state in a ref to use in the event handler without re-creating it
  const isLandscapeRef = useRef(getIsLandscape());

  // Keep isLandscapeRef in sync with actual orientation changes
  useEffect(() => {
    const updateOrientation = () => {
      isLandscapeRef.current = getIsLandscape();
    };

    if (window.screen?.orientation) {
      window.screen.orientation.addEventListener("change", updateOrientation);
    }
    window.addEventListener("orientationchange", updateOrientation);
    window.addEventListener("resize", updateOrientation);

    return () => {
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener("change", updateOrientation);
      }
      window.removeEventListener("orientationchange", updateOrientation);
      window.removeEventListener("resize", updateOrientation);
    };
  }, []);

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

      const landscape = isLandscapeRef.current;

      if (landscape) {
        /**
         * Landscape (phone on forehead):
         * In landscape, the device's "beta" corresponds to the rotation around the long axis
         * (tilting the top of the phone towards/away from the forehead).
         * Typically, beta ~ 0 when vertical.
         * Tilt forward (correct) -> beta goes negative
         * Tilt backward (pass) -> beta goes positive
         */
        if (beta < -55) {
          setTiltState("correct");
        } else if (beta > 55) {
          setTiltState("pass");
        } else {
          setTiltState("neutral");
        }
      } else {
        /**
         * Portrait (phone on forehead):
         * In portrait, beta is ~90 when vertical.
         * Tilt forward (correct) -> beta decreases
         * Tilt backward (pass) -> beta increases
         */
        if (beta < 35) {
          setTiltState("correct");
        } else if (beta > 145) {
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
