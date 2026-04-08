import type { Metadata } from "next";
import Link from "next/link";
import ContinueReading from "@/components/ContinueReading";

export const metadata: Metadata = {
  title: "MemPalace vs Zep (2026): Free Local-First vs $475/mo Knowledge Graph",
  description:
    "100% vs ~85% on LongMemEval. Local verbatim storage vs temporal knowledge graph. MIT license vs VC-backed cloud. Full benchmark, pricing & architecture comparison.",
  alternates: { canonical: "https://www.mempalace.tech/compare/mempalace-vs-zep" },
  keywords: [
    "mempalace vs zep",
    "zep alternative",
    "graphiti vs mempalace",
    "mempalace vs graphiti",
    "ai memory comparison",
    "zep ai memory",
    "temporal knowledge graph alternative",
    "LongMemEval benchmark",
    "persistent ai memory",
    "local ai memory",
  ],
  openGraph: {
    title: "MemPalace vs Zep (2026): Free Local-First vs $475/mo Knowledge Graph",
    description: "100% vs ~85% on LongMemEval. Local-first vs temporal knowledge graph. Full benchmark, pricing & architecture comparison.",
    url: "https://www.mempalace.tech/compare/mempalace-vs-zep",
    type: "article",
    images: [{ url: "/images/comparison.png", width: 1200, height: 675, alt: "MemPalace vs Zep comparison" }],
    siteName: "MemPalace.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemPalace vs Zep (2026): Free Local-First vs $475/mo Knowledge Graph",
    description: "100% vs ~85% on LongMemEval. Local verbatim storage vs Neo4j temporal graph. Full breakdown with our recommendation.",
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
        "MemPalace vs Zep (Graphiti): Which AI Memory System Should You Choose in 2026?",
      description:
        "In-depth comparison of MemPalace and Zep/Graphiti covering benchmarks, pricing, architecture, temporal knowledge graphs, and features.",
      author: { "@type": "Organization", name: "MemPalace.tech" },
      publisher: { "@type": "Organization", name: "MemPalace.tech" },
      datePublished: "2026-04-08",
      dateModified: "2026-04-08",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.mempalace.tech/compare/mempalace-vs-zep",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mempalace.tech" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.mempalace.tech/compare" },
        { "@type": "ListItem", position: 3, name: "MemPalace vs Zep" },
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
          name: "Is MemPalace really free compared to Zep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MemPalace is MIT-licensed and completely free. The only optional cost is ~$0.001 per query if you enable Haiku reranking. Zep offers a free open-source version, but the cloud platform ranges from $0 to $475/month depending on the tier.",
          },
        },
        {
          "@type": "Question",
          name: "What is Graphiti and how does it relate to Zep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Graphiti is Zep's open-source temporal knowledge graph engine. It builds entity-relationship graphs that track how facts change over time. Zep Cloud is the hosted platform built around Graphiti, adding managed Neo4j storage, cloud APIs, and enterprise features on top of the core graph engine.",
          },
        },
        {
          "@type": "Question",
          name: "Which system has better benchmark scores — MemPalace or Zep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace scores 100% on LongMemEval (hybrid mode) and 96.6% in raw mode. Zep/Graphiti scores approximately 85% on the same benchmark. The gap comes from MemPalace's verbatim storage approach, which preserves all context rather than extracting structured entities.",
          },
        },
        {
          "@type": "Question",
          name: "Can Zep run locally like MemPalace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zep's Graphiti engine is open-source and can be self-hosted, but it requires running Neo4j as a dependency. Zep Cloud features like managed infrastructure and enterprise APIs are cloud-only. MemPalace is fully local by default — it uses embedded SQLite and ChromaDB with zero external dependencies.",
          },
        },
        {
          "@type": "Question",
          name: "Does MemPalace support knowledge graphs like Zep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace uses SQLite-based temporal triples for entity relationships, which provides knowledge graph-like capabilities without requiring a separate graph database. Zep uses Neo4j for full graph traversal, which is more powerful for complex multi-hop entity queries but adds operational complexity and cost.",
          },
        },
        {
          "@type": "Question",
          name: "What happens to my data with MemPalace vs Zep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace stores everything verbatim in local SQLite and ChromaDB — your data never leaves your machine. Zep Cloud sends data to hosted infrastructure for entity extraction and graph storage. The self-hosted Graphiti version keeps data local but requires managing Neo4j yourself.",
          },
        },
        {
          "@type": "Question",
          name: "Is MemPalace better than Zep for agent memory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For raw accuracy and cost, yes — MemPalace scores 100% on LongMemEval versus Zep's ~85%, and costs $0 versus up to $475/month. However, Zep excels at structured entity tracking and temporal reasoning through its knowledge graph. Choose MemPalace for accuracy and privacy; choose Zep if you need rich entity-relationship queries and temporal fact tracking.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate from Zep to MemPalace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no official migration tool, but both systems use standard formats. Zep's entity data can be exported as JSON and ingested through MemPalace's MCP tools. Since MemPalace stores raw conversations rather than extracted entities, you would want to re-ingest original conversation data for best results.",
          },
        },
      ],
    },
  ],
};

