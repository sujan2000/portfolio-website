"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-medium tracking-tight"
      >
        Hi, I'm Sujan Singh Meena
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mt-4 text-[15px] text-[hsl(var(--muted))] leading-relaxed"
      >
        Full Stack Software Developer — self-taught with freeCodeCamp,
        YouTube, and Scrimba. I build secure, scalable, production-ready
        web systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
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
