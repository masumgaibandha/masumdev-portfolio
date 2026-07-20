import { featuredProjects, getProjectBySlug } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const canonical = `/projects/${project.slug}`;

  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      title: `${project.title} — ${project.category}`,
      description: project.description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.category}`,
      description: project.description,
    },
  };
}

const ProjectDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <Link
          href="/projects"
          className="inline-flex rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--muted-foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
        >
          ← Back to Projects
        </Link>

        <div className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/60 p-8 shadow-xl shadow-black/5 md:p-10">
          <span className="inline-flex rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary)]">
            {project.category}
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
            {project.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener"
              className="rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary-foreground)] shadow-lg shadow-pink-500/20 transition hover:bg-[var(--primary-hover)]"
            >
              Live Preview
            </Link>

            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener"
              className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
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
            <p className="text-sm text-[var(--muted-foreground)]">Project Type</p>
            <h3 className="mt-2 text-xl font-semibold">{project.category}</h3>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6">
            <p className="text-sm text-[var(--muted-foreground)]">Technologies</p>
            <h3 className="mt-2 text-xl font-semibold">
              {project.stack.length} Tools
            </h3>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6">
            <p className="text-sm text-[var(--muted-foreground)]">Features</p>
            <h3 className="mt-2 text-xl font-semibold">
              {project.features.length}+ Features
            </h3>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Problem</h2>
            <p className="mt-5 leading-8 text-[var(--muted-foreground)]">
              {project.problem}
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Solution</h2>
            <p className="mt-5 leading-8 text-[var(--muted-foreground)]">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-2xl font-bold">Core Features</h2>

            <ul className="mt-6 space-y-4">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[var(--muted-foreground)]">
                  <span className="text-[var(--primary)]">✓</span>
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
                  className="rounded-full border border-[var(--border)] bg-[var(--background)]/50 px-4 py-2 text-sm text-[var(--muted-foreground)]"
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
