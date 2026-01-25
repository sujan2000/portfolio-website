import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} YourName. All rights reserved.
        </span>

        <div className="flex gap-6">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </Link>

          <Link
            href="mailto:you@example.com"
            className="hover:text-white transition"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}