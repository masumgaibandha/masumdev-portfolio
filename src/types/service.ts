/**
 * `primary` carries the ~70% development emphasis.
 * `secondary` carries the ~30% cold-email emphasis.
 * The two tracks render as separate sections, never one merged grid.
 */
export type ServiceTrack = "primary" | "secondary";

export type Service = {
  title: string;
  description: string;
};

export type ServiceGroup = {
  track: ServiceTrack;
  heading: string;
  intro: string;
  services: Service[];
};

export type Capability = {
  category: string;
  items: string[];
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};
