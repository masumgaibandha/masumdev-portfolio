"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import ThemeToggle from "@/components/common/ThemeToggle";
import MobileNav from "@/components/layout/MobileNav";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { mainNav } from "@/config/navigation";

const MOBILE_NAV_ID = "mobile-navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <Container width="wide">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-label text-sm font-medium text-foreground"
          >
            Masum<span className="text-primary">Dev</span>
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <div className="hidden md:block">
              <Button href="/contact" size="md">
                Start a Project
              </Button>
            </div>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={MOBILE_NAV_ID}
              aria-label={open ? "Close navigation" : "Open navigation"}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-border-strong md:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      <MobileNav
        id={MOBILE_NAV_ID}
        open={open}
        onClose={close}
        items={mainNav}
        pathname={pathname}
        triggerRef={triggerRef}
      />
    </header>
  );
}
