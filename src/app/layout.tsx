import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mempalace.tech"),
  title: {
    default: "MemPalace — The AI Memory System That Scores 100% on LongMemEval",
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
    title: "MemPalace — The AI Memory System That Scores 100% on LongMemEval",
    description:
      "Independent guides, benchmarks, and comparisons for MemPalace — the open-source AI memory system.",
    url: "https://www.mempalace.tech",
    images: [{ url: "/images/og-image.png", width: 1200, height: 675, alt: "MemPalace — 100% LongMemEval Score" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemPalace.tech — Guides, Benchmarks & Comparisons",
    description:
      "The independent resource hub for MemPalace, the AI memory system that scored 100% on LongMemEval.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.mempalace.tech" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
