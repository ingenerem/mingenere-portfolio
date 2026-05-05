"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute right-10 top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Decorative sparkles */}
      <motion.div
        
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="hidden md:block lg:block pointer-events-none absolute right-20 top-24 h-20 w-20 text-2xl text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
      >
        <span className="absolute left-1/2 top-0 -translate-x-1/2">✦</span>
        <span className="absolute left-0 top-1/2 -translate-y-1/2">✦</span>
        <span className="absolute right-0 top-1/2 -translate-y-1/2">✦</span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2">✦</span>
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 col-span-2 mt-2"
      >
        <h1 className="text-5xl font-semibold text-violet-700 dark:text-violet-300">
          Hi, I'm Marie Claudine Ingenere
        </h1>

        <p className="mt-4 max-w-xl text-black/70 dark:text-white/60">
          I build scalable, data-driven systems. With a Master’s in IT from
          Carnegie Mellon and experience improving enterprise systems at the
          World Bank.
        </p>

        <p className="mt-4 text-lg font-light text-black/80 dark:text-white/80">
          <span>Software Engineer</span>
          <span className="mx-3">|</span>
          <span>Master’s from CMU</span>
          <span className="mx-3">|</span>
          <span>World Bank alumni</span>
          <span className="mx-3">|</span>
          <span>PiTech Rwanda</span>
        </p>

        <div className="mt-10 flex gap-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              const link = document.createElement("a");
              link.href = "/Marie's resume.pdf";
              link.download = "Mingenere_Resume.pdf";
              link.click();
            }}
            className="cursor-pointer rounded-lg bg-violet-600/50 px-8 py-3 font-medium text-black transition hover:bg-violet-400/80 dark:bg-violet-500/50 dark:text-white"
          >
            Download Resume
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = "mailto:ingenerem@gmail.com";
            }}
            className="cursor-pointer relative z-20 rounded-lg border border-black/20 bg-white/10 px-8 py-3 font-medium text-black transition hover:bg-black/10 dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white/10"
          >
            Email Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}