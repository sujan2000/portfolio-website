import ProjectCard from "@/components/landing/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  );
}