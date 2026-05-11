# Charades Pro: Project Specification

## 1. Project Overview
**Charades Pro** is an open-source, mobile-first Progressive Web Application (PWA) designed to provide a premium, ad-free party game experience. It eliminates the paywalls and intrusive monetization found in traditional mobile charades apps, focusing instead on high-performance animations, offline reliability, and hardware-integrated gameplay.

## 2. Core Value Proposition
- **Fully Free:** All 18 categories are available out of the box with no locked content.
- **Privacy-First:** Zero data collection, tracking, or account requirements.
- **Hardware Integration:** Uses the device's accelerometer for "Tilt to Score" mechanics.
- **Offline Capability:** PWA architecture ensures the game works in locations with spotty or no internet connection.

## 3. Technical Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (60fps UI transitions)
- **Icons:** Lucide React
- **Hardware API:** Web Device Orientation API
- **Platform:** Vercel (Deployment) / PWA (Distribution)

## 4. Confirmed Game Categories (18)
The app will launch with a comprehensive library across these specific domains:
1.  **Entertainment:** Movies, TV Series, Cartoons & Animation, Music Artists
2.  **People & History:** Celebrities, Historical Figures, Bible Characters
3.  **Sports:** Footballers, Sports & Games
4.  **Science & Tech:** Chemical Elements, Companies
5.  **Geography:** Countries, Places & Landmarks
6.  **Fiction:** DC & Marvel
7.  **Nature & Lifestyle:** Animals, Foods, Fruits, Books

## 5. Gameplay Mechanics & UX
### A. The "Forehead" Loop
1.  **Start:** User selects a category and taps "Start Game."
2.  **Permission:** App requests `DeviceOrientationEvent` permission (critical for iOS Safari).
3.  **Countdown:** 3-second countdown while the user places the phone against their forehead.
4.  **Tilt Detection:**
    - **Neutral:** Phone is vertical.
    - **Correct (Tilt Forward):** Angle shifts downward (~45°). Background turns **Green**.
    - **Pass (Tilt Backward):** Angle shifts upward (~135°). Background turns **Red**.
5.  **Feedback:** - **Haptics:** Short vibration on correct/pass.
    - **Visuals:** Framer Motion 3D card flips.

### B. Fallback Mode
- For devices without a gyroscope, provide a "Tap Mode": Tap Left half of screen to Pass, Right half for Correct.

## 6. Technical Requirements
### Device Orientation Hook
Implement a custom React hook `useDeviceOrientation` to handle:
- Permission state (prompt/granted/denied).
- Calibration of the "neutral" vertical position.
- Debouncing tilt events to prevent multiple accidental skips.

### PWA & Performance
- **Service Worker:** Cache all word banks (JSON) and core assets.
- **Performance:** Maintain < 100ms response time for tilt events.
- **Memory:** Optimize for devices with 4GB RAM by avoiding large image assets; use CSS and SVG-based UI.

## 7. Development Roadmap
1.  **Phase 1 (MVP):** Category selection UI and manual tap-to-score logic.
2.  **Phase 2 (Hardware):** Integration of `deviceorientation` API and tilt logic.
3.  **Phase 3 (Content):** Populating word banks for all 18 categories.
4.  **Phase 4 (PWA):** Manifest setup and offline service worker implementation.
