import Link from "next/link";

const AboutPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10">
            <p className="font-medium text-cyan-400">About Me</p>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              From Freelance Operations to Full Stack Product Development
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted)]">
              I&apos;m Abdullah Masum, a Full Stack Developer focused on
              building modern web applications with Next.js, React, MongoDB,
              Tailwind CSS, and clean SaaS-style architecture.
            </p>

            <p className="mt-4 leading-8 text-[var(--muted)]">
              Before moving deeper into product development, I worked with
              hundreds of clients through Upwork and Fiverr, helping businesses
              with outreach systems, deliverability, and growth operations. That
              experience helps me understand business goals, user flows, and
              client expectations beyond just writing code.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-xl border border-[var(--border)] px-6 py-3 font-medium transition hover:border-cyan-500 hover:text-cyan-400"
            >
              Learn More About Me
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">400+</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Client projects delivered across freelance platforms.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Web applications built using modern JavaScript stacks.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">22K+</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Hours worked with clients and remote teams.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">Top Rated</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Trusted freelancer on Upwork and Fiverr.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
