"use client";

import { motion } from "framer-motion";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="card p-6 space-y-4"
    >
      <h3 className="text-xl font-semibold">
        {project.title}
      </h3>

      <p className="text-sm text-white/70">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
