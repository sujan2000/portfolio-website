"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="container py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 p-12 text-center"
      >
        <h2 className="text-4xl font-semibold">
          Let’s Build Something Real
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Open to full-time roles, freelance projects, and SaaS collaborations.
          Available for hybrid opportunities.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:meena.sujan06@gmail.com"
            className="button-primary"
          >
            Contact Me
          </a>

          <Link
            href="https://github.com/sujan2000"
            target="_blank"
            className="button-ghost"
          >
            GitHub
          </Link>
        </div>
      </motion.div>
    </section>
  );
}