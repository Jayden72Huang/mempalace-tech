import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContinueReading from "@/components/ContinueReading";

export const metadata: Metadata = {
  title: "MemPalace vs SuperMemory (2026): 96.6% vs 81.6% — Full Comparison",
  description:
    "96.6% vs 81.6% on LongMemEval. Local-first vs cloud. MIT license vs free tier. We compare benchmarks, pricing & architecture — and tell you which to pick.",
  alternates: { canonical: "https://www.mempalace.tech/compare/mempalace-vs-supermemory" },
  keywords: [
    "mempalace vs supermemory",
    "supermemory alternative",
    "ai memory comparison",
    "supermemory vs mempalace",
    "ai memory system",
    "LongMemEval benchmark",
    "persistent ai memory",
    "memory graph RAG",
  ],
  openGraph: {
    title: "MemPalace vs SuperMemory (2026): 96.6% vs 81.6% — Full Comparison",
    description: "96.6% vs 81.6% on LongMemEval. Local-first vs cloud. Full benchmark, pricing & architecture comparison.",
    url: "https://www.mempalace.tech/compare/mempalace-vs-supermemory",
    type: "article",
    images: [{ url: "/images/comparison.png", width: 1200, height: 675, alt: "MemPalace vs SuperMemory comparison" }],
    siteName: "MemPalace.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemPalace vs SuperMemory (2026): 96.6% vs 81.6% — Full Comparison",
    description: "96.6% vs 81.6% on LongMemEval. Local-first vs cloud. Full breakdown with our recommendation.",
    images: ["/images/comparison.png"],
  },
};

/* ---------- structured data ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "MemPalace vs SuperMemory: Which AI Memory System Should You Choose in 2026?",
      description:
        "In-depth comparison of MemPalace and SuperMemory covering benchmarks, pricing, architecture, and features.",
      author: { "@type": "Organization", name: "MemPalace.tech" },
      publisher: { "@type": "Organization", name: "MemPalace.tech" },
      datePublished: "2026-04-08",
      dateModified: "2026-04-08",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.mempalace.tech/compare/mempalace-vs-supermemory",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mempalace.tech" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.mempalace.tech/compare" },
        { "@type": "ListItem", position: 3, name: "MemPalace vs SuperMemory" },
      ],
    },
    {
      "@type": "WebPage",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".speakable"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is MemPalace really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MemPalace is MIT-licensed and completely free. The only optional cost is ~$0.001 per query if you enable Haiku reranking for extra accuracy.",
          },
        },
        {
          "@type": "Question",
          name: "Can SuperMemory run locally like MemPalace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SuperMemory is primarily a cloud-hosted service. It does not offer a fully local deployment option. MemPalace, by contrast, is designed local-first — every feature works without network access.",
          },
        },
        {
          "@type": "Question",
          name: "Which system has better benchmark scores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace scores 100% on LongMemEval (hybrid mode) and 96.6% in raw mode. SuperMemory scores 81.6% on LongMemEval. The 15-point gap reflects MemPalace's verbatim storage advantage over SuperMemory's graph-based RAG approach.",
          },
        },
        {
          "@type": "Question",
          name: "Does MemPalace work with Claude Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MemPalace includes 19 MCP (Model Context Protocol) tools and integrates natively with Claude Code, Claude Desktop, and any MCP-compatible client.",
          },
        },
        {
          "@type": "Question",
          name: "What happens to my data with each system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace stores everything verbatim in local SQLite and ChromaDB — your data never leaves your machine. SuperMemory processes data through its cloud-hosted memory graph and RAG pipeline, meaning your data is sent to their infrastructure.",
          },
        },
        {
          "@type": "Question",
          name: "How does SuperMemory's memory graph compare to MemPalace's architecture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SuperMemory uses a graph-based memory storage with a RAG retrieval pipeline, focusing on structured relationships between memories for fast retrieval. MemPalace uses a spatial Memory Palace metaphor (Wings/Rooms/Halls/Closets/Drawers) with verbatim storage and a 4-layer retrieval stack. MemPalace preserves complete context while SuperMemory optimizes for structured relationships.",
          },
        },
        {
          "@type": "Question",
          name: "Is MemPalace better than SuperMemory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For benchmark accuracy, privacy, and cost, yes — MemPalace scores 96.6% on LongMemEval versus SuperMemory's 81.6%, runs entirely locally, and is completely free under MIT license. However, SuperMemory has advantages in structured memory relationships and fast cloud-based retrieval. The best choice depends on whether you prioritize accuracy and privacy (MemPalace) or structured graph-based retrieval in the cloud (SuperMemory).",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between MemPalace and SuperMemory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The fundamental difference is architectural: MemPalace stores all conversation data verbatim using a spatial Memory Palace hierarchy and retrieves via a 4-layer stack, while SuperMemory uses a memory graph combined with a RAG pipeline to structure and retrieve memories. MemPalace preserves full context at the cost of more storage; SuperMemory focuses on structured relationships for faster retrieval but may lose nuanced details.",
          },
        },
      ],
    },
  ],
};

/* ---------- data for comparison table ---------- */
type Winner = "mempalace" | "supermemory" | "tie";

