import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import SectionLabel from "@/components/ui/SectionLabel";
import Text from "@/components/ui/Text";
import { developmentServices } from "@/config/services";

/**
 * Primary services track — carries the bulk of the homepage service weight.
 * Rendered as a typographic two-column list separated by hairlines rather
 * than an eight-card icon grid.
 */
export default function DevelopmentServices() {
  return (
    <section
      id="services"
      className="border-b border-border bg-background py-16 sm:py-24"
      aria-labelledby="dev-services-heading"
    >
      <Container width="wide">
        <div className="max-w-2xl">
          <SectionLabel index={2}>What I Build</SectionLabel>
          <Heading
            as="h2"
            size="lg"
            id="dev-services-heading"
            className="mt-5"
          >
            {developmentServices.heading}
          </Heading>
          <Text size="lg" tone="muted" className="mt-4">
            {developmentServices.intro}
          </Text>
        </div>

        <dl className="mt-12 grid gap-x-12 border-t border-border sm:grid-cols-2 lg:gap-x-20">
          {developmentServices.services.map((service) => (
            <div
              key={service.title}
              className="border-b border-border py-6 sm:py-7"
            >
              <dt className="text-base font-semibold text-foreground">
                {service.title}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                {service.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
