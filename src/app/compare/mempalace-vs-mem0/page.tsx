import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MemPalace vs Mem0 — AI Memory Comparison 2026",
  description:
    "MemPalace vs Mem0: benchmarks, pricing, architecture compared. MemPalace scores 100% on LongMemEval vs Mem0's 85%. Free vs $19-249/mo.",
  alternates: { canonical: "https://www.mempalace.tech/compare/mempalace-vs-mem0" },
  keywords: [
    "mempalace vs mem0",
    "mem0 alternative",
    "ai memory comparison",
    "mem0 vs mempalace",
    "ai memory system",
    "LongMemEval benchmark",
    "persistent ai memory",
  ],
  openGraph: {
    title: "MemPalace vs Mem0 — AI Memory Comparison 2026",
    description: "MemPalace scores 100% on LongMemEval vs Mem0's 85%. Free local-first vs $19-249/mo cloud. Full comparison.",
    url: "https://www.mempalace.tech/compare/mempalace-vs-mem0",
    type: "article",
    images: [{ url: "/images/comparison.png", width: 1200, height: 675, alt: "MemPalace vs Mem0 comparison" }],
    siteName: "MemPalace.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemPalace vs Mem0 — AI Memory Comparison 2026",
    description: "MemPalace 100% vs Mem0 85% on LongMemEval. Free vs $249/mo. Full breakdown.",
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
        "MemPalace vs Mem0: Which AI Memory System Should You Choose in 2026?",
      description:
        "In-depth comparison of MemPalace and Mem0 covering benchmarks, pricing, architecture, and features.",
      author: { "@type": "Organization", name: "MemPalace.tech" },
      publisher: { "@type": "Organization", name: "MemPalace.tech" },
      datePublished: "2026-04-07",
      dateModified: "2026-04-07",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.mempalace.tech/compare/mempalace-vs-mem0",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mempalace.tech" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.mempalace.tech/compare" },
        { "@type": "ListItem", position: 3, name: "MemPalace vs Mem0" },
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
          name: "Can Mem0 run locally like MemPalace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mem0 has an open-source version that can run locally, but many features (managed knowledge graph, hosted vector DB) are cloud-only. MemPalace is fully local by default.",
          },
        },
        {
          "@type": "Question",
          name: "Which system has better benchmark scores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace scores 100% on LongMemEval (hybrid mode) and 92.9% on ConvoMem. Mem0 scores approximately 85% on LongMemEval and 30-45% on ConvoMem.",
          },
        },
        {
          "@type": "Question",
          name: "Does MemPalace work with Claude Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MemPalace includes 19 MCP tools and integrates natively with Claude Code, Claude Desktop, and any MCP-compatible client.",
          },
        },
        {
          "@type": "Question",
          name: "What happens to my data with each system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace stores everything verbatim in local SQLite and ChromaDB — your data never leaves your machine. Mem0 cloud sends data to hosted infrastructure, though the self-hosted version keeps data local.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate from Mem0 to MemPalace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no official migration tool yet, but since both systems use standard formats (JSON, vector embeddings), manual migration is feasible. MemPalace's MCP tools can ingest conversation data directly.",
          },
        },
        {
          "@type": "Question",
          name: "Is MemPalace better than Mem0?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For benchmark accuracy and cost, yes — MemPalace scores 100% on LongMemEval versus Mem0's ~85%, and runs at zero cost versus $19-249/month. However, Mem0 has advantages in enterprise support, managed cloud infrastructure, and ecosystem maturity with $24M in funding and AWS partnership. The best choice depends on whether you prioritize accuracy and privacy (MemPalace) or managed services and enterprise features (Mem0).",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between MemPalace and Mem0?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The fundamental difference is architectural: MemPalace stores all conversation data verbatim and uses vector search to find relevant memories, while Mem0 uses an LLM to extract key facts and discards the original text. This means MemPalace preserves full context and nuance but uses more storage, while Mem0 is more compact but risks losing information the extraction model deemed unimportant.",
          },
        },
        {
          "@type": "Question",
          name: "Should I switch from Mem0 to MemPalace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Consider switching if you need higher accuracy (100% vs ~85% on LongMemEval), want to eliminate cloud costs ($0 vs $19-249/month), or require full data privacy (MemPalace runs locally). Stay with Mem0 if you need enterprise SLAs, managed infrastructure, or are deeply integrated with Mem0's cloud ecosystem.",
          },
        },
      ],
    },
  ],
};

/* ---------- data for comparison table ---------- */
type Winner = "mempalace" | "mem0" | "tie";

interface ComparisonRow {
  feature: string;
  mempalace: string;
  mem0: string;
  winner: Winner;
}

