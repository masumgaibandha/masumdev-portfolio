import type { Capability, ProcessStep, ServiceGroup } from "@/types/service";

/**
 * Two separate tracks, rendered as two distinct sections.
 * Development carries roughly 70% of the visual weight; cold email 30%.
 * They must never be merged into one generic services grid.
 */
export const developmentServices: ServiceGroup = {
  track: "primary",
  heading: "Full-Stack Development",
  intro:
    "Product engineering from database schema to deployed interface — the work that makes up the majority of what I build.",
  services: [
    {
      title: "Full-stack web applications",
      description:
        "Applications built end to end — data model, authentication, interface and deployment — so one person owns the whole path from idea to production.",
    },
    {
      title: "SaaS product development",
      description:
        "Multi-tenant products with isolated customer data, role-based access and subscription billing, structured so adding the second customer costs nothing.",
    },
    {
      title: "AI-powered applications",
      description:
        "LLM-backed features with deliberate prompt design, graceful failure when the model misbehaves, and awareness of what each call costs to run.",
    },
    {
      title: "Dashboards and internal tools",
      description:
        "Operational interfaces that make complex data legible, so teams can act on it without exporting everything to a spreadsheet first.",
    },
    {
      title: "Marketplace platforms",
      description:
        "Two-sided platforms with listings, proposals, payments and genuinely separated views for each side of the transaction.",
    },
    {
      title: "Backend APIs and integrations",
      description:
        "REST APIs with predictable contracts and honest error semantics, plus the third-party integrations — payments, auth, email — that products depend on.",
    },
    {
      title: "Database architecture",
      description:
        "Schema, indexing and access patterns designed around the queries a product actually runs, which is where most performance problems start.",
    },
    {
      title: "MVP development",
      description:
        "A focused first version that proves the core idea and stays extensible, rather than one that has to be thrown away once it works.",
    },
  ],
};

export const coldEmailServices: ServiceGroup = {
  track: "secondary",
  heading: "Cold Email & Outbound",
  intro:
    "A secondary track that complements the development work — the outbound side of taking a product to market.",
  services: [
    {
      title: "Cold email infrastructure",
      description:
        "Domain, inbox and authentication setup built for sustainable sending.",
    },
    {
      title: "Email deliverability",
      description: "SPF, DKIM, DMARC, warm-up and inbox placement practice.",
    },
    {
      title: "Lead generation",
      description:
        "Targeted prospecting matched to a clearly defined audience.",
    },
    {
      title: "Prospect list building",
      description:
        "Sourcing and enriching contact data, then keeping it clean.",
    },
    {
      title: "Campaign setup",
      description: "Sequence structure, copy and sending cadence.",
    },
    {
      title: "Campaign management",
      description: "Ongoing monitoring, reply handling and iteration.",
    },
  ],
};

/**
 * Grouped by what the technology is for, not as a badge wall.
 * Everything listed is already reflected in shipped work or the stated
 * profile — nothing aspirational.
 */
export const technicalCapabilities: readonly Capability[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HeroUI"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
    ],
  },
  {
    category: "Data & Infrastructure",
    items: ["MongoDB", "Stripe", "Vercel", "External APIs"],
  },
  {
    category: "AI & Product Systems",
    items: [
      "LLM integrations",
      "AI workflows",
      "SaaS architecture",
      "Role-based applications",
    ],
  },
] as const;

export const workingProcess: readonly ProcessStep[] = [
  {
    step: 1,
    title: "Understand the problem",
    description:
      "Start with the business context: who uses this, what it has to do, and which constraints are real. Scope gets agreed before any code is written.",
  },
  {
    step: 2,
    title: "Plan the product and architecture",
    description:
      "Decide the data model, roles and system boundaries up front. Most expensive rewrites trace back to a schema decision made too late.",
  },
  {
    step: 3,
    title: "Build and integrate",
    description:
      "Ship in reviewable increments, each one deployable. Third-party services — payments, auth, email, AI — are integrated with their failure modes handled.",
  },
  {
    step: 4,
    title: "Test and refine",
    description:
      "Error states, edge cases, accessibility and responsive behaviour. The parts that break in front of real users rather than in a demo.",
  },
  {
    step: 5,
    title: "Launch and support",
    description:
      "Deploy, monitor and stay available afterwards. Code is left maintainable so the next change does not require me.",
  },
] as const;

/**
 * Tools used on the outbound side. Listed as plain text — no logos, no
 * affiliate links, no performance claims.
 */
export const coldEmailTools: readonly string[] = [
  "Instantly",
  "Smartlead",
  "Apollo",
  "LinkedIn Sales Navigator",
] as const;
