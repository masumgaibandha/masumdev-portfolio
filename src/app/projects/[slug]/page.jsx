import { getProjectBySlug } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProjectDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <Link
          href="/projects"
          className="inline-flex rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:border-cyan-500 hover:text-cyan-400"
        >
          ← Back to Projects
        </Link>

        <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 md:p-10">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
            {project.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {project.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={project.liveLink}
              target="_blank"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
            >
              Live Preview
            </Link>

            <Link
              href={project.githubLink}
              target="_blank"
              className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold transition hover:border-cyan-500 hover:text-cyan-400"
            >
              GitHub Repository
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Problem</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              {project.problem}
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Solution</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Core Features</h2>

            <ul className="mt-5 space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 leading-7 text-[var(--muted)]"
                >
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Tech Stack</h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
