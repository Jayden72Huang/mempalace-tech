import type { Metadata } from "next";
import Link from "next/link";
import ContinueReading from "@/components/ContinueReading";
import AdsterraNative from "@/components/AdsterraNative";

export const metadata: Metadata = {
  title: "Is MemPalace's 100% Score Real? We Fact-Checked Every Claim",
  description:
    "The raw LongMemEval score is actually 96.6%. We dig into the methodology, the LoCoMo controversy, AAAK compression tradeoffs, and how MemPalace compares to Mem0, Zep & Letta.",
  alternates: { canonical: "https://www.mempalace.tech/benchmarks" },
  openGraph: {
    title: "Is MemPalace's 100% Score Real? We Fact-Checked Every Claim",
    description:
      "Independent fact-check of MemPalace's benchmark claims. Raw score 96.6%, not 100%. Full methodology analysis.",
    url: "https://www.mempalace.tech/benchmarks",
    type: "article",
    images: [{ url: "/images/og-image.png", width: 1200, height: 675, alt: "MemPalace Benchmark Analysis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is MemPalace's 100% Score Real? We Fact-Checked Every Claim",
    description: "The raw score is 96.6%. Independent analysis of every benchmark claim and the controversy.",
    images: ["/images/og-image.png"],
  },
};

/* ---------- FAQ data ---------- */
const faqItems = [
  {
    question: "Is MemPalace's 100% LongMemEval score legitimate?",
    answer:
      "The 100% hybrid score is technically real — it was measured on the full 500-question LongMemEval dataset. However, it was achieved after targeted patches for 3 specific failing questions, then retested on the same set. The 96.6% raw score (zero API) is more representative of real-world performance. A held-out 450-question test scored 98.4%, which is arguably the most honest number.",
  },
  {
    question: "What is LongMemEval and why does it matter?",
    answer:
      "LongMemEval is an academic benchmark with 500 questions testing long-term memory across five categories: fact recall, temporal reasoning, multi-hop queries, knowledge updates, and multi-session synthesis. It uses R@5 recall as its primary metric. It's considered the most comprehensive test of AI memory systems, published by UC Santa Barbara researchers.",
  },
  {
    question: "Why do some people criticize MemPalace's benchmark results?",
    answer:
      "There are three main criticisms: (1) The 100% LongMemEval score was achieved by fixing specific failing questions and retesting on the same set. (2) The LoCoMo benchmark used top_k=50, which exceeds the candidate pool size, effectively testing the LLM rather than the retrieval system. (3) AAAK compression is marketed as 'lossless' but reduces retrieval accuracy from 96.6% to 84.2%. The MemPalace team has acknowledged most of these concerns in their documentation.",
  },
  {
    question: "How does MemPalace compare to Mem0 and Zep on benchmarks?",
    answer:
      "On LongMemEval, MemPalace scores 96.6% (raw) vs Mem0's ~85% and Zep's ~82%. On ConvoMem, MemPalace scores 92.9% vs Mem0's estimated 30-45%. However, direct comparison is complicated because each system was tested under different conditions and configurations.",
  },
  {
    question: "Should I trust AI memory benchmark scores in general?",
    answer:
      "Approach all benchmark scores with healthy skepticism. Benchmark engineering is common across the AI industry — teams optimize specifically for test sets. Look for held-out test results, independent reproductions, and whether the benchmark methodology is disclosed. MemPalace is more transparent than most by publishing their full evaluation code and acknowledging limitations.",
  },
];

/* ---------- JSON-LD ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "MemPalace Benchmark Analysis: Is the 100% LongMemEval Score Real?",
      description:
        "Independent analysis of MemPalace's benchmark claims, methodology concerns, and what the numbers actually mean for developers evaluating AI memory systems.",
      author: { "@type": "Organization", name: "MemPalace.tech" },
      publisher: { "@type": "Organization", name: "MemPalace.tech" },
      datePublished: "2026-04-07",
      dateModified: "2026-04-07",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.mempalace.tech/benchmarks",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
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
          name: "Benchmark Analysis",
        },
      ],
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

/* ---------- comparison table data ---------- */
interface BenchmarkRow {
  system: string;
  longMemRaw: string;
  longMemHybrid: string;
  convoMem: string;
  local: string;
  cost: string;
  caveats: string;
}

const comparisonData: BenchmarkRow[] = [
  {
    system: "MemPalace",
    longMemRaw: "96.6%",
    longMemHybrid: "100%",
    convoMem: "92.9%",
    local: "Yes",
    cost: "$0",
    caveats: "100% score was post-patch; AAAK compression reduces accuracy",
  },
  {
    system: "Supermemory",
    longMemRaw: "~70%",
    longMemHybrid: "N/A",
    convoMem: "~40%",
    local: "No",
    cost: "$9-29/mo",
    caveats: "Limited public benchmark data; cloud-only",
  },
  {
    system: "Mem0",
    longMemRaw: "~85%",
    longMemHybrid: "N/A",
    convoMem: "30-45%",
    local: "Partial",
    cost: "$0-249/mo",
    caveats: "Extracts facts, discards original text; cloud features require paid tier",
  },
  {
    system: "Zep",
    longMemRaw: "~82%",
    longMemHybrid: "N/A",
    convoMem: "~50%",
    local: "No",
    cost: "Usage-based",
    caveats: "Enterprise-focused; limited open benchmarks",
  },
  {
    system: "Letta",
    longMemRaw: "~78%",
    longMemHybrid: "N/A",
    convoMem: "~55%",
    local: "Yes",
    cost: "$0",
    caveats: "Agent framework, not pure memory; different architecture goals",
  },
];

/* ========== PAGE ========== */
export default function BenchmarkAnalysisPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        {/* ---------- breadcrumb ---------- */}
        <nav className="mb-8 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Benchmark Analysis</span>
        </nav>

        {/* ---------- H1 ---------- */}
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
          MemPalace Benchmark Analysis: Is the 100% Score Real?
        </h1>

        <p className="mt-4 text-muted text-sm">
          Published April 7, 2026 &middot; Independent analysis &middot;{" "}
          <span className="text-foreground">Not affiliated with MemPalace</span>
        </p>

        {/* ---------- TL;DR ---------- */}
        <section className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-accent mb-4">
            TL;DR
          </h2>
          <ul className="space-y-3 text-foreground text-[15px] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 h-2 w-2 rounded-full bg-success" />
              <span>
                The <strong>96.6% raw score</strong> (zero API) is credible and
                beats all local-only competitors we could find.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 h-2 w-2 rounded-full bg-warning" />
              <span>
                The <strong>100% hybrid score</strong> is technically real but
                comes with significant caveats that aren&apos;t always mentioned
                in the marketing.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 h-2 w-2 rounded-full bg-warning" />
              <span>
                Some benchmark methodology choices have legitimate concerns,
                particularly around LoCoMo and the &ldquo;lossless&rdquo;
                compression claims.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 h-2 w-2 rounded-full bg-success" />
              <span>
                The project has <strong>real technical merit</strong> underneath
                the aggressive marketing. The verbatim-storage architecture is a
                genuinely novel approach.
              </span>
            </li>
          </ul>
        </section>

        {/* ---------- The Claims ---------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            The Claims
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            MemPalace&apos;s official benchmark results, as published in their
            repository&apos;s{" "}
            <a
              href="https://github.com/milla-jovovich/mempalace/blob/main/BENCHMARKS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover underline underline-offset-2"
            >
              BENCHMARKS.md
            </a>
            :
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "LongMemEval", value: "100%", sub: "hybrid" },
              { label: "LongMemEval", value: "96.6%", sub: "raw / zero API" },
              { label: "ConvoMem", value: "92.9%", sub: "" },
              { label: "LoCoMo", value: "88.9%", sub: "100% w/ reranking" },
            ].map((item) => (
              <div
                key={item.label + item.sub}
                className="rounded-lg border border-card-border bg-card p-4 text-center"
              >
                <div className="text-2xl font-bold text-foreground">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-muted">{item.label}</div>
                {item.sub && (
                  <div className="mt-0.5 text-xs text-muted/70">
                    {item.sub}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-muted">
            MemBench score: 80.3%. All scores self-reported by the MemPalace
            team.
          </p>
        </section>

        {/* ---------- LongMemEval Deep Dive ---------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            LongMemEval Deep Dive
          </h2>

          <h3 className="text-lg font-semibold text-foreground mb-3">
            What is LongMemEval?
          </h3>
          <p className="text-muted leading-relaxed mb-6">
            LongMemEval is an academic benchmark from UC Santa Barbara (
            <a
              href="https://arxiv.org/abs/2410.10813"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover underline underline-offset-2"
            >
              arXiv:2410.10813
            </a>
            ) designed to evaluate long-term conversational memory. It consists
            of 500 questions spanning five categories: single-session fact
            recall, multi-session fact recall, temporal reasoning, multi-hop
            queries, and knowledge updates. The primary metric is R@5 &mdash;
            whether the correct memory appears in the top 5 retrieved results.
          </p>

          {/* credible box */}
          <div className="rounded-lg border border-success/30 bg-success/5 p-5 mb-6">
            <h4 className="font-semibold text-success mb-2">
              The 96.6% Raw Score: Credible
            </h4>
            <p className="text-foreground text-[15px] leading-relaxed">
              The raw score was achieved with zero API calls &mdash; no cloud
              LLM reranking, no external services. MemPalace&apos;s
              verbatim-storage approach with ChromaDB vector search retrieved
              correct memories for 483 of 500 questions. This is the highest
              published local-only result we&apos;ve found for LongMemEval, and
              it aligns with the theoretical advantage of storing full
              conversation text rather than extracted summaries. The evaluation
              code is{" "}
              <a
                href="https://github.com/milla-jovovich/mempalace/tree/main/benchmarks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                published in the repository
              </a>
              .
            </p>
          </div>

          {/* concern box */}
          <div className="rounded-lg border border-warning/30 bg-warning/5 p-5 mb-6">
            <h4 className="font-semibold text-warning mb-2">
              The 100% Hybrid Score: Engineered
            </h4>
            <p className="text-foreground text-[15px] leading-relaxed mb-3">
              The path from 96.6% to 100% raises valid methodological
              questions. The hybrid mode uses Claude Haiku to rerank results,
              which is a legitimate technique &mdash; many production systems
              use multi-stage retrieval. However, the final 3.4% improvement
              came from analyzing the 17 specific failing questions and
              implementing targeted patches.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed">
              This is the benchmark equivalent of teaching to the test. You
              identified which questions you got wrong, engineered fixes for
              those specific questions, and then reported your score on the same
              test. In academic settings, this would typically require
              disclosure and a separate held-out evaluation.
            </p>
          </div>

          {/* fair context box */}
          <div className="rounded-lg border border-card-border bg-card p-5">
            <h4 className="font-semibold text-foreground mb-2">
              Fair Context: The Held-Out Test
            </h4>
            <p className="text-muted text-[15px] leading-relaxed">
              To their credit, the MemPalace team did create a held-out test
              set. They split the 500 questions, trained on 50, and evaluated
              on the remaining 450. The held-out score: <strong className="text-foreground">98.4%</strong>. This is
              arguably the most honest number in the entire analysis &mdash; and
              it&apos;s still excellent. They also disclosed the patch process
              rather than quietly folding it into a release.
            </p>
          </div>
        </section>

        {/* ---------- LoCoMo Concerns ---------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            LoCoMo Concerns
          </h2>

          <div className="rounded-lg border border-warning/30 bg-warning/5 p-5 mb-6">
            <h4 className="font-semibold text-warning mb-2">
              The top_k=50 Problem
            </h4>
            <p className="text-foreground text-[15px] leading-relaxed mb-3">
              Penfield Labs, a competitor in the AI memory space,{" "}
              <a
                href="https://penfieldlabs.com/blog/mempalace-benchmark-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                published a critique
              </a>{" "}
              highlighting that MemPalace&apos;s LoCoMo evaluation used
              top_k=50 while the typical candidate pool contains a maximum of 32
              items.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed mb-3">
              When top_k exceeds the candidate pool, you retrieve{" "}
              <em>everything</em>. At that point, you&apos;re not testing the
              retrieval system at all &mdash; you&apos;re testing whether Claude
              can find an answer when given all the text. That&apos;s reading
              comprehension, not memory retrieval.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed">
              This matters because LoCoMo is specifically designed to evaluate
              retrieval quality. If you sidestep retrieval, the score
              doesn&apos;t tell you what it&apos;s supposed to tell you.
            </p>
          </div>

          <div className="rounded-lg border border-card-border bg-card p-5">
            <h4 className="font-semibold text-foreground mb-2">
              Fair Context
            </h4>
            <p className="text-muted text-[15px] leading-relaxed">
              The MemPalace team&apos;s own BENCHMARKS.md acknowledges the
              top_k issue and notes it as a known limitation. They also note
              that the LoCoMo benchmark itself has structural issues that make
              fair comparison difficult across systems with different
              architectures. Penfield Labs, as a competitor, has their own
              incentives in this critique.
            </p>
          </div>
        </section>

        {/* ---------- AAAK Compression ---------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            AAAK Compression Tradeoff
          </h2>

          <div className="rounded-lg border border-warning/30 bg-warning/5 p-5 mb-6">
            <h4 className="font-semibold text-warning mb-2">
              &ldquo;Lossless&rdquo; with an Asterisk
            </h4>
            <p className="text-foreground text-[15px] leading-relaxed mb-3">
              MemPalace claims approximately 30x compression using their custom
              AAAK dialect. They call it &ldquo;lossless&rdquo; because any LLM
              can read the compressed output and reconstruct the original
              meaning without a decoder.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed mb-3">
              In strict data-compression terms, this is accurate &mdash; the
              semantic content is preserved. But in retrieval terms, using AAAK
              reduces LongMemEval accuracy from{" "}
              <strong className="text-foreground">96.6% to 84.2%</strong>.
              That&apos;s a 12.4 percentage point drop. The compressed text
              changes the vector embeddings enough to degrade search quality.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed">
              Calling this &ldquo;lossless&rdquo; without qualifying the
              retrieval impact is misleading. It&apos;s lossless for human
              understanding but lossy for machine retrieval.
            </p>
          </div>

          <div className="rounded-lg border border-success/30 bg-success/5 p-5">
            <h4 className="font-semibold text-success mb-2">
              Fair Context
            </h4>
            <p className="text-foreground text-[15px] leading-relaxed">
              84.2% with AAAK compression still matches or beats Mem0 (~85%)
              and Zep (~82%) at their full accuracy &mdash; while using 30x
              less storage and zero API costs. The compression is optional, and
              users can choose the verbatim 96.6% mode when accuracy matters
              more than disk space. This is a legitimate engineering tradeoff,
              just one that should be communicated more clearly.
            </p>
          </div>
        </section>

        {/* ---------- README vs Codebase ---------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            README vs Codebase Gaps
          </h2>

          <div className="rounded-lg border border-warning/30 bg-warning/5 p-5 mb-6">
            <h4 className="font-semibold text-warning mb-2">
              GitHub Issue #27: Claims vs Code
            </h4>
            <p className="text-foreground text-[15px] leading-relaxed mb-3">
              Developer Leonard Lin filed{" "}
              <a
                href="https://github.com/milla-jovovich/mempalace/issues/27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                GitHub Issue #27
              </a>{" "}
              documenting several discrepancies between the README and the
              actual codebase. Notably:
            </p>
            <ul className="list-disc list-inside text-foreground text-[15px] leading-relaxed space-y-2 pl-2">
              <li>
                <strong>Contradiction detection:</strong> The README describes
                automatic contradiction detection, but a code search found zero
                occurrences of &ldquo;contradict&rdquo; in the source.
              </li>
              <li>
                <strong>Some documented features</strong> appeared to be
                partially implemented or not yet present in the published code.
              </li>
              <li>
                Several architectural claims in the README did not match the
                code&apos;s actual structure.
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-card-border bg-card p-5">
            <h4 className="font-semibold text-foreground mb-2">
              Fair Context
            </h4>
            <p className="text-muted text-[15px] leading-relaxed">
              This is a v3.0 open-source project that grew rapidly. README drift
              is common in fast-moving repos &mdash; documentation often leads
              or lags implementation. Some features may have been planned, in
              development, or present in a private branch. The issue was filed
              constructively, and the project maintainers have been responsive to
              community feedback. That said, README claims are effectively
              marketing, and marketing should match reality.
            </p>
          </div>
        </section>

        {/* ---------- Comparison Table ---------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            How It Actually Compares
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Honest comparison of published benchmark scores with caveats. Scores
            marked with &ldquo;~&rdquo; are estimates based on published
            information and may not reflect identical test conditions.
          </p>

          <div className="overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border bg-card text-left">
                  <th className="px-4 py-3 font-semibold text-foreground">
                    System
                  </th>
                  <th className="px-4 py-3 font-semibold text-foreground">
                    LongMemEval (raw)
                  </th>
                  <th className="px-4 py-3 font-semibold text-foreground">
                    LongMemEval (hybrid)
                  </th>
                  <th className="px-4 py-3 font-semibold text-foreground">
                    ConvoMem
                  </th>
                  <th className="px-4 py-3 font-semibold text-foreground">
                    Local
                  </th>
                  <th className="px-4 py-3 font-semibold text-foreground">
                    Cost
                  </th>
                  <th className="px-4 py-3 font-semibold text-foreground min-w-[200px]">
                    Caveats
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.system}
                    className={`border-b border-card-border ${
                      i % 2 === 0 ? "bg-background" : "bg-card/50"
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {({
                        "Mem0": <Link href="/compare/mempalace-vs-mem0" className="hover:text-accent transition-colors">{row.system}</Link>,
                        "Zep": <Link href="/compare/mempalace-vs-zep" className="hover:text-accent transition-colors">{row.system}</Link>,
                        "Letta": <Link href="/compare/mempalace-vs-letta" className="hover:text-accent transition-colors">{row.system}</Link>,
                        "SuperMemory": <Link href="/compare/mempalace-vs-supermemory" className="hover:text-accent transition-colors">{row.system}</Link>,
                      } as Record<string, React.ReactNode>)[row.system] ?? row.system}
                    </td>
                    <td className="px-4 py-3 text-foreground">
                      {row.longMemRaw}
                    </td>
                    <td className="px-4 py-3 text-foreground">
                      {row.longMemHybrid}
                    </td>
                    <td className="px-4 py-3 text-foreground">
                      {row.convoMem}
                    </td>
                    <td className="px-4 py-3 text-foreground">{row.local}</td>
                    <td className="px-4 py-3 text-foreground">{row.cost}</td>
                    <td className="px-4 py-3 text-muted text-xs leading-snug">
                      {row.caveats}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-muted">
            Sources: MemPalace BENCHMARKS.md, Mem0 documentation, Zep
            documentation, Letta evaluations. Scores for competitors are
            approximations based on available public data and may not reflect
            latest versions.
          </p>
        </section>

        <AdsterraNative />

        {/* ---------- Bottom Line ---------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Our Bottom Line
          </h2>

          <div className="space-y-5 text-foreground text-[15px] leading-relaxed">
            <p>
              MemPalace is a genuinely innovative project with a sound
              architectural principle. The insight that verbatim storage
              outperforms LLM-extracted summaries for retrieval tasks is not
              obvious, and the data backs it up. Storing everything and letting
              vector search find what&apos;s relevant is a simpler, more robust
              approach than having an LLM decide what to remember.
            </p>

            <p>
              <strong>The 96.6% raw score is the real headline.</strong> It is
              the highest published local-only LongMemEval result we could find,
              achieved with zero API costs and fully open-source code. If
              you&apos;re evaluating AI memory systems, this is the number that
              should matter to you &mdash; not the 100%.
            </p>

            <p>
              The 100% hybrid score, while technically measured, was engineered
              through a process that most benchmark-literate engineers would
              consider overfitting. The held-out 98.4% score is more credible
              and still excellent. We&apos;d like to see the project lead with
              this number instead.
            </p>

            <p>
              <strong>
                Benchmark engineering is common in this industry.
              </strong>{" "}
              Mem0 doesn&apos;t publish full evaluation code. Zep&apos;s
              benchmarks are limited. Most AI memory startups make claims that
              are difficult to independently verify. MemPalace, for all its
              marketing aggressiveness, publishes their evaluation code and
              acknowledges limitations in their documentation. That&apos;s more
              transparent than the industry norm.
            </p>

            <p className="text-muted">
              Finally, let&apos;s acknowledge the elephant in the room: the
              celebrity angle. When Milla Jovovich&apos;s name is on a GitHub
              repo, it attracts 10x the scrutiny that an equivalent project from
              an unknown developer would get. Some of that scrutiny is healthy.
              Some of it is people who decided the project couldn&apos;t be
              legitimate before they read the code. The technical merit exists
              independently of who made it.
            </p>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border border-card-border bg-card"
              >
                <summary className="cursor-pointer px-5 py-4 text-[15px] font-medium text-foreground hover:text-accent transition-colors list-none flex items-center justify-between">
                  {item.question}
                  <span className="ml-3 shrink-0 text-muted group-open:rotate-45 transition-transform text-lg">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-muted text-[15px] leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- Sources ---------- */}
        <section className="mt-14 border-t border-card-border pt-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Sources &amp; Further Reading
          </h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a
                href="https://arxiv.org/abs/2410.10813"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                LongMemEval paper (arXiv:2410.10813)
              </a>{" "}
              &mdash; UC Santa Barbara
            </li>
            <li>
              <a
                href="https://github.com/milla-jovovich/mempalace/blob/main/BENCHMARKS.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                MemPalace BENCHMARKS.md
              </a>{" "}
              &mdash; Official benchmark documentation
            </li>
            <li>
              <a
                href="https://github.com/milla-jovovich/mempalace/issues/27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                GitHub Issue #27
              </a>{" "}
              &mdash; Leonard Lin&apos;s README vs codebase analysis
            </li>
            <li>
              <a
                href="https://penfieldlabs.com/blog/mempalace-benchmark-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                Penfield Labs critique
              </a>{" "}
              &mdash; LoCoMo methodology concerns
            </li>
          </ul>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="mt-14 rounded-xl border border-card-border bg-card p-6 sm:p-8 text-center">
          <p className="text-muted text-[15px] mb-4">
            Want to verify these numbers yourself? The evaluation code is open
            source.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/milla-jovovich/mempalace/tree/main/benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              View Evaluation Code
            </a>
            <Link
              href="/compare/mempalace-vs-mem0"
              className="inline-flex items-center gap-2 rounded-lg border border-card-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-card transition-colors"
            >
              MemPalace vs Mem0 Comparison
            </Link>
          </div>
        </section>

        {/* ---------- related links ---------- */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">&larr; Home</Link>
          <span className="text-card-border">|</span>
          <Link href="/story" className="text-sm text-muted hover:text-foreground transition-colors">The Story</Link>
          <span className="text-card-border">|</span>
          <Link href="/tools" className="text-sm text-muted hover:text-foreground transition-colors">All Tools</Link>
          <span className="text-card-border">|</span>
          <Link href="/quiz" className="text-sm text-muted hover:text-foreground transition-colors">Quiz</Link>
          <span className="text-card-border">|</span>
          <Link href="/guides/setup" className="text-sm text-muted hover:text-foreground transition-colors">Setup Guide</Link>
        </div>
      </article>

      <ContinueReading exclude="benchmarks" />
    </>
  );
}
