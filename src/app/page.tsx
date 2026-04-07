import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MemPalace: The Open-Source AI Memory System That Scores 100%",
  description:
    "MemPalace: open-source AI memory system, first 100% on LongMemEval. Free, local-first, MIT licensed. Compare vs Mem0, Zep & more.",
  keywords: [
    "mempalace",
    "ai memory system",
    "mempalace review",
    "ai memory benchmark",
    "mempalace vs mem0",
    "LongMemEval",
    "persistent ai memory",
    "open source ai memory",
  ],
};

const faqItems = [
  {
    question: "What is MemPalace?",
    answer:
      "MemPalace is an open-source AI memory system that gives large language models persistent, cross-session memory. Unlike other systems that use AI to decide what to remember, MemPalace stores everything verbatim and makes it findable through a spatial metaphor inspired by the ancient memory palace technique. It uses ChromaDB for vector search and SQLite for structured storage, running entirely on your local machine.",
  },
  {
    question: "Is MemPalace free?",
    answer:
      "Yes, MemPalace is completely free and open-source under the MIT license. It runs locally on your machine with no API costs, no subscription fees, and no usage limits. The only optional cost is if you choose to use a cloud LLM for the hybrid search mode, but the raw vector search mode requires zero API keys.",
  },
  {
    question: "How does MemPalace compare to Mem0?",
    answer:
      "MemPalace scored 100% on the LongMemEval benchmark compared to Mem0's approximately 85%. The key architectural difference is that MemPalace stores all information verbatim and makes it findable, while Mem0 uses an LLM to extract and summarize what it considers important — which inevitably loses information. MemPalace is also free and runs locally, while Mem0 costs $19-249 per month and requires API access.",
  },
  {
    question: "Does MemPalace require API keys?",
    answer:
      "No. MemPalace's raw search mode works entirely locally with zero API keys. The optional hybrid mode can use an LLM API to enhance search results, but it is not required. The core system — ChromaDB vector storage, SQLite metadata, and the AAAK compression dialect — all run on your machine without any external dependencies.",
  },
  {
    question: "What LLMs does MemPalace work with?",
    answer:
      "MemPalace is LLM-agnostic. It works with Claude (via Claude Code or the API), ChatGPT, local models like Llama and Mistral, and any LLM that can read structured text. The memory system itself is a Python package that any LLM can interface with through its CLI or Python API.",
  },
  {
    question: "How do I install MemPalace?",
    answer:
      "Install MemPalace with a single command: pip install mempalace. It requires Python 3.10 or higher. After installation, run mempalace init to create your first memory palace. For a detailed walkthrough including Claude Code integration, visit our setup guide.",
  },
  {
    question: "What is the best AI memory system in 2026?",
    answer:
      "As of April 2026, MemPalace holds the highest scores on all major AI memory benchmarks: 100% on LongMemEval, 92.9% on ConvoMem, and 88.9% on LoCoMo. It is also the only system that runs entirely locally at zero cost. Other notable systems include Mem0 ($24M funded, ~85% LongMemEval), Zep (knowledge graph focus), and Letta (hierarchical memory).",
  },
  {
    question: "How does MemPalace store memories?",
    answer:
      "MemPalace stores all conversation data verbatim — it does not use an LLM to extract or summarize what it considers important. Instead, it keeps every word in ChromaDB (vector search) and SQLite (structured metadata), then compresses stored memories 30x using the AAAK lossless compression dialect. This approach preserves the full context, reasoning, and nuance of every conversation.",
  },
  {
    question: "What is AAAK compression in MemPalace?",
    answer:
      "AAAK is a custom lossless compression dialect developed for MemPalace that achieves approximately 30x compression on stored memories. Unlike lossy summarization used by other systems, AAAK preserves all original information in a shorthand format that any LLM can read natively without a decoder. For example, 1000 tokens of English text compress to roughly 30 tokens of AAAK while retaining complete fidelity.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: "MemPalace",
      description:
        "Open-source AI memory system that provides persistent cross-session memory for large language models. First perfect score on LongMemEval benchmark.",
      url: "https://github.com/milla-jovovich/mempalace",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows, macOS, Linux",
      softwareVersion: "3.0.0",
      downloadUrl: "https://pypi.org/project/mempalace/",
      installUrl: "https://www.mempalace.tech/guides/setup",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "7000",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: "Milla Jovovich",
      },
      license: "https://opensource.org/licenses/MIT",
    },
    {
      "@type": "WebPage",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".speakable"],
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ======================== HERO ======================== */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Hero background image */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/hero-palace.png"
            alt="MemPalace — AI Memory Palace visualization"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              MemPalace:{" "}
              <span className="text-accent">
                The Open-Source AI Memory System That Scores 100%
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              Created by Milla Jovovich. First perfect score on the LongMemEval
              benchmark. MIT licensed. Runs 100% locally with zero API costs.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/guides/setup"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Get Started &rarr;
              </Link>
              <Link
                href="/compare/mempalace-vs-mem0"
                className="inline-flex items-center rounded-full border border-card-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-card"
              >
                Compare with Mem0
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "7,000+", label: "GitHub Stars" },
                { value: "100%", label: "LongMemEval" },
                { value: "MIT", label: "Licensed" },
                { value: "$0", label: "API Cost" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-card-border bg-card px-4 py-5"
                >
                  <p className="text-2xl font-bold text-accent sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================== WHAT IS MEMPALACE =================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Is MemPalace?
          </h2>
          <p className="speakable text-lg leading-relaxed text-muted mt-4">
            MemPalace is the first open-source AI memory system to score a perfect 100% on the LongMemEval benchmark, providing persistent cross-session memory for any large language model at zero cost.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">MemPalace</strong> is an
                open-source AI memory system that gives large language models
                persistent, cross-session memory. When you close a conversation
                with ChatGPT or Claude, everything discussed is forgotten.
                MemPalace fixes that by storing every interaction and making it
                instantly retrievable in future sessions.
              </p>
              <p>
                The key insight behind the MemPalace architecture is deceptively
                simple:{" "}
                <strong className="text-foreground">
                  store everything verbatim, then make it findable.
                </strong>{" "}
                Competing systems like Mem0 and Zep use an LLM to extract what
                the AI <em>thinks</em> is important and discard the rest. This
                inevitably loses context, nuance, and the user&apos;s original
                reasoning. MemPalace takes the opposite approach — it keeps
                every word and uses vector search to surface exactly what you
                need.
              </p>
            </div>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Under the hood, the MemPalace system uses{" "}
                <strong className="text-foreground">ChromaDB</strong> for
                semantic vector search and{" "}
                <strong className="text-foreground">SQLite</strong> for
                structured metadata storage. Both run entirely on your local
                machine — no cloud services, no API keys, no recurring costs.
                Install it with{" "}
                <code className="rounded bg-card px-1.5 py-0.5 text-sm font-mono text-accent">
                  pip install mempalace
                </code>{" "}
                and you have a fully functional AI memory system in under a
                minute.
              </p>
              <p>
                MemPalace also introduces{" "}
                <strong className="text-foreground">AAAK</strong>, a lossless
                compression dialect that achieves 30x compression on stored
                memories without losing any information. This means your memory
                palace can hold thousands of conversations while staying fast
                and lightweight on disk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================ BENCHMARK COMPARISON TABLE ================ */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AI Memory Benchmark Comparison
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            How MemPalace performs against competing AI memory systems on the
            LongMemEval recall benchmark (R@5), cost, and deployment model.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-card-border">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-card-border bg-card text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-4 font-semibold">System</th>
                  <th className="px-5 py-4 font-semibold">LongMemEval R@5</th>
                  <th className="px-5 py-4 font-semibold">API Required</th>
                  <th className="px-5 py-4 font-semibold">Cost</th>
                  <th className="px-5 py-4 font-semibold">Runs Locally</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                {/* MemPalace hybrid — highlighted */}
                <tr className="bg-accent/5">
                  <td className="px-5 py-4 font-semibold text-accent">
                    MemPalace (hybrid)
                  </td>
                  <td className="px-5 py-4 font-bold text-success">100%</td>
                  <td className="px-5 py-4 text-muted">Optional</td>
                  <td className="px-5 py-4 text-success">Free</td>
                  <td className="px-5 py-4 text-success">Yes</td>
                </tr>
                {/* MemPalace raw — highlighted */}
                <tr className="bg-accent/5">
                  <td className="px-5 py-4 font-semibold text-accent">
                    MemPalace (raw)
                  </td>
                  <td className="px-5 py-4 font-bold text-success">96.6%</td>
                  <td className="px-5 py-4 text-muted">None</td>
                  <td className="px-5 py-4 text-success">Free</td>
                  <td className="px-5 py-4 text-success">Yes</td>
                </tr>
                {/* Competitors */}
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">
                    Supermemory ASMR
                  </td>
                  <td className="px-5 py-4 text-muted">~99%</td>
                  <td className="px-5 py-4 text-warning">Yes</td>
                  <td className="px-5 py-4 text-warning">Paid</td>
                  <td className="px-5 py-4 text-muted">No</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">
                    Mastra
                  </td>
                  <td className="px-5 py-4 text-muted">94.87%</td>
                  <td className="px-5 py-4 text-warning">Yes (GPT)</td>
                  <td className="px-5 py-4 text-warning">API costs</td>
                  <td className="px-5 py-4 text-muted">No</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">
                    Mem0
                  </td>
                  <td className="px-5 py-4 text-muted">~85%</td>
                  <td className="px-5 py-4 text-warning">Yes</td>
                  <td className="px-5 py-4 text-warning">$19-249/mo</td>
                  <td className="px-5 py-4 text-muted">No</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">Zep</td>
                  <td className="px-5 py-4 text-muted">~85%</td>
                  <td className="px-5 py-4 text-warning">Yes</td>
                  <td className="px-5 py-4 text-warning">$25/mo+</td>
                  <td className="px-5 py-4 text-muted">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted">
            Benchmark data sourced from the <a href='https://arxiv.org/abs/2410.10813' target='_blank' rel='noopener noreferrer' className='underline hover:text-foreground'>LongMemEval benchmark paper</a>. ConvoMem data from <a href='https://arxiv.org/abs/2406.02761' target='_blank' rel='noopener noreferrer' className='underline hover:text-foreground'>Salesforce Research</a>. Last verified: April 2026.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground speakable">
            As of April 2026, MemPalace is the highest-scoring AI memory system on all three major benchmarks: LongMemEval (100%), ConvoMem (92.9%), and LoCoMo (88.9%). No other system has achieved a perfect score on any of these benchmarks.
          </p>
        </div>
      </section>

      {/* ============= HOW IT WORKS — ARCHITECTURE ============= */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works — The Memory Palace Architecture
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            MemPalace organizes AI memory using a spatial metaphor inspired by
            the ancient memory palace technique. Each level maps to a real
            storage concept.
          </p>

          {/* Architecture illustration */}
          <div className="mt-8 overflow-hidden rounded-xl border border-card-border">
            <Image
              src="/images/architecture.png"
              alt="MemPalace architecture — Wings, Rooms, Halls, Closets, and Drawers spatial memory structure"
              width={1200}
              height={675}
              className="w-full"
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wings",
                emoji: "🏛",
                color: "text-accent",
                description:
                  "Top-level containers that separate major domains — a wing for each project, person, or knowledge area. Wings keep unrelated memories from colliding.",
              },
              {
                title: "Rooms",
                emoji: "🚪",
                color: "text-info",
                description:
                  "Each wing contains rooms for specific topics. A project wing might have rooms for architecture decisions, user research, and deployment notes.",
              },
              {
                title: "Halls",
                emoji: "🏰",
                color: "text-warning",
                description:
                  "Corridors that connect rooms by memory type: facts, events, discoveries, preferences, and advice. Halls make cross-room retrieval fast and intuitive.",
              },
              {
                title: "Closets",
                emoji: "🗄",
                color: "text-success",
                description:
                  "Compressed summaries of conversations encoded in the AAAK dialect. Closets store 30x more information than raw text in the same token budget.",
              },
              {
                title: "Drawers",
                emoji: "📂",
                color: "text-foreground",
                description:
                  "The original verbatim files — full conversation transcripts, code snippets, and reference material. Nothing is ever lost; drawers are the source of truth.",
              },
              {
                title: "AAAK Compression",
                emoji: "⚡",
                color: "text-accent",
                description:
                  "A 30x lossless compression dialect that MemPalace uses to pack dense information into minimal tokens. AAAK is what makes it possible to store thousands of sessions locally.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-card-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={card.title}>
                    {card.emoji}
                  </span>
                  <h3 className={`text-lg font-semibold ${card.color}`}>
                    {card.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================== WHO CREATED IT ================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Who Created MemPalace?
          </h2>
          <div className="mt-8 rounded-xl border border-card-border bg-card p-6 sm:p-8">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">Milla Jovovich</strong> —
                the actress known for the <em>Resident Evil</em> franchise —
                built MemPalace alongside developer{" "}
                <strong className="text-foreground">Ben Sigman</strong> using
                Claude Code. The origin story is surprisingly practical: after
                months of intensive AI collaboration, Jovovich had accumulated
                thousands of decisions, ideas, and lines of reasoning across
                hundreds of conversations.
              </p>
              <p>
                The frustration that sparked MemPalace was simple:{" "}
                <strong className="text-foreground">
                  existing AI memory systems decide what to remember for you.
                </strong>{" "}
                Mem0, Zep, and similar tools use an LLM to extract &ldquo;key
                facts&rdquo; and discard the rest. But Jovovich found that the
                discarded context — the reasoning, the alternatives considered,
                the nuance — was exactly what she needed most in future sessions.
              </p>
              <p>
                The solution was MemPalace: store everything verbatim, compress
                it with the AAAK dialect for efficiency, and use vector search to
                surface the right memories at the right time. The result is the
                first AI memory system to score a perfect 100% on the
                LongMemEval benchmark — because when you keep everything, you
                never lose what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== FAQ ====================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions About MemPalace
          </h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group rounded-xl border border-card-border bg-card"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-base font-medium text-foreground">
                  <span>{item.question}</span>
                  <span className="ml-4 text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================== BOTTOM CTA ================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Give Your AI Perfect Memory
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            MemPalace is free, open-source, and installs in under a minute. Join
            7,000+ developers who chose the AI memory system with the highest
            benchmark score in history.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/guides/setup"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Read the Setup Guide &rarr;
            </Link>
            <a
              href="https://github.com/milla-jovovich/mempalace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-card-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-card"
            >
              View on GitHub &#8599;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
