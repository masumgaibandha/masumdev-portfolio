import type { Metadata } from "next";
import { FaGithub, FaLinkedinIn, FaUpwork } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { SiFiverr } from "react-icons/si";

import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { siteConfig } from "@/config/site";
import { relFor } from "@/config/social";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Abdullah Masum for full-stack web development, SaaS application development, dashboard development, and modern business web applications.",
  alternates: { canonical: "/contact" },
};

const bestFitProjects: readonly string[] = [
  "SaaS applications",
  "Admin dashboards",
  "Marketplace platforms",
  "Business web applications",
  "React / Next.js frontend development",
] as const;

const profiles = [
  {
    label: "GitHub",
    href: "https://github.com/masumgaibandha",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/masumgaibandha",
    Icon: FaLinkedinIn,
  },
  {
    label: "Upwork Profile",
    href: "https://www.upwork.com/freelancers/~01a5eccfaf40a8a065?viewMode=1",
    Icon: FaUpwork,
  },
  {
    label: "Fiverr Profile",
    href: "https://www.fiverr.com/expertlead",
    Icon: SiFiverr,
  },
] as const;

const linkClasses =
  "flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground";

export default function ContactPage() {
  return (
    <>
      <Section>
        <Container width="wide">
          <div className="max-w-2xl">
            <Text size="sm" mono tone="muted" className="uppercase">
              Contact
            </Text>

            <Heading as="h1" size="xl" className="mt-4">
              Let&apos;s build your next web application
            </Heading>

            <Text size="lg" tone="muted" className="mt-6">
              Have a SaaS product, dashboard, marketplace, or business
              application in mind? Share the details and I&apos;ll get back to
              you.
            </Text>
          </div>
        </Container>
      </Section>

      <Section background="surface" bordered>
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Heading as="h2" size="md">
                Project inquiry
              </Heading>

              <Text tone="muted" className="mt-3">
                Tell me about your project, goals, and requirements. I&apos;ll
                review the details and get back to you as soon as possible.
              </Text>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-5">
              <div>
                <Heading as="h2" size="sm">
                  Contact details
                </Heading>

                <div className="mt-4 flex flex-col gap-3">
                  {/* mailto is not a route — always a native anchor. */}
                  <a
                    href={`mailto:${siteConfig.author.email}`}
                    className={linkClasses}
                  >
                    <MdOutlineMail
                      className="size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    {siteConfig.author.email}
                  </a>

                  <p className={linkClasses}>
                    <MdOutlineLocationOn
                      className="size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    Bangladesh · Available Worldwide
                  </p>

                  {profiles.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel={relFor("external")}
                      className={linkClasses}
                    >
                      <Icon
                        className="size-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <Heading as="h2" size="sm">
                  Available for work
                </Heading>

                <Text tone="muted" className="mt-3">
                  I&apos;m available for full-stack web development projects,
                  SaaS platforms, dashboards, marketplace applications, and
                  long-term product development collaboration.
                </Text>
              </div>

              <div className="border-t border-border pt-8">
                <Heading as="h2" size="sm">
                  Best fit projects
                </Heading>

                <ul className="mt-4 flex flex-col gap-2">
                  {bestFitProjects.map((project) => (
                    <li
                      key={project}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong"
                      />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
