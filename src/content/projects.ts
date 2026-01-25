export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Secure Portfolio Platform",
    description:
      "A modern portfolio with authentication, Stripe payments, admin dashboard, and CSP hardening.",
    tech: ["Next.js", "TypeScript", "Stripe", "Auth.js"],
  },
  {
    title: "Admin Analytics Dashboard",
    description:
      "Server-side protected admin panel showing real-time Stripe payments.",
    tech: ["Next.js", "Stripe API", "Server Components"],
  },
  {
    title: "Rate Limited Checkout API",
    description:
      "Checkout endpoint protected with Redis-based rate limiting.",
    tech: ["Redis", "Edge Middleware", "Security"],
  },
];
