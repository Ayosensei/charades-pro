"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Category } from "@/data/categories";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useDeviceOrientation } from "@/hooks/useDeviceOrientation";
import { Countdown } from "./Countdown";
import { ResultSummary } from "./ResultSummary";
import { Timer, Trophy, ChevronLeft, Smartphone } from "lucide-react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GameInterfaceProps {
  category: Category;
}

export const GameInterface: React.FC<GameInterfaceProps> = ({ category }) => {
  const {
    gameState,
    timeLeft,
    currentWord,
    score,
    results,
    handleCorrect,
    handlePass,
    startGame,
    setGameState,
  } = useGameLogic(category);

  const { tiltState, requestPermission, permissionGranted } = useDeviceOrientation(gameState === "playing");
  
  // To prevent multiple triggers for a single tilt
  const isTiltLocked = useRef(false);
  const [needsPermission, setNeedsPermission] = useState(true);

  // Sync tilt to game logic
  useEffect(() => {
    if (gameState !== "playing" || isTiltLocked.current) return;

    if (tiltState === "correct") {
      handleCorrect();
      triggerHaptic(100);
      isTiltLocked.current = true;
      setTimeout(() => { isTiltLocked.current = false; }, 1000);
    } else if (tiltState === "pass") {
      handlePass();
      triggerHaptic([50, 50]);
      isTiltLocked.current = true;
      setTimeout(() => { isTiltLocked.current = false; }, 1000);
    }
  }, [tiltState, gameState, handleCorrect, handlePass]);

  const triggerHaptic = (pattern: number | number[]) => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  };

  const handleStartRequest = async () => {
    const granted = await requestPermission();
    if (granted) {
      setNeedsPermission(false);
    } else {
      // Fallback to tap mode if denied or not supported
      setNeedsPermission(false);
    }
  };

  if (needsPermission && gameState === "countdown") {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center bg-background">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xs space-y-8"
        >
          <div className="w-24 h-24 mx-auto glass rounded-3xl flex items-center justify-center">
            <Smartphone className="w-12 h-12 text-brand-accent" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white">Ready?</h2>
            <p className="text-slate-400">
              Place the phone on your forehead after tapping start. Tilt forward for <b>Correct</b>, backward to <b>Pass</b>.
            </p>
          </div>
          <button
            onClick={handleStartRequest}
            className="w-full py-4 px-8 rounded-2xl bg-white text-background font-bold text-lg hover:scale-105 transition-transform"
          >
            Start Game
          </button>
        </motion.div>
      </div>
    );
  }

  if (gameState === "countdown") {
    return <Countdown onComplete={startGame} />;
  }

  if (gameState === "finished") {
    return (
      <ResultSummary
        score={score}
        results={results}
        onRestart={() => window.location.reload()}
      />
    );
  }

  const getBgColor = () => {
    if (tiltState === "correct") return "bg-correct";
    if (tiltState === "pass") return "bg-pass";
    return "bg-background";
  };

  return (
    <main className={cn(
      "fixed inset-0 flex flex-col text-white overflow-hidden select-none transition-colors duration-500",
      getBgColor()
    )}>
      {/* Premium Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent)] pointer-events-none" />
      {/* HUD */}
      <div className="flex items-center justify-between p-6 z-10">
        <Link href="/" className="p-2 glass rounded-xl" aria-label="Go back to home">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        
        <div className="flex gap-4">
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-2xl">
            <Timer className="w-4 h-4 text-brand-accent" />
            <span className="font-mono font-bold">{timeLeft}s</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-2xl">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="font-bold">{score}</span>
          </div>
        </div>
      </div>

      {/* Main Word Card Area */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 relative min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWord}
            initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 1.2, opacity: 0, rotateX: -45 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-2xl h-full max-h-[60vh] md:max-h-[50vh] bg-white rounded-[2rem] md:rounded-[3rem] flex items-center justify-center text-center p-4 md:p-8 shadow-2xl relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tight uppercase break-words px-4 text-black">
              {currentWord}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* Tap Targets (Hidden but functional as fallback) */}
        <div className="absolute inset-0 flex z-0">
          <div 
            onClick={() => {
              if (isTiltLocked.current) return;
              handlePass();
              triggerHaptic([50, 50]);
              isTiltLocked.current = true;
              setTimeout(() => { isTiltLocked.current = false; }, 500);
            }}
            className="flex-1 cursor-pointer"
          />
          <div 
            onClick={() => {
              if (isTiltLocked.current) return;
              handleCorrect();
              triggerHaptic(100);
              isTiltLocked.current = true;
              setTimeout(() => { isTiltLocked.current = false; }, 500);
            }}
            className="flex-1 cursor-pointer"
          />
        </div>
      </div>

      {/* Visual Tilt Feedback Overlays */}
      <div className={cn(
        "absolute inset-0 pointer-events-none transition-opacity duration-300 flex flex-col items-center justify-center",
        tiltState === "correct" ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-0 bg-correct/10" />
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 z-10 shadow-2xl">
          <svg className="w-12 h-12 text-correct" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="z-10 text-center text-white text-4xl font-black uppercase tracking-widest">Correct</div>
      </div>
      
      <div className={cn(
        "absolute inset-0 pointer-events-none transition-opacity duration-300 flex flex-col items-center justify-center",
        tiltState === "pass" ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-0 bg-pass/10" />
        <div className="w-24 h-24 rounded-full bg-pass-fg flex items-center justify-center mb-8 z-10 shadow-2xl">
          <svg className="w-12 h-12 text-pass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="z-10 text-center text-pass-fg text-4xl font-black uppercase tracking-widest">Passed</div>
      </div>

      {/* Footer Instructions */}
      <div className="p-4 md:p-12 text-center text-slate-300 text-sm">
        <p className="opacity-70">Tilt Down for CORRECT • Tilt Up to PASS</p>
      </div>
    </main>
  );
};
