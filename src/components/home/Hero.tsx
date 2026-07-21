import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";
import SectionLabel from "@/components/ui/SectionLabel";
import Text from "@/components/ui/Text";
import { flagshipProjects } from "@/config/projects";

/**
 * Two-column hero. Left carries development-first positioning; right shows a
 * single authentic product screenshot given the wider column so the interface
 * stays readable. One image only — no second screenshot, no device mockup, no
 * browser chrome, no glow, no invented UI.
 */
export default function Hero() {
  const dentflow = flagshipProjects.find((p) => p.slug === "dentflow");
  const dashboard = dentflow?.screenshots?.[0];

  return (
    <section className="border-b border-border bg-background py-20 sm:py-28 lg:py-36">
      <Container width="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Full-Stack Development</SectionLabel>

            <Heading as="h1" size="xl" className="mt-6">
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

          {/*
           * Wider column than the copy so the dashboard renders large enough
           * to read. `padded` puts a graphite mat behind the light screenshot,
           * which matters in dark mode — without it the white UI reads as
           * pasted onto black.
           */}
          <div className="lg:col-span-7">
            {dashboard ? (
              <ScreenshotFrame
                screenshot={dashboard}
                priority
                padded
                sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
                className="shadow-sm"
              />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
