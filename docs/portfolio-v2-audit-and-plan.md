# MasumDev Portfolio v2 — Audit & Redesign Plan

**Prepared:** 2026-07-19
**Repository:** `masumdev-portfolio` (Next.js 16.2.9, React 19.2.4, Tailwind v4, JavaScript)
**Live site:** masumdev.com
**Status:** Plan for review. No project files have been modified.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Part I — Audit](#part-i--audit)
3. [Part II — Redesign Plan](#part-ii--redesign-plan)
4. [Part III — Execution](#part-iii--execution)
5. [Open Decisions](#open-decisions-for-your-review)

---

## 1. Executive Summary

The current site is a competently structured but generic developer portfolio. The architecture is genuinely good — React Server Components by default, only 20% client components, sensible routing. The problems are not architectural; they are **positioning, credibility, visual differentiation, and content depth**.

### Five findings that matter most

| # | Finding | Impact |
|---|---|---|
| 1 | **The font pipeline is broken.** `globals.css:51-52` maps `--font-sans: var(--font-geist-sans)`, but **no `next/font` import exists anywhere** — the variable is never defined. The `font-family` declaration is invalid and the browser falls back to its default (serif on most). *Source defect certain; rendered fallback inferred, not browser-verified — see P0-1.* | Every visitor, every page. Single highest-impact defect. |
| 2 | **Social sharing is broken.** `layout.js` points OG and Twitter cards at `/og-image.png`, which does not exist in `public/`. | Every LinkedIn/Twitter share of your site renders imageless. |
| 3 | **TaskForge's live demo contains disqualifying content.** Fabricated testimonials with stock names, and a seeded freelancer bio reading *"Logged in users can view full social security numbers and can save their fake names to use later."* | A recruiter clicking your case study sees this. Blocks publication. |
| 4 | **Cyan-on-white fails accessibility at 2.45:1.** `#06b6d4` is used as body text on white and as a white-text button fill, in ~40 places. AA requires 4.5:1. | Fails audits; reads as washed-out and cheap in light mode. |
| 5 | **Zero long-form content surface.** No blog, no MDX, no CMS, no analytics. | The affiliate and organic-search strategy you want has nowhere to live. |

### Positioning gap

The site currently presents as **100% full-stack developer**. Your stated positioning is **70% development / 30% cold email, lead generation and affiliate marketing**. The cold-email expertise appears exactly once — one sentence in the About timeline — and affiliate content does not exist at all. This is the single largest strategic gap, and it is also your differentiator: *a developer who understands outbound* is a far rarer and more valuable position than *another Next.js developer*.

### Effort estimate

Roughly **6 phases over 5–7 weeks** of part-time work. Phase 0 (critical fixes) is a half-day and should ship regardless of whether the rest of this plan is approved.

---

# Part I — Audit

## 2. Current State Inventory

```
src/
├── app/
│   ├── layout.js              RSC   metadata ✓  (broken og-image ref)
│   ├── page.js                RSC   ✗ no metadata; unused ThemeToggle import
│   ├── globals.css            66 lines — the entire styling layer
│   ├── not-found.jsx          RSC
│   ├── robots.js  sitemap.js        5 static URLs; omits all project pages
│   ├── about/page.jsx         RSC   metadata ✓
│   ├── contact/page.jsx       RSC   metadata ✓
│   ├── services/page.jsx      RSC   metadata ✓
│   └── projects/
│       ├── page.jsx           RSC   metadata ✓
│       └── [slug]/page.jsx    RSC   ✗ no metadata, ✗ no generateStaticParams
├── components/
│   ├── common/ThemeToggle.jsx      "use client"
│   ├── contact/ContactForm.jsx     "use client"
│   ├── layout/{Navbar "use client", Footer}
│   └── home/{Hero, Stats, FeaturedProjects, Services,
│             TechStack, WhyMe, AboutPreview, CTA}    all RSC
├── data/projects.js            4 projects
├── lib/actions/contact.js      "use server" — DEAD CODE, never imported
├── providers/ThemeProvider.jsx "use client"
└── assets/                     ENTIRELY UNREFERENCED
```

**Missing conventions:** no `error.jsx`, `global-error.jsx`, `loading.jsx`, route groups, nested layouts, `opengraph-image.*`, `middleware.js`, or any `api/` directory.

**TypeScript: 0%.** No `tsconfig.json`. `.gitignore` carries TS entries from the template, but nothing is set up. Route files are `.js`, components are `.jsx` — inconsistent but functionally identical.

---

## 3. Positioning & Messaging

### What exists

Hero H1: *"Building Modern SaaS Platforms, Marketplaces & Dashboards"*
Hero badge: *"Top Rated Freelancer • 160K+ Earnings • 400+ Projects Delivered"*

### Assessment

**The headline describes a category, not a person.** It is interchangeable with thousands of portfolios. Nothing in it could only be said by you.

**The stat block is the biggest credibility risk on the site.** The same four numbers (160K+, 400+, 22K+, Top Rated) appear in **four separate places** — the Hero badge, `Stats.jsx`, `AboutPreview.jsx`, and the About page `highlights[]` array — with inconsistent labels between copies ("Freelance Earnings" vs "Career Earnings", "Projects Delivered" vs "Freelance Projects").

Two problems compound here:

1. **Repetition reads as insecurity.** Stating the same numbers four times on one page signals that the numbers are doing all the persuasive work.
2. **The numbers are unsourced and unlinked.** *I have not verified these figures and cannot.* If they come from your Upwork and Fiverr profiles, they are assets — but only when stated once, near a clickable link to the profile that proves them. Unsourced and repeated four times, they invite skepticism.

There is also a **narrative contradiction**: 400+ projects and $160K earnings are attributed to freelance work that the About page describes as *"outreach systems, deliverability, lead generation, and growth operations"* — i.e. **cold email work, not development**. The site borrows the credibility of your outbound career to sell development services, while hiding the outbound career itself. That is backwards, and it is the core positioning error.

**The 30% is nearly invisible.** Cold email, deliverability, and lead generation appear in exactly one sentence in the About timeline. Instantly, Smartlead, and ReachInbox appear nowhere. Affiliate content does not exist.

### Recommendation

Stop treating the outbound background as a prelude you moved on from. Make it the **reason to hire you as a developer**. The positioning is not "developer who used to do cold email" — it is "developer who has run the systems your business runs on."

### 3.1 Statistics policy (decided)

**Rule: every displayed figure must be directly verifiable and clearly attributed to a single named source.** No blended totals.

The current numbers violate this. "400+ Projects Delivered" and "160K+ Earnings" appear to merge Upwork contracts, Fiverr work, personal projects and learning builds into unattributable aggregates. A prospect who opens your Upwork profile and sees a different number than your homepage will discount everything else on the site. Aggregation designed to look bigger reliably reads as smaller.

**Approved figures — Upwork only, supplied and verified by you on 2026-07-19:**

| Metric | Approved display copy |
|---|---|
| Earnings | **$100K+ earned on Upwork** |
| Jobs | **240+ completed Upwork jobs** (alt: "240+ Upwork contracts") |
| Hours | **22,000+ hours worked on Upwork** |
| Job Success Score | **92% Job Success Score** — volatile |

Rules:
- **One instance sitewide** — currently four, with inconsistent labels. Consolidate to a single credibility section (§18, item 7).
- **Each stat links to the Upwork profile that proves it.** A verifiable number stated once outperforms an unverifiable number stated four times.
- **No blended totals.** Never merge Upwork with Fiverr, direct clients, personal projects or learning builds.
- **Never use a vague combined earnings claim.** The approved string is "$100K+ earned on Upwork" — the platform is part of the claim, not a footnote.
- **Personal and learning projects are never counted in professional totals.** They are represented by the case studies.
- **These figures are a ceiling, not a floor.** Not to be rounded up, restated more favorably, or increased.

> **Note on the current live site:** the homepage today shows "160K+ Earnings" and "400+ Projects Delivered". The approved figures are **materially lower**. This is a deliberate correction, not a downgrade — the existing numbers appear to blend platforms and project types, and a prospect who opens your Upwork profile and sees $100K+ against a homepage claiming $160K+ will discount everything else on the site. A smaller verifiable number outperforms a larger unverifiable one.

**Volatile data must be centrally configured.** Job Success Score, Top Rated status and badges change without notice, and a stale JSS is worse than none. These live in one typed file, never inline in JSX:

```ts
// src/data/stats.ts
export const UPWORK_PROFILE_URL =
  "https://www.upwork.com/freelancers/~01a5eccfaf40a8a065";

/** Last time these figures were checked against the live Upwork profile. */
export const STATS_LAST_VERIFIED = "2026-07-19";

export const upworkStats = [
  { key: "earnings", value: "$100K+",  label: "Earned on Upwork" },
  { key: "jobs",     value: "240+",    label: "Completed Upwork jobs" },
  { key: "hours",    value: "22,000+", label: "Hours worked on Upwork" },
] as const;

/**
 * Volatile — changes without notice. Set `show: false` the moment a value
 * lapses or drops; a stale score is worse than no score.
 */
export const upworkStatus = {
  jobSuccessScore: { value: "92%", label: "Job Success Score", show: true },
  badge: { value: "", label: "Upwork status", show: false }, // e.g. "Top Rated"
} as const;
```

**Component contract:** the credibility section renders nothing for an empty `value` and respects every `show` flag, so a lapsed badge or dropped JSS is removed by flipping one boolean — no hunting through JSX. `badge` ships as `show: false` because Top Rated status was **not** among the figures you verified; enable it only if it is currently accurate. Surface `STATS_LAST_VERIFIED` in a quarterly review reminder — JSS moves with every completed contract.

---

## 4. Visual Design & Brand Quality

**Verdict: functional, clean, and completely undifferentiated.** It reads as a well-executed Tailwind template. Nothing about it is memorable.

### Specific findings

**Typography — critically broken.**
```css
/* globals.css:51-52 */
--font-sans: var(--font-geist-sans);   /* never defined anywhere */
--font-mono: var(--font-geist-mono);   /* never defined anywhere */
```
No `next/font` import exists in the project (grep returns zero hits). Tailwind v4's preflight applies `--default-font-family: --theme(--font-sans, initial)` to `html`; because the variable resolves to nothing, the declaration is invalid and **the entire site falls back to the browser serif default**. The Geist setup was removed from `layout.js` but the CSS references were left behind.

There is also no type scale. Three different H1 sizes across five pages, section H2s ranging `text-3xl` / `text-4xl` / `text-4xl md:text-5xl` arbitrarily, and body text mixing `leading-6/7/8` with no system.

**Color — fails accessibility and lacks identity.**

| Pair | Ratio | WCAG AA |
|---|---|---|
| `#06b6d4` text on `#ffffff` | **2.45:1** | ✗ Fail |
| `#ffffff` text on `#06b6d4` fill | **2.45:1** | ✗ Fail |
| `#64748b` on `#ffffff` | 4.76:1 | ⚠ Marginal; fails at `text-sm`/`text-xs` |
| `#94a3b8` on `#0f172a` (dark) | 7.4:1 | ✓ Pass |
| `#06b6d4` on `#0f172a` (dark) | 6.1:1 | ✓ Pass |

Dark mode is fine. **Light mode fails throughout.** The failing cyan-as-text is used for every section eyebrow, every stat value, the 404 numeral, all footer links, and every hover state — roughly 40 call sites. `--primary` and `--primary-dark` are **identical in both themes**, which is the root cause: one cyan cannot serve as both a dark-mode accent and light-mode body text.

The palette is also raw Tailwind slate + cyan-500, which is the single most common palette on developer portfolios in 2025–26.

**Zero motion.** `motion@12.41.0` is installed and **never imported**. `TechStack.jsx` lists "Motion" as a skill and renders a Framer Motion *icon* — advertising a library you're paying bundle weight for without using. All actual motion is CSS hover transforms.

**Dead visual dependencies.** `@heroui/react` and `@heroui/styles` are installed; `globals.css:2` imports the full HeroUI stylesheet on every page; **no `HeroUIProvider` is mounted and zero components are imported**. Pure payload for zero benefit. `@gravity-ui/icons` is likewise unused.

**Leftover pink.** The palette migrated pink → cyan in commit `842dd42`, but `shadow-pink-500/20` survives in **9 files** — a pink glow under every cyan button.

---

## 5. Homepage Structure

Current order: Hero → Stats → FeaturedProjects → Services → TechStack → WhyMe → AboutPreview → CTA.

**Assessment:** the sequence is reasonable but **front-loads claims and back-loads proof**. Stats (assertions) appear at position 2; the About narrative that explains *why* the stats exist appears at position 7, below the fold for most visitors.

Other issues:
- `FeaturedProjects.jsx:5` hardcodes `projects.find(p => p.slug === "taskforge") || projects[0]`, then reads `mainProject.slug` — **crashes if the array is ever empty**.
- `Services.jsx` and `services/page.jsx` maintain **two independent copies** of the service list with different titles and features. Guaranteed to drift.
- `Stats.jsx` renders four `<h3>` elements with no `<h2>` and no section heading — orphaned headings for screen readers.
- `TechStack` (a logo wall) sits between two more persuasive sections and pushes About further down.

---

## 6. Navigation & Information Architecture

Nav: Home · Projects · Services · About · Contact, plus a "Hire Me" CTA.

- **Flat, five-item, entirely conventional.** No room to express the dev/outbound split.
- **`Navbar.jsx:26` renders `<h1>MasumDev</h1>` on every page** — so every page ships two H1s, with the wrong one first in DOM order. Notable SEO and accessibility defect.
- **Breakpoint too low.** Desktop nav activates at `md:` (768px), where logo lockup + 5-item pill + toggle + CTA must coexist. Collides at 768–840px. Should be `lg:`.
- **No breadcrumbs** on project detail pages; no BreadcrumbList schema.
- **Nothing accommodates the 30%.** No home for cold email or affiliate content.

---

## 7. Services Pages

Content is solid and honest. Structural problems:

- **Duplicated source of truth** (see §5).
- **All four services are development.** Cold email services do not exist as an offering anywhere on the site.
- **No pricing, engagement model, timeline, or process.** A prospect cannot self-qualify, so every inquiry starts from zero.
- **`services/page.jsx:66` — `text-5xl font-bold` with no responsive step-down.** The only H1 in the app lacking one; "Development Services" crowds and overflows at 320–360px.
- Services do not link to case studies that demonstrate them.

---

## 8. Projects & Case Studies — Full Rework Required

### 8.1 Current state

`src/data/projects.js` holds four projects: ToyTopia, TaskForge, AssetVerse, StudyNook. The schema (`overview` / `problem` / `solution` / `features` / `stack`) is genuinely good — **preserve and extend this shape**.

Structural defects:
- **`/projects/[slug]` has no `generateMetadata`** — all four case studies share the root title and description.
- **`sitemap.js` omits every project detail page** — the case studies are effectively unindexed.
- **No `generateStaticParams`** — pages render on demand instead of prerendering.
- Project screenshots are **1.5 MB PNGs** (4 of them, all loaded on the homepage).

### 8.2 New hierarchy (per your direction)

The portfolio is restructured into **three transparency tiers**. ToyTopia and AssetVerse are removed from the main plan. HireLoop is excluded entirely. **No project is presented as client work.**

| Rank | Project | Label | Prominence |
|---|---|---|---|
| 1 | **DentFlow** | Self-Initiated SaaS Product | Flagship case study |
| 2 | **SkillPath AI** | Self-Initiated AI Product *— production verification in progress until §8.8.2 passes* | Flagship case study (draft until verified) |
| 3 | **TaskForge** | Full-Stack Capstone Project | Detailed secondary case study (draft until §8.8.1 passes) |
| 4 | **StudyNook** | Earlier Learning Project | Earlier Builds section only |
| — | ~~ToyTopia, AssetVerse~~ | — | **Omitted entirely.** No archive list. |

The label is a **required field** on every project record and renders as a visible badge on cards and detail pages. Transparency is the strategy: a self-initiated SaaS product with real multi-tenancy and RBAC is *more* impressive than a vaguely-implied client engagement, and it cannot be challenged.

### 8.3 DentFlow — live review

**Live:** https://dentflow-eight.vercel.app · **Repo:** https://github.com/masumgaibandha/dentflow

Reviewed 2026-07-19. **This is your strongest asset and it is not currently on your portfolio at all.**

Verified from the live site:
- Hero: *"Dental clinic management, simplified"* / *"Run your clinic with clarity. Care for patients with confidence."*
- Multi-tenant architecture with isolated clinic data
- Role-based access control across **three roles** (admin, staff, patient), each with a scoped view
- Appointment scheduling with **conflict detection / automatic double-booking prevention**
- Clinical records with a **draft → finalized workflow** and controlled patient sharing
- Stripe test-mode payments
- Working login and registration; audience toggle ("I'm a clinic / I'm a patient")

This is a legitimately sophisticated feature set. Multi-tenancy with data isolation and a draft/finalized clinical-record workflow are the kind of details that distinguish a real engineer from a tutorial follower.

**Issues found that must be fixed before featuring:**

| Issue | Severity | Detail |
|---|---|---|
| `/services` returns **HTTP 404** | **Blocker** | The homepage "Featured dental services" section links to "View all services" → dead route. A broken link on your flagship demo. |
| "Featured dental services" section renders empty | High | Only the (broken) link is present; no service content. |
| FAQ shows question headers with no visible answers | Medium | May be a collapsed accordion — **verify manually before treating as a bug**. |
| No seeded demo tenant documented | High | A reviewer cannot see the RBAC or multi-tenancy without an account. |

**Required before publication:** fix or remove the `/services` route; populate or remove the empty services section; confirm FAQ behavior; and — most importantly — **create a seeded demo clinic with published read-only credentials for admin, staff, and patient**, so a reviewer can experience the role separation in 30 seconds. The RBAC work is the most impressive thing here and it is currently invisible.

### 8.4 SkillPath AI — live review

**Frontend:** https://skillpath-ai-frontend-umber.vercel.app · **API:** https://skillpath-ai-api.vercel.app · **Repo:** https://github.com/masumgaibandha/skillpath-ai

Reviewed 2026-07-19.

Verified working:
- Hero: *"Learn with a roadmap built specifically for you"* / *"SkillPath AI turns your goals into an AI-generated study plan — a clear, milestone-by-milestone path instead of guesswork about what to learn next."*
- Course discovery with category, level and price filtering; pagination functional
- AI Study Planner and AI Learning Chat surfaced in navigation
- Email/password and Google auth
- **API is live and healthy** — `GET /api/courses` returns valid JSON, 12 items per page, 29 records, 3 pages

**Issues found that must be fixed before featuring:**

| Issue | Severity | Detail |
|---|---|---|
| **QA test records in the public database** | **Blocker** | `/explore` publicly lists *"Duplicate Submission Test 0719"*, *"Manual Paid Node Course 0719"*, *"Manual Test React Course 0719"* — your own test fixtures, visible to anyone. |
| API root returns **404** | Medium | `GET /` on the API has no handler. Harmless technically, but a reviewer who clicks the API URL sees an error page. Add a root route returning name/version/status. |
| `/health` returns **404** | Medium | No health endpoint. Add one — it signals production thinking. |
| Course count inconsistent | Low | Homepage says "24 total courses"; API reports 29. Derive from the API. |
| AI chat and planner **not verified** | High | Both require auth, so I could not test them. **You must verify end-to-end that roadmap generation and course-aware chat actually work in production**, including LLM API key validity and rate-limit/error handling, before featuring this. |
| No cost/rate-limit safeguards confirmed | Medium | A public LLM endpoint without throttling is a billing risk. Verify before promoting traffic to it. |

**Note on honesty:** the case study may describe *architecture and capability* freely. It must not claim users, accuracy figures, AI performance benchmarks, revenue, or outcomes. None exist.

### 8.5 TaskForge — live review

**Frontend:** https://taskforge-client.vercel.app
**Client repo:** https://github.com/masumgaibandha/taskforge-client
**Server repo:** https://github.com/masumgaibandha/taskforge-server

Reviewed 2026-07-19. Technically the strongest of the older work — role-based dashboards, proposals, Stripe Checkout, reviews, admin management. Worth a detailed case study, **explicitly labeled a Full-Stack Capstone Project**.

**The live demo currently contains content that would disqualify you with a serious reviewer.**

| Issue | Severity | Detail |
|---|---|---|
| **Seeded profile referencing SSNs and fake names** | **CRITICAL BLOCKER** | Freelancer "Brittney Lashley" carries the bio: *"Logged in users can view full social security numbers and can save their fake names to use later."* On a platform that handles payments, this reads as either a data-privacy failure or fraud tooling. **Delete before any link to this site is published.** |
| **Fabricated testimonials** | **Blocker** | "Sarah Johnson (Client, 5 stars)", "Michael Chen (Freelancer, 5 stars)", "Emily Carter (Client, 5 stars)" — invented social proof with stock names. Remove entirely, or relabel the section unmistakably as sample UI data. |
| Misleading platform statistics | High | "28 Tasks Posted", "13 Freelancers" presented as real metrics. Remove or clearly mark as demo data. |
| Unprofessional seeded records | Medium | Bio "Hablu Mia" containing pasted out-of-context technical questions; *"Dark Implement Mode Toggle using React Context"* (garbled title); profiles reading "Skills not added yet". |
| Generic template bios | Low | Several near-identical placeholder freelancer bios. |

**Required before publication:** purge and re-seed the demo database with coherent, professional sample data, and add a persistent banner — *"Demo environment. All data is sample content."* This single fix converts TaskForge from a liability into an asset.

### 8.6 StudyNook — assessment

**Backend:** https://studynook-server-inky.vercel.app · **Repo:** https://github.com/masumgaibandha/studynook-server

Per your direction: **Earlier Builds section only, limited prominence.** Only the server is referenced now, so treat it as evidence of early backend and REST API experience rather than a product. **Do not promote it to a case study** unless a complete, polished frontend exists. Present it as a one-line entry in a compact Earlier Builds list; a linked repo is sufficient.

### 8.7 How this hierarchy supports 70/30 positioning

The four-tier structure does real strategic work:

- **DentFlow and SkillPath AI carry the 70%.** Two self-initiated products — one multi-tenant SaaS with RBAC and clinical workflows, one AI product with LLM integration and a separate API — demonstrate exactly the services you sell (SaaS development, dashboards, API/backend, database architecture) without needing a single client name.
- **TaskForge adds depth without dilution.** Labeled as capstone work, it proves marketplace workflows and payments while being honest about its origin.
- **StudyNook shows trajectory.** Placed in Earlier Builds, it demonstrates progression rather than padding the top of the page with weaker work.
- **The 30% attaches to DentFlow and SkillPath AI naturally.** Both are products that would need customers. A "how I'd take this to market" note on each — cold email infrastructure, list building, campaign sequencing — demonstrates outbound expertise *through* your development work rather than in a separate silo. This is the integration point where 70 and 30 stop being separate stories.

Transparent labeling is what makes this work. A reviewer who sees "Self-Initiated SaaS Product" and finds genuine multi-tenancy trusts everything else on the site. A reviewer who suspects inflated framing trusts nothing.

---

## 8.8 Pre-Publication Checklists (hard blockers)

**Scope boundary:** TaskForge and SkillPath AI live in **separate repositories**. This portfolio repository must never be used to modify them. The work below happens in those repos, independently, and is a **precondition for publishing** the corresponding case study — not part of the portfolio build.

**Draft policy:** the portfolio may build the full case-study architecture, routing, components and MDX for both projects. Until a project's checklist passes, its case study is **`draft: true`** — excluded from the sitemap, `noindex`, absent from `/work`, and unreachable by public URL. The frontmatter schema (§26.2) already carries a `draft` flag; content generation filters on it, so this is enforced mechanically rather than by memory.

### 8.8.1 TaskForge — pre-publication checklist

Repos: [`taskforge-client`](https://github.com/masumgaibandha/taskforge-client) · [`taskforge-server`](https://github.com/masumgaibandha/taskforge-server)

| # | Item | Status |
|---|---|---|
| 1 | Remove the freelancer bio referencing **social security numbers and saved fake names** | ☐ **Critical** |
| 2 | Remove all other SSN-like or sensitive-looking demo data | ☐ |
| 3 | Remove fake personal identities presented as real people | ☐ |
| 4 | Remove the three placeholder testimonials (Sarah Johnson, Michael Chen, Emily Carter) | ☐ **Critical** |
| 5 | Remove or rewrite generated/unprofessional biographies (incl. the "Hablu Mia" pasted-questions bio) | ☐ |
| 6 | Remove misleading user content and garbled listings (e.g. "Dark Implement Mode Toggle using React Context") | ☐ |
| 7 | Remove inappropriate public profile information | ☐ |
| 8 | Remove unsupported platform claims — "28 Tasks Posted", "13 Freelancers" presented as real metrics | ☐ |
| 9 | Audit both repos for committed secrets, credentials or private-looking data | ☐ **Critical** |
| 10 | Replace removed content with **clearly labelled fictional demo data** | ☐ |
| 11 | Add a persistent site banner: *"Demo environment — all data is sample content."* | ☐ |
| 12 | Fix profiles reading "Skills not added yet" | ☐ |
| 13 | Full pass over the live site as an anonymous visitor; confirm nothing embarrassing remains | ☐ |
| 14 | Redeploy and re-verify | ☐ |

**Publication gate:** items 1, 4 and 9 are absolute. Until all fourteen pass, `taskforge.mdx` stays `draft: true`.

Why item 1 dominates: on a platform that processes Stripe payments, text about viewing social security numbers and saving fake names reads as either a data-privacy failure or fraud tooling. A reviewer will not pause to consider that it is seed data.

### 8.8.2 SkillPath AI — pre-publication checklist

Repo: [`skillpath-ai`](https://github.com/masumgaibandha/skillpath-ai) · Frontend + API

**Content cleanup**

| # | Item | Status |
|---|---|---|
| 1 | Delete QA/test records from production — *"Duplicate Submission Test 0719"*, *"Manual Paid Node Course 0719"*, *"Manual Test React Course 0719"* | ☐ **Critical** |
| 2 | Remove any remaining test or QA data presented as real users or real courses | ☐ **Critical** |
| 3 | Remove placeholder content that reduces credibility | ☐ |
| 4 | Remove unsupported usage or outcome claims | ☐ |
| 5 | Reconcile the course count — homepage says 24, API reports 29; derive from the API | ☐ |
| 6 | Add an API root route returning name/version/status (currently `404`) | ☐ |
| 7 | Add a `/health` endpoint (currently `404`) | ☐ |

**Functional verification (Decision E) — all fifteen must pass**

| # | Check | Status |
|---|---|---|
| 1 | User registration and login | ☐ |
| 2 | Course discovery | ☐ |
| 3 | AI roadmap generation | ☐ |
| 4 | Course-aware AI chat | ☐ |
| 5 | Invalid prompt handling | ☐ |
| 6 | Empty-state behavior | ☐ |
| 7 | API failure behavior | ☐ |
| 8 | Rate-limit behavior | ☐ |
| 9 | Loading and retry states | ☐ |
| 10 | Mobile responsiveness | ☐ |
| 11 | Payment flow in test mode | ☐ |
| 12 | Production environment configuration | ☐ |
| 13 | No exposed secrets | ☐ |
| 14 | No test or QA data presented as real users | ☐ |
| 15 | Successful redeployment after fixes | ☐ |

**Status labeling until the checklist passes:**

> **Self-Initiated AI Product — production verification in progress**

Rules while unverified:
- **Do not describe AI chat, roadmap generation, auth-protected AI workflows, production LLM responses, or error/retry handling as fully working.**
- Do not present SkillPath as a completed platform or as client-used.
- The case study may describe architecture and implementation approach; it may describe these as **implemented product capabilities only after production verification passes**.
- Only you can complete items 1–4 and 8–9 — they sit behind authentication and I have no way to test them.

Once all fifteen pass, the label reverts to **Self-Initiated AI Product** and `draft` flips to `false`.

### 8.8.3 DentFlow — pre-publication checklist

Repo: [`dentflow`](https://github.com/masumgaibandha/dentflow). Lightest of the three; no content-integrity problems found.

| # | Item | Status |
|---|---|---|
| 1 | Fix or remove the `/services` route (currently **404** from a homepage link) | ☐ **Blocker** |
| 2 | Populate or remove the empty "Featured dental services" section | ☐ |
| 3 | Verify FAQ answers render (may be a collapsed accordion — confirm manually) | ☐ |
| 4 | Create a seeded demo clinic with published read-only credentials for **admin, staff and patient** | ☐ **High value** |
| 5 | Confirm no real or real-looking patient data exists in the demo tenant | ☐ |
| 6 | Redeploy and re-verify | ☐ |

Item 4 is the highest-leverage item across all three projects. Multi-tenancy and three-role RBAC are the most impressive things in your portfolio and are **currently invisible** to anyone without an account. Published demo credentials let a reviewer experience the role separation in under a minute.

---

## 9. About & Contact Pages

**About** is the best-written page on the site — the "From Client Work to Product Development" narrative is specific and human. **Preserve most of this copy.** Weaknesses: no photo credibility (`AboutPreview.jsx:16` uses `<Image fill>` with **no `sizes` prop**, so a full-width srcset is served for a small square); the timeline is vague ("Current Focus", "Previous Experience"); no résumé link (the PDF is linked from exactly one place — the hero); the cold-email chapter is compressed to a single sentence.

**Contact** is structurally sound — the "Best Fit Projects" list is a genuinely good qualifying device. Critical defects:

- **The form has no labels.** All four fields are placeholder-only: no `<label>`, no `id`, no `htmlFor`, no `aria-label`, no `autoComplete`. Screen readers announce untitled fields, and the placeholder disappears on input.
- **Two conflicting implementations.** `ContactForm.jsx` posts client-side to Web3Forms. `src/lib/actions/contact.js` is a complete, **never-imported** Resend server action reading `RESEND_API_KEY` and `CONTACT_EMAIL` — neither of which exists in `.env.local`. It also handles a `budget` field the form doesn't render, and **interpolates raw user input into an HTML email body** (injection into your inbox). Delete it; it ships the `resend` dependency for dead code.
- **No spam protection.** The Web3Forms key is `NEXT_PUBLIC_` by design and publicly readable. No honeypot, no captcha.
- **No inquiry routing.** One generic form cannot distinguish a development lead from a cold-email lead — which the 70/30 split requires.

---

## 10. Mobile Responsiveness

Genuinely good foundations: consistent `container mx-auto px-4`, grids laddering `1 → md:2 → lg:4`, `flex-col sm:flex-row` CTA rows, correct `fill` + `sizes` on most images, decorative blobs safely `overflow-hidden` + `pointer-events-none`.

Issues:

1. **Navbar collision at 768–840px** — desktop nav should switch at `lg:`, not `md:`.
2. **`services/page.jsx:66`** — `text-5xl` H1 with no mobile step-down; overflows at 320–360px.
3. **`Services.jsx:75`** — `lg:grid-cols-[120px_1fr_350px]`; the 350px fixed track squeezes the middle column at 1024–1100px.
4. **`projects/page.jsx:96`** — the "View GitHub Repositories" block sits **outside** the container div, so it has no horizontal padding.
5. **Sticky header with no scroll offset.** `h-20` sticky header + `scroll-behavior: smooth`, but no `scroll-mt-*` anywhere — any anchor target lands under the header.
6. **No `xl:`/`2xl:` breakpoints.** Content stretches to 1536px while type stops scaling at `lg` — small-looking on large displays.
7. `backdrop-blur-2xl` header + four `blur-3xl` blobs per page is real compositing cost on low-end mobile GPUs.

---

## 11. Accessibility

Current state would fail a WCAG 2.1 AA audit.

**Critical**
- **No focus styles anywhere.** Grep for `focus:` / `focus-visible:` / `ring-` across `src/` returns **zero hits**. Keyboard navigation is untrackable on the dark background.
- **Unlabeled form fields** (§9).
- **Duplicate H1 on every page** — navbar logo is `<h1>` (§6).
- **Icon-only buttons with no accessible name** — mobile menu button (`Navbar.jsx:66`) has no `aria-label`, `aria-expanded`, or `aria-controls`; `ThemeToggle.jsx:18` has no `aria-label` or `aria-pressed`. (The Footer does this correctly — use it as the reference.)
- **Contrast failures** at 2.45:1 (§4).

**Serious**
- No skip-to-content link; `<main>` has no `id`.
- Orphaned headings — `Stats.jsx` H3s with no H2; `AboutPreview.jsx` uses `<h3>` for the numbers "400+", "160K+" (data, not headings).
- Unlabeled `<section>` landmarks — no `aria-labelledby`; the landmark list is a wall of anonymous regions.
- Decorative glyphs announced — literal `✓` and `→` in six files need `aria-hidden="true"`.
- **`target="_blank"` without `rel="noopener noreferrer"`** on nearly every external link (Footer ×4, contact ×4, Hero, FeaturedProjects, project detail). Only `projects/page.jsx:100` is correct.
- Mobile menu doesn't trap or restore focus, doesn't close on Escape or route change.
- `ThemeToggle` returns `null` before mount — visible navbar reflow on hydration.
- **`ThemeToggle` is hardcoded dark** (`border-slate-700 bg-slate-900`) — a dark charcoal square on a white navbar in light mode.
- **Navbar built for dark only** — `border-white/10`, `bg-white/[0.03]` are invisible on white.

---

## 12. SEO & Structured Data

**Present:** solid root metadata with title template, `metadataBase`, keywords, OG and Twitter blocks; per-page `metadata` on four routes; functional `robots.js` and `sitemap.js`.

**Gaps:**

| Gap | Impact |
|---|---|
| **`/og-image.png` does not exist** | Every social share is imageless |
| **No `generateMetadata` on `/projects/[slug]`** | All 4 case studies share one title/description |
| **Project pages absent from sitemap** | Case studies effectively unindexed |
| **Zero JSON-LD** | No Person, WebSite, BreadcrumbList, SoftwareApplication, Article, or FAQPage |
| **No canonical URLs** | No `alternates.canonical` anywhere |
| No `generateStaticParams` | Project pages render on demand |
| No verification tags | Search Console / Bing not connected |
| No `viewport` export or `theme-color` | |
| No per-page OG images | |
| **No long-form content** | Nothing to rank for informational queries |

The last point is decisive. A five-page brochure site can rank for "Abdullah Masum" and little else. Every keyword you'd want — cold email deliverability, Instantly vs Smartlead, Next.js SaaS architecture — requires content that does not exist.

---

## 13. Performance

**~7.6 MB of unoptimized images in `public/`:**

| File | Size | Status |
|---|---|---|
| `projects/studynook.png` | 1,589 KB | rendered on `/` and `/projects` |
| `projects/taskforge.png` | 1,526 KB | rendered on `/` and `/projects` |
| `projects/assetverse.png` | 1,515 KB | rendered on `/` and `/projects` |
| `projects/toytopia.png` | 1,449 KB | rendered on `/` and `/projects` |
| `assets/logo2.png` | **2,076 KB** | **unreferenced** |
| `assets/masum{,1,3}.jpg` | 408 KB total | only `masum1.jpg` used |
| `Abdullah-Al-Masum-Resume.pdf` | 294 KB | |

`next/image` optimizes the project PNGs at request time, so production impact is bounded — but the source files should be WebP/AVIF at ~150 KB, `logo2.png` (2 MB) is pure dead weight, and the homepage currently loads four large screenshots at once.

**Other:** unused `@heroui/styles` CSS ships on every page; unused `motion`, `@heroui/react`, `@gravity-ui/icons`, `resend` sit in the dependency graph; default Next template SVGs (`file`, `globe`, `next`, `vercel`, `window`) still in `public/`; no `loading.jsx` anywhere.

**Positives:** RSC-first (only 4 of 20 components are client), React Compiler enabled, no `useEffect` sprawl.

---

## 14. Architecture, Component Structure & Technical Debt

**Strengths — preserve these:** RSC-by-default discipline, clean `@/*` path alias, correct async `params` handling in Next 16, `data/projects.js` separation, sensible folder grouping.

**Debt:**

| Item | Detail |
|---|---|
| **No UI primitive layer** | No `components/ui/`, no `cn()`, no `clsx`/`tailwind-merge`, no `cva`. Button/card/chip markup is copy-pasted across ~10 files. |
| **The 9-way duplicated button** | `rounded-xl bg-[var(--primary)] px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:bg-[var(--primary-dark)]` appears in 9 files — carrying the stale pink shadow into every one. |
| **Design tokens aren't Tailwind tokens** | Only `--color-background` and `--color-foreground` are registered via `@theme` — and **neither is used**. `--surface`, `--muted`, `--border`, `--primary` are not registered, so components write `bg-[var(--surface)]/50` arbitrary values ~200 times. There is no `bg-surface`, no type scale, no spacing scale, no radius tokens. This is a CSS-variable convention, not a design system. |
| **`dark:` variant is broken** | Tailwind v4 defaults `dark:` to `prefers-color-scheme`. Class-based mode requires `@custom-variant dark (&:where(.dark, .dark *));` — **absent from `globals.css`** — while `ThemeProvider` uses `attribute="class"`. Only one file uses `dark:` today, so blast radius is small, but it is a landmine. |
| **Three duplicate token blocks** | `:root`, `.dark`, and `.light` — `:root` and `.light` are byte-identical. `--card` is declared in all three and **used nowhere**. |
| **Dead code** | `src/lib/actions/contact.js` (never imported); all of `src/assets/` (unreferenced); unused `ThemeToggle` import in `page.js`. |
| **`src/assets/expressjs.js` is a PNG binary with a `.js` extension** | Verified: starts with the PNG magic header. Importing it would hard-fail the build. |
| **No TypeScript** | 0%. Most costly for the content/affiliate schemas this plan introduces. |
| **No error boundaries or loading states** | |
| **Stale README** | Claims MongoDB (no DB is used), "SEO Optimized" (broken OG, no JSON-LD), "Project Categories" (no filtering UI). Documents the résumé filename incorrectly. |

**Security:**
- `next.config.mjs` sets `images.remotePatterns: [{ hostname: "**" }]` — **wildcard, allowing image optimization from any HTTPS host.** An open image-proxy surface. **No remote images are used anywhere** — every `<Image>` points at a local path. Remove the block entirely.
- No security headers (CSP, `X-Frame-Options`, `Referrer-Policy`, HSTS).
- Dead Resend action interpolates unescaped user input into HTML email.
- `.env.local` is correctly gitignored and has never been tracked (verified via `git log --all`). ✓

---

## 15. Content Disposition

### Preserve
- About page "From Client Work to Product Development" narrative — the strongest copy on the site
- `WhyMe.jsx` "Business & Development Experience" — closest thing to real differentiation
- Contact page "Best Fit Projects" qualifying list
- The `overview` / `problem` / `solution` / `features` / `stack` case-study schema
- RSC architecture and folder conventions
- Root metadata structure and title template

### Rewrite
- Hero headline and subheadline — category description → specific positioning
- All service descriptions — feature lists → outcome framing, plus cold-email services
- About page — expand the outbound chapter from one sentence to a real section
- TaskForge case study — reframe explicitly as capstone work
- Timeline — replace "Current Focus"/"Previous Experience" with concrete periods
- README — currently inaccurate

### Remove
- **The 4× duplicated stat block** → one instance, Upwork-attributed and profile-linked, driven by `data/stats.ts` (§3.1)
- **Blended cross-platform totals** — no figure may merge Upwork, Fiverr, personal and learning work
- Hero badge stat string
- `src/lib/actions/contact.js` (dead, insecure)
- `src/assets/` entirely (unreferenced; includes the PNG-named-`.js`)
- Unused deps: `@heroui/react`, `@heroui/styles`, `motion`, `@gravity-ui/icons`, `resend`
- `public/assets/logo2.png` (2 MB, unreferenced), unused headshots, default template SVGs
- All 9 `shadow-pink-500/20` instances
- Unused `ThemeToggle` import in `page.js`
- Duplicate `.light` block and unused `--card` token
- `images.remotePatterns` wildcard
- ToyTopia and AssetVerse from the main project hierarchy
- `TechStack` "Motion" entry (or actually adopt the library)

### Rebuild
- Design token system → real `@theme` tokens with a type and spacing scale
- Typography → working `next/font`
- Color system → separate fill and text primaries that pass AA
- Component layer → `components/ui/` primitives
- Contact form → labeled, validated, routed by inquiry type
- Sitemap → dynamic
- Project data layer → typed, tiered, with `label` as a required field

---

# Part II — Redesign Plan

## 16. Brand Positioning

### Core positioning statement

> **I build the software businesses run on — and I've run the outbound systems that fill them.**

### Why this works

It is **true**, **specific**, and **non-copyable**. Any developer can claim Next.js expertise. Almost none can credibly claim to have built cold email infrastructure at volume. The combination is the moat, and it converts your 70/30 split from a liability ("unfocused") into a differentiator ("understands the whole funnel").

It also resolves the narrative contradiction in §3: your freelance track record stops being an unexplained stat and becomes the evidence for half your positioning.

### Positioning by audience

| Audience | Message |
|---|---|
| SaaS founders | A developer who understands acquisition, not just architecture |
| Agencies | One person who can build the product *and* the pipeline that fills it |
| Cold email operators | Someone who has run the tools and can build custom infrastructure |
| Organic search | Genuinely useful content from an operator, not an affiliate farm |

### Voice

Direct, specific, technically credible. No hype, no growth-hacker vocabulary. Concrete nouns over adjectives. **Every claim either verifiable or absent.**

### Hero direction (drafts for your approval)

- **H1:** "I build SaaS products — and the outbound systems that fill them."
- **Sub:** "Full-stack development with Next.js, React and MongoDB. Plus cold email infrastructure and deliverability from years of running outbound at volume."
- **Primary CTA:** "See how I build" → `/work`
- **Secondary CTA:** "Start a project" → `/contact`

No stat badge in the hero. Proof moves below the fold, stated once, linked to its source.

---

## 17. Sitemap

```
/                                   Home
│
├── /work                           Case studies index (tiered)
│   ├── /work/dentflow              ★ Flagship — Self-Initiated SaaS Product
│   ├── /work/skillpath-ai          ★ Flagship — Self-Initiated AI Product
│   ├── /work/taskforge             Full-Stack Capstone Project
│   └── /work/studynook             Earlier Learning Project (compact)
│
├── /services                       Services overview (both tracks)
│   ├── /services/web-development           70% — primary
│   │   ├── /services/saas-development
│   │   ├── /services/nextjs-development
│   │   └── /services/api-development
│   └── /services/cold-email                30% — secondary
│       ├── /services/email-infrastructure
│       └── /services/lead-generation
│
├── /about                          Extended bio, both chapters
├── /contact                        Routed inquiry form
│
├── /blog                           Articles, tutorials, comparisons
│   ├── /blog/[slug]
│   └── /blog/category/[category]
│
├── /tools                          Affiliate hub — the 30% engine
│   ├── /tools/[slug]               Individual tool reviews
│   ├── /tools/compare/[comparison] e.g. instantly-vs-smartlead
│   └── /tools/stack                "The stack I actually use"
│
├── /resources                      Free tools & lead magnets
│   └── /resources/[slug]
│
├── /disclosure                     Affiliate disclosure (required)
├── /privacy                        Privacy policy (required for analytics)
├── /uses                           Personal stack page (SEO + authority)
└── /rss.xml, /sitemap.xml, /robots.txt
```

**`/projects` → `/work`** with permanent redirects. "Work" carries more weight than "projects" and accommodates non-code deliverables.

---

## 18. Homepage Structure

Proof-first, claims-second — the inverse of the current order.

| # | Section | Purpose |
|---|---|---|
| 1 | **Hero** | Positioning statement, two CTAs. No stat badge. |
| 2 | **Dual-track strip** | Two cards: *Full-Stack Development* / *Cold Email & Lead Gen*. Establishes the 70/30 split immediately. |
| 3 | **Flagship case studies** | DentFlow and SkillPath AI, side by side, with tier labels visible. Proof before claims. |
| 4 | **Selected work** | TaskForge (capstone) + compact Earlier Builds row. |
| 5 | **Capability strip** | Tech stack as a quiet band, not a hero section. |
| 6 | **How I work** | 3–4 step process. Replaces generic "Why Me" with something operationally specific. |
| 7 | **Credibility** | Upwork metrics from `data/stats.ts` — **each labeled with its source, stated once, linked to the proving profile.** Renders nothing for empty values. Fiverr referenced qualitatively, never merged into Upwork totals (§3.1). |
| 8 | **From the blog** | Three most recent posts. Signals an active, living site. |
| 9 | **Tools I use** | Teaser into `/tools`. Affiliate entry point, framed as a resource. |
| 10 | **CTA** | Single clear conversion block. |

Sections 8 and 9 are what make this a business asset rather than a résumé: they give returning search traffic somewhere to land and give the affiliate engine a home on the highest-traffic page.

---

## 19. Page-by-Page Content Strategy

### `/` — Home
Positioning, proof, dual-track clarity, entry into blog and tools. Per §18.

### `/work` — Case studies index
Three visually distinct tiers with labels rendered as badges. Flagships get large cards with screenshots; capstone gets a medium card; earlier builds get a compact list. **The tiering itself communicates judgment** — showing you know which work is strongest is a signal in its own right.

### `/work/dentflow` — Flagship
Structure: Overview → Problem → Architecture → Multi-tenancy & data isolation → RBAC (admin/staff/patient) → Appointment scheduling & conflict detection → Clinical records draft/finalized workflow → Stripe test payments → TypeScript & testing approach → Technical challenges → **Live demo with seeded credentials for all three roles**.

Label: **Self-Initiated SaaS Product**. Never described as client work; no claim that any clinic uses it.

### `/work/skillpath-ai` — Flagship
Structure: Overview → Problem → System architecture (separate frontend + API) → Course discovery & filtering → AI roadmap generation → Course-aware chat → LLM integration & prompt design → Auth → Payments → API design → Error handling and rate limiting.

Label until verification passes: **Self-Initiated AI Product — production verification in progress** (§8.8.2). Describe capability and architecture only — **no users, no accuracy claims, no AI benchmarks, no revenue**. AI chat, roadmap generation, auth-protected AI workflows, production LLM responses and error/retry handling **may not be described as fully working** until you have personally tested them. Stays `draft: true` until the 15-point checklist passes.

### `/work/taskforge` — Secondary
Structure: Overview → **Explicit capstone disclosure in the opening paragraph** → Marketplace workflows → Three roles → Auth & authorization → Proposal system → Stripe Checkout → Dashboards → Frontend architecture → Backend API design → Database schema.

Label: **Full-Stack Capstone Project**. Stays `draft: true` until §8.8.1 passes — the SSN/fake-names bio, the fabricated testimonials, and a secrets audit are absolute blockers.

### `/work/studynook` — Earlier build
One compact entry. Backend/REST experience, learning progression. Label: **Earlier Learning Project**. No full case study.

### `/services` and children
Overview page splits both tracks. Each service page: problem it solves → what's included → process → timeline → relevant case study → FAQ (drives FAQPage schema) → **consultation CTA**. Cold-email service pages cover infrastructure, domain and inbox setup, deliverability, list building, and campaign management, naming Instantly, Smartlead, and ReachInbox — which also creates natural, non-forced internal links into `/tools`.

**No published pricing in v1** (decided). No fixed prices, no ranges, no "from" anchors. Every service page converts to a **consultation CTA** ("Discuss your project", "Book a consultation") rather than a price. Scope varies too much for a number to help, and a published figure either prices you out of large work or anchors you low on it. Qualification happens in the contact form (§19) via inquiry type, budget range and timeline — where the prospect self-selects privately instead of bouncing off a public number. Revisit once you have enough closed engagements to price confidently.

### `/about`
Two chapters given equal weight: the outbound career and the development career, with the through-line being *why the first makes you better at the second*. Preserve the existing narrative copy; expand chapter one substantially. Add a proper photo and a concrete timeline.

**Résumé placement (decided):** available from the **About page** (a clear download in context, where someone evaluating you is already looking) and from **navigation** (a secondary item or footer link — reachable from anywhere). **Removed from the homepage hero**, where it currently occupies a primary CTA slot. A résumé download is a lower-intent action than viewing work or starting a conversation, and it should not compete with either above the fold.

**Fiverr (decided):** not emphasized in v1. No Fiverr metrics, no Fiverr-derived totals. The profile link may remain in the footer/contact social list, but Fiverr does not appear in the credibility section or positioning copy. Upwork carries the professional track record (§3.1).

### `/contact`
Inquiry-type routing (development / cold email / affiliate-partnership / other) so leads arrive pre-qualified. Preserve "Best Fit Projects". Add budget range, timeline, honeypot, labeled fields, and a real success state.

---

## 20. Visual Design Direction

**Concept: "Engineering Journal."** Precise, dense, confident. Editorial typography rather than decorative gradients. Restraint reads as premium; effects read as template.

### Principles

1. **Typography carries the design.** A strong type system with generous scale contrast, not gradient meshes and glow blobs.
2. **One accent, used sparingly.** Accent color is an event, not a texture.
3. **Structural depth.** Hairline borders, subtle elevation, real grid alignment — not blur.
4. **Motion is a finishing pass, not the design.** CSS transitions for ordinary interactions; `motion` only where it clarifies hierarchy or feedback. No parallax, no scroll-jacking, no decorative reveals, nothing that delays content (§26.4).
5. **Dark-first, light-perfect.** Dark stays the default; light mode gets genuine attention rather than being an afterthought.

### Specific direction

- Replace radial blur blobs with a **fine grid or dot texture** at very low opacity
- **Numbered, bordered sections** — engineering-document feel
- **Monospace for metadata** — tech labels, dates, project tiers, section numbers
- **Asymmetric case-study layouts** rather than uniform card grids
- Real screenshots in **subtle device frames**, not floating rounded rectangles
- **Distinct visual treatment per project tier** — flagships feel materially different from earlier builds

---

## 21. Design System

### Typography

**Decided: Geist.** One family, loaded via `next/font` — which also **fixes the undefined-variable defect** (P0-1) at the root, since `--font-geist-sans` finally gets defined by the thing that was always meant to define it.

- **Geist Sans** — headings, body, navigation, and all UI
- **Geist Mono** — used sparingly: code snippets, technical labels, project tier badges, dates, small developer-facing details

**No Inter Tight, no Satoshi, no third family in v1.** Decorative font stacking is a common way portfolios read as templated. Premium character comes from hierarchy, spacing, layout and content — not from typeface count.

```tsx
// src/app/layout.tsx
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
  <body className="font-sans">
```

```css
/* globals.css — the variables now actually resolve */
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

The `geist` package exposes `--font-geist-sans` / `--font-geist-mono` under exactly the names `globals.css` already references, so the existing `@theme` block becomes correct rather than needing replacement. Verify the package's variable names at install time and align if they differ; do not assume.

**Weight discipline:** ship only the weights actually used — Regular 400, Medium 500, Semibold 600. **Avoid Bold 700+ for display headings.** Large text at 600 on a well-set page reads more confident than 800 at the same size; heavy oversized headings are the most common tell of a template. Hierarchy comes from size, spacing and color contrast, not weight escalation.

```css
--text-xs:   0.75rem  / 1.5
--text-sm:   0.875rem / 1.6
--text-base: 1rem     / 1.7
--text-lg:   1.125rem / 1.7
--text-xl:   1.25rem  / 1.6
--text-2xl:  1.5rem   / 1.4
--text-3xl:  1.875rem / 1.3
--text-4xl:  2.25rem  / 1.2
--text-5xl:  3rem     / 1.1
--text-6xl:  3.75rem  / 1.05
--text-7xl:  4.5rem   / 1.0
```

One H1 size, one H2 size, one H3 size — applied consistently across every page.

### 21.1 Color System

All contrast ratios below were **computed** using the WCAG 2.1 relative-luminance formula, not estimated. WCAG AA requires 4.5:1 for body text and 3:1 for large text and UI boundaries.

#### What actually causes the "developer template" look

Worth stating before the options, because it drives every decision here: **the template look comes from chroma behavior, not from hue.** Cyan is not the problem — cyan deployed as large gradient fills, glowing blur blobs, gradient text, and saturated section backgrounds is the problem. The current site does exactly this, which is why it reads as generic despite clean structure.

A palette therefore earns "premium" through:
1. **Achromatic dominance** — 90–95% of painted pixels are neutral. Color is an event.
2. **Chroma restraint** — accents appear on small surfaces (buttons, links, badges, focus rings), never as large washes.
3. **No decorative gradients** — depth from hairline borders and subtle elevation instead.
4. **Neutral temperature discipline** — one neutral family throughout; never mix warm and cool greys.

All three options below obey these rules. They differ in neutral temperature and where brand identity comes from.

---

#### Option A — "Editorial Ink"

Warm stone neutrals, achromatic ink primary, amber as the sole hue. Reads like a design studio or a well-set print publication.

| Token | Light | Dark |
|---|---|---|
| `background` | `#FAFAF9` | `#0C0A09` |
| `surface` (elevated) | `#F5F5F4` | `#1C1917` |
| `card` | `#FFFFFF` | `#1C1917` |
| `foreground` | `#1C1917` | `#FAFAF9` |
| `muted-foreground` | `#57534E` | `#A8A29E` |
| `border` | `#E7E5E4` | `#292524` |
| `primary` | `#1C1917` (ink) | `#FAFAF9` (inverted) |
| `primary-hover` | `#292524` | `#E7E5E4` |
| `primary-foreground` | `#FAFAF9` | `#0C0A09` |
| `accent` (secondary) | `#B45309` | `#FBBF24` |
| `success` | `#15803D` | `#4ADE80` |
| `warning` | `#A16207` | `#FACC15` |
| `destructive` | `#B91C1C` | `#F87171` |
| `ring` | `#B45309` | `#FBBF24` |

**Computed contrast:** `#1C1917` on `#FAFAF9` = **16.8:1** · `#57534E` on `#FAFAF9` = **7.3:1** · `#FAFAF9` on `#1C1917` (button) = **17.5:1** · `#B45309` on `#FAFAF9` = **4.9:1** ✓

**Trade-offs.** Highest perceived craft of the three and the most template-proof — an achromatic chrome cannot look like a cyan portfolio. It is also the most screenshot-safe: neutral chrome never clashes with whatever colors DentFlow and SkillPath use. But it has **no chromatic brand identity** — you'd be "the black-and-white one," memorable only through typography and content. Warm stone is also a mild mismatch with Geist, which is a cool neo-grotesque. And amber-as-brand collides semantically with amber-as-warning.

---

#### Option B — "Technical Graphite" ← recommended

Cool zinc neutrals, deep blue primary, amber as a restrained secondary. Technical and calm; blue carries interaction, amber carries warmth.

| Token | Light | Dark |
|---|---|---|
| `background` | `#FFFFFF` | `#09090B` |
| `surface` (elevated) | `#FAFAFA` | `#18181B` |
| `card` | `#FFFFFF` | `#131316` |
| `foreground` | `#18181B` | `#FAFAFA` |
| `muted-foreground` | `#52525B` | `#A1A1AA` |
| `border` | `#E4E4E7` | `#27272A` |
| `primary` | `#1D4ED8` | `#60A5FA` |
| `primary-hover` | `#1E40AF` | `#93C5FD` |
| `primary-foreground` | `#FFFFFF` | `#09090B` |
| `accent` (secondary) | `#B45309` | `#FBBF24` |
| `success` | `#15803D` | `#4ADE80` |
| `warning` | `#A16207` | `#FACC15` |
| `destructive` | `#B91C1C` | `#F87171` |
| `ring` | `#1D4ED8` | `#60A5FA` |

**Computed contrast (light):** `#18181B` on white = **17.7:1** · `#52525B` on white = **7.7:1** (current site: 4.76:1) · `#1D4ED8` on white = **6.7:1** · white on `#1D4ED8` = **6.7:1** · `#B45309` on white = **5.0:1** · `#15803D` = **5.0:1** · `#B91C1C` = **6.5:1**

**Computed contrast (dark):** `#FAFAFA` on `#09090B` = **19.1:1** · `#A1A1AA` = **7.8:1** · `#60A5FA` = **7.8:1** · `#FBBF24` = **11.9:1**

**The decisive property:** `#1D4ED8` passes at 6.7:1 **both as text on white and as a fill under white text**. The current cyan fails both at 2.45:1. One token serves both roles correctly, which removes the fill/text split the previous draft needed as a workaround.

**Trade-offs.** Blue is the most common brand hue in software, so it wins on trust and loses on novelty — mitigated entirely by chroma restraint, since a site that is 95% graphite with small blue interactive elements does not read as "a blue site." Blue also risks blending with blue-heavy product screenshots; mitigated by mandatory neutral device frames (below). Amber as secondary needs discipline or it drifts toward a two-brand-color system.

---

#### Option C — "Carbon & Violet"

Cool zinc neutrals, violet primary. Signals AI/modern product most strongly.

| Token | Light | Dark |
|---|---|---|
| `background` | `#FFFFFF` | `#09090B` |
| `surface` | `#FAFAFA` | `#18181B` |
| `card` | `#FFFFFF` | `#131316` |
| `foreground` | `#18181B` | `#FAFAFA` |
| `muted-foreground` | `#52525B` | `#A1A1AA` |
| `border` | `#E4E4E7` | `#27272A` |
| `primary` | `#6D28D9` | `#A78BFA` |
| `primary-hover` | `#5B21B6` | `#C4B5FD` |
| `primary-foreground` | `#FFFFFF` | `#09090B` |
| `accent` | `#0E7490` | `#22D3EE` |
| `success` | `#15803D` | `#4ADE80` |
| `warning` | `#A16207` | `#FACC15` |
| `destructive` | `#B91C1C` | `#F87171` |
| `ring` | `#6D28D9` | `#A78BFA` |

**Computed contrast:** `#6D28D9` on white = **7.1:1** · white on `#6D28D9` = **7.1:1** · `#A78BFA` on `#09090B` = **7.3:1** ✓

**Trade-offs.** Strongest AI association, which suits SkillPath — but violet is now the default AI-startup hue, so it reads *trendy* rather than *timeless* and will date faster than A or B. It also fits SkillPath better than DentFlow (a clinical SaaS), and your positioning is 70% general full-stack, not AI-first. Violet+amber is an awkward harmony, so it falls back to a cyan-family accent — reintroducing exactly the hue you're trying to escape.

---

#### Answers to the evaluation criteria

| Question | Answer |
|---|---|
| **Best for a premium developer portfolio** | **A and B, near-tied.** A has higher craft ceiling; B has a working brand color. B wins on practicality. |
| **Best avoids the cyan-template look** | **A** (achromatic — structurally impossible to resemble it). **B** close behind, provided the chroma rules hold. **C** weakest, since its accent returns to cyan. |
| **Best with Geist** | **B or C.** Geist is a cool, geometric neo-grotesque; cool zinc neutrals are its native environment. A's warm stone creates a subtle temperature conflict against Geist's coolness. |
| **Best accessibility headroom** | **B.** Every token clears AA, most clear AAA (7:1), and `primary` passes in both text and fill roles. `muted-foreground` improves from 4.76:1 to 7.7:1 — the single biggest a11y gain available. |
| **Best with screenshots + portrait** | **A** is the most screenshot-safe (fully neutral chrome cannot clash). **B** is close *if* screenshots always sit in neutral frames. For the **portrait**, both A and B carry amber, which harmonizes with skin tones; C's violet is the least flattering. |

#### Theme behavior (decided)

**System preference is the default. Dark mode is not forced.**

The site will carry case studies, tutorials, resource content, affiliate comparisons, technical articles, product screenshots and a professional portrait. Long-form reading and photography are both first-class here, so the visitor's own OS choice wins — a forced dark default overrides a reading preference the visitor has already expressed at the system level.

| Requirement | Implementation |
|---|---|
| **Default = OS preference** | `next-themes` with `defaultTheme="system"` and `enableSystem` — replaces the current `defaultTheme="dark"` |
| **No forced dark** | Dark is one of two equal modes, never the imposed default |
| **Visible switcher** | Theme control stays in the navbar, discoverable without hunting. Three states (light / dark / system) or a two-way toggle that follows system until first manual choice |
| **Both modes fully designed** | Neither mode is a derived afterthought. Both get design and QA passes |
| **Persist manual choice** | `next-themes` writes to `localStorage`; an explicit selection **overrides system preference on later visits** and survives reloads |
| **No flash (FOUC/FOIT)** | `<html suppressHydrationWarning>` plus the `next-themes` pre-hydration inline script, which sets the class **before first paint**. `ThemeToggle` must render a **same-size placeholder** while unmounted rather than returning `null` (the current `return null` causes a visible navbar reflow on hydration) |

**QA requirement:** every page is reviewed in **both** modes at mobile and desktop widths, plus a hard-refresh check in each mode confirming no flash. Light mode carries the heavier burden — it is where the current site actually fails (2.45:1 contrast, invisible `border-white/10` navbar borders, a dark-hardcoded theme toggle) — so it is tested first, not last.

---

#### Palette application rules (Phase 1)

Binding rules for implementation:

| # | Rule |
|---|---|
| 1 | **Neutrals cover ~90–95% of the interface.** Color is an event, not a surface treatment. |
| 2 | **Blue is limited to:** primary buttons · links · active navigation states · focus rings · selected controls · small technical highlights. |
| 3 | **Amber is limited to:** small badges · selected statistics · subtle callouts · occasional decorative details. |
| 4 | **Never amber** for primary buttons, large backgrounds, or large text blocks. |
| 5 | **No gradient text.** |
| 6 | **No large colored glow blobs.** Removes the current `h-96 w-96 blur-3xl` treatment site-wide. |
| 7 | **No multi-color gradients.** |
| 8 | **No blue-tinted section backgrounds.** Section separation comes from neutral surface steps and hairline borders — tinted bands are the strongest "generic SaaS template" signal. |
| 9 | **Screenshots sit in neutral frames:** 1px border · subtle surface background · restrained radius · **no large glow or colored shadow.** |
| 10 | **Semantic colors (`success` / `warning` / `destructive`) only for actual interface states** — validation, toasts, system status. Never decorative. A checkmark in a feature list uses `muted-foreground`, not `success`. |

Rules 6 and 8 are the two highest-impact changes against the current design, and rule 9 is what keeps a blue primary safe alongside blue-heavy product screenshots.

---

#### Using amber without making the site busy

Amber is the warmth valve. It must stay rare enough to remain an accent:

**Permitted (roughly 6–10 amber elements per page maximum):**
- Section eyebrow labels in Geist Mono
- The active/current state in navigation
- Project tier badges — a natural fit that also visually separates flagship from earlier work
- Small inline highlights in long-form content (pull quotes, callout left-borders)
- Cold-email / affiliate section markers — a quiet way to signal the 30% track without a second brand

**Forbidden:** amber buttons (that's `primary`'s job), amber backgrounds larger than a badge, amber body text, amber gradients, amber icons in bulk, amber on the portrait or over screenshots.

**Semantic collision — one concrete rule.** Amber-as-accent and amber-as-warning must never appear in the same view. Warning is pinned to a distinctly more olive `#A16207` / `#FACC15`, and warnings only appear in forms and system states — regions where decorative amber is banned outright. This is a real maintenance hazard in Option A (where amber *is* the brand) and a manageable one in Option B.

---

#### Colors to use sparingly

| Color | Budget |
|---|---|
| `primary` | Buttons, links, focus rings, active states **only**. Never a section background, never a large fill. |
| `accent` (amber) | 6–10 small elements per page (above). |
| `success` / `warning` / `destructive` | **System feedback exclusively** — form validation, toasts, status. Never decorative. A green checkmark in a feature list should be `muted-foreground`, not `success`. |
| Saturated color overall | Target **≤5% of painted pixels** per viewport. If a screenshot of the page in greyscale still reads correctly, the hierarchy is right. |

---

#### Gradient policy

**Default: no gradients.** Depth comes from hairline borders, subtle surface elevation and spacing.

**Permitted (three narrow exceptions):**
1. **Neutral surface gradients** — luminance shift ≤3%, same hue, on large panels only (e.g. `#FAFAFA → #FFFFFF`). Must be imperceptible as a gradient.
2. **Image scrims** — neutral, transparent-to-opaque overlays for text legibility over screenshots.
3. **Hairline border gradients** — a single-pixel edge fading along a card, neutral only.

**Banned outright:** multi-hue brand gradients, gradient text, glowing blur blobs (the current `blur-3xl` treatment), animated/mesh gradients, gradient buttons, gradient icons. These are the strongest single signal of a template.

**Screenshot rule (required for Option B):** every product screenshot sits in a neutral frame — `1px solid border`, `8px` radius, `surface` background, modest shadow. This guarantees separation between page chrome and screenshot content regardless of the screenshot's own palette, and is what makes a blue primary safe alongside blue product UIs.

---

#### Recommended final choice: Option B — "Technical Graphite"

It is the only option that satisfies every stated goal simultaneously: cool neutrals native to Geist; a primary that passes AA in both text and fill roles; achromatic dominance that avoids the template look; amber warmth for the portrait and the 30% track; and semantic colors that stay semantic. Option A has a marginally higher craft ceiling but sacrifices brand identity and fights Geist's temperature; Option C optimizes for one project rather than your actual positioning and will date fastest.

#### Final token system

```css
/* globals.css */
@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background:          #FFFFFF;
  --foreground:          #18181B;   /* 17.7:1 */
  --muted:               #F4F4F5;
  --muted-foreground:    #52525B;   /*  7.7:1 */
  --surface:             #FAFAFA;
  --card:                #FFFFFF;
  --border:              #E4E4E7;
  --border-strong:       #D4D4D8;
  --primary:             #1D4ED8;   /*  6.7:1 as text AND as fill */
  --primary-hover:       #1E40AF;
  --primary-foreground:  #FFFFFF;
  --accent:              #B45309;   /*  5.0:1 */
  --accent-foreground:   #FFFFFF;
  --accent-subtle:       #FFFBEB;
  --success:             #15803D;   /*  5.0:1 */
  --warning:             #A16207;
  --destructive:         #B91C1C;   /*  6.5:1 */
  --destructive-foreground: #FFFFFF;
  --ring:                #1D4ED8;
}

.dark {
  --background:          #09090B;
  --foreground:          #FAFAFA;   /* 19.1:1 */
  --muted:               #18181B;
  --muted-foreground:    #A1A1AA;   /*  7.8:1 */
  --surface:             #18181B;
  --card:                #131316;
  --border:              #27272A;
  --border-strong:       #3F3F46;
  --primary:             #60A5FA;   /*  7.8:1 */
  --primary-hover:       #93C5FD;
  --primary-foreground:  #09090B;
  --accent:              #FBBF24;   /* 11.9:1 */
  --accent-foreground:   #09090B;
  --accent-subtle:       #1C1508;
  --success:             #4ADE80;
  --warning:             #FACC15;
  --destructive:         #F87171;
  --destructive-foreground: #09090B;
  --ring:                #60A5FA;
  color-scheme: dark;
}

@theme inline {
  --color-background:          var(--background);
  --color-foreground:          var(--foreground);
  --color-muted:               var(--muted);
  --color-muted-foreground:    var(--muted-foreground);
  --color-surface:             var(--surface);
  --color-card:                var(--card);
  --color-border:              var(--border);
  --color-border-strong:       var(--border-strong);
  --color-primary:             var(--primary);
  --color-primary-hover:       var(--primary-hover);
  --color-primary-foreground:  var(--primary-foreground);
  --color-accent:              var(--accent);
  --color-accent-foreground:   var(--accent-foreground);
  --color-accent-subtle:       var(--accent-subtle);
  --color-success:             var(--success);
  --color-warning:             var(--warning);
  --color-destructive:         var(--destructive);
  --color-ring:                var(--ring);

  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

Two structural notes. **Registering every token via `@theme`** creates real utilities (`bg-surface`, `text-muted-foreground`, `border-border`, `ring-ring`) and eliminates the ~200 arbitrary-value classes like `bg-[var(--surface)]/50` in the current code. And **the `.light` class is dropped entirely** — `:root` is the light theme, so the current three-way duplication (`:root` / `.dark` / `.light`, where `:root` and `.light` are byte-identical) collapses to two.

The previous draft's `--accent` / `--accent-fill` split is **no longer needed**: `#1D4ED8` passes in both roles, so one token is correct where cyan required two.

### Spacing & radius

4px base scale. Section rhythm `py-20 md:py-28 lg:py-32`. Radius: `sm 6px`, `md 8px`, `lg 12px`, `xl 16px`.

### Component library — `src/components/ui/`

`Button` (variants: primary/secondary/ghost/link × sm/md/lg), `Card`, `Badge` (variants for each project tier), `SectionHeading`, `Container`, `Prose`, `Input`, `Textarea`, `Select`, `Label`, `Tabs`, `Accordion`, `Callout`, `CodeBlock`, `Table`, `Breadcrumbs`, `Pagination`.

Add `clsx` + `tailwind-merge` with a `cn()` helper, and `cva` for variants. **This is what kills the 9-way duplicated button string and the stale pink shadow with it.**

### Global requirements

- `:focus-visible` ring on every interactive element — currently zero exist
- `scroll-mt-24` on anchor targets to clear the sticky header
- Reduced-motion media query respected by all animation

---

## 22. Services Structure

### Track 1 — Full-Stack Development (70%)

| Service | Focus |
|---|---|
| SaaS Application Development | Multi-tenancy, RBAC, subscriptions, dashboards |
| Next.js & React Development | App Router, RSC, performance |
| Full-Stack Web Applications | End-to-end product builds |
| Dashboards, Marketplaces & Internal Tools | Data-dense interfaces, role systems |
| API & Backend Development | REST design, auth, integrations |
| MongoDB & Database Architecture | Schema design, indexing, data modeling |

Each maps to demonstrated work: SaaS → DentFlow; API/AI → SkillPath AI; marketplace → TaskForge.

### Track 2 — Cold Email & Lead Generation (30%)

| Service | Focus |
|---|---|
| Cold Email Infrastructure | Domains, inboxes, DNS, warmup |
| Email Deliverability | SPF/DKIM/DMARC, reputation, inbox placement |
| Lead Generation & List Building | ICP definition, sourcing, verification |
| Campaign Setup & Management | Sequencing, copy, A/B testing, reporting |
| Tooling & Automation | Instantly, Smartlead, ReachInbox; custom tooling |

**The integration point:** custom outbound tooling is where both tracks meet — a service only someone with both skill sets can offer. Lead it with that.

---

## 23. Case Study Structure

Standard template for flagship and secondary studies:

```
1  Header        — title, tier label badge, year, role, stack
2  Snapshot      — one-paragraph summary + live/repo links
3  Context       — why it was built, what problem it addresses
4  Requirements  — what the system had to do
5  Architecture  — diagram + narrative
6  Deep dives    — 3–5 substantial technical sections
7  Challenges    — real problems and how they were solved
8  Stack         — with rationale for each choice
9  Demo access   — seeded credentials where roles matter
10 Reflection    — what you'd do differently
```

Sections 6, 7 and 10 are what separate a case study from a screenshot gallery. **Technical honesty — including limitations — reads as senior.**

### Content rules (non-negotiable)

- Every project displays its tier label prominently
- **No project is described as client work**
- **No invented users, revenue, performance metrics, testimonials, or business outcomes**
- Live demos must be clean before linking (§8.3–8.5)
- Where a metric is genuinely measured (Lighthouse, bundle size, query time), state the measurement method

---

## 24. Affiliate Architecture

### Principle

Affiliate content is a **service extension**, not a separate business. You recommend tools you use in the cold-email work you actually do. The credibility of `/services/cold-email` is what makes `/tools` trustworthy, and `/tools` traffic is what feeds `/services` inquiries. That loop is the entire strategy.

### Structure

```
/tools                          Hub — categorized index
├── /tools/[slug]               Individual tool review
├── /tools/compare/[slug]       Head-to-head comparisons
└── /tools/stack                "The stack I actually use"
```

### Tool review template

```
1  Verdict box     — who it's for, who it isn't, honest rating
2  What it does    — plain description
3  How I use it    — genuine workflow context
4  Advantages      — specific, not generic
5  Disadvantages   — REQUIRED, and real
6  Pricing         — with last-verified date
7  Best for        — concrete use cases
8  Alternatives    — including when a competitor wins
9  Verdict         — clear recommendation
10 Disclosure      — inline, before the first affiliate link
```

**Section 5 is what makes this work.** A review with real disadvantages is the only kind anyone trusts, and it is what separates this from the affiliate blogs you don't want to resemble.

### Comparison pages

Highest-intent, highest-converting format. `instantly-vs-smartlead` and similar. Requires a genuine recommendation for *each* use case — not a rigged winner.

### Disclosure

- Site-wide `/disclosure` page linked in the footer
- **Per-page disclosure component rendered above the first affiliate link** on any page containing one
- Inline `AffiliateLink` component with `rel="sponsored noopener noreferrer"`
- FTC-compliant, plain-language wording

### Link management

All affiliate URLs live in **one typed registry** (`src/data/affiliate-links.ts`) — never inline in content. Benefits: change a URL in one place, track which pages reference which tools, audit coverage, and swap programs without touching content.

Optional cloaked redirect route (`/go/[slug]` → 302) for click tracking and link hygiene. **Must be `noindex`.**

### Content rules

- Only tools you genuinely use or have researched deeply — **state which**
- No AI-generated filler
- No aggressive CTAs; maximum two affiliate links per section
- Every review carries a "last updated" date and a pricing-verified date
- Where you haven't used a tool in production, say so explicitly

### Schema

`Review` and `Product` JSON-LD on tool pages; `FAQPage` where FAQs exist. Improves eligibility for rich results.

---

## 25. Blog & Resource Strategy

### Content pillars

| Pillar | Share | Purpose |
|---|---|---|
| Cold email & deliverability | 35% | Highest affiliate relevance, underserved by technical writers |
| Next.js & full-stack development | 35% | Developer authority, service support |
| Tool reviews & comparisons | 20% | Direct affiliate revenue |
| Build logs & case notes | 10% | Personality, trust, differentiation |

### Why cold email content is the opening

You have an unfair advantage: almost nobody writing about cold email infrastructure can also write code, and almost nobody writing about Next.js has run deliverability at volume. Topics like DNS records for cold email, building a custom warmup monitor, or programmatically verifying a lead list sit in a gap almost no one else can fill — and they attract exactly the audience that buys both your services and your recommended tools.

### Resources (`/resources`)

Free tools — SPF/DKIM/DMARC checkers, cold email ROI calculators, deliverability checklists, sequence templates. These earn organic links and demonstrate development capability simultaneously. **Each resource is itself a small proof of your development work.**

**No newsletter or email capture in v1** (decided). Resources are ungated — free to use, no email required. This removes an email-provider dependency, a consent/privacy surface, and an ongoing content obligation, and ungated tools earn more organic links than gated ones. Resources convert to **consultation CTAs**, not signups. Build the list later, once traffic justifies it; nothing in this architecture forecloses adding it.

### Cadence

Quality over volume. 2–4 substantial pieces monthly beats weekly filler. Update existing high-performers before publishing new ones.

---

## 26. Technical Architecture

### Recommendations

| Area | Decision | Rationale |
|---|---|---|
| **Framework** | Stay on Next.js 16 App Router | Current architecture is sound |
| **Language** | **Phased TypeScript migration**, strict mode (§26.1) | Ships value immediately without a blocking big-bang rewrite |
| **Content** | **MDX + Zod-validated frontmatter** (§26.2) | Git-versioned, zero cost, custom affiliate components inside articles, best performance |
| **Structured data** | **Centralized typed config**, not inline in MDX (§26.3) | One source of truth for tools, services, nav, socials, stats |
| **Styling** | Tailwind v4 + proper `@theme` tokens | Keep the stack, fix the configuration |
| **Components** | `cva` + `clsx` + `tailwind-merge` | Standard, minimal, kills duplication |
| **Motion** | **CSS-first; `motion` only where it earns its place** (§26.4) | Premium comes from typography and layout, not animation |
| **Forms** | Server Actions + Zod | Removes the client-side third-party POST; schemas reusable for content validation |
| **Email** | Resend, hardened per §29.2 | Replace the dead action with a secured one |
| **Analytics** | Vercel Analytics + Speed Insights | Privacy-friendly, zero-config |
| **Search** | Deferred | Not needed until ~30+ posts |

---

### 26.1 TypeScript — phased migration (decided)

**No big-bang migration. Redesign work begins immediately.**

Rules:
1. **Every new V2 file is TypeScript.** No new `.js`/`.jsx` is added to the codebase from Phase 1 onward.
2. **Convert existing files when materially modified.** Touching a file for a real change means converting it in the same commit. Files nobody touches stay `.jsx` indefinitely — that is acceptable and intentional.
3. **Priority conversion order**, regardless of whether they're being modified:
   1. Shared configuration (`data/site.ts`, `navigation.ts`, `services.ts`, `stats.ts`, `affiliate-links.ts`)
   2. Type definitions (`types/`)
   3. Content schemas (frontmatter Zod schemas)
   4. Forms and Server Actions
   5. Utilities (`lib/utils/`)
   6. Reusable UI primitives (`components/ui/`)

   These carry the most cross-cutting risk — a typo in a tool slug or a service key should be a build error, not a broken page discovered in production.
4. **No `any`.** Use `unknown` plus narrowing where a type is genuinely unknown. `as` assertions require a comment justifying them. If a third-party type is missing, write a local `.d.ts` rather than reaching for `any`.
5. **Strict from day one** — the config below is set once, before the first `.ts` file. Retrofitting strictness later is far more painful.

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "allowJs": true,          // REQUIRED — lets .jsx coexist during migration
    "checkJs": false,         // don't type-check legacy JS
    "moduleResolution": "bundler",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

`allowJs: true` is what makes the phased approach work — TypeScript and legacy JSX coexist in one build. Keep `checkJs: false` so unconverted files don't generate noise.

**Migration tracking:** maintain a short checklist in `docs/` listing remaining `.jsx` files, so "phased" doesn't quietly become "never". Target: zero `.jsx` in `src/` by the end of Phase 4.

---

### 26.2 Content — MDX with validated frontmatter (decided)

MDX for all long-form content: **case studies, development articles, tutorials, tool comparisons, tool reviews, resource pages.**

Every content type gets a Zod schema, validated at build time so a malformed post **fails the build rather than shipping broken**:

```ts
// src/lib/content/schemas.ts
const baseFrontmatter = z.object({
  title: z.string().min(1).max(120),
  description: z.string().min(50).max(180),   // enforces good meta descriptions
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  canonical: z.string().url().optional(),
});

export const toolReviewFrontmatter = baseFrontmatter.extend({
  toolSlug: z.enum(TOOL_SLUGS),        // must exist in affiliate-links.ts
  rating: z.number().min(1).max(5),
  advantages: z.array(z.string()).min(2),
  disadvantages: z.array(z.string()).min(2),   // enforces honest reviews structurally
  pricingVerifiedAt: z.coerce.date(),
  hasUsedInProduction: z.boolean(),            // drives an honest disclosure line
});
```

Two of these constraints do real editorial work. `disadvantages.min(2)` makes it **impossible to publish a one-sided review** — the honesty policy in §24 is enforced by the type system, not by discipline. `hasUsedInProduction` forces an explicit answer to "have you actually used this?", which drives the disclosure line automatically.

Custom MDX components: `AffiliateLink`, `ToolCard`, `ComparisonTable`, `Callout`, `Disclosure`, `CodeBlock`, `Figure`. Reading time and table-of-contents generated at build.

---

### 26.3 Centralized configuration (decided)

**Structured, reusable data lives in typed TypeScript config — never hardcoded repeatedly in MDX.**

| File | Holds |
|---|---|
| `src/data/site.ts` | Site name, URL, description, defaults, verification tags |
| `src/data/navigation.ts` | Primary nav, footer groups, breadcrumb labels |
| `src/data/services.ts` | **Single source of truth** — ends the current `Services.jsx` / `services/page.jsx` duplication |
| `src/data/socials.ts` | GitHub, LinkedIn, Upwork, Fiverr, email — currently duplicated across `Footer.jsx` and `contact/page.jsx` |
| `src/data/stats.ts` | Professional statistics + volatile badges (§3.1) |
| `src/data/tech.ts` | Technology entries: name, category, icon |
| `src/data/affiliate-links.ts` | Tool registry: slug, name, affiliate URL, category, program |
| `src/data/projects.ts` | Project hierarchy with required tier `label` |

The affiliate registry matters most. MDX references a tool **by slug**, and the component resolves the URL from config:

```mdx
<AffiliateLink tool="instantly">Instantly</AffiliateLink>
```

A program change or URL update touches **one line in one file**, not fifty MDX documents. Because `toolSlug` is a Zod enum derived from the registry, referencing a nonexistent tool **fails the build**. Bad affiliate links are a silent revenue leak — this makes them loud.

**CMS-readiness (no CMS in v1).** The content layer is deliberately structured so a CMS can be added later without a rewrite:

1. **All content access goes through `src/lib/content/`** — pages never read the filesystem directly. Swapping the source means reimplementing `getContent()`, `getAllContent()` and `getContentBySlug()` against an API; page components stay untouched.
2. **Zod schemas become the CMS schema.** They already define every field and constraint, so they map onto Sanity/Contentful models directly and continue validating at the boundary.
3. **Config data stays in code even under a CMS.** Affiliate URLs, nav and services are developer concerns, not editorial ones.
4. **Migration trigger:** adopt a CMS only when a non-technical author needs to publish, or volume exceeds roughly 50 pieces with a multi-person workflow. Below that, MDX is faster and free.

---

### 26.4 Motion — restrained enhancement (decided)

**Premium quality comes from typography, spacing, layout, screenshots, diagrams and credible content — not animation.** Motion is a finishing pass, never a substitute for design quality.

| Rule | Detail |
|---|---|
| **CSS-first** | Ordinary interactions — hover, focus, active, theme change, accordion, mobile menu — use CSS transitions. No JS library required. |
| **`motion` only where it earns its place** | Reserved for cases where it genuinely clarifies hierarchy or feedback: form success/error transitions, modal and menu enter/exit, tab and filter changes, layout shifts needing continuity. |
| **Never** | Constant/looping animation, floating or drifting elements, parallax, scroll-jacking, decorative section reveals, animated counters, typewriter effects, mouse-follow effects. |
| **Never delay content** | No fade-in-on-scroll gating readability. Content is visible and readable on paint. No animation on LCP elements. |
| **`prefers-reduced-motion`** | Honored globally — a root-level media query reducing all non-essential motion to near-zero duration, plus per-component checks. Not optional. |
| **Mobile performance** | No animation of layout-triggering properties. `transform` and `opacity` only. Budget: no more than 2–3 concurrent animations. Reduce or drop `backdrop-blur` on mobile (§13 flags the current header blur + four `blur-3xl` blobs as real compositing cost). |
| **Duration** | 150–250ms for UI feedback, up to 400ms for larger transitions. Anything longer feels sluggish. |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Note the `scroll-behavior: auto` override — `globals.css:56` currently sets `scroll-behavior: smooth` unconditionally, which is itself a reduced-motion violation.

**Decision on the dependency:** `motion` is currently installed and 100% unused. **Keep it, but only if Phase 6 actually uses it** for the narrow cases above. If Phase 6 concludes CSS covers everything, remove it. Do not keep an unused 40KB dependency to preserve the option. Also remove the "Motion" entry from `TechStack` unless the library is genuinely adopted (§15).

---

## 27. Folder Structure

```
src/
├── app/
│   ├── (marketing)/                 Route group — main site
│   │   ├── page.tsx
│   │   ├── work/{page, [slug]/page}.tsx
│   │   ├── services/{page, [slug]/page}.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── (content)/                   Route group — content site
│   │   ├── blog/{page, [slug]/page, category/[category]/page}.tsx
│   │   ├── tools/{page, [slug]/page, compare/[slug]/page, stack/page}.tsx
│   │   └── resources/{page, [slug]/page}.tsx
│   ├── (legal)/{disclosure, privacy}/page.tsx
│   ├── go/[slug]/route.ts           Affiliate redirect (noindex)
│   ├── api/contact/route.ts
│   ├── layout.tsx  globals.css
│   ├── error.tsx  not-found.tsx  loading.tsx
│   ├── sitemap.ts  robots.ts  opengraph-image.tsx
│   └── rss.xml/route.ts
│
├── components/
│   ├── ui/                          Primitives (§21)
│   ├── layout/{Navbar, Footer, MobileNav, SkipLink}.tsx
│   ├── home/                        Homepage sections (§18)
│   ├── work/{CaseStudyHeader, TierBadge, ArchitectureDiagram, DemoCredentials}.tsx
│   ├── content/{ArticleHeader, TableOfContents, ProseWrapper, ShareButtons}.tsx
│   ├── affiliate/{AffiliateLink, ToolCard, ComparisonTable, DisclosureBanner, VerdictBox}.tsx
│   ├── seo/{JsonLd, Breadcrumbs}.tsx
│   └── forms/{ContactForm, NewsletterForm}.tsx
│
├── content/                         MDX source
│   ├── blog/*.mdx
│   ├── tools/*.mdx
│   ├── comparisons/*.mdx
│   └── resources/*.mdx
│
├── data/                            Centralized typed config (§26.3)
│   ├── projects.ts                  Tiered, typed, label required
│   ├── services.ts                  SINGLE source of truth
│   ├── affiliate-links.ts           Central tool + URL registry
│   ├── stats.ts                     Professional stats + volatile badges (§3.1)
│   ├── socials.ts                   Profile links, currently duplicated
│   ├── tech.ts                      Technology entries
│   ├── site.ts                      Global site settings
│   └── navigation.ts
│
├── lib/
│   ├── content/{mdx, schemas, reading-time, toc}.ts   Swap point for a future CMS
│   ├── seo/{metadata, json-ld}.ts
│   ├── actions/contact.ts           Working Server Action
│   └── utils/{cn, format, url}.ts
│
├── types/{project, content, affiliate}.ts
└── styles/globals.css
```

---

## 28. SEO, Analytics & Conversion

### Technical SEO

- `generateMetadata` on **every** dynamic route — closes the `[slug]` gap
- **Dynamic sitemap** built from routes + MDX, replacing the static 5-URL array
- Canonical URLs site-wide
- **Generated OG images** via `opengraph-image.tsx` (ImageResponse) — permanently fixes the missing-file bug and gives every page a unique card
- JSON-LD: `Person`, `WebSite`, `BreadcrumbList`, `Article`, `Review`, `FAQPage`, `SoftwareApplication`
- `generateStaticParams` for all static routes
- RSS feed
- Search Console and Bing verification
- `/go/[slug]` excluded from indexing

### Content SEO

Topic clusters — a pillar page per pillar with supporting articles linking up. Internal linking is deliberate: articles → services, tools → comparisons, case studies → services.

### Analytics

Vercel Analytics + Speed Insights. Tracked events: contact submissions by inquiry type, affiliate clicks by tool and placement, resource downloads, case-study depth, CTA clicks by location. Privacy policy published; no cookie banner needed with a privacy-friendly provider.

### Conversion paths

| Entry | Path |
|---|---|
| Direct/referral | Home → Work → Services → Contact |
| Dev search | Blog → Case study → Services → Contact |
| Cold email search | Blog → Tools → Affiliate conversion *or* Services → Contact |
| Resource seeker | Resource → Email capture → Nurture |

**Every content page needs a relevant next step.** The current site's dead ends are a significant conversion leak.

---

## 29. Implementation Phases

### Phase 0 — Critical fixes (½ day) — *ship regardless of the rest*

**Every item below is evidenced in [§29.1 Phase 0 Evidence Table](#291-phase-0-evidence-table).**

**Phase 0 stays in JavaScript.** The §26.1 rule ("convert on material modification") would otherwise pull `layout.js` into TypeScript here — but Phase 0 is a half-day hotfix pass whose value is shipping *today*, and bootstrapping `tsconfig.json` mid-hotfix adds build risk for no user-facing gain. The TypeScript rule takes effect at **Phase 1**, which converts `layout` as its first act. This is the one deliberate exception; no other file gets one.

1. **Fix the font pipeline** — install `geist`, bind Geist Sans + Mono via `next/font` in `layout`, confirm `--font-geist-*` now resolves (P0-1, §21)
2. **Create `public/og-image.png`** (1200×630) — social sharing is broken (P0-2)
3. **Remove the `images.remotePatterns` wildcard** from `next.config.mjs` (P0-3)
4. **Delete `src/lib/actions/contact.js`** — proven unreferenced (P0-4, P0-5)
5. Add `@custom-variant dark` to `globals.css`
6. Add labels + `autoComplete` to the contact form
7. Demote the navbar `<h1>` to a `<span>`
8. Add global `:focus-visible` styles
9. Add `rel="noopener noreferrer"` to all `target="_blank"` links
10. Delete `src/assets/`, `logo2.png`, unused headshots, template SVGs
11. Remove unused deps: `@heroui/*`, `@gravity-ui/icons`, `resend`
12. Add `generateMetadata` + `generateStaticParams` to `/projects/[slug]`; add project pages to the sitemap

---

### 29.1 Phase 0 Evidence Table

Each finding below was re-verified against the working tree on 2026-07-19. Commands used are quoted so you can reproduce them.

| ID | Issue | Evidence | Confidence |
|---|---|---|---|
| P0-1 | Font variables undefined | `grep -rn "next/font\|Geist\|geist" src/` → **2 hits, both consumers in `globals.css`; zero definitions** | ⚠ High (source-level) |
| P0-2 | OG image missing | `ls public/` + `find public -iname "*og*"` → **no `og-image.png`** | ✅ Certain |
| P0-3 | Wildcard image host | `next.config.mjs:6-11` → `hostname: "**"` | ✅ Certain |
| P0-4 | Resend action unreferenced | `grep -rn "sendContactMessage"` → **1 hit: its own definition.** `grep -rn "action=\{\|useActionState\|useFormState\|formAction" src/` → **no matches** | ✅ Certain |
| P0-5 | Unescaped input in email HTML | `src/lib/actions/contact.js:27-35` | ✅ Certain |

---

#### P0-1 — Font variables reference undefined custom properties

- **File:** `src/app/globals.css:51-52`; `src/app/layout.js:60`
- **Code:**
  ```css
  /* globals.css:51-52 */
  --font-sans: var(--font-geist-sans);   /* --font-geist-sans is never defined */
  --font-mono: var(--font-geist-mono);   /* --font-geist-mono is never defined */
  ```
  ```jsx
  /* layout.js:60 — no font class applied */
  <body>
  ```
- **Why it is a problem:** `grep -rn "next/font|Geist|geist" src/` returns exactly two hits — both lines above, which *consume* the variables. **Nothing defines them.** There is no `next/font` import anywhere in the repository, and `<body>` carries no font className. Tailwind v4's `theme.css` sets `--default-font-family: --theme(--font-sans, initial)` and preflight applies it to `html`. Because `--font-geist-sans` resolves to nothing, the `font-family` declaration is invalid at computed-value time and falls back to the browser default.
- **User-facing impact:** The site renders in the browser's default serif (Times New Roman on most desktop browsers) instead of a sans-serif. This affects **every page and every visitor** — it is the difference between a professional site and one that looks broken.
- **Proposed fix (decided — Geist, §21):** install the `geist` package, import `GeistSans` and `GeistMono` via `next/font`, apply their `.variable` classes to `<html>`, and add `font-sans` to `<body>`. The existing `@theme` mapping then resolves correctly instead of being replaced. **Explicitly load and bind the fonts** — do not rely on a variable defined elsewhere.
- **Risk of the fix:** **Low.** Additive change. A self-hosted `next/font` adds a small build step and font files; watch for a brief FOUT — mitigate with `display: "swap"` and a matched fallback metric.
- **Validation steps:**
  1. **Confirm the bug before fixing:** open masumdev.com, DevTools → Elements → select `<body>` → Computed → read `font-family`. A serif value (or empty/initial) confirms the diagnosis.
  2. After the fix, the same field should show the chosen font family.
  3. Network tab: font file returns 200.
  4. Check both light and dark themes and a mobile viewport.
- **⚠ Confidence caveat (accepted — proceed with the fix):** the *source-level* facts are **certain** — `--font-geist-sans` and `--font-geist-mono` are referenced in `globals.css` and defined nowhere in the repository. **The exact visible fallback font was not independently confirmed**; it is inferred from the Tailwind v4 cascade, and a live browser check was attempted but the Chrome extension was not connected. This does not block the correction: referencing an undefined custom property is a defect regardless of which fallback the browser resolves to. Per your decision, the implementation proceeds and **the computed `font-family` is validated in DevTools after implementation** (step 2 above) rather than before.

---

#### P0-2 — Open Graph image referenced but absent

- **File:** `src/app/layout.js:37-44` (openGraph), `layout.js:53` (twitter); missing asset `public/og-image.png`
- **Code:**
  ```js
  images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Abdullah Masum Portfolio" }],
  // ...
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  ```
- **Why it is a problem:** Directory listing of `public/` contains only `Abdullah-Al-Masum-Resume.pdf`, `assets/`, `projects/`, and five unused template SVGs. `find public -iname "*og*"` matches only `logo.png` and `logo2.png`. **`og-image.png` does not exist.** The metadata promises a 1200×630 card that 404s.
- **User-facing impact:** Every share of masumdev.com on LinkedIn, X, Slack, WhatsApp or iMessage renders with no preview image. `summary_large_image` degrades to a bare text link. For a portfolio distributed primarily through professional networks, this silently reduces click-through on every share.
- **Proposed fix:** Preferred — add `src/app/opengraph-image.tsx` using Next's `ImageResponse` to generate cards at build time, giving each route its own. Minimum — add a static `public/og-image.png` at exactly 1200×630, under ~1 MB.
- **Risk of the fix:** **Very low.** Purely additive. `ImageResponse` runs in the Edge runtime and needs fonts bundled explicitly.
- **Validation steps:**
  1. `curl -I https://masumdev.com/og-image.png` → expect `200`, not `404`.
  2. Run the URL through LinkedIn Post Inspector and X Card Validator (both cache — force a re-scrape).
  3. Confirm dimensions are exactly 1200×630.

---

#### P0-3 — Wildcard remote image hostname

- **File:** `next.config.mjs:6-11`
- **Code:**
  ```js
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  ```
- **Why it is a problem:** `hostname: "**"` authorizes Next's image optimizer to fetch and transform an image from **any HTTPS host on the internet**. Meanwhile **no remote images are used anywhere** — every `<Image>` in the codebase points at a local `/projects/*` or `/assets/*` path. The permission is entirely unused.
- **Security impact:** Turns `/_next/image` into an **open image proxy**. A third party can pass arbitrary `?url=` values to make your deployment fetch remote content, consuming your Vercel image-optimization quota and CPU, and laundering requests through your domain. This is a real (if commonly overlooked) abuse vector, and it is being carried for zero benefit.
- **Proposed fix:** Delete the `images` block entirely. Should remote images ever be needed, re-add with a specific hostname allowlist.
- **Risk of the fix:** **Very low**, and verifiable in advance — `grep -rn 'src="https' src/` and a scan of `<Image src=` confirm no remote sources. If any remote image were later added without updating config, it would fail loudly at request time rather than silently.
- **Validation steps:**
  1. `grep -rn "src=\"http" src/` → expect no `<Image>` matches.
  2. `npm run build` succeeds.
  3. Home, `/projects`, `/projects/[slug]` and `/about` all render images correctly.
  4. Confirm `/_next/image?url=https://example.com/x.jpg` now returns `400`.

---

#### P0-4 — Resend server action is provably unreferenced

**You asked me not to recommend deletion without proof. Here is the proof.**

- **File:** `src/lib/actions/contact.js` (48 lines, exports `sendContactMessage`)
- **Verification performed:**

  | Check | Command | Result |
  |---|---|---|
  | Direct imports | `grep -rn "sendContactMessage"` (repo, excl. `node_modules`) | **1 hit — the definition itself** (`contact.js:7`). All other hits are in this planning document. |
  | Path imports | `grep -rn "lib/actions\|actions/contact"` | No source hits |
  | Form binding | `grep -rn "action=\{\|useActionState\|useFormState\|formAction" src/` | **No matches** |
  | Resend usage | `grep -rn "from \"resend\"" src/` | **1 hit — `contact.js:3` only** |
  | Runtime env | `.env.local` keys | Only `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. **`RESEND_API_KEY` and `CONTACT_EMAIL` are unset.** |

- **The actual live flow:** `src/components/contact/ContactForm.jsx:27` performs a client-side `fetch("https://api.web3forms.com/submit")`. The form uses `onSubmit` with `event.preventDefault()` — **not** a Server Action binding. There is no `action={}` prop anywhere in the codebase, so `sendContactMessage` cannot be invoked through a form. It has no other call site.
- **Corroborating evidence it was never wired:** the action reads a `budget` field (`contact.js:12`) that `ContactForm` never renders, and both env vars it depends on are absent — so even if it were invoked, `resend.emails.send()` would fail with an undefined API key and an undefined `to:` address.
- **Conclusion: the file is dead code.** It is unreachable, non-functional, and ships the `resend` dependency for nothing.
- **Why it is a problem:** dead code carrying a latent injection flaw (P0-5) is a trap — a future edit could wire it up and ship the vulnerability. It also misleads any reader about how contact actually works.
- **Proposed fix:** delete `src/lib/actions/contact.js` and remove `resend` from `package.json` in Phase 0. **Leave the Web3Forms flow untouched** — it is the working production path and must keep functioning until its replacement ships. Then in Phase 2, build a **new, hardened** Server Action to the spec in [§29.2](#292-hardened-contact-action-spec).
- **Risk of the fix:** **None.** Deleting provably unreachable code cannot change runtime behavior. The build will confirm — an unresolved import would fail it.
- **Validation steps:**
  1. Re-run the five checks above; confirm results still hold before deleting.
  2. `npm run build` succeeds.
  3. Submit the contact form on a preview deploy; confirm the email still arrives via Web3Forms.

---

#### P0-5 — Unescaped user input interpolated into HTML email

- **File:** `src/lib/actions/contact.js:27-35`
- **Code:**
  ```js
  html: `
    <h2>New Project Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Project Type:</strong> ${projectType || "Not provided"}</p>
    <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
  ```
- **Why it is a problem:** all five values come straight from `formData.get()` and are template-interpolated into HTML with **no escaping**. Validation (`contact.js:15`) only checks presence, never content or shape.
- **Security impact — currently latent, not exploitable,** because the action is unreachable (P0-4). **If wired up as written**, a submitter could inject arbitrary HTML into an email delivered to your inbox: hyperlinks disguising their true destination, `<img>` tags acting as tracking or SSRF probes when remote content loads, layout-breaking markup, or content spoofing a message from a different sender. `replyTo` is also set from unvalidated input (`contact.js:25`), enabling reply-hijacking. Risk is bounded by your mail client's HTML sanitization, so this is a **moderate**, not critical, issue — but it is entirely avoidable.
- **Proposed fix:** delete alongside P0-4. The replacement must never interpolate raw input into HTML — see the spec below.
- **Risk of the fix:** none (deletion of dead code).
- **Validation steps:** covered by P0-4. For the replacement, submit `<img src=x onerror=alert(1)>` and `<b>bold</b>` in each field and confirm they arrive as **literal visible text**, not rendered markup.

---

### 29.2 Hardened contact action spec

The replacement Server Action (Phase 2) must satisfy all of the following. This is also the spec to apply *in place* if you ever decide to revive rather than replace the existing action.

| Requirement | Implementation |
|---|---|
| **Input validation** | Zod schema — `name` 2–100 chars, `email` via `z.string().email()`, `message` 10–5000 chars, `projectType` and `inquiryType` as enums, `budget` optional enum. Reject on failure with field-level errors. |
| **Output escaping** | Never interpolate into an HTML string. Use `react-email` / Resend's React template support so React escapes values automatically. If a raw string is unavoidable, run every value through an explicit `escapeHtml()` helper. |
| **Safe template construction** | Fixed template; user data occupies **data slots only**, never markup positions. Send a `text:` alternative alongside `html:`. |
| **Reply-to safety** | Set `replyTo` only from an email that passed schema validation. |
| **Spam protection** | Hidden honeypot field (reject if filled) + minimum time-to-submit (reject sub-2-second submissions). Add Cloudflare Turnstile if volume warrants. |
| **Rate limiting** | Per-IP limit (e.g. 5 submissions/hour) via Upstash Redis or an equivalent store. Fail closed with a friendly message. |
| **Error handling** | `console.error` the real error server-side (the current `catch` at `contact.js:42` swallows it silently); return only a generic message to the client. Never leak provider errors or env state. |
| **Flow preservation** | Ship behind a preview deploy and verify delivery **before** removing the Web3Forms path. No window where the contact form is non-functional. |
| **Secrets** | `RESEND_API_KEY` and `CONTACT_EMAIL` set in Vercel env (both currently absent). Never `NEXT_PUBLIC_`. Replace the `onboarding@resend.dev` sender with a verified domain sender. |

### Phase 1 — Foundation (1 week)
**TypeScript setup** — `tsconfig.json` with strict flags and `allowJs: true` (§26.1), `types/`, and the priority conversions: `data/*.ts` config files (`site`, `navigation`, `services`, `socials`, `stats`, `tech`, `affiliate-links`) and `lib/utils/cn.ts`. · Design tokens via `@theme` · `components/ui/` primitives **in TypeScript** · `cva` · typography scale · updated layout, navbar, footer (converted on modification) · accessibility baseline including the global `prefers-reduced-motion` rule · analytics.

**Gate:** no new `.jsx` files from this point forward.

### Phase 2 — Core pages (1–1.5 weeks)
Homepage rebuild (§18) · `/work` tiered index · **DentFlow case study** · **SkillPath AI case study** · **TaskForge case study with capstone disclosure** · StudyNook entry · `/projects` → `/work` redirects · services overview + both tracks · about rewrite · contact with routing.

**Gate:** case studies do not publish until §8.3–8.5 demo blockers are cleared.

### Phase 3 — Content infrastructure (1 week)
MDX pipeline with Zod-validated frontmatter (§26.2) · **all content access routed through `lib/content/` so a CMS can be swapped in later without touching pages** (§26.3) · blog index, post, category pages · TOC and reading time · RSS · content components · full JSON-LD.

### Phase 4 — Affiliate system (1 week)
`/tools` hub · tool review template · comparison template · `/tools/stack` · affiliate link registry · `AffiliateLink` and disclosure components · `/disclosure` and `/privacy` · `/go/[slug]` tracking · click analytics.

### Phase 5 — Content production (ongoing)
3–5 launch articles · 3–5 tool reviews · 1–2 comparisons · first free resource · then a sustained cadence.

### Phase 6 — Polish (ongoing)
**Restrained motion pass** (§26.4) — evaluate whether CSS already covers every case; keep `motion` only if it is genuinely used, otherwise remove the dependency · image optimization to WebP/AVIF · Lighthouse ≥95 · full a11y audit including reduced-motion verification · Search Console setup · security headers · **close out remaining `.jsx` files** (target: zero in `src/`).

### Parallel track — external demo cleanup (blocks Phase 2 *publication*, not Phase 2 *build*)

Runs in the **separate project repositories**, owned by you, independent of portfolio work. Full checklists in **§8.8**.

- **DentFlow** → §8.8.3 — fix the `/services` 404, resolve the empty services section, publish three-role demo credentials
- **TaskForge** → §8.8.1 — purge the SSN/fake-names bio, remove fabricated testimonials, re-seed labelled fictional data, add a demo banner
- **SkillPath AI** → §8.8.2 — delete QA records, add API root and `/health`, then pass the 15-point functional verification

The portfolio builds each case study to completion regardless; the `draft` flag governs whether it goes live. **Never modify these repos from the portfolio repository.**

---

## 30. File-by-File Recommendations

| File | Action | Notes |
|---|---|---|
| `src/app/globals.css` | **Rebuild** | New tokens, `@theme` registration, `@custom-variant dark`, focus styles. Remove duplicate `.light` block, unused `--card`, HeroUI import. |
| `src/app/layout.js` | **Rebuild → `.tsx`** | Add `next/font`, skip link, `<main id>`, JSON-LD, analytics, viewport, canonical. Keep the metadata structure. |
| `src/app/page.js` | **Rebuild** | New section composition. Remove unused `ThemeToggle` import. |
| `src/app/sitemap.js` | **Rebuild → dynamic** | Currently omits all project pages. |
| `src/app/robots.js` | **Keep** | Add `/go/` disallow. |
| `src/app/not-found.jsx` | **Improve** | Remove `shadow-pink-500/20`; add useful links. |
| `src/app/projects/*` | **Migrate → `/work`** | Add `generateMetadata`, `generateStaticParams`, breadcrumbs, tier badges. Redirect old URLs. |
| `src/app/services/page.jsx` | **Rebuild** | Fix `text-5xl` mobile overflow. Split into two tracks. Consume shared `data/services.ts`. |
| `src/app/about/page.jsx` | **Rewrite, preserve narrative** | Expand the outbound chapter. Add résumé link, timeline dates. |
| `src/app/contact/page.jsx` | **Improve** | Keep "Best Fit Projects". Add inquiry routing. |
| `src/components/layout/Navbar.jsx` | **Rebuild** | `<h1>` → `<span>`; `md:` → `lg:`; ARIA on menu button; focus trap; Escape to close; light-mode borders. |
| `src/components/layout/Footer.jsx` | **Improve** | Add disclosure link, content links, newsletter. Socials from `data/site.ts`. |
| `src/components/common/ThemeToggle.jsx` | **Rebuild** | Add `aria-label`/`aria-pressed`; placeholder instead of `null` to stop reflow; remove hardcoded dark classes. |
| `src/components/contact/ContactForm.jsx` | **Rebuild** | Server Action + Zod, labels, honeypot, inquiry routing, real success state. |
| `src/components/home/Stats.jsx` | **Rebuild → `CredibilitySection.tsx`** | Single instance, consuming `data/stats.ts`. Source-labeled, profile-linked, hides empty values (§3.1). |
| `src/components/home/FeaturedProjects.jsx` | **Rebuild** | Fix empty-array crash. Tier-aware. Remove hardcoded taskforge lookup. |
| `src/components/home/Services.jsx` | **Rebuild** | Consume `data/services.ts` — end the duplication. Fix grid track squeeze. |
| `src/components/home/{TechStack,WhyMe,AboutPreview,CTA,Hero}.jsx` | **Rebuild** | Per §18. Add `sizes` to `AboutPreview` image. |
| `src/data/projects.js` | **Rebuild → `projects.ts`** | New hierarchy, required `label` field, typed. Keep the `overview`/`problem`/`solution` schema. |
| `src/lib/actions/contact.js` | **Delete (proven unused)** | Verified unreferenced — see P0-4. Replaced in Phase 2 by a hardened action per §29.2. Web3Forms flow preserved until the replacement is verified. |
| `src/data/stats.ts` | **Create** | Centralized professional statistics + volatile badges (§3.1). |
| `src/data/socials.ts`, `tech.ts`, `navigation.ts` | **Create** | End duplication across Footer/contact/TechStack (§26.3). |
| `src/assets/**` | **Delete** | Entirely unreferenced; includes a PNG named `.js`. |
| `src/providers/ThemeProvider.jsx` | **Modify → `.tsx` (Phase 1)** | Change `defaultTheme="dark"` → `"system"` per Decision L. Keep `attribute="class"` and `enableSystem`. |
| `next.config.mjs` | **Modify** | Remove `remotePatterns` wildcard. Add security headers, MDX config, redirects. |
| `package.json` | **Modify** | Remove `@heroui/*`, `@gravity-ui/icons`, `resend` (Phase 0). Add `typescript`, `@types/*`, MDX, Zod, `cva`, `clsx`, `tailwind-merge`, analytics. Re-add `resend` in Phase 2 for the hardened action. Keep `motion` only if Phase 6 uses it (§26.4). |
| `tsconfig.json` | **Create (Phase 1)** | Strict flags + `allowJs: true` for phased coexistence (§26.1). |
| `public/og-image.png` | **Create** | Referenced but missing. |
| `public/projects/*.png` | **Optimize** | 1.5 MB each → WebP ~150 KB. |
| `public/assets/logo2.png` | **Delete** | 2 MB, unreferenced. |
| `README.md` | **Rewrite** | Currently inaccurate on three counts. |

---

## 31. Risks, Priorities & Complexity

### Risk register

| Risk | Severity | Mitigation |
|---|---|---|
| **Publishing TaskForge with the SSN/fake-names bio** | **Critical** | Hard gate — no link until purged |
| **Publishing SkillPath AI with QA test records visible** | **High** | Hard gate — clean the database first |
| **Featuring SkillPath AI before verifying AI features work** | **High** | End-to-end verification required |
| **DentFlow `/services` 404 on the flagship demo** | **High** | Fix or remove before featuring |
| Unverified stats damaging credibility | **High** | Confirm sources; state once with a link, or remove |
| Affiliate content reading as spam | High | Disadvantages required in every review; strict link limits |
| Scope creep across 6 phases | Medium | Phase 0 ships independently; phases are individually shippable |
| SEO regression from `/projects` → `/work` | Medium | 301 redirects, resubmit sitemap |
| Content cadence not sustained | Medium | Launch with fewer, better pieces |
| Over-designing into unmaintainability | Medium | Restraint is the design principle |
| TypeScript migration stalling | Low | Migrate during rewrites, not as a separate pass |

### Priority order

1. **Phase 0** — half a day, fixes the serif bug and broken social sharing
2. **Demo cleanup** — blocks everything downstream, requires no portfolio work
3. **Phase 1** — foundation everything else depends on
4. **Phase 2** — the pages that convert
5. **Phase 3–4** — the content and affiliate engine
6. **Phase 5–6** — compounding returns

### Complexity

| Phase | Complexity | Estimate |
|---|---|---|
| Phase 0 | Low | 0.5 day |
| Demo cleanup | Low–Medium | 1–2 days (external repos) |
| Phase 1 | Medium | 1 week |
| Phase 2 | **High** | 1–1.5 weeks |
| Phase 3 | Medium–High | 1 week |
| Phase 4 | Medium | 1 week |
| Phase 5 | Ongoing | — |
| Phase 6 | Low–Medium | Ongoing |

**Total to a complete v2: 5–7 weeks part-time**, excluding ongoing content.

---

## 32. Summary Classification

### Preserve
RSC architecture · folder conventions · `@/*` alias · case-study data schema · About narrative copy · "Best Fit Projects" · root metadata structure · `ThemeProvider` · Tailwind v4 · dark-mode default

### Improve
Navbar and footer · contact form · services content · project detail pages · About page · sitemap and robots · image optimization · mobile breakpoints

### Remove
Duplicated stat blocks (4× → 1×, sourced) · `src/lib/actions/contact.js` · `src/assets/` · unused dependencies · `logo2.png` and unused images · template SVGs · all `shadow-pink-500/20` · `remotePatterns` wildcard · duplicate `.light` block · unused `--card` · ToyTopia and AssetVerse from the main hierarchy

### Rebuild
Design token system · typography · color system · homepage · project data layer and hierarchy · services architecture · UI primitive layer · contact form · sitemap

### New
`/work` and 4 case studies · 5 service detail pages · `/blog` + MDX pipeline · `/tools` affiliate system · `/resources` · `/disclosure`, `/privacy`, `/uses` · `/go/[slug]` · `components/ui/` (~16 primitives) · affiliate components · SEO components · content pipeline · TypeScript types · analytics

---

## Decision Log

### Resolved — 2026-07-19

| # | Decision | Outcome | Section |
|---|---|---|---|
| 1 | Professional statistics | Verifiable and source-attributed only. Upwork figures each labeled with source; no blended totals; single sitewide instance; volatile badges in centralized config. | §3.1 |
| 2 | TypeScript | Phased migration. All new files TS; convert on material modification; strict mode from day one; no `any`; config/types/schemas/forms/utils/primitives prioritized. | §26.1 |
| 3 | Content management | MDX + Zod-validated frontmatter. Structured data centralized in typed config. No CMS in v1; content layer designed for later swap. | §26.2, §26.3 |
| 4 | Motion | Restrained enhancement. CSS-first; `motion` only where it aids hierarchy or feedback; `prefers-reduced-motion` honored; premium comes from typography, spacing, layout and content. | §26.4 |
| 5 | Project hierarchy | DentFlow → SkillPath AI → TaskForge → StudyNook. Transparent tier labels. No HireLoop. No project presented as client work. | §8.2 |

---

### Resolved — 2026-07-19 (second round)

| # | Decision | Outcome | Section |
|---|---|---|---|
| A | Professional statistics | $100K+ earned on Upwork · 240+ completed jobs · 22,000+ hours · 92% JSS. Upwork-attributed, no blending, one instance, centralized in `data/stats.ts`. | §3.1 |
| B | Font verification | Proceed with the correction. Source defect certain; visible fallback explicitly documented as unconfirmed. Validate computed `font-family` in DevTools **after** implementation. | P0-1 |
| C | Typeface | **Geist.** Sans for headings/body/nav/UI; Mono sparingly for code and technical labels. No third family. Restrained scale, no oversized/heavy headings. | §21 |
| D | Demo cleanup ownership | Cleaned in the external repos, never from this one. Case studies stay `draft` until their checklist passes. | §8.8.1–8.8.3 |
| E | SkillPath functionality | All AI workflows unverified until you test them. Labeled "production verification in progress". 15-point checklist added. | §8.8.2 |
| F | Fiverr | Not emphasized in v1. Profile link only; no metrics, no blended totals. | §19 |
| G | ToyTopia / AssetVerse | **Omitted entirely.** No archive section. | §8.2 |
| H | Résumé | About page + navigation. Removed from the homepage hero CTA slot. | §19 |
| I | Newsletter | **None in v1.** Resources ungated; convert to consultation CTAs. | §25 |
| J | Cold-email pricing | **No published pricing in v1.** Consultation-based CTAs; qualification via the contact form. | §22 |
| K | Color palette | **APPROVED — Option B "Technical Graphite".** Cool zinc neutrals, `#1D4ED8` primary (passes AA as text *and* fill), restrained amber secondary. Full token system, contrast math, application rules 1–10 and gradient policy documented. | §21.1 |
| L | Theme behavior | **System preference as default; dark not forced.** Visible switcher, both modes fully designed and tested, manual selection persisted and overriding system, no flash on load. | §21.1 |

**Palette lands in Phase 1, not Phase 0.** Phase 0 is a half-day correctness pass; repainting the site is a visual redesign and belongs with the token/`@theme` work. Phase 0 touches `globals.css` only to remove the HeroUI import, add `@custom-variant dark`, add `:focus-visible`, and add the reduced-motion block — using the **existing** `--primary` for the focus ring. Phase 1 then replaces the palette wholesale.

---

## Remaining Blocking Decisions

**Only one decision now blocks implementation:**

**1. Approval to begin Phase 0.** Everything in Phase 0 is specified, evidenced and scoped. Awaiting your go-ahead.

Everything else that was blocking is either resolved above or has moved to a **task you own outside this repository** — the three pre-publication checklists in §8.8. Those gate *publication* of individual case studies, not the build. Phases 0 through 4 can proceed to completion while they are outstanding.

### Not blocking, but needed before specific milestones

| Needed for | Item | Owner |
|---|---|---|
| DentFlow case study goes live | §8.8.3 checklist (6 items) | You |
| TaskForge case study goes live | §8.8.1 checklist (14 items) | You |
| SkillPath case study goes live | §8.8.2 checklist (7 cleanup + 15 functional) | You |
| Phase 2 About page | A usable portrait photo | You |
| Phase 2 case studies | Fresh screenshots of DentFlow and SkillPath AI | You (post-cleanup) |

---

*End of audit and plan. No application code has been modified. Live-site findings in §8.3–8.5 were verified against the deployed applications, and Phase 0 findings against the working tree, on 2026-07-19.*
