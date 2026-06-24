export const metadata = {
  title: "About",
  description:
    "Learn about Abdullah Masum, a Full Stack Developer focused on building modern web applications with Next.js, React, MongoDB, and scalable JavaScript architecture.",
};
import Link from "next/link";

const AboutPage = () => {
  const highlights = [
    {
      value: "160K+",
      label: "Freelance Earnings",
    },
    {
      value: "400+",
      label: "Projects Delivered",
    },
    {
      value: "22K+",
      label: "Hours Worked",
    },
    {
      value: "Top Rated",
      label: "Upwork & Fiverr",
    },
  ];

  const timeline = [
    {
      period: "Current Focus",
      title: "Full Stack Development",
      description:
        "Building modern web applications, SaaS platforms, dashboards, and business tools using Next.js, React, MongoDB, and scalable backend systems.",
    },
    {
      period: "2024 - Present",
      title: "Web Application Development",
      description:
        "Developed multiple full-stack and frontend applications including marketplaces, learning platforms, asset systems, and SaaS-style dashboards.",
    },
    {
      period: "Previous Experience",
      title: "Freelance Operations & Growth Systems",
      description:
        "Worked with hundreds of clients on Upwork and Fiverr, helping businesses with outreach systems, deliverability, lead generation, and growth operations.",
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
    <section className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-medium text-cyan-400">About Me</p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Full Stack Developer Building Modern Web Applications
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            I&apos;m Abdullah Masum, a Full Stack Developer focused on building
            scalable, user-friendly, and business-focused web applications using
            Next.js, React, MongoDB, and modern JavaScript technologies.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h2 className="text-3xl font-bold text-cyan-400">{item.value}</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <p className="font-medium text-cyan-400">My Story</p>

            <h2 className="mt-4 text-3xl font-bold">
              From Client Work to Product Development
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted)]">
              My professional background started with freelance client work,
              where I helped businesses build outreach systems, improve
              deliverability, and manage growth operations. Working with
              hundreds of clients taught me how businesses think, what clients
              expect, and how important clear communication is.
            </p>

            <p className="mt-4 leading-8 text-[var(--muted)]">
              Today, my main focus is full stack development. I build practical
              web applications, dashboards, marketplaces, and SaaS-style
              platforms with clean UI, scalable architecture, and strong user
              experience.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
            <p className="font-medium text-cyan-400">Technical Skills</p>

            <h2 className="mt-4 text-3xl font-bold">What I Work With</h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="font-medium text-cyan-400">Journey</p>
            <h2 className="mt-4 text-4xl font-bold">Professional Timeline</h2>
          </div>

          <div className="grid gap-6">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <p className="text-sm font-medium text-cyan-400">
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

        <div className="mt-20 rounded-4xl border border-cyan-500/20 bg-cyan-500/5 p-10 text-center md:p-14">
          <h2 className="text-4xl font-bold">Let&apos;s Work Together</h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--muted)]">
            If you need a reliable developer to build a modern web application,
            SaaS platform, or business dashboard, I&apos;d be happy to discuss
            your project.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
