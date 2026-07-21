import type { Metadata } from "next";
import Image from "next/image";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Text from "@/components/ui/Text";
import { statsAttribution, visibleUpworkStats } from "@/config/stats";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Abdullah Masum, a Full Stack Developer focused on building modern web applications with Next.js, React, MongoDB, and scalable JavaScript architecture.",
  alternates: { canonical: "/about" },
};

type TimelineEntry = {
  period: string;
  title: string;
  description: string;
};

const timeline: readonly TimelineEntry[] = [
  {
    period: "Current Focus",
    title: "Full Stack Development",
    description:
      "Building modern web applications, SaaS platforms, dashboards, marketplaces, and business tools using Next.js, React, MongoDB, and scalable backend systems.",
  },
  {
    period: "2024 – Present",
    title: "Web Application Development",
    description:
      "Built multiple frontend and full-stack applications including freelance marketplaces, learning platforms, asset management systems, dashboards, and e-commerce experiences.",
  },
  {
    period: "Previous Experience",
    title: "Freelance Operations & Growth Systems",
    description:
      "Worked with hundreds of clients through Upwork and Fiverr, helping businesses with outreach systems, deliverability, lead generation, and growth operations.",
  },
] as const;

const skills: readonly string[] = [
  "Next.js",
  "React",
  "JavaScript",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "HeroUI",
  "Better Auth",
  "Stripe",
  "REST API",
  "Dashboard UI",
  "SaaS Architecture",
] as const;

export default function AboutPage() {
  // Verified Upwork figures only, read from the central config so they are
  // never duplicated here. Each entry carries its own visibility flag.
  const highlights = visibleUpworkStats();

  return (
    <>
      <Section>
        <Container width="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionLabel>About</SectionLabel>

              <Heading as="h1" size="xl" className="mt-4">
                Full-stack developer with real client experience
              </Heading>

              <Text size="lg" tone="muted" className="mt-6">
                I&apos;m Abdullah Masum, a Full Stack Developer building modern
                web applications with Next.js, React, MongoDB, Express.js,
                Tailwind CSS, and scalable JavaScript architecture.
              </Text>

              <Text tone="muted" className="mt-4">
                My background combines full-stack development with years of
                freelance client work. That helps me build applications that are
                not only technically solid, but also practical, user-friendly,
                and aligned with business goals.
              </Text>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/projects" size="lg">
                  View Projects
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-border bg-surface">
                <Image
                  src="/assets/masum1.jpg"
                  alt="Abdullah Al Masum, full-stack developer"
                  width={1024}
                  height={1024}
                  priority
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 60vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surface" spacing="compact" bordered>
        <Container width="wide">
          <SectionLabel>{statsAttribution.note}</SectionLabel>

          <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {item.value}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <Text size="sm" tone="muted" className="mt-8">
            Source: {statsAttribution.source} platform profile.
          </Text>
        </Container>
      </Section>

      <Section bordered>
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading as="h2" size="md">
                From client work to product development
              </Heading>

              <Text tone="muted" className="mt-5">
                My professional journey started with freelance client work,
                where I helped businesses with outreach systems, deliverability,
                lead generation, and growth operations. Working with hundreds of
                clients taught me how businesses think, what clients expect, and
                how important clear communication is.
              </Text>

              <Text tone="muted" className="mt-4">
                Today, my main focus is full stack development. I build
                practical web applications, SaaS-style platforms, marketplaces,
                dashboards, and business tools with clean UI, scalable
                architecture, and a strong user experience.
              </Text>
            </div>

            <div>
              <Heading as="h2" size="md">
                What I work with
              </Heading>

              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill}>
                    <Badge mono>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surface" bordered>
        <Container width="wide">
          <Heading as="h2" size="lg">
            Professional timeline
          </Heading>

          <ol className="mt-10 flex flex-col">
            {timeline.map((item, index) => (
              <li
                key={item.title}
                className={`grid gap-3 border-t border-border py-8 lg:grid-cols-12 lg:gap-8 ${
                  index === timeline.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="lg:col-span-4">
                  <Text size="sm" mono tone="muted">
                    {item.period}
                  </Text>
                  <Heading as="h3" size="sm" className="mt-2">
                    {item.title}
                  </Heading>
                </div>

                <div className="lg:col-span-8">
                  <Text tone="muted">{item.description}</Text>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section bordered>
        <Container width="wide">
          <div className="max-w-2xl">
            <Heading as="h2" size="lg">
              Let&apos;s work together
            </Heading>

            <Text size="lg" tone="muted" className="mt-4">
              If you need a reliable developer to build a modern web
              application, SaaS platform, marketplace, or business dashboard,
              I&apos;d be happy to discuss your project.
            </Text>

            <div className="mt-8">
              <Button href="/contact" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
