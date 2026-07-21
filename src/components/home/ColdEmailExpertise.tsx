import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import SectionLabel from "@/components/ui/SectionLabel";
import Text from "@/components/ui/Text";
import { coldEmailServices, coldEmailTools } from "@/config/services";

/**
 * Secondary track. Deliberately smaller and visually distinct from the
 * development section: surface background, narrower column, compact type.
 * It should read as complementary expertise, never as the site's identity.
 * No pricing, no deliverability figures, no affiliate links.
 */
export default function ColdEmailExpertise() {
  return (
    <section
      className="border-b border-border bg-surface py-14 sm:py-16"
      aria-labelledby="cold-email-heading"
    >
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel index={3}>Also</SectionLabel>
            <Heading
              as="h2"
              size="md"
              id="cold-email-heading"
              className="mt-5"
            >
              {coldEmailServices.heading}
            </Heading>
            <Text tone="muted" className="mt-4">
              Before moving into product development I spent years helping
              businesses build outbound systems. It still pairs well with the
              development work: a product needs customers, and I can help build
              the system that reaches them.
            </Text>

            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Discuss outbound systems
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {coldEmailServices.services.map((service) => (
                <li key={service.title}>
                  <p className="text-sm font-semibold text-foreground">
                    {service.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-label text-xs text-muted-foreground">Tools</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {coldEmailTools.map((tool) => (
                  <li key={tool}>
                    <Badge mono>{tool}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
