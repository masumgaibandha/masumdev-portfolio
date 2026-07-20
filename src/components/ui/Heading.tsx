import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  /** Semantic level — chosen for document outline, not for size. */
  as?: "h1" | "h2" | "h3" | "h4";
  /** Visual size — decoupled from the semantic level. */
  size?: "xl" | "lg" | "md" | "sm";
  /** Needed when a section references the heading via aria-labelledby. */
  id?: string;
  className?: string;
};

const sizes = {
  xl: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight",
  lg: "text-3xl sm:text-4xl font-semibold tracking-tight",
  md: "text-2xl sm:text-3xl font-semibold tracking-tight",
  sm: "text-lg sm:text-xl font-semibold tracking-tight",
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
