"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import type { NavItem } from "@/types/site";

type MobileNavProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
  pathname: string;
  /** Focus returns here when the panel closes. */
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function MobileNav({
  id,
  open,
  onClose,
  items,
  pathname,
  triggerRef,
}: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Body-scroll lock. Compensates for the scrollbar so locking does not
  // shift the page horizontally.
  useEffect(() => {
    if (!open) return;

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  // Escape to close, plus focus trapping inside the panel.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Move focus into the panel on open; restore it to the trigger on close.
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const trigger = triggerRef.current;

    const firstFocusable = panel?.querySelector<HTMLElement>(FOCUSABLE);
    firstFocusable?.focus();

    return () => {
      trigger?.focus();
    };
  }, [open, triggerRef]);

  if (!open) return null;

  return (
    <div
      id={id}
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      {/* Overlay — clicking outside the panel closes it. */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-background/80 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        className="absolute inset-x-0 top-0 max-h-dvh overflow-y-auto overscroll-contain border-b border-border bg-background px-4 pb-8 pt-24"
      >
        <nav>
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    // Close after navigation.
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
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
      </div>
    </div>
  );
}
