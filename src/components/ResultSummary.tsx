"use client";

import React from "react";
import { motion } from "framer-motion";
import { WordResult } from "@/hooks/useGameLogic";
import { CheckCircle2, XCircle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

interface ResultSummaryProps {
  score: number;
  results: WordResult[];
  onRestart: () => void;
}

export const ResultSummary: React.FC<ResultSummaryProps> = ({
  score,
  results,
  onRestart,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-slate-300 uppercase tracking-widest text-sm font-bold mb-2">Game Over</h2>
        <div className="text-7xl font-black text-white mb-4">
          {score} <span className="text-2xl text-slate-300">Points</span>
        </div>
        <p className="text-slate-200">Great effort! Check your results below.</p>
      </motion.div>

      <div className="w-full glass rounded-3xl overflow-hidden mb-8">
        <div className="max-h-[40vh] overflow-y-auto p-4 space-y-2">
          {results.map((result, index) => (
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              key={index}
              className="flex items-center justify-between p-3 rounded-xl bg-white/5"
            >
              <span className="font-medium text-white">{result.word}</span>
              {result.status === "correct" ? (
                <CheckCircle2 className="w-5 h-5 text-correct" />
              ) : (
                <XCircle className="w-5 h-5 text-pass" />
              )}
            </motion.div>
          ))}
          {results.length === 0 && (
            <div className="text-center py-8 text-slate-300">No words played</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl glass-dark border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Play Again
        </button>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white text-background font-bold hover:bg-slate-200 transition-colors"
        >
          <Home className="w-5 h-5" />
          Home
        </Link>
      </div>
    </div>
  );
};
