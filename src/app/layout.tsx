import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable}`}
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