interface ComparisonRow {
  feature: string;
  mempalace: string;
  supermemory: string;
  winner: Winner;
}

const comparisonData: ComparisonRow[] = [
  { feature: "LongMemEval Score", mempalace: "100% (hybrid) / 96.6% (raw)", supermemory: "81.6%", winner: "mempalace" },
  { feature: "Pricing", mempalace: "Free (MIT)", supermemory: "Free tier available", winner: "mempalace" },
  { feature: "Runs Locally", mempalace: "Yes, fully", supermemory: "No (cloud-hosted)", winner: "mempalace" },
  { feature: "Deployment", mempalace: "Local-first", supermemory: "Cloud", winner: "mempalace" },
  { feature: "Storage Approach", mempalace: "Verbatim + AAAK compression", supermemory: "Graph-based memory storage", winner: "mempalace" },
  { feature: "Retrieval Method", mempalace: "4-layer stack (L0-L3)", supermemory: "RAG pipeline", winner: "mempalace" },
  { feature: "Memory Organization", mempalace: "Wings/Rooms/Halls/Closets/Drawers", supermemory: "Memory graph relationships", winner: "tie" },
  { feature: "Data Privacy", mempalace: "Fully local, never leaves machine", supermemory: "Cloud-processed", winner: "mempalace" },
  { feature: "MCP Tools", mempalace: "19 tools", supermemory: "Not specified", winner: "mempalace" },
  { feature: "API Keys Required", mempalace: "Optional (for reranking)", supermemory: "Required for cloud", winner: "mempalace" },
  { feature: "Vector DB", mempalace: "ChromaDB (embedded)", supermemory: "Cloud-hosted", winner: "tie" },
  { feature: "License", mempalace: "MIT", supermemory: "Proprietary (free tier)", winner: "mempalace" },
  { feature: "Language", mempalace: "Python", supermemory: "N/A (cloud service)", winner: "tie" },
  { feature: "Retrieval Speed", mempalace: "Local (sub-second)", supermemory: "Fast (cloud-optimized)", winner: "tie" },
  { feature: "Embedding Model", mempalace: "all-MiniLM-L6-v2 / bge-large", supermemory: "Cloud-hosted", winner: "tie" },
];

function winnerClass(winner: Winner, side: "mempalace" | "supermemory"): string {
  if (winner === side) return "text-success font-semibold";
  if (winner === "tie") return "text-foreground";
  return "text-muted";
}

