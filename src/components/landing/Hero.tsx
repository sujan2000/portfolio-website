"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold tracking-tight"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">
          Sujan Singh Meena
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-xl text-lg text-white/70"
      >
        Full Stack Software Developer — self-taught using freeCodeCamp,
        YouTube, and Scrimba. I build secure, scalable, production-ready
        web systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-8 flex gap-4"
      >
        <a href="#projects" className="button-primary">
          View Projects
        </a>
        <a href="/dashboard" className="button-ghost">
          Dashboard →
        </a>
      </motion.div>
    </div>
  );
}
