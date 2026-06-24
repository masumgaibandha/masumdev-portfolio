const Stats = () => {
  const stats = [
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

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-4xl font-bold text-cyan-400 transition-colors duration-300">{item.value}</h3>

              <p className="mt-3 text-sm text-[var(--muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
