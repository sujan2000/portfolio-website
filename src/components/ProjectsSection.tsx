import ProjectCard from "@/components/landing/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsSection() {
  return (
    <div>
      <h2 className="text-xl font-medium tracking-tight mb-6">Projects</h2>
      <div className="space-y-0">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