const comparisonData: ComparisonRow[] = [
  { feature: "LongMemEval Score", mempalace: "100% (hybrid) / 96.6% (raw)", mem0: "~85%", winner: "mempalace" },
  { feature: "ConvoMem Score", mempalace: "92.9%", mem0: "30-45%", winner: "mempalace" },
  { feature: "Pricing", mempalace: "Free (MIT)", mem0: "Free tier / $19 / $249/mo", winner: "mempalace" },
  { feature: "Runs Locally", mempalace: "Yes, fully", mem0: "Open-source version only", winner: "mempalace" },
  { feature: "API Keys Required", mempalace: "Optional (for reranking)", mem0: "Required for cloud", winner: "mempalace" },
  { feature: "Storage Approach", mempalace: "Verbatim + AAAK compression", mem0: "LLM-extracted summaries", winner: "mempalace" },
  { feature: "Knowledge Graph", mempalace: "SQLite temporal triples", mem0: "Neo4j-based (cloud)", winner: "tie" },
  { feature: "Vector DB", mempalace: "ChromaDB (embedded)", mem0: "Qdrant (cloud)", winner: "tie" },
  { feature: "MCP Tools", mempalace: "19 tools", mem0: "MCP support", winner: "mempalace" },
  { feature: "Language", mempalace: "Python", mem0: "Python", winner: "tie" },
  { feature: "License", mempalace: "MIT", mem0: "Apache 2.0", winner: "tie" },
  { feature: "GitHub Stars", mempalace: "7,000+ (2 days)", mem0: "48,000+", winner: "mem0" },
  { feature: "Funding", mempalace: "Open-source community", mem0: "$24M Series A (YC)", winner: "mem0" },
  { feature: "Enterprise Support", mempalace: "Community", mem0: "Yes", winner: "mem0" },
  { feature: "Embedding Model", mempalace: "all-MiniLM-L6-v2 / bge-large", mem0: "Cloud-hosted", winner: "tie" },
];

function winnerClass(winner: Winner, side: "mempalace" | "mem0"): string {
  if (winner === side) return "text-success font-semibold";
  if (winner === "tie") return "text-foreground";
  return "text-muted";
}

