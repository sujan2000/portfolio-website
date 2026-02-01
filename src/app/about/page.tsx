export const metadata = {
  title: "About — Sujan Singh Meena",
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-medium tracking-tight">About Me</h1>

      <p className="text-[15px] text-[hsl(var(--muted))] leading-relaxed">
        I'm Sujan Singh Meena, a self-taught Full Stack Software Developer
        focused on building secure, scalable, and production-ready web
        applications.
      </p>

      <p className="text-[15px] text-[hsl(var(--muted))] leading-relaxed">
        My journey started with platforms like freeCodeCamp and Scrimba,
        where I built strong fundamentals in JavaScript, React, and backend
        development. Over time, I moved beyond tutorials and focused on
        real-world systems—authentication, payments, admin dashboards,
        rate limiting, and security.
      </p>

      <p className="text-[15px] text-[hsl(var(--muted))] leading-relaxed">
        I enjoy working across the stack, from designing clean APIs to
        crafting performant and accessible user interfaces. I care deeply
        about code quality, system design, and building software that can
        scale beyond a demo.
      </p>

      <p className="text-[15px] text-[hsl(var(--muted))] leading-relaxed">
        I'm currently open to full-time roles, freelance work, and SaaS
        collaborations, preferably in a hybrid setup.
      </p>
    </section>
  );
}
