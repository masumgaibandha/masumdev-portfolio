import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Top Rated Freelancer • $100K+ Earnings • 240+ Projects
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Building Modern
            <span className="block text-cyan-400">Web Applications</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            I'm Abdullah Masum, a Full Stack Developer specializing in Next.js,
            React, MongoDB, and SaaS applications. I help businesses build
            scalable, high-performance web products.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[var(--border)] px-8 py-4 font-semibold transition hover:border-cyan-500 hover:text-cyan-400"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
