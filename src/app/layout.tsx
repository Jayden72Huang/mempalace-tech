import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mempalace.tech"),
  title: {
    default: "MemPalace — Milla Jovovich's AI Memory System on GitHub",
    template: "%s | MemPalace.tech",
  },
  description:
    "Independent guides, benchmarks, and comparisons for MemPalace — the open-source AI memory system by Milla Jovovich. Setup tutorials, Mem0 vs MemPalace, and more.",
  keywords: [
    "mempalace",
    "ai memory system",
    "mempalace tutorial",
    "mempalace vs mem0",
    "ai memory benchmark",
    "LongMemEval",
    "persistent ai memory",
    "mem0 alternative",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MemPalace.tech",
    title: "MemPalace — Milla Jovovich's AI Memory System on GitHub",
    description:
      "Milla Jovovich built an AI memory system with 7000+ stars. The story, benchmark controversy, and how it works.",
    url: "https://www.mempalace.tech",
    images: [{ url: "/images/og-image.png", width: 1200, height: 675, alt: "MemPalace — 100% LongMemEval Score" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemPalace.tech — Guides, Benchmarks & Comparisons",
    description:
      "The independent resource hub for MemPalace, the AI memory system that scored 100% on LongMemEval.",
  },
  other: { "google-adsense-account": "ca-pub-7779254174392960" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.mempalace.tech" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MemPalace.tech",
  url: "https://www.mempalace.tech",
  description: "Independent guides, benchmarks, and comparisons for AI memory systems.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://www.google.com/search?q=site:mempalace.tech+{search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7779254174392960"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
