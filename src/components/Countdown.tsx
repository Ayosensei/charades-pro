"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  onComplete: () => void;
}

export const Countdown: React.FC<CountdownProps> = ({ onComplete }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [count, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          exit={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-9xl font-black text-white"
        >
          {count > 0 ? count : "GO!"}
        </motion.div>
      </AnimatePresence>
      
      {/* Decorative background pulses */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-brand-primary rounded-full blur-[120px] -z-10"
      />
    </div>
  );
};