/* ========== PAGE ========== */
export default function MemPalaceVsSuperMemoryPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        {/* ---------- breadcrumb ---------- */}
        <nav className="mb-8 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">MemPalace vs SuperMemory</span>
        </nav>

        {/* ---------- H1 ---------- */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          MemPalace vs SuperMemory: Which AI Memory System Should You Choose in{" "}
          <span className="text-accent">2026</span>?
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl">
          Two AI memory systems with different philosophies. One stores everything
          verbatim and scores 96.6% on LongMemEval. The other combines a memory graph
          with RAG for structured retrieval at 81.6%.
          Here is everything you need to decide.
        </p>

        <p className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm leading-relaxed text-muted speakable">
          <strong className="text-foreground">MemPalace vs SuperMemory:</strong> MemPalace is a free, local-first AI memory system that scores 96.6% on LongMemEval (100% in hybrid mode) by storing conversations verbatim. SuperMemory combines a memory graph with a RAG pipeline for structured retrieval, scoring 81.6% on LongMemEval. MemPalace is MIT-licensed and runs entirely locally; SuperMemory is a cloud-hosted service with a free tier. MemPalace uses a spatial Memory Palace architecture with 19 MCP tools, while SuperMemory focuses on fast structured memory relationships.
        </p>

        {/* Comparison hero image */}
        <div className="mt-8 overflow-hidden rounded-xl border border-card-border">
          <Image
            src="/images/comparison.png"
            alt="MemPalace vs SuperMemory — local crystal palace versus cloud memory graph comparison"
            width={1200}
            height={675}
            className="w-full"
            priority
          />
        </div>

        {/* ==================== QUICK VERDICT ==================== */}
        <section className="mt-12" aria-labelledby="verdict">
          <h2 id="verdict" className="text-2xl font-bold mb-6">
            Quick Verdict (TL;DR)
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* MemPalace card */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-l-4 border-l-accent">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Choose MemPalace if&hellip;
              </h3>
              <ul className="space-y-2 text-sm text-muted leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  You want <strong className="text-foreground">maximum accuracy</strong> &mdash; 96.6% raw / 100% hybrid on LongMemEval
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  Privacy is paramount &mdash; <strong className="text-foreground">fully local-first</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Zero cost</strong>, MIT license, no vendor lock-in
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  You need <strong className="text-foreground">verbatim storage</strong> &mdash; nothing is summarized away
                </li>
              </ul>
            </div>

            {/* SuperMemory card */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-l-4 border-l-info">
              <h3 className="text-lg font-semibold text-info mb-3">
                Choose SuperMemory if&hellip;
              </h3>
              <ul className="space-y-2 text-sm text-muted leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You want <strong className="text-foreground">structured memory relationships</strong> via graph
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Cloud-hosted convenience</strong> matters most
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You prefer a <strong className="text-foreground">RAG pipeline</strong> approach to retrieval
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You want to get started quickly with a <strong className="text-foreground">free tier</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ==================== COMPARISON TABLE ==================== */}
        <section className="mt-16" aria-labelledby="features">
          <h2 id="features" className="text-2xl font-bold mb-6">
            Feature-by-Feature Comparison
          </h2>

          <div className="overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card text-left">
                  <th className="px-4 py-3 font-semibold text-muted">Feature</th>
                  <th className="px-4 py-3 font-semibold text-accent">MemPalace</th>
                  <th className="px-4 py-3 font-semibold text-info">SuperMemory</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-background" : "bg-card/50"}
                  >
                    <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className={`px-4 py-3 ${winnerClass(row.winner, "mempalace")}`}>
                      {row.mempalace}
                    </td>
                    <td className={`px-4 py-3 ${winnerClass(row.winner, "supermemory")}`}>
                      {row.supermemory}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            Cells highlighted in <span className="text-success font-semibold">green</span> indicate the stronger option for that row. Data as of April 2026.
          </p>
        </section>

        {/* ==================== ARCHITECTURE ==================== */}
        <section className="mt-16" aria-labelledby="architecture">
          <h2 id="architecture" className="text-2xl font-bold mb-6">
            Architecture Comparison
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* MemPalace arch */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="text-lg font-semibold text-accent mb-3">
                MemPalace &mdash; The Memory Palace
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                MemPalace uses the <strong className="text-foreground">Memory Palace metaphor</strong>:
                Wings, Rooms, Halls, Closets, and Drawers. Every conversation is stored{" "}
                <em>verbatim</em>, then organized spatially and compressed with{" "}
                <strong className="text-foreground">AAAK</strong> (30x lossless compression).
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">
                The system runs a <strong className="text-foreground">4-layer retrieval stack</strong> (L0&ndash;L3):
                from fast keyword lookup to full semantic reranking. At startup, it wakes up
                with roughly <strong className="text-foreground">170 tokens</strong> of context &mdash;
                just enough to orient the AI without flooding the prompt window.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">SQLite</span>
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">ChromaDB</span>
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">AAAK</span>
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">19 MCP Tools</span>
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">Local-first</span>
              </div>
            </div>

            {/* SuperMemory arch */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="text-lg font-semibold text-info mb-3">
                SuperMemory &mdash; Memory Graph + RAG
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                SuperMemory takes a <strong className="text-foreground">graph-based approach</strong> to
                memory storage, building structured relationships between memories. It
                combines this memory graph with a{" "}
                <strong className="text-foreground">RAG (Retrieval-Augmented Generation) pipeline</strong>{" "}
                for fast, structured retrieval.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">
                The architecture is <strong className="text-foreground">cloud-hosted</strong>,
                focusing on speed and structured memory relationships rather than verbatim
                storage. The RAG pipeline enables efficient retrieval across the memory
                graph, though the graph abstraction can lose nuanced context that
                verbatim storage preserves.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-info/15 px-2 py-1 text-info">Memory Graph</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">RAG Pipeline</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Cloud-hosted</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Structured Retrieval</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Free Tier</span>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-accent">Key philosophical difference:</strong>{" "}
              MemPalace stores everything verbatim then makes it findable through spatial
              organization and multi-layer retrieval. SuperMemory builds a memory graph
              with structured relationships and uses a RAG pipeline to retrieve relevant
              context. The benchmark results suggest the &ldquo;store everything&rdquo;
              approach yields significantly higher recall &mdash; 96.6% vs 81.6% on
              LongMemEval &mdash; while the graph-based approach offers faster structured
              lookups at the cost of some accuracy.
            </p>
          </div>
        </section>

        {/* ==================== BENCHMARKS ==================== */}
        <section className="mt-16" aria-labelledby="benchmarks">
          <h2 id="benchmarks" className="text-2xl font-bold mb-6">
            Benchmark Deep Dive
          </h2>

          {/* LongMemEval */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">
              LongMemEval <span className="text-sm text-muted font-normal">(500 questions)</span>
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              <a href="https://arxiv.org/abs/2410.10813" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">LongMemEval</a> tests how well a memory system can answer questions across long
              conversation histories. It covers fact recall, temporal reasoning,
              multi-hop inference, and knowledge updates over time.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-card-border bg-card p-5">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">MemPalace</p>
                <p className="text-3xl font-bold text-success">100%</p>
                <p className="text-xs text-muted mt-1">Hybrid mode (with Haiku reranking)</p>
                <p className="text-2xl font-bold text-success mt-2">96.6%</p>
                <p className="text-xs text-muted mt-1">Raw mode (zero API cost)</p>
              </div>
              <div className="rounded-lg border border-card-border bg-card p-5">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">SuperMemory</p>
                <p className="text-3xl font-bold text-info">81.6%</p>
                <p className="text-xs text-muted mt-1">Memory graph + RAG pipeline</p>
              </div>
            </div>
          </div>

          {/* Score breakdown */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">
              Score Breakdown
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              The 15-point gap between MemPalace (96.6% raw) and SuperMemory (81.6%)
              on LongMemEval reflects a fundamental architectural trade-off.
              MemPalace&apos;s verbatim storage preserves every detail, ensuring high recall
              even on nuanced, multi-hop questions. SuperMemory&apos;s graph-based approach
              excels at structured lookups but can miss context that falls outside
              the graph&apos;s relationship model.
            </p>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-accent font-medium">MemPalace (raw)</span>
                    <span className="text-success font-semibold">96.6%</span>
                  </div>
                  <div className="h-3 rounded-full bg-card-border overflow-hidden">
                    <div className="h-full rounded-full bg-accent" style={{ width: "96.6%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-info font-medium">SuperMemory</span>
                    <span className="text-info font-semibold">81.6%</span>
                  </div>
                  <div className="h-3 rounded-full bg-card-border overflow-hidden">
                    <div className="h-full rounded-full bg-info" style={{ width: "81.6%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">Methodology note:</strong>{" "}
              All benchmark numbers for MemPalace come from the project&apos;s published
              evaluation suite. SuperMemory&apos;s 81.6% score is based on publicly available
              reports. Conditions may not be perfectly identical &mdash;
              interpret the gap directionally rather than as an exact delta.
            </p>
            <p className="mt-4 text-sm font-medium text-foreground speakable">
              In head-to-head comparison, MemPalace outperforms SuperMemory by 15 percentage points on LongMemEval (96.6% vs 81.6% in raw mode, 100% vs 81.6% in hybrid mode). Both systems have published scores, making this one of the more directly comparable matchups in the AI memory space.
            </p>
          </div>
        </section>

        {/* ==================== PRICING ==================== */}
        <section className="mt-16" aria-labelledby="pricing">
          <h2 id="pricing" className="text-2xl font-bold mb-6">
            Pricing Analysis
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* MemPalace pricing */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-t-4 border-t-success">
              <h3 className="text-lg font-semibold mb-1">MemPalace</h3>
              <p className="text-3xl font-bold text-success mb-4">$0<span className="text-sm font-normal text-muted">/year</span></p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-success shrink-0">&#10003;</span>
                  MIT license, unlimited use
                </li>
                <li className="flex gap-2">
                  <span className="text-success shrink-0">&#10003;</span>
                  All 19 MCP tools included
                </li>
                <li className="flex gap-2">
                  <span className="text-success shrink-0">&#10003;</span>
                  Local embedding (no API needed)
                </li>
                <li className="flex gap-2">
                  <span className="text-muted shrink-0">&middot;</span>
                  Optional: ~$0.001/query for Haiku reranking
                </li>
              </ul>
            </div>

            {/* SuperMemory pricing */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-t-4 border-t-info">
              <h3 className="text-lg font-semibold mb-1">SuperMemory</h3>
              <p className="text-3xl font-bold text-info mb-4">Free<span className="text-sm font-normal text-muted"> tier available</span></p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Free tier with usage limits
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Cloud-hosted (no self-hosting option)
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Pricing may scale with usage
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  See <a href="https://supermemory.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">supermemory.ai</a> for current plans
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-5">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Cost Comparison: Long-term Ownership
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              MemPalace is <strong className="text-foreground">permanently free</strong> under MIT license &mdash; you
              own the software and your data with zero ongoing costs. SuperMemory offers a free
              tier, but as usage grows, cloud-hosted services typically introduce paid tiers.
              With MemPalace, there are no surprises: the only optional cost is sub-penny
              Haiku reranking at ~$0.001 per query.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-success font-semibold shrink-0">MemPalace:</span>
                <span className="text-muted">
                  $0/year forever. ~$0.70/year if you opt into Haiku reranking.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-info font-semibold shrink-0">SuperMemory:</span>
                <span className="text-muted">
                  Free tier available. Paid plans likely as usage scales beyond free limits.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ==================== WHEN TO CHOOSE ==================== */}
        <section className="mt-16" aria-labelledby="when-mempalace">
          <h2 id="when-mempalace" className="text-2xl font-bold mb-6">
            When to Choose MemPalace
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "You want the highest benchmark scores",
                desc: "MemPalace leads with 96.6% on LongMemEval (raw) and 100% in hybrid mode versus SuperMemory's 81.6%. If accuracy is your top priority, the 15-point gap is decisive.",
              },
              {
                title: "Privacy is paramount",
                desc: "Everything stays on your local machine. SQLite databases, ChromaDB vectors, AAAK-compressed archives — none of it leaves your filesystem. SuperMemory processes data in the cloud.",
              },
              {
                title: "You don't want vendor lock-in",
                desc: "MIT license, standard formats, no cloud dependency. You own your data and your infrastructure forever. No risk of service changes or shutdown.",
              },
              {
                title: "You use Claude Code or MCP clients",
                desc: "MemPalace was built for MCP-native workflows. Its 19 tools integrate directly with Claude Code, Claude Desktop, and any MCP client. SuperMemory does not offer the same MCP integration depth.",
              },
              {
                title: "You need verbatim memory",
                desc: "MemPalace stores every conversation word-for-word. Graph-based systems like SuperMemory abstract memories into structured relationships, which can lose nuanced context.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12" aria-labelledby="when-supermemory">
          <h2 id="when-supermemory" className="text-2xl font-bold mb-6">
            When to Choose SuperMemory
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "You want structured memory relationships",
                desc: "SuperMemory's graph-based architecture excels at building and traversing structured relationships between memories. If your use case benefits from explicit connections between concepts, the memory graph approach has merit.",
              },
              {
                title: "You prefer cloud-hosted convenience",
                desc: "No local infrastructure to manage. SuperMemory handles hosting, scaling, and maintenance. Just sign up and start using it — ideal if you don't want to run anything locally.",
              },
              {
                title: "RAG pipeline is your preferred retrieval pattern",
                desc: "If your team is already invested in RAG-based architectures, SuperMemory's RAG pipeline will feel familiar. The retrieval pattern integrates naturally with existing RAG workflows.",
              },
              {
                title: "You want to start with a free tier",
                desc: "SuperMemory offers a free tier to get started without commitment. You can evaluate the system before deciding whether to scale up — though MemPalace is permanently free.",
              },
              {
                title: "Speed of structured lookups is critical",
                desc: "SuperMemory's graph-based retrieval is optimized for fast lookups across structured memory relationships. If your queries are well-structured and graph-traversal suits your access patterns, retrieval can be very fast.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-info/15 text-sm font-bold text-info">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ==================== FAQ ==================== */}
        <section className="mt-16" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Is MemPalace really free?",
                a: "Yes. MemPalace is MIT-licensed and completely free to use with no restrictions. The only optional cost is approximately $0.001 per query if you enable Haiku reranking for enhanced accuracy. In raw mode, the system runs entirely on local resources at zero cost.",
              },
              {
                q: "Can SuperMemory run locally like MemPalace?",
                a: "No. SuperMemory is a cloud-hosted service and does not offer a self-hosted or local deployment option. MemPalace is designed local-first from the ground up; every feature works without network access.",
              },
              {
                q: "Which system has better benchmark scores?",
                a: "MemPalace leads on LongMemEval with 100% in hybrid mode and 96.6% in raw mode, compared to SuperMemory's 81.6%. The 15-point gap in raw mode reflects MemPalace's verbatim storage advantage over SuperMemory's graph-based RAG approach.",
              },
              {
                q: "Does MemPalace work with Claude Code?",
                a: "Yes. MemPalace includes 19 MCP (Model Context Protocol) tools and integrates natively with Claude Code, Claude Desktop, and any MCP-compatible client. You can install it with a single pip command and start using memory tools immediately.",
              },
              {
                q: "What happens to my data with each system?",
                a: "With MemPalace, everything is stored locally in SQLite and ChromaDB — your data never leaves your machine. With SuperMemory, your data is processed and stored in their cloud-hosted memory graph and RAG infrastructure.",
              },
              {
                q: "How does SuperMemory's memory graph compare to MemPalace's architecture?",
                a: "SuperMemory builds a graph of structured relationships between memories and uses a RAG pipeline to retrieve relevant context. MemPalace uses a spatial Memory Palace hierarchy (Wings/Rooms/Halls/Closets/Drawers) with verbatim storage and a 4-layer retrieval stack (L0-L3). MemPalace preserves complete context while SuperMemory optimizes for structured relationship traversal.",
              },
              {
                q: "Is MemPalace better than SuperMemory?",
                a: "For benchmark accuracy, privacy, and cost, yes — MemPalace scores 96.6% on LongMemEval versus SuperMemory's 81.6%, runs entirely locally, and is completely free under MIT license. However, SuperMemory has advantages in structured memory relationships and cloud-hosted convenience. The best choice depends on whether you prioritize accuracy and privacy (MemPalace) or structured graph-based retrieval in the cloud (SuperMemory).",
              },
              {
                q: "What is the difference between MemPalace and SuperMemory?",
                a: "The fundamental difference is architectural: MemPalace stores all conversation data verbatim using a spatial Memory Palace hierarchy and retrieves via a 4-layer stack, while SuperMemory uses a memory graph combined with a RAG pipeline to structure and retrieve memories. MemPalace preserves full context at the cost of more local storage; SuperMemory focuses on structured relationships for faster graph-based retrieval but may lose nuanced details not captured in the graph model.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group rounded-lg border border-card-border bg-card"
              >
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:text-accent list-none flex items-center justify-between">
                  {item.q}
                  <span className="ml-2 text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-sm text-muted leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ==================== BOTTOM CTA ==================== */}
        <section className="mt-16 rounded-lg border border-accent/30 bg-accent/5 p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Ready to try MemPalace?</h2>
          <p className="text-sm text-muted mb-6 max-w-lg mx-auto">
            Get started in under 2 minutes. Install with pip, connect to Claude Code,
            and give your AI perfect memory &mdash; for free.
          </p>
          <div className="flex flex-col gap-3 items-center sm:flex-row sm:justify-center">
            <Link
              href="/guides/setup"
              className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Setup Guide &rarr;
            </Link>
            <a
              href="https://github.com/milla-jovovich/mempalace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-card-border px-6 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground hover:border-foreground/20"
            >
              View on GitHub &#8599;
            </a>
          </div>
        </section>

        {/* ==================== LAST UPDATED ==================== */}
        <p className="mt-12 text-center text-xs text-muted">
          Last updated: April 8, 2026. Data sourced from official documentation, published benchmarks,
          and public repositories.
        </p>
      </article>

      <ContinueReading exclude="vs-supermemory" />
    </>
  );
}
