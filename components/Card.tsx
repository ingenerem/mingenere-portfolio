"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
  activeCard: string | null;
  setActiveCard: (id: string) => void;
};

export default function Card({
  children,
  id,
  activeCard,
  setActiveCard,
}: CardProps) {
  const isActive = activeCard === id;

  return (
    <motion.div
      id={id}
      onMouseEnter={() => setActiveCard(id)}
      animate={{
        scale: isActive ? 1.04 : 1,
        boxShadow: isActive
          ? "0px 20px 35px rgba(0, 0, 0, 0.25)"
          : "0px 0px 0px rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`h-full min-h-[100px] md:min-h-[120px] rounded-xl border p-4 transition-all duration-300 text-black dark:text-white/60
  ${
    isActive
      ? "border-purple-500 bg-white/10 shadow-lg shadow-purple-500/20"
      : "border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5"
  }
`}
    >
      {children}
    </motion.div>
  );
}