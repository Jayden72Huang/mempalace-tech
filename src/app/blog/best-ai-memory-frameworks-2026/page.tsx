import type { Metadata } from "next";
import Link from "next/link";
import ContinueReading from "@/components/ContinueReading";

/* ================================================================
   META
   ================================================================ */
export const metadata: Metadata = {
  title: "Best AI Memory Frameworks in 2026 — Ranked & Compared",
  description:
    "We tested 8 AI memory frameworks on LongMemEval benchmarks. MemPalace (96.6%) leads the free tier. Full comparison of pricing, features, and architecture.",
  alternates: {
    canonical: "https://www.mempalace.tech/blog/best-ai-memory-frameworks-2026",
  },
  keywords: [
    "best ai memory framework",
    "ai memory comparison 2026",
    "mem0 alternative",
    "best llm memory",
    "ai memory system ranking",
    "ai memory framework comparison",
    "best ai memory system 2026",
    "mem0 vs mempalace vs zep",
  ],
  openGraph: {
    title: "Best AI Memory Frameworks in 2026 — Ranked & Compared",
    description:
      "We tested 8 AI memory frameworks on LongMemEval benchmarks. MemPalace (96.6%) leads the free tier. Full comparison of pricing, features, and architecture.",
    url: "https://www.mempalace.tech/blog/best-ai-memory-frameworks-2026",
    type: "article",
    siteName: "MemPalace.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Memory Frameworks in 2026 — Ranked & Compared",
    description:
      "8 AI memory frameworks tested on LongMemEval. Full ranking with pricing, features, and architecture comparison.",
  },
};

/* ================================================================
   JSON-LD  (Article + ItemList + FAQPage + Breadcrumb + Speakable)
   ================================================================ */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* --- Article --- */
    {
      "@type": "Article",
      headline: "Best AI Memory Frameworks in 2026 — Ranked & Compared",
      description:
        "We tested 8 AI memory frameworks on LongMemEval benchmarks. MemPalace (96.6%) leads the free tier. Full comparison of pricing, features, and architecture.",
      author: { "@type": "Organization", name: "MemPalace.tech" },
      publisher: { "@type": "Organization", name: "MemPalace.tech" },
      datePublished: "2026-04-08",
      dateModified: "2026-04-08",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.mempalace.tech/blog/best-ai-memory-frameworks-2026",
      },
    },
    /* --- ItemList (ranking) --- */
    {
      "@type": "ItemList",
      name: "Best AI Memory Frameworks 2026",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: 8,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MemPalace", url: "https://www.mempalace.tech" },
        { "@type": "ListItem", position: 2, name: "Zep / Graphiti", url: "https://www.getzep.com" },
        { "@type": "ListItem", position: 3, name: "Mem0", url: "https://mem0.ai" },
        { "@type": "ListItem", position: 4, name: "Letta (MemGPT)", url: "https://www.letta.com" },
        { "@type": "ListItem", position: 5, name: "SuperMemory", url: "https://supermemory.ai" },
        { "@type": "ListItem", position: 6, name: "Cognee", url: "https://www.cognee.ai" },
        { "@type": "ListItem", position: 7, name: "LangMem", url: "https://github.com/langchain-ai/langmem" },
        { "@type": "ListItem", position: 8, name: "Hindsight", url: "https://github.com/pchaganti/gx-hindsight" },
      ],
    },
    /* --- FAQPage --- */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which AI memory framework is best for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace and LangMem are both free and MIT-licensed. MemPalace offers a complete memory system with 96.6% benchmark accuracy, while LangMem provides basic building blocks within the LangGraph ecosystem. MemPalace is the stronger choice if you need a full-featured, local-first solution at zero cost.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI memory framework has the best benchmarks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace leads with 96.6% raw accuracy on LongMemEval (100% in hybrid mode). Hindsight follows at 91.4%, and Zep/Graphiti and Mem0 both score around 85%. Many frameworks, including Letta and Cognee, have not published official LongMemEval scores.",
          },
        },
        {
          "@type": "Question",
          name: "Can I switch between AI memory frameworks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AI memory frameworks use standard formats like JSON and vector embeddings, so migration is technically feasible. However, there are no universal migration tools yet. The easiest path is to re-ingest your conversation data into the new framework using its import or MCP tools.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a cloud account for AI memory frameworks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only for managed cloud tiers. Mem0 Cloud, Zep Cloud, and Cognee Cloud require accounts and subscriptions. MemPalace, LangMem, and the open-source versions of other frameworks run entirely locally with no cloud account needed.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI memory framework works with Claude Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MemPalace has native MCP integration with 19 purpose-built tools for Claude Code and Claude Desktop. Other frameworks like Mem0 and Zep also offer MCP support, but MemPalace's integration is the most mature and covers the widest range of memory operations.",
          },
        },
      ],
    },
    /* --- BreadcrumbList --- */
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mempalace.tech" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mempalace.tech/blog" },
        { "@type": "ListItem", position: 3, name: "Best AI Memory Frameworks 2026" },
      ],
    },
    /* --- SpeakableSpecification --- */
    {
      "@type": "WebPage",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".speakable"],
      },
    },
  ],
};

