import Image from "next/image";
import Link from "next/link";

const AboutPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/50 p-4">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/assets/masum1.jpg"
                  alt="Abdullah Masum"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-5">
                <h3 className="text-3xl font-bold text-[var(--primary)]">400+</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Freelance Projects
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-5">
                <h3 className="text-3xl font-bold text-[var(--primary)]">160K+</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Career Earnings
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-5">
                <h3 className="text-3xl font-bold text-[var(--primary)]">22K+</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">Hours Worked</p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-5">
                <h3 className="text-3xl font-bold text-[var(--primary)]">Top Rated</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Upwork & Fiverr
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium text-[var(--primary)]">About Me</p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Building Modern Products With Business Experience
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted)]">
              I&apos;m Abdullah Masum, a Full Stack Developer focused on
              building
              modern web applications using Next.js, React, MongoDB, Express.js,
              Tailwind CSS, and scalable SaaS architecture.
            </p>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Before moving into full-stack development, I worked with hundreds
              of businesses through Upwork and Fiverr. That experience taught me
              how real companies operate, what users expect, and how technology
              should support business goals.
            </p>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Today, I combine technical skills with practical business
              understanding to build applications that are fast, scalable,
              user-friendly, and production-ready.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:bg-[var(--primary-dark)]"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
