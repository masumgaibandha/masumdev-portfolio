/**
 * Homepage presentation tiers. The tier drives visual weight, not just ordering.
 */
export type ProjectTier = "flagship" | "capstone" | "earlier";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type HomepageProject = {
  slug: string;
  title: string;
  /** Honest positioning label, e.g. "Self-Initiated SaaS Product". */
  label: string;
  tier: ProjectTier;
  summary: string;
  /** Capability statements only — never users, revenue, or outcomes. */
  capabilities: string[];
  stack: string[];
  /**
   * Where the card links during Phase 1.
   * `internal` uses next/link; `external` uses a native anchor.
   */
  link: {
    href: string;
    type: "internal" | "external";
  };
  /** Rendered as a neutral status note, e.g. verification still pending. */
  status?: string;
  /** Absent until authentic assets are supplied. Never fabricated. */
  screenshots?: ProjectScreenshot[];
};
