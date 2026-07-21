import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  /** Neutral only — section backgrounds never carry a colour tint. */
  background?: "background" | "surface";
  spacing?: "tight" | "compact" | "default" | "spacious" | "vast";
  bordered?: boolean;
  id?: string;
  className?: string;
};

const backgrounds = {
  background: "bg-background",
  surface: "bg-surface",
} as const;

/*
 * Five steps rather than three, because varying density is the point.
 * Every section previously used `default`, which made a nine-section page
 * scroll like a form. `tight` suits data strips, `vast` suits a single
 * statement that should be given room.
 */
const spacings = {
  tight: "py-8 sm:py-10",
  compact: "py-12 sm:py-16",
  default: "py-16 sm:py-24",
  spacious: "py-24 sm:py-32",
  vast: "py-28 sm:py-40",
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
