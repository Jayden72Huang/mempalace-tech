import type { Metadata } from "next";
import Link from "next/link";
import ContinueReading from "@/components/ContinueReading";

export const metadata: Metadata = {
  title: "MemPalace vs LangMem (2026): Full AI Memory vs Lightweight Building Block",
  description:
    "MemPalace: 100% LongMemEval, 19 MCP tools, hierarchical architecture. LangMem: composable key-value + vector primitives for LangGraph. Both free & open-source — we compare completeness vs composability.",
  alternates: { canonical: "https://www.mempalace.tech/compare/mempalace-vs-langmem" },
  keywords: [
    "mempalace vs langmem",
    "langmem alternative",
    "langgraph memory",
    "langmem vs mempalace",
    "ai memory comparison",
    "langchain memory",
    "langgraph agent memory",
    "persistent ai memory",
  ],
  openGraph: {
    title: "MemPalace vs LangMem (2026): Full AI Memory vs Lightweight Building Block",
    description: "100% LongMemEval vs no published score. Hierarchical palace vs flat key-value. Complete system vs composable primitive.",
    url: "https://www.mempalace.tech/compare/mempalace-vs-langmem",
    type: "article",
    images: [{ url: "/images/comparison.png", width: 1200, height: 675, alt: "MemPalace vs LangMem comparison" }],
    siteName: "MemPalace.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemPalace vs LangMem (2026): Full AI Memory vs Lightweight Building Block",
    description: "Complete AI memory system vs composable LangGraph building block. Both free — full breakdown with our recommendation.",
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
        "MemPalace vs LangMem: Complete AI Memory System or Lightweight Building Block?",
      description:
        "In-depth comparison of MemPalace and LangMem covering architecture, ecosystem, features, and use cases for AI agent memory.",
      author: { "@type": "Organization", name: "MemPalace.tech" },
      publisher: { "@type": "Organization", name: "MemPalace.tech" },
      datePublished: "2026-04-08",
      dateModified: "2026-04-08",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.mempalace.tech/compare/mempalace-vs-langmem",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mempalace.tech" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.mempalace.tech/compare" },
        { "@type": "ListItem", position: 3, name: "MemPalace vs LangMem" },
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
          name: "What is LangMem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LangMem is an open-source memory library from the LangChain team, designed as a lightweight building block for LangGraph agents. It provides flat key-value storage and vector memory primitives that developers compose into their own memory solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Is LangMem a complete memory system like MemPalace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. LangMem is intentionally minimal — it provides composable memory primitives (key-value store, vector memory) that you assemble yourself. MemPalace is a complete, batteries-included system with hierarchical organization, 19 MCP tools, AAAK compression, and multi-layer retrieval out of the box.",
          },
        },
        {
          "@type": "Question",
          name: "Does LangMem have benchmark scores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LangMem has not published scores on standard benchmarks like LongMemEval or ConvoMem. MemPalace scores 100% on LongMemEval (hybrid mode) and 96.6% in raw mode with zero API cost.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use MemPalace with LangGraph?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace is protocol-native (MCP) and works with any MCP-compatible client including Claude Code and Claude Desktop. While it is not built specifically for LangGraph, its MCP tools can be integrated into any agent framework. LangMem is purpose-built for LangGraph workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Are both MemPalace and LangMem free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Both are free and open-source. MemPalace uses the MIT license and LangMem is part of the LangChain open-source ecosystem. Neither requires paid subscriptions or cloud services for core functionality.",
          },
        },
        {
          "@type": "Question",
          name: "Which should I choose: MemPalace or LangMem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose MemPalace if you want a complete, production-ready memory system with proven benchmarks, hierarchical organization, and MCP integration. Choose LangMem if you are building LangGraph agents and want minimal, composable memory primitives to assemble into a custom solution.",
          },
        },
        {
          "@type": "Question",
          name: "Does LangMem support MCP tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LangMem does not provide MCP tools. It is designed as a Python library for the LangGraph ecosystem. MemPalace provides 19 MCP tools for native integration with Claude Code, Claude Desktop, and other MCP-compatible clients.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between MemPalace and LangMem architecture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace uses a hierarchical Memory Palace architecture (Wings, Rooms, Halls, Closets, Drawers) with ChromaDB + SQLite, AAAK compression, and a 4-layer retrieval stack. LangMem uses a simple flat key-value store plus vector memory with no hierarchical structure — it is designed as a composable building block, not a complete system.",
          },
        },
      ],
    },
  ],
};

