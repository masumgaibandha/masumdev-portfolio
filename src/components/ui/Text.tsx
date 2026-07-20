import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  size?: "lg" | "base" | "sm" | "xs";
  tone?: "default" | "muted";
  /** Geist Mono is reserved for technical labels and code-related details. */
  mono?: boolean;
  className?: string;
};

const sizes = {
  lg: "text-lg leading-8",
  base: "text-base leading-7",
  sm: "text-sm leading-6",
  xs: "text-xs leading-5",
} as const;

const tones = {
  default: "text-foreground",
  muted: "text-muted-foreground",
} as const;

export default function Text({
  children,
  size = "base",
  tone = "default",
  mono = false,
  className = "",
}: TextProps) {
  return (
    <p
      className={[
        sizes[size],
        tones[tone],
        mono ? "font-mono tracking-tight" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}
