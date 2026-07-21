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
    // Deliberately the tightest band on the page: dense data directly under
    // the hero's open space, so the rhythm changes hard at the first scroll.
    <section
      className="border-b border-border bg-surface py-10 sm:py-12"
      aria-labelledby="proof-heading"
    >
      <Container width="wide">
        <h2 id="proof-heading" className="text-label text-xs text-muted-foreground">
          {statsAttribution.note}
        </h2>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">
                {stat.label} on {statsAttribution.source}
              </dt>
              <dd>
                <span className="tabular text-display block text-4xl font-semibold text-foreground sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">
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
