"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      // The visitor's OS preference wins on first visit. An explicit choice
      // made with the switcher is persisted and overrides it thereafter.
      defaultTheme="system"
      enableSystem
      // Suppresses the colour transition while the class swaps, so toggling
      // does not produce a visible flash.
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
