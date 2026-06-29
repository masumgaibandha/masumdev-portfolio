import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2 text-sm font-medium text-[var(--primary)]">
            Top Rated Freelancer • 160K+ Earnings • 400+ Projects Delivered
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Building Modern SaaS Platforms,
            <span className="block text-[var(--primary)]">
              Marketplaces & Dashboards
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            I build modern SaaS platforms, dashboards, marketplaces, and
            business applications using Next.js, React, MongoDB, and scalable
            backend architecture.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-xl bg-[var(--primary)] px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:bg-[var(--primary-dark)]"
            >
              View Projects
            </Link>

            <Link
              href="/Abdullah-Al-Masum-Resume.pdf"
              target="_blank"
              className="rounded-xl border border-[var(--border)] px-8 py-4 font-semibold transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
