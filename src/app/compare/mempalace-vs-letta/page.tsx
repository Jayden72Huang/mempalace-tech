import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContinueReading from "@/components/ContinueReading";

export const metadata: Metadata = {
  title: "MemPalace vs Letta/MemGPT (2026): Verbatim Storage vs Self-Editing Memory",
  description:
    "MemPalace scores 100% on LongMemEval with verbatim storage. Letta (formerly MemGPT) uses self-editing tiered memory. We compare architecture, pricing, benchmarks & tell you which to pick.",
  alternates: { canonical: "https://www.mempalace.tech/compare/mempalace-vs-letta" },
  keywords: [
    "mempalace vs letta",
    "memgpt alternative",
    "letta vs mempalace",
    "memgpt vs mempalace",
    "ai memory comparison",
    "letta ai memory",
    "self-editing memory",
    "LongMemEval benchmark",
    "persistent ai memory",
  ],
  openGraph: {
    title: "MemPalace vs Letta/MemGPT (2026): Verbatim Storage vs Self-Editing Memory",
    description: "100% LongMemEval vs unpublished. Local-first vs self-host/cloud. Full benchmark, pricing & architecture comparison.",
    url: "https://www.mempalace.tech/compare/mempalace-vs-letta",
    type: "article",
    images: [{ url: "/images/comparison.png", width: 1200, height: 675, alt: "MemPalace vs Letta comparison" }],
    siteName: "MemPalace.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemPalace vs Letta/MemGPT (2026): Verbatim Storage vs Self-Editing Memory",
    description: "100% LongMemEval vs unpublished. Local-first vs self-host/cloud. Full breakdown with our recommendation.",
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
        "MemPalace vs Letta (MemGPT): Which AI Memory System Should You Choose in 2026?",
      description:
        "In-depth comparison of MemPalace and Letta (formerly MemGPT) covering benchmarks, pricing, architecture, and features.",
      author: { "@type": "Organization", name: "MemPalace.tech" },
      publisher: { "@type": "Organization", name: "MemPalace.tech" },
      datePublished: "2026-04-08",
      dateModified: "2026-04-08",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.mempalace.tech/compare/mempalace-vs-letta",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mempalace.tech" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.mempalace.tech/compare" },
        { "@type": "ListItem", position: 3, name: "MemPalace vs Letta" },
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
          name: "Is MemPalace really free compared to Letta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MemPalace is MIT-licensed and completely free. Letta offers a free tier for individual developers, but its Team and Enterprise plans cost $49-249/month. MemPalace's only optional cost is ~$0.001 per query if you enable Haiku reranking.",
          },
        },
        {
          "@type": "Question",
          name: "What is Letta and how does it relate to MemGPT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Letta is the commercial evolution of the MemGPT research project from UC Berkeley. The original MemGPT paper introduced the concept of agents that manage their own memory through tool calls. Letta builds on this with a production-ready platform offering self-hosted and cloud deployment options.",
          },
        },
        {
          "@type": "Question",
          name: "How does Letta's self-editing memory differ from MemPalace's verbatim storage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Letta lets the AI agent decide what to store and retrieve through tool calls across three tiers: core memory (active working memory), archival memory (long-term vector store), and recall memory (conversation history). MemPalace stores everything verbatim and uses multi-layer retrieval to find relevant memories. The key difference is who decides what to remember: the agent (Letta) or the retrieval system (MemPalace).",
          },
        },
        {
          "@type": "Question",
          name: "Has Letta published LongMemEval benchmark scores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As of April 2026, Letta has not published official LongMemEval benchmark scores. MemPalace scores 100% in hybrid mode and 96.6% in raw mode on the same benchmark. Without published numbers, a direct benchmark comparison is not possible.",
          },
        },
        {
          "@type": "Question",
          name: "Can Letta run locally like MemPalace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Letta is open-source and self-hostable. However, self-hosting Letta requires running a server process with its own dependencies. MemPalace is designed local-first with embedded SQLite and ChromaDB — no server process needed, everything runs in-process.",
          },
        },
        {
          "@type": "Question",
          name: "Does MemPalace work with Claude Code like Letta works with agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MemPalace includes 19 MCP tools and integrates natively with Claude Code, Claude Desktop, and any MCP-compatible client. Letta is designed as an agent framework where memory is managed through the agent's own tool calls, which works well for autonomous agent workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Is MemPalace better than Letta for AI memory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For benchmark accuracy and cost, MemPalace has a clear edge — 100% on LongMemEval, fully free, and local-first. Letta's advantage is its agent-native architecture where the AI manages its own memory, which can be more natural for autonomous agent workflows. Choose MemPalace for maximum recall accuracy and privacy; choose Letta for agent-first architectures where the AI needs to self-manage its memory.",
          },
        },
        {
          "@type": "Question",
          name: "Should I switch from Letta/MemGPT to MemPalace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Consider switching if you need verified benchmark accuracy (100% on LongMemEval), want zero cloud costs, or prefer verbatim storage that preserves full conversational context. Stay with Letta if you're building autonomous agents that need self-editing memory, require the tiered core/archival/recall architecture, or are deeply invested in Letta's agent framework ecosystem.",
          },
        },
      ],
    },
  ],
};

