"use client";

import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Category } from "@/data/categories";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[category.icon] || Icons.HelpCircle;

  return (
    <Link href={`/play/${category.id}`}>
      <motion.div
        whileHover={{ scale: 1.05, translateY: -5 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "glass relative overflow-hidden group cursor-pointer p-6 rounded-3xl h-48 flex flex-col justify-between transition-all duration-300",
          "hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        )}
      >
        {/* Background Gradient Glow */}
        <div 
          className={cn(
            "absolute -right-8 -top-8 w-32 h-32 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full bg-gradient-to-br",
            category.color
          )} 
        />

        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-lg",
          category.color
        )}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
            {category.name}
          </h3>
          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
            {category.words.length} items
          </p>
        </div>

        {/* Subtle Bottom Accent */}
        <div className={cn(
          "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r",
          category.color
        )} />
      </motion.div>
    </Link>
  );
};