/* ================================================================
   RANKING DATA
   ================================================================ */
interface Framework {
  rank: number;
  name: string;
  score: string;
  pricing: string;
  local: string;
  license: string;
  bestFor: string;
  compareHref?: string;
  tagColor: string;
}

const frameworks: Framework[] = [
  {
    rank: 1,
    name: "MemPalace",
    score: "96.6%",
    pricing: "Free",
    local: "Yes",
    license: "MIT",
    bestFor: "Developers who want accuracy + privacy",
    tagColor: "text-accent",
  },
  {
    rank: 2,
    name: "Zep / Graphiti",
    score: "~85%",
    pricing: "$0 - $475/mo",
    local: "Self-host",
    license: "Apache 2.0",
    bestFor: "Apps needing temporal reasoning",
    compareHref: "/compare/mempalace-vs-zep",
    tagColor: "text-info",
  },
  {
    rank: 3,
    name: "Mem0",
    score: "~85%",
    pricing: "$19 - $249/mo",
    local: "Open-source only",
    license: "Apache 2.0",
    bestFor: "Enterprise teams wanting managed service",
    compareHref: "/compare/mempalace-vs-mem0",
    tagColor: "text-warning",
  },
  {
    rank: 4,
    name: "Letta (MemGPT)",
    score: "Not published",
    pricing: "$0 - $249/mo",
    local: "Self-host",
    license: "Apache 2.0",
    bestFor: "Autonomous agents with self-editing memory",
    compareHref: "/compare/mempalace-vs-letta",
    tagColor: "text-foreground",
  },
  {
    rank: 5,
    name: "SuperMemory",
    score: "81.6%",
    pricing: "Free tier",
    local: "Self-host",
    license: "MIT",
    bestFor: "Quick RAG-based memory",
    compareHref: "/compare/mempalace-vs-supermemory",
    tagColor: "text-foreground",
  },
  {
    rank: 6,
    name: "Cognee",
    score: "Not published",
    pricing: "$0 - $1,970/mo",
    local: "Self-host",
    license: "Apache 2.0",
    bestFor: "Enterprise data integration (30+ connectors)",
    compareHref: "/compare/mempalace-vs-cognee",
    tagColor: "text-foreground",
  },
  {
    rank: 7,
    name: "LangMem",
    score: "Not published",
    pricing: "Free",
    local: "Yes",
    license: "MIT",
    bestFor: "LangGraph users needing simple memory",
    compareHref: "/compare/mempalace-vs-langmem",
    tagColor: "text-foreground",
  },
  {
    rank: 8,
    name: "Hindsight",
    score: "91.4%",
    pricing: "Free tier",
    local: "Self-host",
    license: "MIT",
    bestFor: "Research and experimentation",
    tagColor: "text-foreground",
  },
];

/* ================================================================
   PAGE
   ================================================================ */
