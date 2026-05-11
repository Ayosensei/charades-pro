"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Category } from "@/data/categories";
import { useGameLogic } from "@/hooks/useGameLogic";
import { Countdown } from "./Countdown";
import { ResultSummary } from "./ResultSummary";
import { Timer, Trophy, ChevronLeft } from "lucide-react";
import Link from "next/link";

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

  return (
    <div className="fixed inset-0 flex flex-col bg-background text-white overflow-hidden select-none">
      {/* HUD */}
      <div className="flex items-center justify-between p-6 z-10">
        <Link href="/" className="p-2 glass rounded-xl">
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
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWord}
            initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 1.2, opacity: 0, rotateY: -90 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-2xl h-64 md:h-96 glass rounded-[3rem] flex items-center justify-center text-center p-8 shadow-2xl relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tight uppercase">
              {currentWord}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* Tap Targets (Hidden but functional) */}
        <div className="absolute inset-0 flex z-0">
          <div 
            onClick={handlePass}
            className="flex-1 flex items-end justify-center pb-12 hover:bg-pass/10 transition-colors cursor-pointer group"
          >
            <span className="text-pass opacity-0 group-hover:opacity-100 transition-opacity font-bold tracking-widest uppercase">Pass</span>
          </div>
          <div 
            onClick={handleCorrect}
            className="flex-1 flex items-end justify-center pb-12 hover:bg-correct/10 transition-colors cursor-pointer group"
          >
            <span className="text-correct opacity-0 group-hover:opacity-100 transition-opacity font-bold tracking-widest uppercase">Correct</span>
          </div>
        </div>
      </div>

      {/* Footer Instructions */}
      <div className="p-12 text-center text-slate-500 text-sm">
        <p className="animate-pulse">Tap Left to PASS • Tap Right for CORRECT</p>
      </div>
    </div>
  );
};
