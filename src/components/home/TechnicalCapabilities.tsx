import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { technicalCapabilities } from "@/config/services";

/**
 * Capabilities grouped by purpose rather than shown as a wall of coloured
 * technology logos. Names are set in mono as technical labels.
 */
export default function TechnicalCapabilities() {
  return (
    <section
      className="border-b border-border bg-background py-16 sm:py-24"
      aria-labelledby="capabilities-heading"
    >
      <Container width="wide">
        <div className="max-w-2xl">
          <Text size="sm" mono tone="muted" className="uppercase">
            Stack
          </Text>
          <Heading
            as="h2"
            size="lg"
            id="capabilities-heading"
            className="mt-3"
          >
            Technical capabilities
          </Heading>
          <Text size="lg" tone="muted" className="mt-4">
            Grouped by what each part of the stack is responsible for.
          </Text>
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {technicalCapabilities.map((group) => (
            <div key={group.category} className="border-t border-border pt-5">
              <h3 className="text-sm font-semibold text-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm tracking-tight text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
