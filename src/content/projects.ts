import { Project } from "../types/project";
// export type Project = {
//   title: string;
//   description: string;
//   link?: string;
//   github?: string;
//   tech: string[];
//   image?: string;
// };
export const projects: Project[] = [
  {
    title: "Secure Portfolio Platform",
    description:
      "A modern portfolio with authentication, Stripe payments, admin dashboard, and CSP hardening.",
    tech: ["Next.js", "TypeScript", "Stripe", "Auth.js"],
    image: "/images/projects/portfoiloAcetinity.png",
  },
  {
    title: "Admin Analytics Dashboard",
    description:
      "Server-side protected admin panel showing real-time Stripe payments.",
    tech: ["Next.js", "Stripe API", "Server Components"],
    image: "/images/projects/sprialsounds.png",
  },
  {
    title: "Rate Limited Checkout API",
    description:
      "Checkout endpoint protected with Redis-based rate limiting.",
    tech: ["Redis", "Edge Middleware", "Security"],
    image: "/images/projects/vanLife.png",
  },

  {
    title: "Secure Portfolio Platform",
    description:
      "A modern portfolio with authentication, Stripe payments, admin dashboard, and CSP hardening.",
    tech: ["Next.js", "TypeScript", "Stripe", "Auth.js"],
    repoUrl: "https://github.com/sujan2000",
  },

];
