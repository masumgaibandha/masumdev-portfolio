import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import { statsAttribution, visibleUpworkStats } from "@/config/stats";

/**
 * Verified platform statistics, attributed to their source.
 * Figures come from config/stats.ts only — never inlined here — and each is
 * gated by its own visibility flag so a changing number can be hidden without
 * touching this component.
 */
export default function ProofStrip() {
  const stats = visibleUpworkStats();

  if (stats.length === 0) return null;

  return (
    <section
      className="border-b border-border bg-surface py-12 sm:py-14"
      aria-labelledby="proof-heading"
    >
      <Container width="wide">
        <h2
          id="proof-heading"
          className="font-mono text-xs uppercase tracking-wide text-muted-foreground"
        >
          {statsAttribution.note}
        </h2>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">
                {stat.label} on {statsAttribution.source}
              </dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <Text size="xs" tone="muted" className="mt-8">
          Source: {statsAttribution.source} platform profile.
        </Text>
      </Container>
    </section>
  );
}
