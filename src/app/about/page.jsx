export const metadata = {
  title: "About",
  description:
    "Learn about Abdullah Masum, a Full Stack Developer focused on building modern web applications with Next.js, React, MongoDB, and scalable JavaScript architecture.",
};

import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const highlights = [
    { value: "160K+", label: "Freelance Earnings" },
    { value: "400+", label: "Projects Delivered" },
    { value: "22K+", label: "Hours Worked" },
    { value: "Top Rated", label: "Upwork & Fiverr" },
  ];

  const timeline = [
    {
      period: "Current Focus",
      title: "Full Stack Development",
      description:
        "Building modern web applications, SaaS platforms, dashboards, marketplaces, and business tools using Next.js, React, MongoDB, and scalable backend systems.",
    },
    {
      period: "2024 - Present",
      title: "Web Application Development",
      description:
        "Built multiple frontend and full-stack applications including freelance marketplaces, learning platforms, asset management systems, dashboards, and e-commerce experiences.",
    },
    {
      period: "Previous Experience",
      title: "Freelance Operations & Growth Systems",
      description:
        "Worked with hundreds of clients through Upwork and Fiverr, helping businesses with outreach systems, deliverability, lead generation, and growth operations.",
    },
  ];

  const skills = [
    "Next.js",
    "React",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "HeroUI",
    "Better Auth",
    "Stripe",
    "REST API",
    "Dashboard UI",
    "SaaS Architecture",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-medium text-[var(--primary)]">About Me</p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Full Stack Developer With Real Client Experience
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              I&apos;m Abdullah Masum, a Full Stack Developer building modern
              web applications with Next.js, React, MongoDB, Express.js,
              Tailwind CSS, and scalable JavaScript architecture.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
              My background combines full-stack development with years of
              freelance client work. That helps me build applications that are
              not only technically solid, but also practical, user-friendly, and
              aligned with business goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:bg-[var(--primary-dark)]"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/60 p-4 shadow-xl shadow-black/5">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/assets/masum1.jpg"
                  alt="Abdullah Masum"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h2 className="text-3xl font-bold text-[var(--primary)]">{item.value}</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <p className="font-medium text-[var(--primary)]">My Story</p>

            <h2 className="mt-4 text-3xl font-bold">
              From Client Work to Product Development
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted)]">
              My professional journey started with freelance client work, where
              I helped businesses with outreach systems, deliverability, lead
              generation, and growth operations. Working with hundreds of
              clients taught me how businesses think, what clients expect, and
              how important clear communication is.
            </p>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Today, my main focus is full stack development. I build practical
              web applications, SaaS-style platforms, marketplaces, dashboards,
              and business tools with clean UI, scalable architecture, and a
              strong user experience.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <p className="font-medium text-[var(--primary)]">Technical Skills</p>

            <h2 className="mt-4 text-3xl font-bold">What I Work With</h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border)] bg-[var(--background)]/50 px-4 py-2 text-sm text-[var(--muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="font-medium text-[var(--primary)]">Journey</p>
            <h2 className="mt-4 text-4xl font-bold">Professional Timeline</h2>
          </div>

          <div className="grid gap-6">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <p className="text-sm font-medium text-[var(--primary)]">
                  {item.period}
                </p>

                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-8 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-10 text-center md:p-14">
          <h2 className="text-4xl font-bold">Let&apos;s Work Together</h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--muted)]">
            If you need a reliable developer to build a modern web application,
            SaaS platform, marketplace, or business dashboard, I&apos;d be happy
            to discuss your project.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-[var(--primary)] px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:bg-[var(--primary-dark)]"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
