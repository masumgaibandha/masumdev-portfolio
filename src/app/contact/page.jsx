import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const ContactPage = () => {
  return (
    <section className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-medium text-cyan-400">Contact</p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Let&apos;s Discuss Your Project
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Have a web application, SaaS product, dashboard, or custom platform
            in mind? Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <h2 className="text-3xl font-bold">Project Inquiry</h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              Share a few details about what you want to build. This form is
              ready for UI now and can be connected to email or MongoDB later.
            </p>

            <form className="mt-8 grid gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-cyan-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-cyan-500"
              />

              <input
                type="text"
                placeholder="Project Type"
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-cyan-500"
              />

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-cyan-500"
              />

              <button
                type="button"
                className="rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
              <h2 className="text-3xl font-bold">Contact Details</h2>

              <div className="mt-6 grid gap-4">
                <Link
                  href="mailto:masum@masumdev.com"
                  className="flex items-center gap-3 text-[var(--muted)] transition hover:text-cyan-400"
                >
                  <MdOutlineMail className="size-5 text-cyan-400" />
                  masum@masumdev.com
                </Link>

                <Link
                  href="https://github.com/masumgaibandha"
                  target="_blank"
                  className="flex items-center gap-3 text-[var(--muted)] transition hover:text-cyan-400"
                >
                  <FaGithub className="size-5 text-cyan-400" />
                  GitHub
                </Link>

                <Link
                  href="https://www.linkedin.com/in/masumgaibandha"
                  target="_blank"
                  className="flex items-center gap-3 text-[var(--muted)] transition hover:text-cyan-400"
                >
                  <FaLinkedinIn className="size-5 text-cyan-400" />
                  LinkedIn
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">
              <h2 className="text-3xl font-bold">Available for Work</h2>

              <p className="mt-4 leading-8 text-[var(--muted)]">
                I&apos;m available for full-stack web development projects, SaaS
                platforms, dashboards, marketplace applications, and long-term
                product development collaboration.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
              <h2 className="text-3xl font-bold">Best Fit Projects</h2>

              <ul className="mt-5 space-y-3 text-[var(--muted)]">
                <li>✓ SaaS applications</li>
                <li>✓ Admin dashboards</li>
                <li>✓ Marketplace platforms</li>
                <li>✓ Business web applications</li>
                <li>✓ React / Next.js frontend development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
