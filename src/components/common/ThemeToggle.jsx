"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const TOGGLE_CLASSES =
  "flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-[var(--primary)] hover:text-[var(--primary)]";

const subscribe = () => () => {};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  /*
   * false during SSR and the first client render, true afterwards.
   * Avoids setState-in-effect (which triggers cascading renders under the
   * React Compiler) while still deferring theme-dependent output past
   * hydration.
   */
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  /*
   * Render a same-size, non-interactive placeholder until mounted so the
   * navbar does not reflow on hydration. Theme is unknown on the server.
   */
  if (!mounted) {
    return <div className={TOGGLE_CLASSES} aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={TOGGLE_CLASSES}
    >
      {isDark ? (
        <Sun className="size-5" aria-hidden="true" />
      ) : (
        <Moon className="size-5" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
