import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import SectionLabel from "@/components/ui/SectionLabel";
import Text from "@/components/ui/Text";

/*
 * No canonical metadata here — a 404 must never declare itself canonical.
 */
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-background py-20">
      <Container width="wide">
        <div className="max-w-xl">
          <SectionLabel>Error 404</SectionLabel>

          <Heading as="h1" size="xl" className="mt-4">
            This page does not exist.
          </Heading>

          <Text size="lg" tone="muted" className="mt-6">
            The address may be mistyped, or the page may have moved. The links
            below cover everything on the site.
          </Text>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to Home
            </Button>
            <Button href="/projects" size="lg" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