/* ---------- data for comparison table ---------- */
type Winner = "mempalace" | "langmem" | "tie";

interface ComparisonRow {
  feature: string;
  mempalace: string;
  langmem: string;
  winner: Winner;
}

const comparisonData: ComparisonRow[] = [
  { feature: "LongMemEval Score", mempalace: "100% (hybrid) / 96.6% (raw)", langmem: "Not published", winner: "mempalace" },
  { feature: "Architecture", mempalace: "Hierarchical (Wings/Rooms/Halls/Closets/Drawers)", langmem: "Flat key-value + vector", winner: "mempalace" },
  { feature: "Design Philosophy", mempalace: "Complete system", langmem: "Composable primitive", winner: "tie" },
  { feature: "Pricing", mempalace: "Free (MIT)", langmem: "Free (open-source)", winner: "tie" },
  { feature: "Deployment", mempalace: "Local-first", langmem: "Self-host", winner: "tie" },
  { feature: "Storage Approach", mempalace: "Verbatim + AAAK compression", langmem: "Key-value + vector", winner: "mempalace" },
  { feature: "MCP Tools", mempalace: "19 tools", langmem: "None", winner: "mempalace" },
  { feature: "Retrieval Layers", mempalace: "4-layer stack (L0–L3)", langmem: "Single vector similarity", winner: "mempalace" },
  { feature: "Compression", mempalace: "AAAK (30x lossless)", langmem: "None", winner: "mempalace" },
  { feature: "Ecosystem Lock-in", mempalace: "Protocol-native (MCP)", langmem: "LangGraph / LangChain", winner: "mempalace" },
  { feature: "Agent Framework", mempalace: "Any MCP client", langmem: "LangGraph only", winner: "mempalace" },
  { feature: "Setup Complexity", mempalace: "pip install + 3 commands", langmem: "pip install + custom wiring", winner: "tie" },
  { feature: "Knowledge Graph", mempalace: "SQLite temporal triples", langmem: "Not included", winner: "mempalace" },
  { feature: "Vector DB", mempalace: "ChromaDB (embedded)", langmem: "Configurable", winner: "tie" },
  { feature: "Language", mempalace: "Python", langmem: "Python", winner: "tie" },
];

function winnerClass(winner: Winner, side: "mempalace" | "langmem"): string {
  if (winner === side) return "text-success font-semibold";
  if (winner === "tie") return "text-foreground";
  return "text-muted";
}