/* ---------- data for comparison table ---------- */
type Winner = "mempalace" | "zep" | "tie";

interface ComparisonRow {
  feature: string;
  mempalace: string;
  zep: string;
  winner: Winner;
}

const comparisonData: ComparisonRow[] = [
  { feature: "LongMemEval Score", mempalace: "100% (hybrid) / 96.6% (raw)", zep: "~85%", winner: "mempalace" },
  { feature: "Pricing", mempalace: "Free (MIT)", zep: "$0–475/mo (open-source + cloud tiers)", winner: "mempalace" },
  { feature: "Runs Locally", mempalace: "Yes, fully — zero dependencies", zep: "Graphiti OSS (requires Neo4j)", winner: "mempalace" },
  { feature: "Storage Approach", mempalace: "Verbatim + AAAK compression", zep: "Structured entity extraction", winner: "mempalace" },
  { feature: "Knowledge Graph", mempalace: "SQLite temporal triples", zep: "Neo4j (Graphiti)", winner: "zep" },
  { feature: "Temporal Tracking", mempalace: "Timestamp-based retrieval", zep: "First-class temporal edges", winner: "zep" },
  { feature: "Entity Relationships", mempalace: "Implicit via semantic search", zep: "Explicit graph traversal", winner: "zep" },
  { feature: "Vector DB", mempalace: "ChromaDB (embedded)", zep: "Integrated in Zep Cloud", winner: "tie" },
  { feature: "MCP Tools", mempalace: "19 tools", zep: "Basic MCP support", winner: "mempalace" },
  { feature: "Architecture", mempalace: "Wings/Rooms/Halls/Closets/Drawers", zep: "Entity → Relationship → Episode", winner: "tie" },
  { feature: "API Keys Required", mempalace: "Optional (for reranking)", zep: "Required for cloud; Neo4j for self-host", winner: "mempalace" },
  { feature: "Language", mempalace: "Python", zep: "Python / TypeScript", winner: "tie" },
  { feature: "License", mempalace: "MIT", zep: "Apache 2.0 (Graphiti) / Proprietary (Cloud)", winner: "mempalace" },
  { feature: "Deployment Model", mempalace: "Local-first, pip install", zep: "Cloud-first, self-host option", winner: "tie" },
  { feature: "Funding", mempalace: "Open-source community", zep: "VC-backed", winner: "zep" },
];

function winnerClass(winner: Winner, side: "mempalace" | "zep"): string {
  if (winner === side) return "text-success font-semibold";
  if (winner === "tie") return "text-foreground";
  return "text-muted";
}

