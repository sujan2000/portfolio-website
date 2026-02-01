import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-8 text-[15px] text-[hsl(var(--muted))]">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Sujan Singh Meena</span>
        <div className="flex gap-6">
          <Link href="https://github.com/sujan2000" target="_blank" rel="noopener noreferrer" className="link-minimal">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/sujan-singh-meena-271262202/" target="_blank" rel="noopener noreferrer" className="link-minimal">
            LinkedIn
          </Link>
          <Link href="mailto:you@example.com" className="link-minimal">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
