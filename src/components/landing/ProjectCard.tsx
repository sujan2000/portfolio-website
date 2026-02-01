"use client";

import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-b border-[hsl(var(--border))] py-6 last:border-0">
      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="mt-1 text-[15px] text-[hsl(var(--muted))]">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs text-[hsl(var(--muted))]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-6 text-[15px]">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-minimal"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-minimal"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
