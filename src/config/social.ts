import type { ExternalLinkKind, SocialLink } from "@/types/site";

export const socialLinks: readonly SocialLink[] = [
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01a5eccfaf40a8a065?viewMode=1",
    kind: "external",
  },
  {
    label: "GitHub",
    href: "https://github.com/masumgaibandha",
    kind: "external",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/masumgaibandha",
    kind: "external",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/expertlead",
    kind: "external",
  },
] as const;

/**
 * Outbound `rel` policy.
 *
 * Ordinary external links get `noopener` only — `noreferrer` would strip
 * referral data these profiles benefit from receiving.
 * Affiliate links (Phase 2) must be disclosed to crawlers as sponsored.
 */
export const relFor = (kind: ExternalLinkKind): string =>
  kind === "affiliate" ? "sponsored nofollow noopener" : "noopener";
