import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaUpwork } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SiFiverr } from "react-icons/si";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Masum<span className="text-[var(--primary)]">Dev</span>
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-[var(--muted)]">
              Full Stack Developer building modern SaaS platforms, dashboards,
              marketplaces, and business web applications with Next.js, React,
              and MongoDB.
            </p>

            <Link
              href="mailto:masum@masumdev.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition hover:text-cyan-300"
            >
              <MdOutlineMail className="size-5" />
              masum@masumdev.com
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--foreground)]">
              Quick Links
            </h3>

            <div className="mt-4 grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--foreground)]">Connect</h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
              Available for full-stack web development, SaaS platforms, and
              long-term product development work.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="https://github.com/masumgaibandha"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://www.linkedin.com/in/masumgaibandha"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://www.upwork.com/freelancers/~01a5eccfaf40a8a065?viewMode=1"
                target="_blank"
                rel="noopener"
                aria-label="Upwork"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <FaUpwork />
              </Link>

              <Link
                href="https://www.fiverr.com/expertlead"
                target="_blank"
                rel="noopener"
                aria-label="Fiverr"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <SiFiverr />
              </Link>

              <Link
                href="mailto:masum@masumdev.com"
                aria-label="Email"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <MdOutlineMail />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Abdullah Masum. All rights reserved.
          </p>

          <p>Built with Next.js, React, MongoDB & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
