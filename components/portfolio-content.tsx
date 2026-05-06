"use client"

import Hero from "@/components/hero";
import Body from "@/components/body";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function Portfolio() {
    const [activeCard, setActiveCard] = useState<string | null>(null);
    

  return (
   <main
  className="min-h-screen bg-white text-black dark:bg-black dark:text-white "
  onClick={() => setActiveCard(null)}
>
  <div className="bg-white dark:bg-black mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10 space-y-3">
    
    <Navbar setActiveCard={setActiveCard} />

    <Hero />

    <div className="shrink-0 h-px bg-black/20 dark:bg-white/20" />

    <Body activeCard={activeCard} setActiveCard={setActiveCard} />
  </div>
</main>
  );
}