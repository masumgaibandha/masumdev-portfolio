import Link from "next/link";

import Container from "@/components/ui/Container";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { relFor, socialLinks } from "@/config/social";

const linkClasses =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container width="wide">
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold tracking-tight text-foreground">
              Masum<span className="text-primary">Dev</span>
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              {siteConfig.description}
            </p>

            {/* Native anchor: mailto must never route through next/link. */}
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="mt-4 inline-block text-sm font-medium text-primary transition-colors hover:text-primary-hover"
            >
              {siteConfig.author.email}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Quick Links
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  {/* Internal route: next/link is correct here. */}
                  <Link href={item.href} className={linkClasses}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Elsewhere</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  {/* External: native anchor, rel from the central policy. */}
                  <a
                    href={item.href}
                    target="_blank"
                    rel={relFor(item.kind)}
                    className={linkClasses}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {siteConfig.author.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
