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
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express.js", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Stripe", icon: SiStripe },
    { name: "Motion", icon: TbBrandFramerMotion },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="font-medium text-cyan-400">Tech Stack</p>

          <h2 className="mt-4 text-4xl font-bold">Tools I Work With</h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            I use modern JavaScript tools to build fast, scalable, and
            production-ready web applications.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <tech.icon className="size-6" />
              </div>

              <h3 className="font-semibold text-[var(--foreground)]">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
