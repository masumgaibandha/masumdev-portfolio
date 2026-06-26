"use client";

import ThemeToggle from "@/components/common/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--background)]/75 backdrop-blur-2xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="leading-none">
            <h1 className="text-2xl font-black tracking-tight text-[var(--foreground)]">
              Masum<span className="text-[var(--primary)]">Dev</span>
            </h1>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
              Full Stack Developer
            </p>
          </div>
        </Link>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-cyan-400/10 text-[var(--primary)]"
                    : "text-[var(--muted)] hover:bg-white/[0.04] hover:text-[var(--primary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link
            href="/contact"
            className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 text-[var(--foreground)] md:hidden"
        >
          {isOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenuAlt3 className="size-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[var(--background)]/95 backdrop-blur-xl md:hidden">
          <div className="space-y-2 px-4 py-5">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-cyan-400/10 text-[var(--primary)]"
                      : "text-[var(--muted)] hover:bg-white/[0.04] hover:text-[var(--primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex items-center gap-3 border-t border-white/10 pt-4">
              <ThemeToggle />

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-2xl bg-[var(--primary)] px-5 py-3 text-center text-sm font-bold text-white"
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
