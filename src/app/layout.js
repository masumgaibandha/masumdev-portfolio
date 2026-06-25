import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
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
  metadataBase: new URL("https://masumdev.com"),

  openGraph: {
    title: "Abdullah Al Masum | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications, SaaS platforms, dashboards, and business tools.",
    url: "https://masumdev.com",
    siteName: "MasumDev",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Masum Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Masum | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications with Next.js, React, MongoDB, and JavaScript.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
