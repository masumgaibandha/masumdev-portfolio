import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";
import SectionLabel from "@/components/ui/SectionLabel";
import Text from "@/components/ui/Text";
import { capstoneProjects, flagshipProjects } from "@/config/projects";
import { relFor } from "@/config/social";
import type { HomepageProject } from "@/types/project";

function ProjectLink({ project }: { project: HomepageProject }) {
  const label =
    project.link.type === "external" ? "View live product" : "Read case study";

  const classes =
    "inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-hover";

  // External destinations use a native anchor so the router never intercepts.
  if (project.link.type === "external") {
    return (
      <a
        href={project.link.href}
        target="_blank"
        rel={relFor("external")}
        className={classes}
      >
        {label}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link href={project.link.href} className={classes}>
      {label}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function ProjectMeta({ project }: { project: HomepageProject }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline" mono>
          {project.label}
        </Badge>
        {project.status ? (
          <Badge variant="accent">{project.status}</Badge>
        ) : null}
      </div>

      <Heading as="h3" size="md" className="mt-4">
        {project.title}
      </Heading>

      <Text tone="muted" className="mt-3">
        {project.summary}
      </Text>
    </>
  );
}

function StackList({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {stack.map((item) => (
        <li key={item}>
          <Badge mono>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="border-b border-border bg-background py-24 sm:py-32"
      aria-labelledby="work-heading"
    >
      <Container width="wide">
        <div className="max-w-2xl">
          <SectionLabel index={1}>Selected Work</SectionLabel>
          <Heading as="h2" size="lg" id="work-heading" className="mt-5">
            Products built end to end
          </Heading>
        </div>

        <div className="mt-12 flex flex-col gap-16 lg:gap-24">
          {flagshipProjects.map((project, index) => {
            /*
             * Prefer the second screenshot where one exists: the first is
             * already the hero's dominant image, so this avoids showing the
             * same screen twice on one page.
             */
            const shots = project.screenshots;
            const shot = shots?.[1] ?? shots?.[0];
            // Alternate which side the screenshot sits on at desktop width.
            const imageFirst = index % 2 === 1;

            return (
              <article
                key={project.slug}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {shot ? (
                  <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                    <ScreenshotFrame
                      screenshot={shot}
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="shadow-sm"
                    />
                  </div>
                ) : null}

                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <ProjectMeta project={project} />

                  {project.capabilities.length > 0 ? (
                    <ul className="mt-5 flex flex-col gap-2">
                      {project.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong"
                          />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <StackList stack={project.stack} />

                  <div className="mt-6">
                    <ProjectLink project={project} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {capstoneProjects.length > 0 ? (
          <div className="mt-16 border-t border-border pt-12 lg:mt-24">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {capstoneProjects.map((project) => {
                const shot = project.screenshots?.[0];

                return (
                  <article
                    key={project.slug}
                    className="lg:col-span-3 lg:grid lg:grid-cols-3 lg:items-center lg:gap-12"
                  >
                    {shot ? (
                      <div className="lg:col-span-1">
                        <ScreenshotFrame
                          screenshot={shot}
                          sizes="(min-width: 1024px) 30vw, 100vw"
                        />
                      </div>
                    ) : null}

                    <div className="mt-6 lg:col-span-2 lg:mt-0">
                      <ProjectMeta project={project} />
                      <StackList stack={project.stack} />
                      <div className="mt-6">
                        <ProjectLink project={project} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
