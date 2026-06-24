import {
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const WhyMe = () => {
  const items = [
    {
      title: "Production Ready Code",
      description:
        "I build maintainable, scalable, and clean applications following modern development practices.",
      icon: HiOutlineCodeBracket,
    },
    {
      title: "Business Focused",
      description:
        "Every feature is built with user experience, performance, and business goals in mind.",
      icon: HiOutlineRocketLaunch,
    },
    {
      title: "Modern UI/UX",
      description:
        "Beautiful interfaces with smooth interactions, responsive layouts, and SaaS-level design.",
      icon: HiOutlineSparkles,
    },
    {
      title: "Reliable Communication",
      description:
        "Clear updates, structured workflow, and a professional collaboration experience.",
      icon: HiOutlineUserGroup,
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="font-medium text-cyan-400">Why Choose Me</p>

          <h2 className="mt-4 text-4xl font-bold">More Than Just Coding</h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            I help businesses turn ideas into polished products with a focus on
            performance, usability, and long-term maintainability.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <item.icon className="size-7" />
              </div>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
