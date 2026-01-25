import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: isDev
      ? `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval'
          https://js.stripe.com
          https://va.vercel-scripts.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: https:;
        frame-src https://js.stripe.com;
      `.replace(/\s+/g, " ").trim()
      : `
        default-src 'self';
        script-src 'self'
          https://js.stripe.com
          https://va.vercel-scripts.com;
        style-src 'self';
        img-src 'self' data: https:;
        frame-src https://js.stripe.com;
      `.replace(/\s+/g, " ").trim(),
  },
];

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default withMDX({ extension: /\.mdx$/ })(nextConfig);
