"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Full-Stack Applications",
    description:
      "End-to-end systems using Next.js, TypeScript, authentication, and scalable architectures.",
  },
  {
    title: "Secure APIs & Backends",
    description:
      "Rate-limited APIs, authentication flows, Redis, Stripe webhooks, and security hardening.",
  },
  {
    title: "Production-Ready UI",
    description:
      "Modern, accessible interfaces with motion, performance optimizations, and clean UX.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="container py-32 space-y-16">
      <div className="max-w-2xl space-y-4">
        <h2 className="text-4xl font-semibold">What I Build</h2>
        <p className="text-white/70">
          I focus on building software that is secure, scalable, and ready for real users.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-white/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}