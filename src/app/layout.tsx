import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});




  export const metadata: Metadata = {
    metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Your Name — Full-Stack Developer",
  template: "%s | Your Name",
  },
  description:
  "Modern portfolio built with Next.js, TypeScript, Stripe, authentication, and production-grade architecture.",
  keywords: [
  "Next.js",
  "Full-Stack Developer",
  "Stripe",
  "TypeScript",
  "Portfolio",
  ],
  authors: [{name: "Your Name" }],
  creator: "Your Name",
  robots: {
    index: true,
  follow: true,
  },
  openGraph: {
    type: "website",
  locale: "en_US",
  url: "https://yourdomain.com",
  title: "Your Name — Full-Stack Developer",
  description:
  "Modern portfolio with authentication, Stripe payments, admin dashboard, and clean architecture.",
  siteName: "Your Name Portfolio",
  images: [
  {
    url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Your Name Portfolio",
      },
  ],
  },
  twitter: {
    card: "summary_large_image",
  creator: "@yourtwitter",
  title: "Your Name — Full-Stack Developer",
  description:
  "Modern portfolio with Next.js, Stripe, and production-grade architecture.",
  images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

  export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
  <html lang="en" suppressHydrationWarning>
    <body className={inter.className} suppressHydrationWarning>
      <Providers>
        <Header />

        <main className="container py-10">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
      </Providers>

      <Analytics />
    </body>
  </html>
  );
}
