"use client";

import ThemeToggle from "@/components/common/ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-18 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Masum<span className="text-[var(--primary)]">Dev</span>
            </h1>
            <p className="text-xs text-[var(--muted)]">Full Stack Developer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link
            href="/contact"
            className="rounded-xl bg-[var(--primary)] px-5 py-2 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-[var(--primary-dark)]"
          >
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-[var(--border)] p-2 text-[var(--foreground)] md:hidden"
        >
          {isOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenuAlt3 className="size-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
          <div className="space-y-2 px-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--primary)]"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 border-t border-[var(--border)] pt-4">
              <ThemeToggle />

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-xl bg-[var(--primary)] px-5 py-3 text-center font-semibold text-white"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
