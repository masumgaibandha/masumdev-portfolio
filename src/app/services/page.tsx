import type { Metadata } from "next";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Text from "@/components/ui/Text";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full stack development services by Abdullah Masum, including Next.js applications, SaaS platforms, dashboards, APIs, and MongoDB-backed systems.",
  alternates: { canonical: "/services" },
};

type Service = {
  title: string;
  description: string;
  features: readonly string[];
};

const services: readonly Service[] = [
  {
    title: "Full Stack Web Development",
    description:
      "Custom web applications built with Next.js, React, MongoDB, and scalable backend architecture.",
    features: [
      "Next.js Applications",
      "React Frontend Development",
      "MongoDB Database Design",
      "Authentication Systems",
      "Admin Dashboards",
    ],
  },
  {
    title: "SaaS Application Development",
    description:
      "Modern SaaS platforms with subscription workflows, dashboards, user management, and business automation.",
    features: [
      "Multi-user Systems",
      "Role-Based Access",
      "Dashboard Development",
      "Subscription Workflows",
      "Business Automation",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Fast, responsive, and conversion-focused user interfaces using modern UI technologies.",
    features: [
      "Responsive Design",
      "HeroUI Components",
      "Tailwind CSS",
      "Dark/Light Mode",
      "Performance Optimization",
    ],
  },
  {
    title: "Backend & API Development",
    description:
      "Secure backend systems, APIs, database architecture, and server-side business logic.",
    features: [
      "REST APIs",
      "Express.js",
      "MongoDB",
      "Authentication",
      "Payment Integration",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container width="wide">
          <div className="max-w-2xl">
            <SectionLabel>Services</SectionLabel>

            <Heading as="h1" size="xl" className="mt-4">
              Development Services
            </Heading>

            <Text size="lg" tone="muted" className="mt-6">
              I help businesses build modern web applications that are scalable,
              maintainable, and focused on real business outcomes.
            </Text>
          </div>
        </Container>
      </Section>

      <Section background="surface" bordered>
        <Container width="wide">
          {/*
           * gap-px over a border-coloured background draws the dividing
           * hairlines, so each cell needs no border of its own.
           */}
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="bg-card p-8">
                <Heading as="h2" size="md">
                  {service.title}
                </Heading>

                <Text tone="muted" className="mt-4">
                  {service.description}
                </Text>

                <ul className="mt-6 flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bordered>
        <Container width="wide">
          <div className="max-w-2xl">
            <Heading as="h2" size="lg">
              Need a custom solution?
            </Heading>

            <Text size="lg" tone="muted" className="mt-4">
              Every business is different. Let&apos;s discuss your requirements
              and build something that fits your workflow and goals.
            </Text>

            <div className="mt-8">
              <Button href="/contact" size="lg">
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