/* ========== PAGE ========== */
export default function MemPalaceVsMem0Page() {
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
          <span className="text-foreground">MemPalace vs Mem0</span>
        </nav>

        {/* ---------- H1 ---------- */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          MemPalace vs Mem0: Which AI Memory System Should You Choose in{" "}
          <span className="text-accent">2026</span>?
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl">
          Two open-source AI memory frameworks. One stores everything verbatim and scores
          100% on LongMemEval. The other has $24M in funding and 48k GitHub stars.
          Here is everything you need to decide.
        </p>

        <p className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm leading-relaxed text-muted speakable">
          <strong className="text-foreground">MemPalace vs Mem0:</strong> MemPalace is a free, local-first AI memory system that scores 100% on LongMemEval by storing conversations verbatim. Mem0 is a $24M-funded cloud platform scoring ~85% that uses LLM extraction to decide what to remember. MemPalace costs $0/year; Mem0 costs $19-249/month. Both are open-source, but MemPalace runs entirely locally while Mem0&apos;s advanced features require cloud access.
        </p>

        {/* Comparison hero image */}
        <div className="mt-8 overflow-hidden rounded-xl border border-card-border">
          <Image
            src="/images/comparison.png"
            alt="MemPalace vs Mem0 — local crystal palace versus cloud server farm comparison"
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
                  You want <strong className="text-foreground">maximum accuracy</strong> &mdash; 100% LongMemEval
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  Privacy is paramount &mdash; <strong className="text-foreground">fully local-first</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Zero cost</strong>, no vendor lock-in
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  You need <strong className="text-foreground">verbatim storage</strong> &mdash; nothing is summarized away
                </li>
              </ul>
            </div>

            {/* Mem0 card */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-l-4 border-l-info">
              <h3 className="text-lg font-semibold text-info mb-3">
                Choose Mem0 if&hellip;
              </h3>
              <ul className="space-y-2 text-sm text-muted leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You want a <strong className="text-foreground">managed cloud service</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Ecosystem maturity</strong> matters most
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You need <strong className="text-foreground">enterprise support</strong> and SLAs
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  $24M funded, <strong className="text-foreground">Y Combinator backed</strong>
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
                  <th className="px-4 py-3 font-semibold text-info">Mem0</th>
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
                    <td className={`px-4 py-3 ${winnerClass(row.winner, "mem0")}`}>
                      {row.mem0}
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

            {/* Mem0 arch */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="text-lg font-semibold text-info mb-3">
                Mem0 &mdash; Extracted Memory Graph
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Mem0 takes a different approach: it uses an{" "}
                <strong className="text-foreground">LLM to extract key facts</strong> from
                conversations and stores them in a vector database plus a knowledge graph.
                It is more opinionated about <em>what</em> to remember.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">
                The cloud-first architecture offers{" "}
                <strong className="text-foreground">managed infrastructure</strong> with
                Neo4j for the knowledge graph and Qdrant for vector search.
                A self-hosted option exists but lacks some cloud features.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-info/15 px-2 py-1 text-info">Neo4j</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Qdrant</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">LLM Extraction</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Cloud API</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">MCP Support</span>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-accent">Key philosophical difference:</strong>{" "}
              MemPalace stores everything then makes it findable through spatial organization
              and multi-layer retrieval. Mem0 uses AI to decide what is worth keeping,
              trading completeness for a smaller memory footprint. The benchmark results
              suggest the &ldquo;store everything&rdquo; approach yields significantly
              higher recall.
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
                <p className="text-xs text-muted uppercase tracking-wider mb-1">Mem0</p>
                <p className="text-3xl font-bold text-muted">~85%</p>
                <p className="text-xs text-muted mt-1">Cloud platform</p>
              </div>
            </div>
          </div>

          {/* ConvoMem */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">
              ConvoMem <span className="text-sm text-muted font-normal">(Salesforce Research)</span>
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              <a href="https://arxiv.org/abs/2406.02761" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">ConvoMem</a>, developed by Salesforce Research, evaluates conversational memory
              systems on their ability to track user preferences, recall past exchanges,
              and maintain consistency. It is one of the hardest benchmarks for AI memory.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-card-border bg-card p-5">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">MemPalace</p>
                <p className="text-3xl font-bold text-success">92.9%</p>
                <p className="text-xs text-muted mt-1">Across all ConvoMem categories</p>
              </div>
              <div className="rounded-lg border border-card-border bg-card p-5">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">Mem0</p>
                <p className="text-3xl font-bold text-muted">30&ndash;45%</p>
                <p className="text-xs text-muted mt-1">Varies by category</p>
              </div>
            </div>
          </div>

          {/* LoCoMo */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              LoCoMo <span className="text-sm text-muted font-normal">(Long Conversation Memory)</span>
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              LoCoMo focuses on maintaining coherent memory across very long conversations
              (10k+ turns). It tests a system&apos;s ability to resolve coreferences, track
              evolving beliefs, and handle contradictions over time. MemPalace&apos;s
              verbatim storage approach gives it a structural advantage here, since
              no information is lost to summarization. Mem0&apos;s LLM-extraction pipeline
              can miss nuanced context that becomes relevant later in the conversation.
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">Methodology note:</strong>{" "}
              All benchmark numbers for MemPalace come from the project&apos;s published
              evaluation suite. Mem0 numbers are based on publicly available reports and
              community benchmarks. Conditions may not be perfectly identical &mdash;
              interpret the gap directionally rather than as an exact delta.
            </p>
            <p className="mt-4 text-sm font-medium text-foreground speakable">
              In head-to-head comparison, MemPalace outperforms Mem0 by 15 percentage points on LongMemEval and by approximately 50 percentage points on ConvoMem. These are the two most widely cited AI memory benchmarks as of April 2026.
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

            {/* Mem0 pricing */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-t-4 border-t-info">
              <h3 className="text-lg font-semibold mb-1">Mem0</h3>
              <p className="text-3xl font-bold text-info mb-4">$0&ndash;$249<span className="text-sm font-normal text-muted">/month</span></p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Free tier: 10K memories
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Pro: $19/mo (100K memories)
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Business: $249/mo (1M memories)
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Enterprise: custom pricing + SLA
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-5">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Real-world cost scenario: 6 months of daily AI use
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              Assuming daily usage generating approximately <strong className="text-foreground">19.5M tokens</strong> of
              conversation over 6 months, here is the cost comparison:
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-success font-semibold shrink-0">MemPalace:</span>
                <span className="text-muted">
                  ~$0.70/year total (optional Haiku reranking). $0 if using raw mode only.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-info font-semibold shrink-0">Mem0 Cloud:</span>
                <span className="text-muted">
                  $114&ndash;$1,494/year depending on tier, plus additional API costs for memory operations.
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
                desc: "MemPalace leads on every public benchmark — 100% on LongMemEval and 92.9% on ConvoMem. If accuracy is your priority, the numbers speak for themselves.",
              },
              {
                title: "Privacy is paramount",
                desc: "Everything stays on your local machine. SQLite databases, ChromaDB vectors, AAAK-compressed archives — none of it leaves your filesystem.",
              },
              {
                title: "You don't want vendor lock-in",
                desc: "MIT license, standard formats, no cloud dependency. You own your data and your infrastructure forever.",
              },
              {
                title: "You use Claude Code",
                desc: "MemPalace was built for MCP-native workflows. Its 19 tools integrate directly with Claude Code, Claude Desktop, and any MCP client.",
              },
              {
                title: "You want zero ongoing costs",
                desc: "No subscription, no usage tiers, no API keys required for core functionality. The only optional cost is sub-penny reranking.",
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

        <section className="mt-12" aria-labelledby="when-mem0">
          <h2 id="when-mem0" className="text-2xl font-bold mb-6">
            When to Choose Mem0
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "You need enterprise support and SLAs",
                desc: "Mem0 offers dedicated enterprise plans with guaranteed uptime, priority support, and compliance certifications — important for production workloads at scale.",
              },
              {
                title: "You want a managed cloud solution",
                desc: "If running infrastructure is not your strength, Mem0's hosted platform handles scaling, backups, and maintenance for you.",
              },
              {
                title: "You're building a commercial product",
                desc: "Mem0's $24M in funding (Y Combinator backed) signals long-term viability as a vendor. Apache 2.0 licensing is also commercially friendly.",
              },
              {
                title: "You need the broader ecosystem",
                desc: "Mem0 has integrations with AWS Strands, various LLM providers, and a larger community of commercial users building on top of it.",
              },
              {
                title: "You're already in the Mem0 ecosystem",
                desc: "If your team has existing Mem0 integrations and workflows, the switching cost may not be worth it — especially if enterprise support matters more than raw benchmark scores.",
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
                q: "Can Mem0 run locally like MemPalace?",
                a: "Mem0 has an open-source version that can be self-hosted, but many advanced features — managed knowledge graphs, hosted vector databases, and the full API platform — are cloud-only. MemPalace is designed local-first from the ground up; every feature works without network access.",
              },
              {
                q: "Which system has better benchmark scores?",
                a: "MemPalace leads on all published benchmarks. It scores 100% on LongMemEval (hybrid mode) and 92.9% on ConvoMem compared to Mem0's approximately 85% and 30-45% respectively. The gap is most pronounced on conversational memory tasks.",
              },
              {
                q: "Does MemPalace work with Claude Code?",
                a: "Yes. MemPalace includes 19 MCP (Model Context Protocol) tools and integrates natively with Claude Code, Claude Desktop, and any MCP-compatible client. You can install it with a single pip command and start using memory tools immediately.",
              },
              {
                q: "What happens to my data with each system?",
                a: "With MemPalace, everything is stored locally in SQLite and ChromaDB — your data never leaves your machine. With Mem0 cloud, your conversation data is sent to their hosted infrastructure for processing and storage. The self-hosted Mem0 version keeps data local but requires you to manage Neo4j and Qdrant yourself.",
              },
              {
                q: "Can I migrate from Mem0 to MemPalace?",
                a: "There is no official migration tool yet, but both systems use standard data formats. You can export your Mem0 memories as JSON and use MemPalace's MCP tools to ingest them. The community is working on streamlined migration scripts.",
              },
              {
                q: "Is MemPalace better than Mem0?",
                a: "For benchmark accuracy and cost, yes — MemPalace scores 100% on LongMemEval versus Mem0's ~85%, and runs at zero cost versus $19-249/month. However, Mem0 has advantages in enterprise support, managed cloud infrastructure, and ecosystem maturity with $24M in funding and AWS partnership. The best choice depends on whether you prioritize accuracy and privacy (MemPalace) or managed services and enterprise features (Mem0).",
              },
              {
                q: "What is the difference between MemPalace and Mem0?",
                a: "The fundamental difference is architectural: MemPalace stores all conversation data verbatim and uses vector search to find relevant memories, while Mem0 uses an LLM to extract key facts and discards the original text. This means MemPalace preserves full context and nuance but uses more storage, while Mem0 is more compact but risks losing information the extraction model deemed unimportant.",
              },
              {
                q: "Should I switch from Mem0 to MemPalace?",
                a: "Consider switching if you need higher accuracy (100% vs ~85% on LongMemEval), want to eliminate cloud costs ($0 vs $19-249/month), or require full data privacy (MemPalace runs locally). Stay with Mem0 if you need enterprise SLAs, managed infrastructure, or are deeply integrated with Mem0's cloud ecosystem.",
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
          Last updated: April 7, 2026. Data sourced from official documentation, published benchmarks,
          and public GitHub repositories.
        </p>
      </article>
    </>
  );
}
