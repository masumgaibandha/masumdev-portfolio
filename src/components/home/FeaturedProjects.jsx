import Image from "next/image";
import Link from "next/link";

const FeaturedProjects = ({ projects }) => {
  const mainProject =
    projects.find((project) => project.slug === "taskforge") || projects[0];

  const secondaryProjects = projects.filter(
    (project) => project.slug !== mainProject.slug,
  );

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="font-medium text-cyan-400">Featured Work</p>

          <h2 className="mt-4 text-4xl font-bold">Recent Projects</h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            A selection of full-stack web applications, SaaS-style platforms,
            and business-focused products I have built.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/60 p-4 shadow-xl shadow-black/5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 lg:p-5">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-slate-950">
              <Image
                src={mainProject.image}
                alt={mainProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div className="p-3 lg:p-6">
              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                Featured Project
              </span>

              <h3 className="mt-6 text-3xl font-bold md:text-4xl">
                {mainProject.title}
              </h3>

              <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">
                {mainProject.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {mainProject.stack.slice(0, 5).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)]/50 px-3 py-1 text-sm text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/projects/${mainProject.slug}`}
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
                >
                  View Case Study
                </Link>

                <Link
                  href={mainProject.liveLink}
                  target="_blank"
                  className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  Live Preview
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                  {project.category}
                </span>

                <h3 className="mt-4 text-xl font-bold">{project.title}</h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-auto inline-flex pt-6 text-sm font-semibold text-cyan-400 transition group-hover:translate-x-1"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="rounded-xl border border-[var(--border)] px-6 py-3 font-medium transition hover:border-cyan-500 hover:text-cyan-400"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
