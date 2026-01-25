"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-3 text-sm text-white/70">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-3 py-1 text-xs"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            Live →
          </a>
        )}
      </div>
    </motion.div>
  );
}