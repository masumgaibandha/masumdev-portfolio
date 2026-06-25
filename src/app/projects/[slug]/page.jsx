import { getProjectBySlug } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProjectDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <Link
          href="/projects"
          className="inline-flex rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:border-cyan-500 hover:text-cyan-400"
        >
          ← Back to Projects
        </Link>

        <div className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/60 p-8 shadow-xl shadow-black/5 md:p-10">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            {project.category}
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
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

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/50 p-3 md:p-4">
          <div className="relative h-[260px] overflow-hidden rounded-[1.5rem] md:h-[360px] lg:h-[430px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6">
            <p className="text-sm text-[var(--muted)]">Project Type</p>
            <h3 className="mt-2 text-xl font-semibold">{project.category}</h3>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6">
            <p className="text-sm text-[var(--muted)]">Technologies</p>
            <h3 className="mt-2 text-xl font-semibold">
              {project.stack.length} Tools
            </h3>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6">
            <p className="text-sm text-[var(--muted)]">Features</p>
            <h3 className="mt-2 text-xl font-semibold">
              {project.features.length}+ Features
            </h3>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Problem</h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">
              {project.problem}
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Solution</h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Core Features</h2>

            <ul className="mt-6 space-y-4">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[var(--muted)]">
                  <span className="text-cyan-400">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Technology Stack</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--background)]/50 px-4 py-2 text-sm text-[var(--muted)]"
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
