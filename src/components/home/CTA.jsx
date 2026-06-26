import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-4xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-10 text-center md:p-16">
          <p className="font-medium text-[var(--primary)]">
            Let's Build Something Great
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Whether you need a SaaS platform, business application, hiring
            system, dashboard, or custom web solution, I'd love to discuss your
            project.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-[var(--primary)] px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:bg-[var(--primary-dark)]"
            >
              Start a Conversation
            </Link>

            <Link
              href="/projects"
              className="rounded-xl border border-[var(--border)] px-8 py-4 font-semibold transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
