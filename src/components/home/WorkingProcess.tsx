import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import SectionLabel from "@/components/ui/SectionLabel";
import Text from "@/components/ui/Text";
import { workingProcess } from "@/config/services";

/**
 * Ordered list with hairline separators rather than five repeated cards.
 * The step number is a mono label, not a large decorative numeral.
 */
export default function WorkingProcess() {
  return (
    <section
      className="border-b border-border bg-surface py-16 sm:py-24"
      aria-labelledby="process-heading"
    >
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel index={5}>Process</SectionLabel>
            <Heading as="h2" size="lg" id="process-heading" className="mt-5">
              How a project runs
            </Heading>
            <Text tone="muted" className="mt-4">
              The same sequence whether it is a new product or a system that
              needs rebuilding. Communication is part of it, not an extra.
            </Text>
          </div>

          <ol className="lg:col-span-8">
            {workingProcess.map((step) => (
              <li
                key={step.step}
                className="flex gap-5 border-t border-border py-6 last:border-b sm:gap-8"
              >
                <span
                  aria-hidden="true"
                  className="tabular mt-0.5 shrink-0 font-mono text-sm text-muted-foreground"
                >
                  {String(step.step).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
