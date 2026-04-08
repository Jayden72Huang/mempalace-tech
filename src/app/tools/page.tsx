import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Memory Tools Directory — Compare Every Framework",
  description:
    "Compare every AI memory framework: MemPalace, Mem0, Zep, Letta, Cognee, SuperMemory & more. Pricing, benchmarks, features at a glance.",
  alternates: { canonical: "https://www.mempalace.tech/tools" },
  openGraph: {
    title: "AI Memory Tools Directory — Compare Every Framework",
    description:
      "Compare every AI memory framework: MemPalace, Mem0, Zep, Letta, Cognee, SuperMemory & more.",
    url: "https://www.mempalace.tech/tools",
    type: "website",
    siteName: "MemPalace.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Memory Tools Directory — Compare Every Framework",
    description:
      "Compare every AI memory framework: MemPalace, Mem0, Zep, Letta, Cognee, SuperMemory & more.",
  },
};

/* ---------- tool data ---------- */
interface Tool {
  name: string;
  emoji: string;
  description: string;
  score: string | null;
  pricing: string;
  deployment: string;
  tags: string[];
  website: string;
  websiteLabel: string;
  comparePage: string | null;
}

const tools: Tool[] = [
  {
    name: "MemPalace",
    emoji: "\u{1F3DB}\u{FE0F}",
    description:
      "Verbatim storage with vector search. Created by Milla Jovovich & Ben Sigman. First 100% LongMemEval score.",
    score: "96.6% raw",
    pricing: "Free",
    deployment: "Local",
    tags: ["open-source", "MIT", "local-first", "MCP"],
    website: "https://github.com/milla-jovovich/mempalace",
    websiteLabel: "GitHub",
    comparePage: "/guides/setup",
  },
  {
    name: "Mem0",
    emoji: "\u{1F9E0}",
    description:
      "LLM-powered memory extraction. YC-backed with $24M funding. Enterprise-grade managed service.",
    score: "~85%",
    pricing: "$0\u2013249/mo",
    deployment: "Cloud",
    tags: ["cloud", "enterprise", "YC-backed"],
    website: "https://mem0.ai",
    websiteLabel: "mem0.ai",
    comparePage: "/compare/mempalace-vs-mem0",
  },
  {
    name: "Zep / Graphiti",
    emoji: "\u{1F578}\u{FE0F}",
    description:
      "Temporal knowledge graph for agent memory. Tracks how facts change over time with entity relationships.",
    score: "~85%",
    pricing: "$0\u2013475/mo",
    deployment: "Cloud",
    tags: ["cloud", "knowledge-graph", "temporal"],
    website: "https://www.getzep.com",
    websiteLabel: "getzep.com",
    comparePage: "/compare/mempalace-vs-zep",
  },
  {
    name: "Letta (MemGPT)",
    emoji: "\u{1F4DA}",
    description:
      "Hierarchical agent memory with self-editing capabilities. Evolved from the MemGPT research project.",
    score: null,
    pricing: "$0\u2013249/mo",
    deployment: "Self-host / Cloud",
    tags: ["open-source", "self-hostable", "agents"],
    website: "https://www.letta.com",
    websiteLabel: "letta.com",
    comparePage: "/compare/mempalace-vs-letta",
  },
  {
    name: "Cognee",
    emoji: "\u{1F52C}",
    description:
      "Knowledge graph + vector hybrid with 30+ data connectors. Enterprise data integration focus.",
    score: null,
    pricing: "$0\u20131,970/mo",
    deployment: "Cloud / Self-host",
    tags: ["enterprise", "knowledge-graph", "connectors"],
    website: "https://www.cognee.ai",
    websiteLabel: "cognee.ai",
    comparePage: "/compare/mempalace-vs-cognee",
  },
  {
    name: "SuperMemory",
    emoji: "\u{26A1}",
    description:
      "Memory graph + RAG pipeline. Fast retrieval with structured memory relationships.",
    score: "81.6%",
    pricing: "Free tier",
    deployment: "Cloud",
    tags: ["cloud", "RAG", "graph"],
    website: "https://supermemory.ai",
    websiteLabel: "supermemory.ai",
    comparePage: "/compare/mempalace-vs-supermemory",
  },
  {
    name: "LangMem",
    emoji: "\u{1F517}",
    description:
      "Flat key-value + vector memory for the LangGraph ecosystem. Lightweight and composable.",
    score: null,
    pricing: "Free",
    deployment: "Self-host",
    tags: ["open-source", "LangGraph", "lightweight"],
    website: "https://github.com/langchain-ai/langmem",
    websiteLabel: "GitHub",
    comparePage: "/compare/mempalace-vs-langmem",
  },
  {
    name: "Hindsight",
    emoji: "\u{1F50D}",
    description:
      "Multi-strategy retrieval combining multiple memory approaches. Strong benchmark performance.",
    score: "91.4%",
    pricing: "Free tier",
    deployment: "Self-host / Cloud",
    tags: ["multi-strategy", "self-hostable"],
    website: "https://hindsight.dev",
    websiteLabel: "hindsight.dev",
    comparePage: null,
  },
  {
    name: "Pieces",
    emoji: "\u{1F9E9}",
    description:
      "Cross-app developer memory bridge. Captures context across your IDE, browser, and collaboration tools.",
    score: null,
    pricing: "Free tier",
    deployment: "Local + Cloud",
    tags: ["developer", "MCP", "cross-app"],
    website: "https://pieces.app",
    websiteLabel: "pieces.app",
    comparePage: null,
  },
  {
    name: "Personal.ai",
    emoji: "\u{1F4AC}",
    description:
      "Consumer AI companion with persistent memory. Designed for personal knowledge management.",
    score: null,
    pricing: "Freemium",
    deployment: "Cloud",
    tags: ["consumer", "companion", "personal"],
    website: "https://www.personal.ai",
    websiteLabel: "personal.ai",
    comparePage: null,
  },
];