/* ========== PAGE ========== */
export default function MemPalaceVsZepPage() {
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
          <span className="text-foreground">MemPalace vs Zep</span>
        </nav>

        {/* ---------- H1 ---------- */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          MemPalace vs Zep: Free Local Memory vs Temporal Knowledge Graph in{" "}
          <span className="text-accent">2026</span>
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl">
          Two fundamentally different approaches to AI memory. One stores everything
          verbatim and scores 100% on LongMemEval. The other builds a temporal knowledge
          graph that tracks how facts change over time. Here is the complete comparison.
        </p>

        <p className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm leading-relaxed text-muted speakable">
          <strong className="text-foreground">MemPalace vs Zep:</strong> MemPalace is a free,
          local-first AI memory system that scores 100% on LongMemEval by storing conversations
          verbatim with AAAK compression and a 4-layer retrieval stack. Zep (and its Graphiti engine)
          is a VC-backed temporal knowledge graph platform scoring ~85% on LongMemEval that extracts
          structured entities and tracks how facts change over time using Neo4j. MemPalace costs
          $0/year with MIT licensing; Zep Cloud costs $0&ndash;475/month. MemPalace runs entirely
          locally; Zep is cloud-first with a self-hostable open-source core.
        </p>

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
                  You want <strong className="text-foreground">maximum accuracy</strong> &mdash; 100% LongMemEval
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  Privacy is paramount &mdash; <strong className="text-foreground">fully local, no Neo4j needed</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Zero cost</strong>, no cloud tiers or graph DB ops
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  You need <strong className="text-foreground">verbatim storage</strong> &mdash; nothing is extracted or discarded
                </li>
              </ul>
            </div>

            {/* Zep card */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-l-4 border-l-info">
              <h3 className="text-lg font-semibold text-info mb-3">
                Choose Zep if&hellip;
              </h3>
              <ul className="space-y-2 text-sm text-muted leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You need <strong className="text-foreground">temporal knowledge graphs</strong> with entity tracking
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Entity relationships</strong> and how facts change over time matter most
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You want a <strong className="text-foreground">managed cloud platform</strong> with enterprise tiers
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  Your agents need <strong className="text-foreground">structured multi-hop queries</strong> across entities
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
                  <th className="px-4 py-3 font-semibold text-info">Zep / Graphiti</th>
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
                    <td className={`px-4 py-3 ${winnerClass(row.winner, "zep")}`}>
                      {row.zep}
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

            {/* Zep arch */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="text-lg font-semibold text-info mb-3">
                Zep &mdash; Temporal Knowledge Graph
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Zep&apos;s core innovation is <strong className="text-foreground">Graphiti</strong>,
                a temporal knowledge graph engine that extracts structured entities from conversations
                and builds relationship edges between them. Instead of storing raw text, it creates
                a <strong className="text-foreground">living graph</strong> that tracks how facts
                evolve over time.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">
                The architecture centers on <strong className="text-foreground">Neo4j</strong> for
                graph storage and traversal, enabling multi-hop queries like &ldquo;What changed
                about Project X since last month?&rdquo; Zep Cloud adds managed infrastructure,
                vector search, and enterprise APIs on top of the Graphiti engine.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-info/15 px-2 py-1 text-info">Neo4j</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Graphiti</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Temporal Edges</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Entity Extraction</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Cloud-first</span>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-accent">Key philosophical difference:</strong>{" "}
              MemPalace stores everything verbatim and makes it findable through spatial
              organization and multi-layer semantic retrieval. Zep extracts structured entities
              and builds explicit relationship graphs, trading raw completeness for
              structured queryability. The benchmark results suggest the &ldquo;store
              everything&rdquo; approach yields significantly higher recall, while Zep&apos;s
              graph approach excels at answering specific entity-relationship questions.
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
              multi-hop inference, and knowledge updates over time &mdash; areas where
              Zep&apos;s temporal graph should theoretically shine.
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
                <p className="text-xs text-muted uppercase tracking-wider mb-1">Zep / Graphiti</p>
                <p className="text-3xl font-bold text-muted">~85%</p>
                <p className="text-xs text-muted mt-1">Temporal knowledge graph</p>
              </div>
            </div>
          </div>

          {/* Why the gap matters */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">
              Why the Gap Matters
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Zep&apos;s temporal knowledge graph is designed to track entity changes over time,
              which should give it an advantage on temporal reasoning questions. Yet MemPalace
              still outperforms by ~15 percentage points. The reason: entity extraction is
              inherently lossy. When an LLM decides which facts to extract and which to discard,
              it inevitably misses context that later turns out to be relevant.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              MemPalace&apos;s verbatim approach sidesteps this problem entirely. By storing
              everything and relying on a 4-layer retrieval stack to find the right memories
              at query time, it achieves higher recall without needing to predict which facts
              will matter in the future.
            </p>
          </div>

          {/* Temporal reasoning */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Temporal Reasoning
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Temporal reasoning &mdash; answering questions like &ldquo;What was the user&apos;s
              opinion on X before they changed their mind?&rdquo; &mdash; is Zep&apos;s core
              strength. Its knowledge graph explicitly tracks when facts were created, updated,
              or invalidated. MemPalace handles temporal queries through timestamp-based
              retrieval and conversation ordering, which is less structured but still effective:
              the raw conversation history naturally preserves the sequence of belief changes.
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">Methodology note:</strong>{" "}
              All benchmark numbers for MemPalace come from the project&apos;s published
              evaluation suite. Zep numbers are based on publicly available reports and
              community benchmarks. Conditions may not be perfectly identical &mdash;
              interpret the gap directionally rather than as an exact delta.
            </p>
            <p className="mt-4 text-sm font-medium text-foreground speakable">
              In head-to-head comparison, MemPalace outperforms Zep/Graphiti by approximately
              15 percentage points on LongMemEval. Despite Zep&apos;s purpose-built temporal
              knowledge graph, MemPalace&apos;s verbatim storage and multi-layer retrieval
              achieves higher overall accuracy across all question categories.
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
                  <span className="text-success shrink-0">&#10003;</span>
                  No Neo4j or graph DB to manage
                </li>
                <li className="flex gap-2">
                  <span className="text-muted shrink-0">&middot;</span>
                  Optional: ~$0.001/query for Haiku reranking
                </li>
              </ul>
            </div>

            {/* Zep pricing */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-t-4 border-t-info">
              <h3 className="text-lg font-semibold mb-1">Zep</h3>
              <p className="text-3xl font-bold text-info mb-4">$0&ndash;$475<span className="text-sm font-normal text-muted">/month</span></p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Free: Graphiti open-source (self-host Neo4j)
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Starter: Free tier (limited usage)
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Growth: usage-based pricing
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Enterprise: up to $475/mo + custom pricing
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-5">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Total Cost of Ownership: Beyond the Sticker Price
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              Zep&apos;s self-hosted option is free in license cost, but running Neo4j adds
              significant operational overhead. A production Neo4j instance typically requires
              4&ndash;8 GB of RAM and dedicated maintenance. With Zep Cloud, you avoid the ops
              burden but pay $0&ndash;475/month depending on usage.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-success font-semibold shrink-0">MemPalace:</span>
                <span className="text-muted">
                  ~$0.70/year total (optional Haiku reranking). $0 if using raw mode only.
                  No external databases to manage.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-info font-semibold shrink-0">Zep Cloud:</span>
                <span className="text-muted">
                  $0&ndash;$5,700/year depending on tier, plus infrastructure costs if self-hosting
                  Neo4j (~$50&ndash;200/month for a production instance).
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
                desc: "MemPalace leads on LongMemEval with 100% — 15 points above Zep's ~85%. If raw accuracy on memory recall is your priority, the numbers are decisive.",
              },
              {
                title: "Privacy and data sovereignty matter",
                desc: "Everything stays on your local machine. SQLite databases, ChromaDB vectors, AAAK-compressed archives — no cloud, no Neo4j, no data leaving your filesystem.",
              },
              {
                title: "You want zero operational complexity",
                desc: "pip install, connect to Claude Code, done. No Neo4j to deploy, no graph database to tune, no cloud credentials to rotate. MemPalace's embedded architecture means fewer moving parts.",
              },
              {
                title: "You use Claude Code or MCP clients",
                desc: "MemPalace was built for MCP-native workflows. Its 19 tools integrate directly with Claude Code, Claude Desktop, and any MCP client — giving your AI fine-grained memory operations out of the box.",
              },
              {
                title: "You want verbatim memory, not summaries",
                desc: "MemPalace stores everything exactly as it was said. Nothing is extracted, summarized, or discarded by an LLM. You get full-fidelity recall of exact conversations.",
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

        <section className="mt-12" aria-labelledby="when-zep">
          <h2 id="when-zep" className="text-2xl font-bold mb-6">
            When to Choose Zep
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "You need rich entity-relationship queries",
                desc: "Zep's Neo4j-powered knowledge graph enables multi-hop traversal queries like 'Show me all projects related to person X that changed status in Q1.' If structured entity queries are your primary use case, Zep's graph is purpose-built for this.",
              },
              {
                title: "Temporal fact tracking is critical",
                desc: "Graphiti's first-class temporal edges explicitly track when facts were created, updated, or invalidated. If your agents need to reason about how entities changed over time with structured precision, Zep has a native advantage.",
              },
              {
                title: "You want a managed cloud platform",
                desc: "Zep Cloud handles Neo4j operations, scaling, and maintenance. If you don't want to manage any infrastructure and prefer a hosted API, Zep's cloud offering removes that burden.",
              },
              {
                title: "You're building multi-agent systems",
                desc: "Zep's shared knowledge graph can serve as a centralized memory layer across multiple agents. Its entity-relationship model maps well to multi-agent architectures where agents need to share structured context.",
              },
              {
                title: "You need structured data extraction",
                desc: "If your use case is more about extracting and querying structured facts from conversations (rather than recalling exact wording), Zep's entity extraction pipeline is designed precisely for this pattern.",
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
                q: "Is MemPalace really free compared to Zep?",
                a: "Yes. MemPalace is MIT-licensed and completely free to use with no restrictions. The only optional cost is approximately $0.001 per query if you enable Haiku reranking. Zep offers a free open-source Graphiti engine (but you need to run Neo4j yourself), while Zep Cloud tiers range from free to $475/month.",
              },
              {
                q: "What is Graphiti and how does it relate to Zep?",
                a: "Graphiti is Zep's open-source temporal knowledge graph engine. It builds entity-relationship graphs that track how facts change over time using Neo4j as the underlying graph database. Zep Cloud is the hosted commercial platform built around Graphiti, adding managed infrastructure, cloud APIs, and enterprise features.",
              },
              {
                q: "Which system has better benchmark scores?",
                a: "MemPalace leads with 100% on LongMemEval (hybrid mode) and 96.6% in raw mode. Zep/Graphiti scores approximately 85% on the same benchmark. Despite Zep's purpose-built temporal tracking, MemPalace's verbatim storage approach achieves higher overall recall.",
              },
              {
                q: "Can Zep run locally like MemPalace?",
                a: "Partially. Zep's Graphiti engine is open-source (Apache 2.0) and can be self-hosted, but it requires running Neo4j as a dependency — a resource-intensive graph database. Zep Cloud features are cloud-only. MemPalace is fully local by default using embedded SQLite and ChromaDB with zero external dependencies.",
              },
              {
                q: "Does MemPalace support knowledge graphs like Zep?",
                a: "MemPalace uses SQLite-based temporal triples for lightweight entity relationship tracking, which provides knowledge graph-like capabilities without needing Neo4j. For complex multi-hop graph traversals across thousands of entities, Zep's Neo4j-powered approach is more powerful — but it comes with significantly higher operational complexity.",
              },
              {
                q: "What happens to my data with each system?",
                a: "With MemPalace, every conversation is stored verbatim in local SQLite and ChromaDB — your data never leaves your machine. With Zep Cloud, conversations are sent to hosted infrastructure where LLMs extract entities and relationships into a managed Neo4j graph. The self-hosted Graphiti version keeps data local but requires you to manage Neo4j yourself.",
              },
              {
                q: "Is MemPalace better than Zep for agent memory?",
                a: "For raw accuracy and cost, yes — MemPalace scores 100% on LongMemEval versus Zep's ~85%, and costs $0 versus up to $475/month. However, Zep has genuine strengths in structured entity tracking, temporal fact management, and multi-agent knowledge sharing through its graph architecture. The best choice depends on whether you prioritize accuracy and simplicity (MemPalace) or structured entity queries and temporal reasoning (Zep).",
              },
              {
                q: "Can I migrate from Zep to MemPalace?",
                a: "There is no official migration tool yet. Since Zep stores structured entities while MemPalace stores raw conversations, a direct entity-to-entity migration loses context. For best results, re-ingest your original conversation data through MemPalace's MCP tools rather than trying to convert Zep's extracted entities.",
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
            and give your AI perfect memory &mdash; no Neo4j, no cloud, no cost.
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
          and public GitHub repositories. Zep website:{" "}
          <a href="https://getzep.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">getzep.com</a>.
        </p>
      </article>

      <ContinueReading exclude="vs-zep" />
    </>
  );
}
