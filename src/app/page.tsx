import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/sections/AboutSection";
import PricingCard from "@/components/PricingCard";
import ProjectsSection from "@/components/ProjectsSection";

export const revalidate = 60;

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="pt-8">
        <Hero />
      </section>

      <section>
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section className="pb-16">
        <PricingCard />
      </section>
    </div>
  );
}