/* ---------- data for comparison table ---------- */
type Winner = "mempalace" | "letta" | "tie";

interface ComparisonRow {
  feature: string;
  mempalace: string;
  letta: string;
  winner: Winner;
}

const comparisonData: ComparisonRow[] = [
  { feature: "LongMemEval Score", mempalace: "100% (hybrid) / 96.6% (raw)", letta: "Not published", winner: "mempalace" },
  { feature: "Pricing", mempalace: "Free (MIT)", letta: "$0–249/mo", winner: "mempalace" },
  { feature: "License", mempalace: "MIT", letta: "Apache 2.0", winner: "tie" },
  { feature: "Runs Locally", mempalace: "Yes, fully embedded", letta: "Self-host (server process)", winner: "mempalace" },
  { feature: "Cloud Option", mempalace: "No (local-first)", letta: "Yes (Letta Cloud)", winner: "letta" },
  { feature: "Storage Approach", mempalace: "Verbatim + AAAK compression", letta: "Agent self-editing (tiered)", winner: "mempalace" },
  { feature: "Memory Architecture", mempalace: "Wings/Rooms/Halls/Closets/Drawers", letta: "Core / Archival / Recall", winner: "tie" },
  { feature: "Who Decides What to Remember", mempalace: "Retrieval system (store all)", letta: "The agent (self-editing)", winner: "tie" },
  { feature: "Vector DB", mempalace: "ChromaDB (embedded)", letta: "Configurable (Chroma, pgvector)", winner: "tie" },
  { feature: "MCP Tools", mempalace: "19 tools", letta: "Agent tool calls", winner: "mempalace" },
  { feature: "Agent Framework", mempalace: "MCP-native tools", letta: "Built-in agent runtime", winner: "letta" },
  { feature: "Multi-user Support", mempalace: "Per-user palaces", letta: "Multi-agent, multi-user", winner: "letta" },
  { feature: "Language", mempalace: "Python", letta: "Python", winner: "tie" },
  { feature: "Origin", mempalace: "Open-source community", letta: "UC Berkeley research (MemGPT)", winner: "tie" },
  { feature: "Deployment Complexity", mempalace: "pip install + go", letta: "Docker / server setup", winner: "mempalace" },
];

function winnerClass(winner: Winner, side: "mempalace" | "letta"): string {
  if (winner === side) return "text-success font-semibold";
  if (winner === "tie") return "text-foreground";
  return "text-muted";
}

