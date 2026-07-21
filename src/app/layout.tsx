import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "@/providers/ThemeProvider";

/*
 * IBM Plex over the create-next-app default. Plex Sans has real character at
 * display sizes where a neutral grotesque goes generic, and Plex Mono is a
 * true companion rather than an unrelated monospace — which matters because
 * the mono carries every section label and index number in this design.
 *
 * Weights are enumerated rather than variable: only four are used, and the
 * static subsets ship less than the full variable axis.
 */
const plexSans = IBM_Plex_Sans({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MasumDev | Full Stack Developer",
    template: "%s | MasumDev",
  },
  description:
    "Abdullah Masum is a Full Stack Developer building modern web applications, SaaS platforms, dashboards, and business tools with Next.js, React, MongoDB, and JavaScript.",
  keywords: [
    "Abdullah Masum",
    "MasumDev",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "SaaS Developer",
    "Web Application Developer",
  ],
  authors: [{ name: "Abdullah Al Masum" }],
  creator: "Abdullah Al Masum",
  metadataBase: new URL("https://www.masumdev.com"),

  openGraph: {
    title: "Abdullah Al Masum | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications, SaaS platforms, dashboards, and business tools.",
    url: "https://www.masumdev.com",
    siteName: "MasumDev",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Masum | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications with Next.js, React, MongoDB, and JavaScript.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
