import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";
import Text from "@/components/ui/Text";
import { flagshipProjects } from "@/config/projects";

/**
 * Two-column hero. Left carries development-first positioning; right shows
 * authentic product UI — one dominant screenshot with a smaller supporting
 * one. No glow, no invented UI, no device mockups.
 */
export default function Hero() {
  const dentflow = flagshipProjects.find((p) => p.slug === "dentflow");
  const skillpath = flagshipProjects.find((p) => p.slug === "skillpath-ai");

  const dominant = dentflow?.screenshots?.[0];
  const supporting = skillpath?.screenshots?.[0];

  return (
    <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-28">
      <Container width="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 xl:col-span-5">
            <Text size="sm" mono tone="muted" className="uppercase">
              Full-Stack Development
            </Text>

            <Heading as="h1" size="xl" className="mt-4">
              I build full-stack products that turn complex ideas into reliable
              software.
            </Heading>

            <Text size="lg" tone="muted" className="mt-6 max-w-xl">
              SaaS applications, AI-powered products, dashboards, marketplaces,
              APIs and the backend systems underneath them — designed for the
              data model first and built to stay maintainable after launch.
            </Text>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects" size="lg">
                View Case Studies
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Start a Project
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            {dominant ? (
              <div className="relative">
                <ScreenshotFrame
                  screenshot={dominant}
                  priority
                  sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 50vw, 100vw"
                  className="shadow-sm"
                />

                {supporting ? (
                  /*
                   * Supporting screenshot sits below and inset rather than
                   * floating over the dominant one, so neither is cropped and
                   * both stay legible. Static on small screens.
                   */
                  <div className="mt-4 sm:-mt-10 sm:ml-auto sm:w-3/5 lg:-mt-12 lg:w-[55%]">
                    <ScreenshotFrame
                      screenshot={supporting}
                      sizes="(min-width: 1024px) 32vw, 100vw"
                      className="shadow-sm"
                    />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
