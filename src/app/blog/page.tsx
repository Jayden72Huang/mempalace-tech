import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Memory Blog — MemPalace.tech",
  description:
    "Tutorials, benchmarks, and deep dives on AI memory systems. Learn how persistent memory works, compare frameworks, and add memory to your AI tools.",
  alternates: { canonical: "https://www.mempalace.tech/blog" },
  openGraph: {
    title: "AI Memory Blog — MemPalace.tech",
    description:
      "Tutorials, benchmarks, and deep dives on AI memory systems. Learn how persistent memory works, compare frameworks, and add memory to your AI tools.",
    url: "https://www.mempalace.tech/blog",
    type: "website",
    siteName: "MemPalace.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Memory Blog — MemPalace.tech",
    description:
      "Tutorials, benchmarks, and deep dives on AI memory systems.",
  },
};

/* ---------- article data ---------- */
interface Article {
  title: string;
  href: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    title: "What Is an AI Memory System? The Complete Guide (2026)",
    href: "/blog/what-is-ai-memory",
    excerpt:
      "Everything you need to know about AI memory systems: how they work, why they matter, and how to choose one.",
    date: "April 2026",
    readTime: "12 min read",
  },
  {
    title: "How to Add Persistent Memory to Claude Code in 5 Minutes",
    href: "/blog/add-memory-to-claude-code",
    excerpt:
      "Step-by-step tutorial to give Claude Code permanent memory using MemPalace's MCP server.",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    title: "Best AI Memory Frameworks in 2026 — Ranked & Compared",
    href: "/blog/best-ai-memory-frameworks-2026",
    excerpt:
      "We tested every major AI memory framework. Here's how they stack up on benchmarks, pricing, and features.",
    date: "April 2026",
    readTime: "10 min read",
  },
];

/* ---------- JSON-LD ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "AI Memory Blog",
  description:
    "Tutorials, benchmarks, and deep dives on AI memory systems.",
  url: "https://www.mempalace.tech/blog",
  publisher: {
    "@type": "Organization",
    name: "MemPalace.tech",
    url: "https://www.mempalace.tech",
  },
  blogPost: articles.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    url: `https://www.mempalace.tech${a.href}`,
    datePublished: "2026-04",
    author: { "@type": "Organization", name: "MemPalace.tech" },
  })),
};

/* ---------- breadcrumb JSON-LD ---------- */
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mempalace.tech" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mempalace.tech/blog" },
  ],
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium">Blog</li>
          </ol>
        </nav>

        {/* ── Page heading ── */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          AI Memory Blog
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Tutorials, benchmarks, and deep dives on AI memory systems &mdash;
          from setup guides to framework comparisons.
        </p>

        {/* ── Article grid ── */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex flex-col rounded-xl border border-card-border bg-card p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="mb-3 flex items-center gap-3 text-xs text-muted">
                <time>{article.date}</time>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-card-border" />
                <span>{article.readTime}</span>
              </span>

              <h2 className="text-lg font-semibold leading-snug text-foreground group-hover:text-accent transition-colors duration-200">
                {article.title}
              </h2>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {article.excerpt}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Read article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
