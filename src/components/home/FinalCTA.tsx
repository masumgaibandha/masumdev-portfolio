import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

/**
 * Closing call to action. Neutral surface, no gradient band, no glow,
 * no coloured shadow — the buttons carry the only saturation here.
 */
export default function FinalCTA() {
  return (
    // Closing statement gets the most room on the page — the only section
    // wider-spaced than the hero.
    <section
      className="bg-surface py-24 sm:py-36"
      aria-labelledby="final-cta-heading"
    >
      <Container width="wide">
        <div className="max-w-2xl">
          <Heading as="h2" size="xl" id="final-cta-heading">
            Have a product idea or a system that needs rebuilding?
          </Heading>

          <Text size="lg" tone="muted" className="mt-4">
            Tell me what you are trying to build and what it has to do. If I am
            a good fit for it I will say so, and if I am not I will tell you
            that too.
          </Text>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
            <Button href="/projects" size="lg" variant="secondary">
              View Case Studies
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