/* ---------- JSON-LD ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "AI Memory Tools Directory",
      description:
        "A comprehensive directory of AI memory frameworks and tools for large language models.",
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: tool.name,
        description: tool.description,
        url: tool.website,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.mempalace.tech",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Memory Tools Directory",
        },
      ],
    },
    {
      "@type": "WebPage",
      name: "AI Memory Tools Directory — Compare Every Framework",
      description:
        "Compare every AI memory framework: MemPalace, Mem0, Zep, Letta, Cognee, SuperMemory & more.",
      url: "https://www.mempalace.tech/tools",
      isPartOf: {
        "@type": "WebSite",
        name: "MemPalace.tech",
        url: "https://www.mempalace.tech",
      },
    },
  ],
};

/* ---------- tag color helper ---------- */
function tagColor(tag: string): string {
  switch (tag) {
    case "open-source":
    case "MIT":
      return "bg-success/15 text-success";
    case "cloud":
    case "enterprise":
      return "bg-info/15 text-info";
    case "YC-backed":
      return "bg-warning/15 text-warning";
    case "local-first":
    case "self-hostable":
      return "bg-accent/15 text-accent";
    default:
      return "bg-foreground/10 text-muted";
  }
}

/* ---------- page ---------- */
export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* breadcrumb */}
        <nav className="mb-8 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Tools</span>
        </nav>

        {/* hero */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            AI Memory Tools Directory{" "}
            <span className="text-muted font-normal">
              — Every Framework Compared
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            The AI memory landscape in 2026 is crowded and moving fast. Vector
            stores, knowledge graphs, hierarchical buffers, temporal trackers
            &mdash; every week a new framework claims to give LLMs &ldquo;perfect
            memory.&rdquo; This directory cuts through the noise: real benchmark
            scores, real pricing, and honest tradeoffs for every major tool we
            could find.
          </p>
          <p className="mt-3 text-sm text-muted/70">
            Last updated: April 2026 &middot; {tools.length} tools listed
          </p>
        </header>

        {/* tool grid */}
        <section aria-label="Tool cards">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <article
                key={tool.name}
                className={`group relative flex flex-col rounded-xl border p-6 transition-colors hover:border-accent/40 ${
                  tool.name === "MemPalace"
                    ? "border-accent/50 bg-accent/5"
                    : "border-card-border bg-card"
                }`}
              >
                {/* header */}
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-2xl"
                      role="img"
                      aria-label={`${tool.name} logo`}
                    >
                      {tool.emoji}
                    </span>
                    <h2
                      className={`text-lg font-semibold ${
                        tool.name === "MemPalace"
                          ? "text-accent"
                          : "text-foreground"
                      }`}
                    >
                      {tool.name}
                    </h2>
                  </div>
                  {tool.name === "MemPalace" && (
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                      Our Pick
                    </span>
                  )}
                </div>

                {/* description */}
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {tool.description}
                </p>

                {/* stats grid */}
                <div className="mb-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-background/60 px-2 py-2">
                    <div className="font-medium text-foreground">
                      {tool.score ?? "N/A"}
                    </div>
                    <div className="text-muted/70">LongMemEval</div>
                  </div>
                  <div className="rounded-lg bg-background/60 px-2 py-2">
                    <div className="font-medium text-foreground">
                      {tool.pricing}
                    </div>
                    <div className="text-muted/70">Pricing</div>
                  </div>
                  <div className="rounded-lg bg-background/60 px-2 py-2">
                    <div className="font-medium text-foreground">
                      {tool.deployment}
                    </div>
                    <div className="text-muted/70">Deploy</div>
                  </div>
                </div>

                {/* tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${tagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* spacer to push links to bottom */}
                <div className="mt-auto flex items-center gap-3 border-t border-card-border/50 pt-4 text-sm">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    {tool.websiteLabel}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  {tool.comparePage && (
                    <Link
                      href={tool.comparePage}
                      className="text-muted hover:text-foreground transition-colors"
                    >
                      {tool.name === "MemPalace"
                        ? "Setup guide"
                        : "Our comparison"}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* bottom CTA section */}
        <section className="mt-16 rounded-xl border border-card-border bg-card p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Missing a tool?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
            The AI memory space evolves weekly. If you know a framework we
            haven&apos;t listed, open an issue or drop us a line.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/milla-jovovich/mempalace/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Submit on GitHub
            </a>
            <a
              href="mailto:hello@mempalace.tech?subject=Tool%20suggestion%20for%20the%20directory"
              className="rounded-lg border border-card-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            >
              Email a suggestion
            </a>
          </div>
        </section>

        {/* internal links */}
        <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <Link
            href="/benchmarks"
            className="hover:text-foreground transition-colors"
          >
            Benchmark methodology &rarr;
          </Link>
          <Link
            href="/compare/mempalace-vs-mem0"
            className="hover:text-foreground transition-colors"
          >
            MemPalace vs Mem0 deep-dive &rarr;
          </Link>
          <Link
            href="/quiz"
            className="hover:text-foreground transition-colors"
          >
            Which memory tool is right for you? &rarr;
          </Link>
        </nav>
      </main>
    </>
  );
}
