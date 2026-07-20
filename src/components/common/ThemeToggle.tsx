"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const TOGGLE_CLASSES =
  "flex h-10 w-10 items-center justify-center rounded-md border border-border " +
  "bg-card text-muted-foreground transition-colors hover:border-border-strong " +
  "hover:text-foreground";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

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
   * header does not reflow on hydration. Theme is unknown on the server.
   */
  if (!mounted) {
    return <div className={TOGGLE_CLASSES} aria-hidden="true" />;
  }

  /*
   * resolvedTheme, not theme: with defaultTheme="system" the raw `theme`
   * value is "system", which would report light while rendering dark.
   */
  const isDark = resolvedTheme === "dark";

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
}
