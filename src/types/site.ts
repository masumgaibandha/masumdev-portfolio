export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
  };
};

export type NavItem = {
  label: string;
  href: string;
};

/**
 * `rel` policy for outbound links.
 * - `external`  — ordinary portfolio, GitHub, Upwork, social links
 * - `affiliate` — reserved for Phase 2 affiliate links
 */
export type ExternalLinkKind = "external" | "affiliate";

export type SocialLink = {
  label: string;
  href: string;
  kind: ExternalLinkKind;
};

export type Stat = {
  value: string;
  label: string;
  /** Figures that can change over time are gated behind this flag. */
  visible: boolean;
};
