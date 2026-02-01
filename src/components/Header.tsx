"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isAdmin =
    session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  const isActive = (href: string) => pathname === href;
  const linkClass = (href: string) =>
    isActive(href)
      ? "text-[hsl(var(--foreground))] font-medium"
      : "button-ghost";

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-[15px] font-medium">
          SujanSingh
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          {session && (
            <Link href="/dashboard" className={linkClass("/dashboard")}>
              Dashboard
            </Link>
          )}
          {isAdmin && (
            <Link href="/admin" className={linkClass("/admin")}>
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

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[15px] button-ghost"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-[hsl(var(--border))]"
          >
            <nav className="container flex flex-col gap-1 py-4">
              <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/about" className={linkClass("/about")} onClick={() => setOpen(false)}>
                About
              </Link>
              {session && (
                <Link href="/dashboard" className={linkClass("/dashboard")} onClick={() => setOpen(false)}>
                  Dashboard
                </Link>
              )}
              {isAdmin && (
                <Link href="/admin" className={linkClass("/admin")} onClick={() => setOpen(false)}>
                  Admin
                </Link>
              )}
              {session ? (
                <button onClick={() => { setOpen(false); signOut(); }} className="button-ghost text-left">
                  Logout
                </button>
              ) : (
                <button onClick={() => { setOpen(false); signIn("github"); }} className="button-primary text-left">
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