/* ========== PAGE ========== */
export default function MemPalaceVsLettaPage() {
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
          <span className="text-foreground">MemPalace vs Letta</span>
        </nav>

        {/* ---------- H1 ---------- */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          MemPalace vs Letta (MemGPT): Verbatim Storage vs Self-Editing Memory in{" "}
          <span className="text-accent">2026</span>
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl">
          Two fundamentally different philosophies of AI memory. One stores everything
          verbatim and lets retrieval do the work. The other lets the agent decide what
          to remember. Here is how they compare.
        </p>

        <p className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm leading-relaxed text-muted speakable">
          <strong className="text-foreground">MemPalace vs Letta (MemGPT):</strong> MemPalace is a free, local-first AI memory system that scores 100% on LongMemEval by storing conversations verbatim with AAAK compression. Letta, evolved from the UC Berkeley MemGPT research project, uses a self-editing tiered memory architecture where the agent manages its own core, archival, and recall memory through tool calls. MemPalace costs $0/year with an MIT license; Letta offers a free tier up to $249/month. Both are open-source, but MemPalace runs fully embedded while Letta requires a server process.
        </p>

        {/* Comparison hero image */}
        <div className="mt-8 overflow-hidden rounded-xl border border-card-border">
          <Image
            src="/images/comparison.png"
            alt="MemPalace vs Letta — local crystal palace versus self-editing agent memory comparison"
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
                  You want <strong className="text-foreground">verified benchmark accuracy</strong> &mdash; 100% LongMemEval
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Nothing should be summarized away</strong> &mdash; verbatim storage
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Zero cost</strong>, no server to manage
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  You use <strong className="text-foreground">Claude Code / MCP</strong> workflows
                </li>
              </ul>
            </div>

            {/* Letta card */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-l-4 border-l-info">
              <h3 className="text-lg font-semibold text-info mb-3">
                Choose Letta if&hellip;
              </h3>
              <ul className="space-y-2 text-sm text-muted leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You want <strong className="text-foreground">agents that manage their own memory</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Tiered memory</strong> (core + archival + recall) fits your use case
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You need a full <strong className="text-foreground">agent framework</strong>, not just memory
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  Academic roots matter &mdash; <strong className="text-foreground">UC Berkeley research</strong>
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
                  <th className="px-4 py-3 font-semibold text-info">Letta (MemGPT)</th>
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
                    <td className={`px-4 py-3 ${winnerClass(row.winner, "letta")}`}>
                      {row.letta}
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
                from fast keyword lookup to full semantic reranking. The retrieval system
                decides what is relevant &mdash; the human and AI never have to manually
                manage what gets stored or forgotten.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">SQLite</span>
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">ChromaDB</span>
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">AAAK</span>
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">19 MCP Tools</span>
                <span className="rounded bg-accent/15 px-2 py-1 text-accent">Local-first</span>
              </div>
            </div>

            {/* Letta arch */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="text-lg font-semibold text-info mb-3">
                Letta &mdash; Self-Editing Agent Memory
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Letta uses a <strong className="text-foreground">tiered memory system</strong> inspired
                by operating system memory hierarchies. <strong className="text-foreground">Core memory</strong> is
                the agent&apos;s active working memory (always in context).{" "}
                <strong className="text-foreground">Archival memory</strong> is a long-term vector
                store the agent can search. <strong className="text-foreground">Recall memory</strong> stores
                conversation history for later retrieval.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">
                The key innovation: the <strong className="text-foreground">agent manages its own memory</strong> through
                tool calls. It decides what to write to core memory, what to archive,
                and what to retrieve &mdash; mimicking how a human consciously decides
                what to remember.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-info/15 px-2 py-1 text-info">Core Memory</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Archival Memory</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Recall Memory</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Self-Editing</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Open-Source</span>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-accent">Key philosophical difference:</strong>{" "}
              MemPalace stores everything and trusts its retrieval system to surface
              the right memories at the right time. Letta trusts the agent itself to
              decide what is worth remembering. MemPalace&apos;s approach guarantees
              nothing is lost; Letta&apos;s approach gives the agent more autonomy but
              risks the agent forgetting something it decided was unimportant. The
              benchmark results suggest the &ldquo;store everything&rdquo; approach
              yields higher recall accuracy.
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
                <p className="text-xs text-muted uppercase tracking-wider mb-1">Letta (MemGPT)</p>
                <p className="text-3xl font-bold text-muted">&mdash;</p>
                <p className="text-xs text-muted mt-1">Not published as of April 2026</p>
              </div>
            </div>
          </div>

          {/* Benchmark context */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">
              Why Letta Lacks Published Benchmarks
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Letta&apos;s architecture is designed around <strong className="text-foreground">agent autonomy</strong> rather than
              standardized memory recall benchmarks. The agent decides what to store and
              retrieve, making deterministic benchmarking more complex. The original
              MemGPT paper focused on demonstrating that agents <em>could</em> manage
              their own memory effectively, rather than competing on standardized recall
              metrics.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              This does not mean Letta performs poorly &mdash; it means we cannot make
              a direct numerical comparison. MemPalace&apos;s published 100% LongMemEval
              score stands as the only verified number between the two systems.
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">Methodology note:</strong>{" "}
              MemPalace benchmark numbers come from the project&apos;s published
              evaluation suite. Letta has not published comparable LongMemEval results
              as of April 2026. We will update this page if and when Letta publishes
              official benchmark scores.
            </p>
            <p className="mt-4 text-sm font-medium text-foreground speakable">
              MemPalace is the only system between the two with published LongMemEval scores, achieving 100% in hybrid mode and 96.6% in raw mode. Letta (formerly MemGPT) has not published comparable benchmark results as of April 2026.
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

            {/* Letta pricing */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-t-4 border-t-info">
              <h3 className="text-lg font-semibold mb-1">Letta (MemGPT)</h3>
              <p className="text-3xl font-bold text-info mb-4">$0&ndash;$249<span className="text-sm font-normal text-muted">/month</span></p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Free: open-source self-host
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Developer: free tier (Letta Cloud)
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Team: $49/mo per seat
                </li>
                <li className="flex gap-2">
                  <span className="text-info shrink-0">&middot;</span>
                  Enterprise: $249/mo + custom pricing
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-5">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Self-host vs. fully embedded: hidden costs
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              Both systems can be self-hosted for free, but the operational overhead differs
              significantly:
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-success font-semibold shrink-0">MemPalace:</span>
                <span className="text-muted">
                  <code className="text-xs bg-card px-1 py-0.5 rounded">pip install</code> and go.
                  SQLite + ChromaDB are embedded &mdash; no Docker, no server process, no database to manage.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-info font-semibold shrink-0">Letta:</span>
                <span className="text-muted">
                  Self-hosting requires running the Letta server, configuring a database backend,
                  and managing the agent runtime. More powerful, but more operational overhead.
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
                title: "You want verified benchmark accuracy",
                desc: "MemPalace is the only system of the two with published LongMemEval scores — 100% in hybrid mode. If provable recall accuracy matters, the numbers speak for themselves.",
              },
              {
                title: "You want true zero-config local memory",
                desc: "pip install, connect to Claude Code, done. No Docker, no server process, no database configuration. Everything is embedded and runs in-process.",
              },
              {
                title: "Nothing should be forgotten",
                desc: "MemPalace's verbatim storage means the retrieval system — not the AI — decides what's relevant at query time. No information is ever discarded or summarized away.",
              },
              {
                title: "You use Claude Code or MCP workflows",
                desc: "MemPalace was built MCP-native with 19 tools. It integrates directly with Claude Code, Claude Desktop, and any MCP-compatible client out of the box.",
              },
              {
                title: "You want zero ongoing costs",
                desc: "MIT license, no subscription tiers, no usage limits. The only optional cost is sub-penny Haiku reranking for maximum accuracy.",
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

        <section className="mt-12" aria-labelledby="when-letta">
          <h2 id="when-letta" className="text-2xl font-bold mb-6">
            When to Choose Letta
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "You're building autonomous agents",
                desc: "Letta was designed as an agent framework first, memory system second. If your use case is autonomous agents that need to manage their own context window, Letta's self-editing memory is purpose-built for this.",
              },
              {
                title: "You want the agent to control its memory",
                desc: "Letta's core innovation is that the agent decides what to store, update, and retrieve through tool calls. This is a fundamentally different paradigm from MemPalace's store-everything approach — and may be preferable for agents that need editorial control over their own state.",
              },
              {
                title: "You need tiered memory hierarchies",
                desc: "Core memory (always in context), archival memory (searchable long-term store), and recall memory (conversation history) map naturally to many agent architectures. If you think in these tiers, Letta will feel intuitive.",
              },
              {
                title: "Academic provenance matters",
                desc: "Letta evolved from the MemGPT research paper at UC Berkeley, which introduced the concept of OS-inspired memory management for LLMs. If you value research-backed architecture, Letta has strong academic roots.",
              },
              {
                title: "You want a cloud-managed option",
                desc: "Letta Cloud offers a hosted platform so you don't have to run infrastructure. If self-hosting is not an option and you need managed agent memory, Letta has you covered.",
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
                q: "Is MemPalace really free compared to Letta?",
                a: "Yes. MemPalace is MIT-licensed and completely free to use with no restrictions. Letta's open-source version is also free to self-host (Apache 2.0), but Letta Cloud's Team and Enterprise plans cost $49-249/month. MemPalace's only optional cost is approximately $0.001 per query if you enable Haiku reranking for enhanced accuracy.",
              },
              {
                q: "What is Letta and how does it relate to MemGPT?",
                a: "Letta is the commercial evolution of the MemGPT research project from UC Berkeley. The original MemGPT paper introduced the concept of agents that manage their own memory through tool calls, inspired by operating system virtual memory. Letta builds on this with a production-ready platform offering both self-hosted and cloud deployment options.",
              },
              {
                q: "How does Letta's self-editing memory work?",
                a: "Letta gives the AI agent tools to manage three tiers of memory. Core memory is always in the context window — the agent can read and edit it directly. Archival memory is a vector store for long-term facts the agent can search and write to. Recall memory stores conversation history. The agent uses these tools to actively decide what to remember, update, and forget.",
              },
              {
                q: "Has Letta published LongMemEval benchmark scores?",
                a: "As of April 2026, Letta has not published official LongMemEval benchmark scores. MemPalace scores 100% in hybrid mode and 96.6% in raw mode on the same benchmark. Without published numbers from Letta, a direct numerical comparison is not possible.",
              },
              {
                q: "Can Letta run locally like MemPalace?",
                a: "Yes, Letta is open-source and self-hostable. However, self-hosting Letta requires running a server process with its own dependencies and database configuration. MemPalace is designed local-first with embedded SQLite and ChromaDB — no server process needed, everything runs in-process with a simple pip install.",
              },
              {
                q: "Which system is better for building agents?",
                a: "Letta was designed as an agent framework and gives agents direct control over their memory through tool calls. MemPalace was designed as a memory system that integrates with existing agent workflows via MCP. If you're building autonomous agents that need self-editing memory, Letta may be the better fit. If you want to add perfect recall memory to an existing Claude Code or MCP workflow, MemPalace is the natural choice.",
              },
              {
                q: "Is MemPalace better than Letta for AI memory?",
                a: "For verified benchmark accuracy and zero-cost operation, MemPalace has a clear edge — 100% on LongMemEval, fully free, and zero-config local. Letta's advantage is its agent-native architecture where the AI manages its own memory, plus cloud deployment options. Choose MemPalace for maximum recall accuracy and privacy; choose Letta for agent-first architectures where the AI needs autonomous memory control.",
              },
              {
                q: "Should I switch from Letta/MemGPT to MemPalace?",
                a: "Consider switching if you need verified benchmark accuracy (100% on LongMemEval), want zero cloud costs, prefer verbatim storage that preserves full context, or use Claude Code and MCP workflows. Stay with Letta if you're building autonomous agents that need self-editing memory, require the tiered core/archival/recall architecture, or are deeply invested in Letta's agent framework ecosystem.",
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
          Last updated: April 8, 2026. Data sourced from official documentation, the MemGPT research paper,
          and public GitHub repositories.
        </p>
      </article>

      <ContinueReading exclude="vs-letta" />
    </>
  );
}
