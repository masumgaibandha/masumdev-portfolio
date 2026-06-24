import Link from "next/link";
import { featuredProjects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <section className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-3xl">
          <p className="font-medium text-cyan-400">Projects</p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Web Applications I&apos;ve Built
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            A collection of full-stack applications, SaaS-style platforms, and
            web products built with modern JavaScript technologies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                {project.category}
              </span>

              <h2 className="mt-5 text-2xl font-bold">{project.title}</h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-8 inline-flex font-medium text-cyan-400 transition group-hover:translate-x-1"
              >
                View Case Study →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
