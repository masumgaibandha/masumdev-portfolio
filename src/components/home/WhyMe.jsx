import {
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const WhyMe = () => {
  const items = [
    {
      title: "Business & Development Experience",
      description:
        "After completing 400+ freelance projects and working with businesses worldwide, I understand both technical implementation and real business requirements.",
      icon: HiOutlineRocketLaunch,
    },

    {
      title: "Modern Full Stack Development",
      description:
        "I build modern web applications using Next.js, React, MongoDB, Express.js, Tailwind CSS, HeroUI, and scalable backend architectures.",
      icon: HiOutlineCodeBracket,
    },

    {
      title: "UI That Feels Premium",
      description:
        "I focus on creating clean, responsive, and polished interfaces that feel modern, intuitive, and production-ready across all devices.",
      icon: HiOutlineSparkles,
    },

    {
      title: "Professional Project Delivery",
      description:
        "Clear communication, structured workflows, reliable updates, and attention to detail ensure projects move smoothly from idea to launch.",
      icon: HiOutlineUserGroup,
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="font-medium text-[var(--primary)]">Why Work With Me</p>

          <h2 className="mt-4 text-4xl font-bold">
            Building Products With Business Context
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[var(--muted)]">
            My background combines freelance business experience with modern
            full-stack development, allowing me to build applications that are
            not only functional but also aligned with real business goals and
            user needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
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
