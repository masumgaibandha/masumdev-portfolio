import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { featuredProjects, getProjectBySlug } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const canonical = `/projects/${project.slug}`;
  const title = `${project.title} — ${project.category}`;

  return {
    title,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: project.description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
    },
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section spacing="compact">
        <Container width="wide">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>

          <div className="mt-8 max-w-3xl">
            <Badge variant="outline" mono>
              {project.category}
            </Badge>

            <Heading as="h1" size="xl" className="mt-4">
              {project.title}
            </Heading>

            <Text size="lg" tone="muted" className="mt-6">
              {project.overview}
            </Text>

            {/*
             * Native anchors, not next/link: both destinations are external,
             * and the router would otherwise intercept the click and request
             * them as an RSC navigation.
             */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={project.liveLink} external>
                Live Preview
                <span aria-hidden="true">↗</span>
              </Button>

              <Button href={project.githubLink} external variant="secondary">
                GitHub Repository
                <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>

          <figure className="mt-12 overflow-hidden rounded-lg border border-border-strong bg-surface">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category} interface`}
              width={1600}
              height={900}
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </Container>
      </Section>

      <Section background="surface" bordered>
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading as="h2" size="md">
                Problem
              </Heading>
              <Text tone="muted" className="mt-4">
                {project.problem}
              </Text>
            </div>

            <div>
              <Heading as="h2" size="md">
                Solution
              </Heading>
              <Text tone="muted" className="mt-4">
                {project.solution}
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section bordered>
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading as="h2" size="md">
                Core Features
              </Heading>

              <ul className="mt-5 flex flex-col gap-2">
                {project.features.map((feature) => (
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

            <div>
              <Heading as="h2" size="md">
                Technology Stack
              </Heading>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item}>
                    <Badge mono>{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
