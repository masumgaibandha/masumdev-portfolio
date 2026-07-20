import Link from "next/link";
import type { ReactNode } from "react";

import { relFor } from "@/config/social";
import type { ExternalLinkKind } from "@/types/site";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type InternalLinkProps = BaseProps & {
  /** Internal application route — rendered with next/link. */
  href: string;
  external?: false;
};

type ExternalLinkProps = BaseProps & {
  /**
   * External URL, mailto:, tel:, or a file in /public.
   * Always rendered as a native anchor so the App Router never intercepts it.
   */
  href: string;
  external: true;
  kind?: ExternalLinkKind;
  newTab?: boolean;
  /** Sets the download attribute for files served from /public. */
  download?: string;
};

type ButtonElementProps = BaseProps & {
  href?: undefined;
  type?: "button" | "submit";
};

type ButtonProps = InternalLinkProps | ExternalLinkProps | ButtonElementProps;

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium " +
  "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-ring disabled:opacity-60";

// No amber buttons — accent is reserved for badges and small highlights.
const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "border border-border-strong bg-card text-foreground hover:bg-surface",
  ghost: "text-foreground hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined && "external" in props && props.external) {
    const { href, kind = "external", newTab = true, download } = props;

    return (
      <a
        href={href}
        rel={relFor(kind)}
        {...(newTab ? { target: "_blank" } : {})}
        {...(download ? { download } : {})}
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
