"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isAdmin =
    session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const navLinkClass = (href: string) =>
    isActive(href) ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur-sm">
      <div className="container-wide flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight hover:opacity-80 transition-opacity shrink-0"
        >
          SujanSingh
        </Link>

        <nav className="flex items-center gap-0.5 min-w-0" aria-label="Main">
          <Link
            href="/"
            className={`${navLinkClass("/")} shrink-0`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${navLinkClass("/about")} shrink-0`}
            aria-current={isActive("/about") ? "page" : undefined}
          >
            About
          </Link>
          <Link href="/#projects" className="nav-link shrink-0">
            Projects
          </Link>
          <Link href="/#contact" className="nav-link shrink-0">
            Contact
          </Link>

          {session && (
            <>
              <span className="w-px h-5 bg-[hsl(var(--border))] mx-1 shrink-0" aria-hidden />
              <Link
                href="/dashboard"
                className={`${navLinkClass("/dashboard")} shrink-0`}
                aria-current={isActive("/dashboard") ? "page" : undefined}
              >
                Dashboard
              </Link>
            </>
          )}
          {isAdmin && (
            <Link
              href="/admin"
              className={`${navLinkClass("/admin")} shrink-0`}
              aria-current={isActive("/admin") ? "page" : undefined}
            >
              Admin
            </Link>
          )}

          <span className="w-px h-5 bg-[hsl(var(--border))] mx-1 shrink-0" aria-hidden />

          <div className="flex items-center gap-8 ml-2">
            {session ? (
              <button
                onClick={() => signOut()}
                className="nav-link shrink-0"
                type="button"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => signIn("github")}
                className="btn-login shrink-0"
                type="button"
              >
                Login
              </button>
            )}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
