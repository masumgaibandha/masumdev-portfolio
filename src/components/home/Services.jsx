const Services = () => {
  const services = [
    {
      number: "01",
      title: "Full Stack Web Applications",
      description:
        "End-to-end web applications built with Next.js, React, MongoDB, and scalable backend architecture.",
      features: [
        "Authentication & Authorization",
        "Database Design",
        "Admin Dashboards",
        "Role-Based Systems",
      ],
    },
    {
      number: "02",
      title: "SaaS Product Development",
      description:
        "Modern SaaS platforms with subscriptions, user management, dashboards, and business workflows.",
      features: [
        "Multi-user Systems",
        "Subscription Billing",
        "Analytics Dashboards",
        "Scalable Architecture",
      ],
    },
    {
      number: "03",
      title: "Frontend Development",
      description:
        "Fast, responsive, and conversion-focused user interfaces designed for modern web products.",
      features: [
        "Responsive Design",
        "Premium UI",
        "Performance Optimization",
        "Accessibility",
      ],
    },
    {
      number: "04",
      title: "Backend & API Development",
      description:
        "Secure APIs, database integration, payment systems, and business logic implementation.",
      features: [
        "REST APIs",
        "MongoDB",
        "Stripe Integration",
        "Server Architecture",
      ],
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-3xl">
          <p className="font-medium text-cyan-400">Services</p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Building Products That Solve Real Business Problems
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            From SaaS platforms to custom business applications, I help
            companies build reliable, scalable, and user-friendly products.
          </p>
        </div>

        <div className="grid gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[var(--surface)]/80"
            >
              <div className="grid gap-8 lg:grid-cols-[120px_1fr_350px] lg:items-center">
                <div>
                  <span className="text-5xl font-bold text-cyan-500/30">
                    {service.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>

                  <p className="mt-4 leading-8 text-[var(--muted)]">
                    {service.description}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--muted)]"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
