import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Abdullah Masum's full-stack web application projects including marketplaces, SaaS-style platforms, dashboards, and business applications.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <Container width="wide">
          <div className="max-w-2xl">
            <Text size="sm" mono tone="muted" className="uppercase">
              Projects
            </Text>

            <Heading as="h1" size="xl" className="mt-4">
              Web applications I&apos;ve built
            </Heading>

            <Text size="lg" tone="muted" className="mt-6">
              A collection of full-stack applications, SaaS-style platforms, and
              business-focused web products built with modern JavaScript
              technologies.
            </Text>
          </div>
        </Container>
      </Section>

      <Section background="surface" bordered>
        <Container width="wide">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="border-b border-border">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} interface`}
                    width={1600}
                    height={900}
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <Badge variant="outline" mono>
                    {project.category}
                  </Badge>

                  <Heading as="h2" size="md" className="mt-4">
                    {project.title}
                  </Heading>

                  <Text tone="muted" className="mt-3">
                    {project.description}
                  </Text>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((item) => (
                      <li key={item}>
                        <Badge mono>{item}</Badge>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                    >
                      Read case study
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-10">
            <Button
              href="https://github.com/masumgaibandha?tab=repositories"
              external
              variant="secondary"
            >
              View GitHub Repositories
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
