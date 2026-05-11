# Charades Pro 🎭

**Charades Pro** is a premium, open-source, mobile-first Progressive Web App (PWA) designed to bring back the joy of party games without the interruptions of ads or paywalls. Inspired by "Heads Up", it features hardware-integrated gameplay, high-performance animations, and full offline reliability.

![Premium UI](https://img.shields.io/badge/UI-Premium-blueviolet)
![Ad-Free](https://img.shields.io/badge/Ads-None-green)
![Privacy](https://img.shields.io/badge/Privacy-First-blue)

## ✨ Features

- **18+ Premium Categories:** Movies, TV Series, Footballers, Bible Characters, Science, Geography, and more—all unlocked from day one.
- **Tilt-to-Score Mechanics:** Uses your phone's accelerometer. Tilt down for **Correct**, tilt up to **Pass**.
- **Tap Mode Fallback:** No gyroscope? No problem. Use intuitive tap controls to keep the game going.
- **Progressive Web App (PWA):** Install it on your home screen and play anywhere, even with zero internet connection.
- **Rich Aesthetics:** A modern, dark-mode first design with glassmorphism, 3D card flips, and vibrant gradients.
- **Privacy-First:** No accounts, no tracking, no data collection. Just pure gameplay.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **PWA:** [@ducanh2912/next-pwa](https://github.com/ducanh2912/next-pwa)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🎮 How to Play

1.  **Select a Category:** Choose from 18 diverse word banks.
2.  **Ready Up:** Hold the phone against your forehead, facing your friends.
3.  **Start the Game:**
    *   **Tilt Down (Correct):** When you guess the word correctly.
    *   **Tilt Up (Pass):** To skip a word and move to the next.
4.  **Score:** Try to get as many correct as possible before the 60-second timer runs out!

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 20+
- npm

### Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayosensei/charades-pro.git
   cd charades-pro
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) on your mobile device (or use mobile emulation in Chrome DevTools).

### Production Build
To create an optimized production build:
```bash
npm run build
npm start
```
*Note: The build uses the `--webpack` flag to support PWA plugin features.*

## 📱 PWA & Offline Support
Charades Pro is designed to be played in the wild. Once you've visited the site, you can:
- **Install on iOS:** Tap Share -> Add to Home Screen.
- **Install on Android:** Tap the "Install App" prompt or Chrome Menu -> Install App.
- **Play Offline:** All word banks and core assets are cached for offline availability.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
Built with ❤️ for better parties.
