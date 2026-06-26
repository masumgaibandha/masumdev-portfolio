import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiStripe,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const TechStack = () => {
  const technologies = [
    { name: "Next.js", category: "Framework", icon: SiNextdotjs },
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "JavaScript", category: "Language", icon: SiJavascript },
    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "Express.js", category: "Backend", icon: SiExpress },
    { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss },
    { name: "Stripe", category: "Payments", icon: SiStripe },
    { name: "Motion", category: "Animation", icon: TbBrandFramerMotion },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-medium text-[var(--primary)]">Tech Stack</p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Tools I Use to Build Modern Web Products
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              I work with a focused JavaScript stack to build fast, scalable,
              and production-ready applications for real business use cases.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <tech.icon className="size-6" />
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">
                    {tech.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
