import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  /**
   * `accent` is the only place amber appears at this scale — badge
   * backgrounds only, never a larger surface.
   */
  variant?: "neutral" | "accent" | "outline";
  mono?: boolean;
  className?: string;
};

const variants = {
  neutral: "bg-muted text-muted-foreground",
  accent: "bg-accent-subtle text-accent",
  outline: "border border-border text-muted-foreground",
} as const;

export default function Badge({
  children,
  variant = "neutral",
  mono = false,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        mono ? "font-mono tracking-tight" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
