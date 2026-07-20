import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /** `narrow` suits long-form reading; `wide` suits section grids. */
  width?: "narrow" | "default" | "wide";
  className?: string;
};

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export default function Container({
  children,
  width = "default",
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 ${widths[width]} ${className}`}>
      {children}
    </div>
  );
}
