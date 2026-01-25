import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/sections/AboutSection";
import PricingCard from "@/components/PricingCard";
import ProjectsSection from "@/components/ProjectsSection";

export const revalidate = 60;

export default function Home() {
  return (
    <div className="space-y-32">
      {/* HERO */}
      <section className="container pt-24">
        <Hero />
      </section>

      {/* ABOUT */}
      <section className="container">
        <AboutSection />
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