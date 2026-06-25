export const metadata = {
  title: "Contact",
  description:
    "Contact Abdullah Masum for full-stack web development, SaaS application development, dashboard development, and modern business web applications.",
};

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaUpwork } from "react-icons/fa6";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { SiFiverr } from "react-icons/si";

const ContactPage = () => {
  const bestFitProjects = [
    "SaaS applications",
    "Admin dashboards",
    "Marketplace platforms",
    "Business web applications",
    "React / Next.js frontend development",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-medium text-cyan-400">Contact</p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Let&apos;s Build Your Next Web Application
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Have a SaaS product, dashboard, marketplace, or business application
            in mind? Share the details and I&apos;ll get back to you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/60 p-6 shadow-xl shadow-black/5 md:p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Project Inquiry</h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                Tell me what you want to build. This form is currently UI-only;
                next we can connect it to email or MongoDB.
              </p>
            </div>

            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
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
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Project Type"
                  className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-cyan-500"
                />

                <input
                  type="text"
                  placeholder="Estimated Budget"
                  className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-cyan-500"
                />
              </div>

              <textarea
                rows={7}
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
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/60 p-6 shadow-xl shadow-black/5 md:p-8">
              <h2 className="text-3xl font-bold">Contact Details</h2>

              <div className="mt-6 grid gap-4">
                <Link
                  href="mailto:masum@masumdev.com"
                  className="flex items-center gap-3 text-[var(--muted)] transition hover:text-cyan-400"
                >
                  <MdOutlineMail className="size-5 text-cyan-400" />
                  masum@masumdev.com
                </Link>

                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <MdOutlineLocationOn className="size-5 text-cyan-400" />
                  Bangladesh · Available Worldwide
                </div>

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

                <Link
                  href="https://www.upwork.com/freelancers/~01a5eccfaf40a8a065?viewMode=1"
                  target="_blank"
                  className="flex items-center gap-3 text-[var(--muted)] transition hover:text-cyan-400"
                >
                  <FaUpwork className="size-5 text-cyan-400" />
                  Upwork Profile
                </Link>

                <Link
                  href="https://www.fiverr.com/expertlead"
                  target="_blank"
                  className="flex items-center gap-3 text-[var(--muted)] transition hover:text-cyan-400"
                >
                  <SiFiverr className="size-5 text-cyan-400" />
                  Fiverr Profile
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-500/20 bg-cyan-500/5 p-6 md:p-8">
              <h2 className="text-3xl font-bold">Available for Work</h2>

              <p className="mt-4 leading-8 text-[var(--muted)]">
                I&apos;m available for full-stack web development projects, SaaS
                platforms, dashboards, marketplace applications, and long-term
                product development collaboration.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/60 p-6 shadow-xl shadow-black/5 md:p-8">
              <h2 className="text-3xl font-bold">Best Fit Projects</h2>

              <ul className="mt-5 space-y-3 text-[var(--muted)]">
                {bestFitProjects.map((project) => (
                  <li key={project} className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
