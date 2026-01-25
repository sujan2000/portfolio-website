import PricingCard from "@/components/PricingCard";
import ProjectsSection from "@/components/ProjectsSection";


export const revalidate = 60;

export default function Home() {
  return (
    <div className="space-y-32">
      {/* HERO */}
      <section className="container pt-24">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Hi, I’m <span className="text-[hsl(var(--accent))]">Sujan Singh</span>
          </h1>

          <p className="text-lg text-white/70">
            I build secure, scalable, high-performance web applications
            using modern technologies.
          </p>

          <div className="flex gap-4">
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href="/dashboard" className="button-ghost">
              Dashboard →
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container">
        <ProjectsSection />
      </section>

      {/* PRICING */}
      <section className="container pb-32">
        <PricingCard />
      </section>
    </div>
  );
}
