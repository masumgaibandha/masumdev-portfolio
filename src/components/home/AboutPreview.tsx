import { Download } from "lucide-react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import SectionLabel from "@/components/ui/SectionLabel";
import Text from "@/components/ui/Text";

/**
 * Portrait in a neutral frame — no glow, no coloured border, no statistics
 * ringed around it. The proof strip already carries the numbers, so nothing
 * is repeated here.
 */
export default function AboutPreview() {
  return (
    <section
      className="border-b border-border bg-background py-16 sm:py-24"
      aria-labelledby="about-preview-heading"
    >
      <Container width="wide">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-lg border border-border bg-surface">
              <Image
                src="/assets/masum1.jpg"
                alt="Abdullah Al Masum, full-stack developer"
                width={1024}
                height={1024}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <SectionLabel index={6}>About</SectionLabel>

            <Heading
              as="h2"
              size="lg"
              id="about-preview-heading"
              className="mt-5"
            >
              Full-stack developer with real business experience
            </Heading>

            <Text tone="muted" className="mt-5">
              I&apos;m Abdullah Al Masum. I build full-stack SaaS and product
              applications with Next.js, React, Node.js and MongoDB — business
              software with real users, roles, payments and data behind it,
              rather than demos.
            </Text>

            <Text tone="muted" className="mt-4">
              Before development I spent years on Upwork running outbound and
              lead-generation work for B2B clients. That background is why I
              tend to ask what a feature is for before building it, and it
              still runs alongside the development work as a secondary
              specialism.
            </Text>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/about" variant="secondary">
                View My Story
              </Button>

              {/*
                Native anchor, not next/link: the App Router would otherwise
                intercept the click as a navigation and request the PDF with an
                ?_rsc query, which 404s. No target="_blank" — download already
                keeps the visitor on the page.
              */}
              <Button
                href="/Abdullah-Al-Masum-Resume.pdf"
                external
                newTab={false}
                download="Abdullah-Al-Masum-Resume.pdf"
                variant="ghost"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
