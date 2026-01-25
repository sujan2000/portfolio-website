"use client";

import { motion } from "framer-motion";

const journey = [
  {
    title: "freeCodeCamp",
    description:
      "Built strong fundamentals in JavaScript, data structures, APIs, and full-stack development.",
  },
  {
    title: "Scrimba",
    description:
      "Hands-on learning with interactive courses focused on React, modern tooling, and real projects.",
  },
  {
    title: "YouTube & Docs",
    description:
      "Deep dives into system design, Next.js internals, authentication, Stripe, and security best practices.",
  },
];

export default function Journeys() {
  return (
    <section className="container py-32 space-y-16">
      <div className="max-w-2xl space-y-4">
        <h2 className="text-4xl font-semibold">Learning Journey</h2>
        <p className="text-white/70">
          Self-taught developer driven by curiosity, consistency, and real-world building.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {journey.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-white/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}