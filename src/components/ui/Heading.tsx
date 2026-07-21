import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  /** Semantic level — chosen for document outline, not for size. */
  as?: "h1" | "h2" | "h3" | "h4";
  /** Visual size — decoupled from the semantic level. */
  size?: "display" | "xl" | "lg" | "md" | "sm";
  /** Needed when a section references the heading via aria-labelledby. */
  id?: string;
  className?: string;
};

/*
 * Scale with deliberate contrast. The previous steps ran 4xl/3xl/2xl/lg —
 * close enough together that nothing read as dominant. The jump from `xl`
 * down to `lg` is now large, so a page has one clear voice and everything
 * else visibly supports it.
 *
 * Weight varies too: display sizes sit at 600 while `sm` drops to 500, since
 * Plex Sans at 600 is heavy enough to shout at small sizes.
 */
const sizes = {
  display:
    "text-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl",
  xl: "text-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl",
  lg: "text-display text-2xl font-semibold leading-[1.15] sm:text-3xl",
  md: "text-xl font-semibold leading-snug tracking-tight sm:text-2xl",
  sm: "text-base font-medium leading-snug tracking-tight sm:text-lg",
} as const;

export default function Heading({
  children,
  as: Tag = "h2",
  size = "lg",
  id,
  className = "",
}: HeadingProps) {
  return (
    <Tag
      id={id}
      className={`text-balance text-foreground ${sizes[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
