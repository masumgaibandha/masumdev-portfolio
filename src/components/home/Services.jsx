const Services = () => {
  const services = [
    {
      title: "Full Stack Web Applications",
      description:
        "Custom web applications built with Next.js, React, MongoDB, and scalable backend architecture.",
    },
    {
      title: "SaaS Product Development",
      description:
        "Modern SaaS-style platforms with dashboards, authentication, database design, and clean user flows.",
    },
    {
      title: "Frontend Development",
      description:
        "Responsive, polished, and conversion-focused interfaces using React, Tailwind CSS, HeroUI, and Motion.",
    },
    {
      title: "Backend & API Development",
      description:
        "Secure REST APIs, MongoDB integration, role-based systems, payment workflows, and server logic.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="font-medium text-cyan-400">Services</p>

          <h2 className="mt-4 text-4xl font-bold">What I Can Build For You</h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            I focus on building practical, scalable, and professional web
            applications that help businesses operate better and grow faster.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-2xl font-bold text-[var(--foreground)]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
