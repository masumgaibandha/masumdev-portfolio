export const metadata = {
  title: "Projects",
  description:
    "Explore Abdullah Masum's full-stack web application projects including marketplaces, SaaS-style platforms, dashboards, and business applications.",
};

import { featuredProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Projects
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[var(--foreground)] md:text-6xl">
            Web Applications I&apos;ve Built
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            A collection of full-stack applications, SaaS-style platforms, and
            business-focused web products built with modern JavaScript
            technologies.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/60 shadow-xl shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="p-3">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-slate-950">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-7 pt-4 md:px-8">
                <span className="w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                  {project.category}
                </span>

                <h2 className="mt-5 text-2xl font-bold leading-snug text-[var(--foreground)]">
                  {project.title}
                </h2>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--background)]/40 px-3 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-400 transition duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                  >
                    View Case Study
                    <span className="transition duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
