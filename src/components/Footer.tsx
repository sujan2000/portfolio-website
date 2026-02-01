import Link from "next/link";
import { IconGitHub, IconLinkedIn, IconMail } from "./Icons";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]"
    >
      <div className="container-wide py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[15px] text-[hsl(var(--muted))]">
            © {new Date().getFullYear()} Sujan Singh Meena
          </span>

          <nav
            className="flex items-center justify-between sm:justify-end gap-10 sm:gap-12"
            aria-label="Social links"
          >
            <Link
              href="https://github.com/sujan2000"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              <IconGitHub className="size-[18px] shrink-0" aria-hidden />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/sujan-singh-meena-271262202/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="size-[18px] shrink-0" aria-hidden />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="mailto:you@example.com"
              className="footer-link"
              aria-label="Email"
            >
              <IconMail className="size-[18px] shrink-0" aria-hidden />
              <span>Email</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
