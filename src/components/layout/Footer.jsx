import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaUpwork } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

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

            <p className="mt-3 max-w-sm leading-7 text-[var(--muted)]">
              Full Stack Developer building modern, scalable, and
              conversion-focused web applications with Next.js, React, and
              MongoDB.
            </p>
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
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--foreground)]">Connect</h3>

            <p className="mt-4 text-sm text-[var(--muted)]">
              Available for full-stack web development projects.
            </p>

            <div className="mt-5 flex gap-3">
              <Link
                href="https://github.com/masumgaibandha"
                target="_blank"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://www.linkedin.com/in/masumgaibandha"
                target="_blank"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="mailto:masumgaibandha@gmail.com"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <MdOutlineMail />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Abdullah Masum. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
