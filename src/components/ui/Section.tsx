import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  /** Neutral only — section backgrounds never carry a colour tint. */
  background?: "background" | "surface";
  spacing?: "compact" | "default" | "spacious";
  bordered?: boolean;
  id?: string;
  className?: string;
};

const backgrounds = {
  background: "bg-background",
  surface: "bg-surface",
} as const;

const spacings = {
  compact: "py-12 sm:py-16",
  default: "py-16 sm:py-24",
  spacious: "py-24 sm:py-32",
} as const;

export default function Section({
  children,
  background = "background",
  spacing = "default",
  bordered = false,
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        backgrounds[background],
        spacings[spacing],
        bordered ? "border-t border-border" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
