import type { HomepageProject } from "@/types/project";

/**
 * Homepage presentation only.
 *
 * `src/data/projects.js` remains the source of truth for /projects and
 * sitemap.js and is intentionally untouched during Phase 1. DentFlow and
 * SkillPath AI deliberately have no internal routes yet, so their cards link
 * to the live products. Internal /work routes arrive in Phase 2.
 *
 * Every claim below describes architecture or capability. No users, revenue,
 * clients, testimonials, or performance figures — none exist.
 */
export const homepageProjects: readonly HomepageProject[] = [
  {
    slug: "dentflow",
    title: "DentFlow",
    label: "Self-Initiated SaaS Product",
    tier: "flagship",
    summary:
      "A multi-tenant dental clinic management platform with isolated clinic data, role-scoped access for admin, staff and patient, and a controlled clinical-records workflow.",
    capabilities: [
      "Multi-tenant architecture with isolated clinic data",
      "Role-based access control across three scoped roles",
      "Appointment scheduling with double-booking prevention",
      "Clinical records with a draft to finalized workflow",
      "Stripe test-mode payment integration",
    ],
    stack: ["Next.js", "React", "MongoDB", "Stripe"],
    link: { href: "https://dentflow-eight.vercel.app", type: "external" },
    screenshots: [
      {
        src: "/work/dentflow/dashboard.webp",
        alt: "DentFlow admin dashboard showing clinic totals for patients, dentists and services alongside a paid-revenue chart",
        width: 1534,
        height: 704,
      },
      {
        src: "/work/dentflow/appointments.webp",
        alt: "DentFlow appointments schedule with a month calendar, dentist and status filters, and a table of anonymised bookings",
        width: 1534,
        height: 704,
      },
    ],
  },
  {
    slug: "skillpath-ai",
    title: "SkillPath AI",
    label: "Self-Initiated AI Product",
    tier: "flagship",
    summary:
      "An AI-assisted learning platform that turns a stated goal into a milestone-based study roadmap, backed by a separately deployed API with course discovery and filtering.",
    capabilities: [
      "AI-generated milestone study roadmaps",
      "Course discovery with category, level and price filtering",
      "Separately deployed REST API",
      "Email/password and Google authentication",
      "Course-aware AI learning chat",
    ],
    stack: ["Next.js", "React", "MongoDB", "LLM API"],
    link: {
      href: "https://skillpath-ai-frontend-umber.vercel.app",
      type: "external",
    },
    status: "Production verification in progress",
    screenshots: [
      {
        src: "/work/skillpath-ai/explore.webp",
        alt: "SkillPath AI course explorer with search, category and level filters above a grid of course cards",
        width: 1264,
        height: 841,
      },
    ],
  },
  {
    slug: "taskforge",
    title: "TaskForge",
    label: "Full-Stack Capstone Project",
    tier: "capstone",
    summary:
      "A micro-task marketplace with Stripe payments, freelancer proposals, and role-separated client and worker dashboards.",
    capabilities: [
      "Task posting and proposal workflow",
      "Stripe payment integration",
      "Role-separated dashboards",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: { href: "/projects/taskforge", type: "internal" },
    screenshots: [
      {
        src: "/projects/taskforge.png",
        alt: "TaskForge marketplace interface showing task listings and freelancer proposals",
        width: 1536,
        height: 1024,
      },
    ],
  },
  {
    slug: "studynook",
    title: "StudyNook",
    label: "Earlier Learning Project",
    tier: "earlier",
    summary:
      "An online study platform with course management and interactive study features.",
    capabilities: [],
    stack: ["React", "MongoDB"],
    link: { href: "/projects/studynook", type: "internal" },
  },
] as const;

export const flagshipProjects = homepageProjects.filter(
  (project) => project.tier === "flagship",
);

export const capstoneProjects = homepageProjects.filter(
  (project) => project.tier === "capstone",
);

export const earlierProjects = homepageProjects.filter(
  (project) => project.tier === "earlier",
);
