"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isAdmin =
    session?.user?.email ===
    process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  const isActive = (href: string) =>
    pathname === href;

  const linkClass = (href: string) =>
    isActive(href)
      ? "text-white font-medium"
      : "button-ghost";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          SujanSingh
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/")}>About</Link>
          {session && (
            <Link
              href="/dashboard"
              className={linkClass("/dashboard")}
            >
              Dashboard
            </Link>
          )}

          {isAdmin && (
            <Link
              href="/admin"
              className={linkClass("/admin")}
            >
              Admin
            </Link>
          )}

          {session ? (
            <button onClick={() => signOut()} className="button-ghost">
              Logout
            </button>
          ) : (
            <button onClick={() => signIn("github")} className="button-primary">
              Login
            </button>
          )}

          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur"
          >
            <nav className="container flex flex-col gap-4 py-6">
              <Link
                href="/"
                className={linkClass("/")}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              {session && (
                <Link
                  href="/dashboard"
                  className={linkClass("/dashboard")}
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>
              )}

              {isAdmin && (
                <Link
                  href="/admin"
                  className={linkClass("/admin")}
                  onClick={() => setOpen(false)}
                >
                  Admin
                </Link>
              )}

              {session ? (
                <button
                  onClick={() => {
                    setOpen(false);
                    signOut();
                  }}
                  className="button-ghost text-left"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setOpen(false);
                    signIn("github");
                  }}
                  className="button-primary"
                >
                  Login
                </button>
              )}

              <ThemeToggle />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
