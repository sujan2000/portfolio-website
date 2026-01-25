

"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative">
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6"
      >
        <h2 className="text-3xl font-bold tracking-tight">
          About Me
        </h2>

        <p className="text-white/70 leading-relaxed">
          I’m a <span className="text-white font-medium">self-taught Full Stack Software Developer</span> who
          learned by building real projects, not just watching tutorials.
          My journey started with{" "}
          <span className="text-indigo-400">freeCodeCamp</span>, continued
          through <span className="text-cyan-400">YouTube</span> and{" "}
          <span className="text-emerald-400">Scrimba</span>, and matured
          through shipping production-ready applications.
        </p>

        <p className="text-white/70 leading-relaxed">
          I focus on building <strong>secure</strong>, <strong>scalable</strong>, and{" "}
          <strong>performance-focused</strong> web systems — including
          authentication, payments, admin dashboards, and API security.
        </p>

        <ul className="grid gap-3 pt-4 text-sm text-white/70">
          <li>
            🔹 Looking for: <span className="text-white">Full-time · Freelance · SaaS</span>
          </li>
          <li>
            🔹 Work mode: <span className="text-white">Hybrid / Remote</span>
          </li>
          <li>
            🔹 Learning style: <span className="text-white">Build → Break → Fix → Ship</span>
          </li>
        </ul>

        <div className="pt-4 flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/sujan2000"
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            GitHub →
          </a>

          <a
            href="https://www.freecodecamp.org/sujanmeena14"
            target="_blank"
            className="text-emerald-400 hover:underline"
          >
            freeCodeCamp →
          </a>

          <a
            href="https://www.linkedin.com/in/sujan-singh-meena-271262202/"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            LinkedIn →
          </a>
        </div>
      </motion.div>
    </section>
  );
}