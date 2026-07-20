import type { NavItem } from "@/types/site";

/** Internal routes only — rendered with next/link. */
export const mainNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav: readonly NavItem[] = mainNav;
