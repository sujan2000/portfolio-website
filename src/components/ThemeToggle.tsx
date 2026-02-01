"use client";

import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "./Icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle-btn"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? (
        <IconMoon className="size-4" aria-hidden />
      ) : (
        <IconSun className="size-4" aria-hidden />
      )}
    </button>
  );
}
