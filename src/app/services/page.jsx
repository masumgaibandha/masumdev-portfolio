export const metadata = {
  title: "Services",
  description:
    "Full stack development services by Abdullah Masum, including Next.js applications, SaaS platforms, dashboards, APIs, and MongoDB-backed systems.",
};
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description:
        "Custom web applications built with Next.js, React, MongoDB, and scalable backend architecture.",
      features: [
        "Next.js Applications",
        "React Frontend Development",
        "MongoDB Database Design",
        "Authentication Systems",
        "Admin Dashboards",
      ],
    },
    {
      title: "SaaS Application Development",
      description:
        "Modern SaaS platforms with subscription workflows, dashboards, user management, and business automation.",
      features: [
        "Multi-user Systems",
        "Role-Based Access",
        "Dashboard Development",
        "Subscription Workflows",
        "Business Automation",
      ],
    },
    {
      title: "Frontend Development",
      description:
        "Fast, responsive, and conversion-focused user interfaces using modern UI technologies.",
      features: [
        "Responsive Design",
        "HeroUI Components",
        "Tailwind CSS",
        "Dark/Light Mode",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend & API Development",
      description:
        "Secure backend systems, APIs, database architecture, and server-side business logic.",
      features: [
        "REST APIs",
        "Express.js",
        "MongoDB",
        "Authentication",
        "Payment Integration",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-medium text-[var(--primary)]">Services</p>

          <h1 className="mt-4 text-5xl font-bold">Development Services</h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            I help businesses build modern web applications that are scalable,
            maintainable, and focused on real business outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h2 className="text-2xl font-bold">{service.title}</h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-[var(--muted)]">
                    <span className="text-[var(--primary)]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-4xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-10 text-center">
          <h2 className="text-3xl font-bold">Need a Custom Solution?</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--muted)]">
            Every business is different. Let's discuss your requirements and
            build something that fits your workflow and goals.
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

export default ServicesPage;
