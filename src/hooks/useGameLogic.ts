"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Category } from "@/data/categories";

export type GameState = "countdown" | "playing" | "finished";

export interface WordResult {
  word: string;
  status: "correct" | "passed";
}

export const useGameLogic = (category: Category, duration: number = 60) => {
  const [gameState, setGameState] = useState<GameState>("countdown");
  const [timeLeft, setTimeLeft] = useState(duration);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<WordResult[]>([]);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);

  // Shuffle words on start
  useEffect(() => {
    const shuffled = [...category.words].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
  }, [category]);

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameState("finished");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const handleCorrect = useCallback(() => {
    if (gameState !== "playing") return;
    
    const word = shuffledWords[currentWordIndex];
    setResults((prev) => [...prev, { word, status: "correct" }]);
    setScore((prev) => prev + 1);
    
    if (currentWordIndex + 1 < shuffledWords.length) {
      setCurrentWordIndex((prev) => prev + 1);
    } else {
      setGameState("finished");
    }
  }, [gameState, shuffledWords, currentWordIndex]);

  const handlePass = useCallback(() => {
    if (gameState !== "playing") return;

    const word = shuffledWords[currentWordIndex];
    setResults((prev) => [...prev, { word, status: "passed" }]);
    
    if (currentWordIndex + 1 < shuffledWords.length) {
      setCurrentWordIndex((prev) => prev + 1);
    } else {
      setGameState("finished");
    }
  }, [gameState, shuffledWords, currentWordIndex]);

  const startGame = useCallback(() => {
    setGameState("playing");
  }, []);

  return {
    gameState,
    timeLeft,
    currentWord: shuffledWords[currentWordIndex],
    score,
    results,
    handleCorrect,
    handlePass,
    startGame,
    setGameState
  };
};
