import type { Stat } from "@/types/site";

/**
 * Every figure here is verified Upwork platform data and must be attributed
 * to Upwork wherever it is displayed. Do not add unverifiable metrics.
 */
export const upworkStats: readonly Stat[] = [
  { value: "$100K+", label: "Earned on Upwork", visible: true },
  { value: "240+", label: "Jobs completed", visible: true },
  { value: "22,000+", label: "Hours worked", visible: true },
  // Job Success Score fluctuates with recent contract activity, so it is
  // gated: flip to false rather than editing the section when it changes.
  { value: "92%", label: "Job Success Score", visible: true },
] as const;

export const statsAttribution = {
  source: "Upwork",
  note: "Verified Upwork platform statistics",
} as const;

export const visibleUpworkStats = (): readonly Stat[] =>
  upworkStats.filter((stat) => stat.visible);
