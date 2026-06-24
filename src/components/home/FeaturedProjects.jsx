import Link from "next/link";

const FeaturedProjects = ({ projects }) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="font-medium text-cyan-400">Featured Work</p>

          <h2 className="mt-4 text-4xl font-bold">Recent Projects</h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            A selection of web applications and SaaS products I have built.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                {project.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>

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