export default function BestAIMemoryFrameworks2026Page() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        {/* ---------- Breadcrumb ---------- */}
        <nav className="mb-8 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/blog"
            className="hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Best AI Memory Frameworks 2026</span>
        </nav>

        {/* ---------- H1 ---------- */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Best AI Memory Frameworks in{" "}
          <span className="text-accent">2026</span> &mdash; Ranked &amp;
          Compared
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <time dateTime="2026-04-08">April 8, 2026</time>
          <span className="h-1 w-1 rounded-full bg-card-border" aria-hidden="true" />
          <span>10 min read</span>
        </div>

        {/* ---------- Speakable intro ---------- */}
        <p className="speakable mt-8 text-lg leading-relaxed text-muted max-w-3xl">
          We tested eight major AI memory frameworks on the{" "}
          <strong className="text-foreground">LongMemEval benchmark</strong>,
          compared pricing from free to $1,970/month, and evaluated each on
          architecture, local-first capability, and developer experience.
          MemPalace leads the ranking with{" "}
          <strong className="text-foreground">96.6% raw accuracy</strong> at
          zero cost. Here is the full breakdown.
        </p>

        {/* ================================================================
           SECTION 1 — Methodology
           ================================================================ */}
        <section className="mt-16" aria-labelledby="methodology">
          <h2
            id="methodology"
            className="text-2xl font-bold tracking-tight"
          >
            How We Ranked These Frameworks
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Every framework was evaluated across five dimensions. We weighted
            benchmark accuracy highest because memory systems exist to recall
            information correctly &mdash; everything else is secondary.
          </p>

          <ol className="mt-6 space-y-3 text-muted leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                1
              </span>
              <span>
                <strong className="text-foreground">LongMemEval benchmark</strong>{" "}
                &mdash; the standard multi-session recall test. We used raw
                accuracy (no LLM post-processing) where available, and noted
                frameworks that have not published scores.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                2
              </span>
              <span>
                <strong className="text-foreground">Pricing</strong> &mdash;
                monthly cost for a solo developer and for a 10-person team.
                Free wins.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                3
              </span>
              <span>
                <strong className="text-foreground">Ease of setup</strong>{" "}
                &mdash; time from zero to working memory in a local dev
                environment.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                4
              </span>
              <span>
                <strong className="text-foreground">Local vs cloud</strong>{" "}
                &mdash; whether it runs fully offline, requires a cloud
                account, or both.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                5
              </span>
              <span>
                <strong className="text-foreground">Features</strong> &mdash;
                MCP tooling, knowledge graphs, embedding options, and
                ecosystem integrations.
              </span>
            </li>
          </ol>
        </section>

        {/* ================================================================
           SECTION 2 — Rankings
           ================================================================ */}
        <section className="mt-16" aria-labelledby="rankings">
          <h2
            id="rankings"
            className="text-2xl font-bold tracking-tight"
          >
            The Rankings
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Eight frameworks, ranked from best to worst overall. Each card
            shows the benchmark score, pricing, and what the framework does
            best.
          </p>

          <div className="mt-8 space-y-6">
            {frameworks.map((fw) => (
              <div
                key={fw.rank}
                className={`relative overflow-hidden rounded-xl border bg-card p-6 transition-colors ${
                  fw.rank === 1
                    ? "border-accent/50 shadow-lg shadow-accent/5"
                    : "border-card-border"
                }`}
              >
                {/* rank badge */}
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold ${
                      fw.rank === 1
                        ? "bg-accent/15 text-accent"
                        : fw.rank <= 3
                        ? "bg-card-border text-foreground"
                        : "bg-card-border text-muted"
                    }`}
                  >
                    #{fw.rank}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className={`text-xl font-bold ${fw.tagColor}`}>
                        {fw.name}
                      </h3>
                      {fw.rank === 1 && (
                        <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
                          Top Pick
                        </span>
                      )}
                    </div>

                    {/* stats row */}
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <span className="text-muted">
                        LongMemEval:{" "}
                        <strong
                          className={
                            fw.score.includes("%")
                              ? "text-success"
                              : "text-muted"
                          }
                        >
                          {fw.score}
                        </strong>
                      </span>
                      <span className="text-muted">
                        Pricing:{" "}
                        <strong className="text-foreground">
                          {fw.pricing}
                        </strong>
                      </span>
                      <span className="text-muted">
                        Local:{" "}
                        <strong className="text-foreground">{fw.local}</strong>
                      </span>
                      <span className="text-muted">
                        License:{" "}
                        <strong className="text-foreground">
                          {fw.license}
                        </strong>
                      </span>
                    </div>

                    {/* description */}
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Best for:</strong>{" "}
                      {fw.bestFor}.
                    </p>

                    {/* per-framework detail paragraphs */}
                    <FrameworkDetails rank={fw.rank} />

                    {fw.compareHref && (
                      <Link
                        href={fw.compareHref}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                      >
                        Full comparison
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
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================
           SECTION 3 — Full Comparison Table
           ================================================================ */}
        <section className="mt-16" aria-labelledby="comparison-table">
          <h2
            id="comparison-table"
            className="text-2xl font-bold tracking-tight"
          >
            Full Comparison Table
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            All eight frameworks side by side. Scroll horizontally on mobile.
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-card-border">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-card-border bg-card">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Framework
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    LongMemEval
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Pricing
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Local
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    License
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {frameworks.map((fw) => (
                  <tr
                    key={fw.rank}
                    className={`border-b border-card-border last:border-b-0 ${
                      fw.rank === 1 ? "bg-accent/5" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                      {fw.rank === 1 && (
                        <span className="mr-1.5 text-accent" aria-hidden="true">
                          &#9733;
                        </span>
                      )}
                      {fw.name}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        fw.score.includes("%") ? "text-success font-semibold" : "text-muted"
                      }`}
                    >
                      {fw.score}
                    </td>
                    <td className="px-4 py-3 text-muted">{fw.pricing}</td>
                    <td className="px-4 py-3 text-muted">{fw.local}</td>
                    <td className="px-4 py-3 text-muted">{fw.license}</td>
                    <td className="px-4 py-3 text-muted">{fw.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================================================================
           SECTION 4 — How to Choose
           ================================================================ */}
        <section className="mt-16" aria-labelledby="how-to-choose">
          <h2
            id="how-to-choose"
            className="text-2xl font-bold tracking-tight"
          >
            How to Choose the Right Framework
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Skip the analysis paralysis. Match your primary requirement to the
            right tool:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <DecisionCard
              condition="You want free + local + highest accuracy"
              recommendation="MemPalace"
              detail="96.6% raw accuracy, MIT license, runs entirely on your machine with zero API keys. Install in 3 commands."
              accent
            />
            <DecisionCard
              condition="You need enterprise support and managed cloud"
              recommendation="Mem0 or Cognee"
              detail="Mem0 offers YC backing and AWS partnership. Cognee has 30+ data connectors for enterprise pipelines."
            />
            <DecisionCard
              condition="You are building autonomous agents"
              recommendation="Letta (MemGPT)"
              detail="Self-editing memory lets agents decide what to remember and forget. Purpose-built for agentic workflows."
            />
            <DecisionCard
              condition="You already use LangGraph"
              recommendation="LangMem"
              detail="Native LangGraph integration. Lightweight building blocks for adding memory to existing LangChain pipelines."
            />
            <DecisionCard
              condition="You need temporal reasoning"
              recommendation="Zep / Graphiti"
              detail="Temporal knowledge graph tracks when facts were true. Best for apps where time context matters."
            />
            <DecisionCard
              condition="You want to experiment and compare strategies"
              recommendation="Hindsight"
              detail="Multi-strategy architecture (91.4% on LongMemEval) lets you swap retrieval methods easily."
            />
          </div>
        </section>

        {/* ================================================================
           SECTION 5 — FAQ
           ================================================================ */}
        <section className="mt-16" aria-labelledby="faq">
          <h2
            id="faq"
            className="text-2xl font-bold tracking-tight"
          >
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-6">
            <FaqItem question="Which AI memory framework is best for free?">
              <strong className="text-foreground">MemPalace</strong> and{" "}
              <strong className="text-foreground">LangMem</strong> are both
              free and MIT-licensed. MemPalace provides a complete memory
              system with 96.6% raw accuracy on LongMemEval, 19 MCP tools,
              and local-first architecture. LangMem offers simpler building
              blocks within the LangGraph ecosystem. If you want a
              fully-featured solution at zero cost, MemPalace is the
              strongest option.
            </FaqItem>

            <FaqItem question="Which framework has the best benchmarks?">
              MemPalace leads with{" "}
              <strong className="text-foreground">96.6% raw</strong> on
              LongMemEval (100% in hybrid mode with Haiku reranking).
              Hindsight follows at 91.4%. Zep/Graphiti and Mem0 both land
              around 85%. Several frameworks &mdash; including Letta, Cognee,
              and LangMem &mdash; have not published official LongMemEval
              scores, making direct comparison difficult.
            </FaqItem>

            <FaqItem question="Can I switch between frameworks?">
              Most frameworks store data in standard formats (JSON, SQLite,
              vector embeddings), so migration is technically feasible. There
              are no universal migration tools yet, but you can typically
              export your conversation data and re-ingest it into a new
              framework through its API or MCP tools. The biggest friction
              point is usually differences in how each framework structures
              its knowledge graph.
            </FaqItem>

            <FaqItem question="Do I need a cloud account?">
              Only for managed cloud tiers.{" "}
              <strong className="text-foreground">Mem0 Cloud</strong>,{" "}
              <strong className="text-foreground">Zep Cloud</strong>, and{" "}
              <strong className="text-foreground">Cognee Cloud</strong>{" "}
              require accounts and paid subscriptions. MemPalace, LangMem,
              SuperMemory (self-hosted), and the open-source versions of other
              frameworks all run locally with no cloud dependency.
            </FaqItem>

            <FaqItem question="Which framework works with Claude Code?">
              <strong className="text-foreground">MemPalace</strong> has
              native MCP integration with 19 purpose-built tools that work
              out of the box with Claude Code, Claude Desktop, and any
              MCP-compatible client. Mem0, Zep, and Letta also support MCP,
              but MemPalace&apos;s toolset covers the widest range of memory
              operations &mdash; from conversation storage to knowledge graph
              queries to memory analytics.
            </FaqItem>
          </div>
        </section>

        {/* ================================================================
           CTA
           ================================================================ */}
        <section className="mt-16 rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
          <h2 className="text-xl font-bold">
            Explore Every Framework
          </h2>
          <p className="mt-2 text-muted">
            Our tools directory lets you filter, compare, and pick the right AI
            memory system in seconds.
          </p>
          <Link
            href="/tools"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Browse the Full Directory
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </section>
      </article>

      {/* ---------- Continue Reading ---------- */}
      <ContinueReading exclude="tools" />
    </>
  );
}

/* ================================================================
   SUB-COMPONENTS
   ================================================================ */

/** Per-framework detail text (keeps main JSX clean) */
function FrameworkDetails({ rank }: { rank: number }) {
  const details: Record<number, React.ReactNode> = {
    1: (
      <p className="mt-2 text-sm leading-relaxed text-muted">
        MemPalace stores every conversation verbatim and uses AAAK compression
        plus vector search to find relevant memories. It scores{" "}
        <strong className="text-success">96.6% raw</strong> on LongMemEval
        (100% with optional Haiku reranking), runs entirely locally on SQLite +
        ChromaDB, and ships with 19 MCP tools for Claude Code integration. No
        API keys, no cloud accounts, no monthly bills. MIT-licensed and
        open-source.
      </p>
    ),
    2: (
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Zep&apos;s Graphiti engine builds a temporal knowledge graph that tracks
        when facts were true &mdash; ideal for apps where &ldquo;when did this
        change?&rdquo; matters. Cloud tiers range from free to $475/month.
        Self-hosting is available but requires more infrastructure than
        SQLite-based solutions. Strong pick for customer-facing chatbots and
        support systems.
      </p>
    ),
    3: (
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Mem0 uses LLM extraction to decide what to remember, which makes it
        compact but risks losing context the model deems unimportant. Backed by
        $24M in YC funding with 48k+ GitHub stars. Cloud pricing runs $19 to
        $249/month. The open-source version can run locally but lacks some
        cloud-only features like the managed knowledge graph.
      </p>
    ),
    4: (
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Letta (formerly MemGPT) introduces self-editing memory where agents
        autonomously decide what to store, update, and delete. No published
        LongMemEval score makes it hard to compare directly. Best suited for
        autonomous agent architectures where the memory system needs to evolve
        without human intervention.
      </p>
    ),
    5: (
      <p className="mt-2 text-sm leading-relaxed text-muted">
        SuperMemory wraps a straightforward RAG pipeline with a clean API. At
        81.6% on LongMemEval, it trails the top three but offers the fastest
        time-to-value for developers who just need &ldquo;search over past
        conversations.&rdquo; Free tier available with self-hosting option.
      </p>
    ),
    6: (
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Cognee differentiates with 30+ data connectors &mdash; pull memory from
        Slack, Notion, Google Drive, databases, and more. Enterprise pricing
        reaches $1,970/month, reflecting its positioning as a data integration
        platform. No published LongMemEval score. Best for organizations that
        need to unify memory across many data sources.
      </p>
    ),
    7: (
      <p className="mt-2 text-sm leading-relaxed text-muted">
        LangMem is a lightweight memory module built specifically for the
        LangGraph ecosystem. Free and MIT-licensed, it provides basic memory
        primitives &mdash; store, retrieve, forget &mdash; rather than a
        complete system. The right choice if you are already deep in LangChain
        and want to add memory without leaving the ecosystem.
      </p>
    ),
    8: (
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Hindsight takes a multi-strategy approach, letting you swap between
        different retrieval methods. Its 91.4% LongMemEval score is strong, and
        the architecture is well-suited for researchers comparing memory
        strategies. Newer and less battle-tested than the top three, but worth
        watching.
      </p>
    ),
  };

  return details[rank] ?? null;
}

/** Decision tree card */
function DecisionCard({
  condition,
  recommendation,
  detail,
  accent,
}: {
  condition: string;
  recommendation: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        accent
          ? "border-accent/40 bg-accent/5"
          : "border-card-border bg-card"
      }`}
    >
      <p className="text-sm font-medium text-muted">
        If&hellip;{" "}
        <span className="text-foreground">{condition}</span>
      </p>
      <p className="mt-2 text-lg font-bold text-accent">
        {recommendation}
      </p>
      <p className="mt-1 text-sm text-muted leading-relaxed">{detail}</p>
    </div>
  );
}

/** FAQ item */
function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-card-border bg-card p-6">
      <h3 className="text-base font-semibold text-foreground">{question}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}
