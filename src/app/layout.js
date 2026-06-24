import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Masum | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications with Next.js, React, MongoDB, and JavaScript.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