/* ========== PAGE ========== */
export default function MemPalaceVsLangMemPage() {
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
          <span className="text-foreground">MemPalace vs LangMem</span>
        </nav>

        {/* ---------- H1 ---------- */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          MemPalace vs LangMem: Complete System or Building Block in{" "}
          <span className="text-accent">2026</span>?
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl">
          Two free, open-source approaches to AI memory. One gives you a complete
          memory palace with 19 MCP tools, hierarchical storage, and 100% on
          LongMemEval. The other gives you composable primitives for the LangGraph
          ecosystem. Here is how they compare.
        </p>

        <p className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm leading-relaxed text-muted speakable">
          <strong className="text-foreground">MemPalace vs LangMem:</strong> MemPalace is a
          complete, local-first AI memory system scoring 100% on LongMemEval with
          hierarchical organization (Wings, Rooms, Halls, Closets, Drawers), 19 MCP
          tools, and AAAK compression. LangMem is a lightweight, composable memory
          library from LangChain designed specifically for LangGraph agents, providing
          flat key-value and vector memory primitives. Both are free and open-source,
          but they serve fundamentally different purposes: MemPalace is a
          batteries-included system; LangMem is a building block.
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
                  You want a <strong className="text-foreground">complete, production-ready</strong> memory system
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">100% LongMemEval</strong> &mdash; proven benchmark accuracy
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  You need <strong className="text-foreground">MCP-native</strong> integration with Claude Code
                </li>
                <li className="flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  <strong className="text-foreground">Framework-agnostic</strong> &mdash; not locked to one ecosystem
                </li>
              </ul>
            </div>

            {/* LangMem card */}
            <div className="rounded-lg border border-card-border bg-card p-6 border-l-4 border-l-info">
              <h3 className="text-lg font-semibold text-info mb-3">
                Choose LangMem if&hellip;
              </h3>
              <ul className="space-y-2 text-sm text-muted leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You are building <strong className="text-foreground">LangGraph agents</strong> specifically
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You want <strong className="text-foreground">minimal footprint</strong> &mdash; just the primitives
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You prefer to <strong className="text-foreground">compose your own</strong> memory architecture
                </li>
                <li className="flex gap-2">
                  <span className="text-info mt-0.5 shrink-0">&#10003;</span>
                  You are already deep in the <strong className="text-foreground">LangChain ecosystem</strong>
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
                  <th className="px-4 py-3 font-semibold text-info">LangMem</th>
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
                    <td className={`px-4 py-3 ${winnerClass(row.winner, "langmem")}`}>
                      {row.langmem}
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

            {/* LangMem arch */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="text-lg font-semibold text-info mb-3">
                LangMem &mdash; Composable Primitives
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                LangMem takes a <strong className="text-foreground">minimalist approach</strong>:
                flat key-value storage plus vector memory, designed as building blocks
                you compose into your own solution. There is no hierarchical structure,
                no compression layer, and no built-in retrieval stack.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">
                It is purpose-built for the{" "}
                <strong className="text-foreground">LangGraph ecosystem</strong>, making it
                easy to wire memory into agent graphs. The trade-off is that you must
                design the memory architecture yourself &mdash; LangMem gives you
                Lego bricks, not a finished building.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-info/15 px-2 py-1 text-info">Key-Value</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Vector Memory</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">LangGraph</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Composable</span>
                <span className="rounded bg-info/15 px-2 py-1 text-info">Lightweight</span>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-accent">Key architectural difference:</strong>{" "}
              MemPalace is a complete system with opinions about how memory should work &mdash;
              hierarchical organization, verbatim storage, multi-layer retrieval, and AAAK
              compression. LangMem deliberately avoids opinions: it provides the simplest
              possible memory primitives and lets you build whatever you need on top. The
              result is that MemPalace works out of the box while LangMem requires assembly.
            </p>
          </div>
        </section>

        {/* ==================== TWO PHILOSOPHIES ==================== */}
        <section className="mt-16" aria-labelledby="philosophies">
          <h2 id="philosophies" className="text-2xl font-bold mb-6">
            Two Different Philosophies
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Complete System
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                MemPalace believes AI memory should{" "}
                <strong className="text-foreground">just work</strong>. Install it, connect
                it to your AI client, and you get hierarchical memory, verbatim storage,
                multi-layer retrieval, compression, and 19 MCP tools &mdash; all configured
                and tested to score 100% on LongMemEval.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                This philosophy trades flexibility for reliability. You get a system that
                has been benchmarked, stress-tested, and optimized end-to-end. The
                architecture decisions have been made for you &mdash; and the benchmark
                results validate those decisions.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="text-lg font-semibold text-info mb-3">
                Composable Primitive
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                LangMem believes memory should be a{" "}
                <strong className="text-foreground">building block, not a monolith</strong>.
                It gives you the minimum viable memory primitives &mdash; key-value store
                and vector memory &mdash; and lets you compose them into whatever
                architecture fits your LangGraph agent.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                This philosophy trades completeness for composability. You get maximum
                control over how memory works in your specific use case, but you also
                take on the responsibility of designing, testing, and optimizing the
                memory architecture yourself.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">The practical implication:</strong>{" "}
              With MemPalace, you get production-ready memory in minutes. With LangMem,
              you get a toolkit that could eventually become a custom memory system &mdash;
              after you design, build, and validate it. Neither approach is wrong; they
              serve different audiences with different needs.
            </p>
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
                title: "You want a proven, complete memory system",
                desc: "MemPalace scores 100% on LongMemEval and ships with 19 MCP tools, hierarchical organization, AAAK compression, and multi-layer retrieval. Everything works out of the box — no assembly required.",
              },
              {
                title: "You use Claude Code or any MCP client",
                desc: "MemPalace was built for MCP-native workflows. Its 19 tools integrate directly with Claude Code, Claude Desktop, and any MCP-compatible client. LangMem has no MCP support.",
              },
              {
                title: "You don't want to build your own memory architecture",
                desc: "MemPalace's hierarchical palace structure (Wings, Rooms, Halls, Closets, Drawers) organizes memory automatically. You store conversations and the system handles retrieval.",
              },
              {
                title: "You need verbatim storage and lossless compression",
                desc: "MemPalace stores every conversation verbatim and compresses with AAAK (30x lossless). Nothing is summarized or lost. LangMem's key-value approach stores what you explicitly write to it.",
              },
              {
                title: "You want framework independence",
                desc: "MemPalace works with any MCP-compatible agent. LangMem is tightly coupled to LangGraph — if you switch frameworks, your memory integration breaks.",
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

        <section className="mt-12" aria-labelledby="when-langmem">
          <h2 id="when-langmem" className="text-2xl font-bold mb-6">
            When to Choose LangMem
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "You are building LangGraph agents",
                desc: "LangMem was designed specifically for the LangGraph ecosystem. If your entire stack is LangChain/LangGraph, LangMem integrates naturally into your agent graphs with minimal friction.",
              },
              {
                title: "You want minimal, composable memory",
                desc: "If you prefer assembling your own memory architecture from simple primitives rather than adopting an opinionated system, LangMem's key-value + vector approach gives you maximum flexibility.",
              },
              {
                title: "You need the lightest possible footprint",
                desc: "LangMem is intentionally minimal. No hierarchical structure, no compression engine, no retrieval stack — just the bare essentials. For agents that need only simple state persistence, this can be an advantage.",
              },
              {
                title: "You are prototyping or experimenting",
                desc: "For quick experiments within LangGraph, LangMem's simplicity means less boilerplate. You can add memory to an agent graph in a few lines of code and iterate from there.",
              },
              {
                title: "You are deeply invested in LangChain",
                desc: "If your team already uses LangChain for everything and you want memory that feels native to that ecosystem, LangMem is the path of least resistance.",
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
                q: "What is LangMem?",
                a: "LangMem is an open-source memory library from the LangChain team, designed as a lightweight building block for LangGraph agents. It provides flat key-value storage and vector memory primitives that developers compose into their own memory solutions. It is part of the broader LangChain open-source ecosystem.",
              },
              {
                q: "Is LangMem a complete memory system like MemPalace?",
                a: "No. LangMem is intentionally minimal — it provides composable memory primitives (key-value store, vector memory) that you assemble yourself. MemPalace is a complete, batteries-included system with hierarchical organization (Wings, Rooms, Halls, Closets, Drawers), 19 MCP tools, AAAK compression, and a multi-layer retrieval stack, all working out of the box.",
              },
              {
                q: "Does LangMem have benchmark scores on LongMemEval?",
                a: "LangMem has not published scores on standard benchmarks like LongMemEval or ConvoMem. MemPalace scores 100% on LongMemEval in hybrid mode and 96.6% in raw mode (zero API cost). Without published benchmarks, it is difficult to make a direct accuracy comparison.",
              },
              {
                q: "Can I use MemPalace with LangGraph?",
                a: "MemPalace is protocol-native (MCP) and works with any MCP-compatible client. While it is not specifically built for LangGraph, its 19 MCP tools can be integrated into any agent framework that supports the Model Context Protocol. LangMem, by contrast, is purpose-built for LangGraph workflows.",
              },
              {
                q: "Are both MemPalace and LangMem free?",
                a: "Yes. Both are completely free and open-source. MemPalace uses the MIT license and LangMem is part of the LangChain open-source ecosystem. Neither requires paid subscriptions or cloud services for core functionality. MemPalace's only optional cost is approximately $0.001 per query for Haiku reranking.",
              },
              {
                q: "Does LangMem support MCP tools?",
                a: "No. LangMem does not provide MCP tools — it is designed as a Python library for the LangGraph ecosystem. MemPalace provides 19 MCP tools for native integration with Claude Code, Claude Desktop, and any MCP-compatible client.",
              },
              {
                q: "Which is easier to set up?",
                a: "Both install with pip. The difference is what happens after installation: MemPalace is ready to use with 3 commands — install, configure, and connect to your MCP client. LangMem requires you to design and wire your own memory architecture within LangGraph before it does anything useful.",
              },
              {
                q: "Can I switch from LangMem to MemPalace?",
                a: "Yes. Since LangMem stores data in standard key-value and vector formats, you can export your data and import it into MemPalace using its MCP tools. The main transition cost is moving from LangGraph-specific memory calls to MCP-based memory operations.",
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
          Last updated: April 8, 2026. Data sourced from official documentation
          and public GitHub repositories.
        </p>
      </article>

      <ContinueReading exclude="vs-langmem" />
    </>
  );
}
