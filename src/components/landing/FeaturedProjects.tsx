"use client";

import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative container py-32 space-y-16"
    >
      {/* Section header */}
      <div className="max-w-2xl space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/70"
        >
          A selection of real-world projects I’ve built and deployed,
          focusing on full-stack systems, performance, and clean UI.
        </motion.p>
      </div>

      {/* Existing projects (UNCHANGED) */}
      <ProjectsSection />
    </section>
  );
}
