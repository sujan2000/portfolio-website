"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-5"
      >
        <h2 className="text-xl font-medium tracking-tight">
          About Me
        </h2>

        <p className="text-[15px] text-[hsl(var(--muted))] leading-relaxed">
          I'm a self-taught Full Stack Software Developer who learned by
          building real projects. I started with freeCodeCamp, continued
          through YouTube and Scrimba, and now focus on production-ready
          applications.
        </p>

        <p className="text-[15px] text-[hsl(var(--muted))] leading-relaxed">
          I focus on secure, scalable, and performance-focused web systems —
          authentication, payments, admin dashboards, and API security.
        </p>

        <ul className="space-y-1 pt-2 text-[15px] text-[hsl(var(--muted))]">
          <li>Looking for: Full-time · Freelance · SaaS</li>
          <li>Work mode: Hybrid / Remote</li>
          <li>Learning style: Build → Break → Fix → Ship</li>
        </ul>

        <div className="pt-2 flex flex-wrap gap-6 text-[15px]">
          <a
            href="https://github.com/sujan2000"
            target="_blank"
            rel="noopener noreferrer"
            className="link-minimal"
          >
            GitHub
          </a>
          <a
            href="https://www.freecodecamp.org/sujanmeena14"
            target="_blank"
            rel="noopener noreferrer"
            className="link-minimal"
          >
            freeCodeCamp
          </a>
          <a
            href="https://www.linkedin.com/in/sujan-singh-meena-271262202/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-minimal"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
