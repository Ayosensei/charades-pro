"use client";

import React, { useState } from "react";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { Sparkles, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showHowTo, setShowHowTo] = useState(false);

  return (
    <main className="flex-1 overflow-y-auto px-6 py-12 md:px-12 lg:px-24">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border-white/5 text-brand-accent text-sm font-medium animate-float"
        >
          <Sparkles className="w-4 h-4" />
          <span>Premium Party Experience</span>
        </motion.div>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white"
        >
          Charades<span className="text-gradient">PRO</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-300 max-w-2xl mx-auto"
        >
          The ultimate ad-free charades experience. 18 categories, tilt-to-score mechanics, and zero distractions.
        </motion.p>
      </header>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Pick a Category</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-8 hidden md:block" />
          <span className="text-slate-500 text-sm">{categories.length} Total</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              key={category.id}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <footer className="max-w-4xl mx-auto mt-24 pb-12 text-center text-slate-300 text-sm">
        <p>Built for the best party experience. Ad-free & Privacy-First.</p>
        <div className="mt-4 flex justify-center gap-6">
          <button 
            onClick={() => setShowHowTo(true)} 
            className="hover:text-white transition-colors flex items-center gap-1"
            aria-label="How to play instructions"
          >
            <Info className="w-4 h-4" /> How to Play
          </button>
          <span className="hover:text-slate-100 transition-colors cursor-default">v1.0.0</span>
        </div>
      </footer>

      {/* How to Play Modal */}
      <AnimatePresence>
        {showHowTo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="w-full max-w-lg glass-dark rounded-[2.5rem] p-8 relative border border-white/10"
            >
              <button 
                onClick={() => setShowHowTo(false)}
                className="absolute top-6 right-6 p-2 glass rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 id="modal-title" className="text-3xl font-black text-white mb-8">How to Play</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 text-brand-primary font-bold">1</div>
                  <p className="text-slate-300">Pick a category and place the phone against your forehead facing your friends.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-correct/20 flex items-center justify-center shrink-0 text-correct font-bold">2</div>
                  <p className="text-slate-300">Tilt the phone <b>downward</b> when you guess correctly.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-pass/20 flex items-center justify-center shrink-0 text-pass font-bold">3</div>
                  <p className="text-slate-300">Tilt the phone <b>upward</b> to pass and move to the next word.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 text-brand-accent font-bold">4</div>
                  <p className="text-slate-300">Score as many points as you can before the 60-second timer runs out!</p>
                </div>
              </div>

              <button 
                onClick={() => setShowHowTo(false)}
                className="w-full mt-10 py-4 rounded-2xl bg-white text-background font-bold text-lg"
              >
                Got it!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
