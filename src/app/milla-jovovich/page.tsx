import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Milla Jovovich GitHub Profile — AI Projects, MemPalace & Code Stack (2026)",
  description:
    "Milla Jovovich's GitHub (@milla-jovovich) has 19K+ stars. The Resident Evil actress co-built MemPalace, the first AI memory system to score 100% on LongMemEval. Full profile, timeline, dev stack & FAQ.",
  alternates: { canonical: "https://www.mempalace.tech/milla-jovovich" },
  keywords: [
    "milla jovovich",
    "milla jovovich github",
    "milla jovovich github username",
    "milla jovovich ai",
    "milla jovovich ai memory",
    "milla jovovich ai memory system",
    "milla jovovich coding",
    "milla jovovich developer",
    "milla jovovich programming",
    "milla jovovich mempalace",
    "milla jovovich memory palace",
    "milla jovovich vibe coding",
    "milla jovovich ben sigman",
    "is milla jovovich a programmer",
    "does milla jovovich code",
  ],
  openGraph: {
    title: "Milla Jovovich GitHub Profile — AI Projects, MemPalace & Code Stack (2026)",
    description:
      "Milla Jovovich's GitHub (@milla-jovovich) has 19K+ stars. The Resident Evil actress co-built MemPalace, scoring 100% on LongMemEval. Full profile & FAQ.",
    url: "https://www.mempalace.tech/milla-jovovich",
    type: "article",
    images: [{ url: "/images/milla-story.png", width: 1200, height: 675, alt: "Milla Jovovich — Actress, Coder, AI Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milla Jovovich GitHub — From Resident Evil to AI Developer",
    description:
      "Yes, that Milla Jovovich. Her GitHub has 19K+ stars. She co-built MemPalace — the first AI memory system to hit 100% on LongMemEval.",
    images: ["/images/milla-story.png"],
  },
};

/* ─── Wiki-style quick facts ─── */
const quickFacts: Array<{ label: string; value: ReactNode }> = [
  { label: "Born", value: "December 17, 1975 (Kyiv, Ukrainian SSR)" },
  { label: "Known for", value: "Resident Evil, The Fifth Element, Ultraviolet" },
  { label: "GitHub", value: <a href="https://github.com/milla-jovovich" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/40 hover:decoration-accent">@milla-jovovich</a> },
  { label: "Main repo", value: <a href="https://github.com/milla-jovovich/mempalace" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/40 hover:decoration-accent">milla-jovovich/mempalace</a> },
  { label: "GitHub stars", value: "19,500+ (since April 2026)" },
  { label: "Dev stack", value: "Claude Code, Python, ChromaDB, SQLite" },
  { label: "Dev partner", value: "Ben Sigman (@bensig)" },
  { label: "Licensing", value: "MIT (open source)" },
  { label: "Programming style", value: "Vibe coding (AI-assisted development)" },
];

/* ─── FAQ data ─── */
const faqItems = [
  {
    question: "Does Milla Jovovich actually code?",
    answer:
      "Yes. Milla Jovovich co-developed MemPalace using Claude Code, Anthropic's AI-assisted coding environment. She describes her approach as 'vibe coding' — she directs the architecture, writes prompts, reviews outputs, and iterates on the system design while Claude Code handles much of the syntax. The result is a production-grade AI memory system with 19,500+ GitHub stars.",
  },
  {
    question: "What is Milla Jovovich's GitHub?",
    answer:
      "Milla Jovovich's GitHub is github.com/milla-jovovich. Her primary repository is MemPalace, the open-source AI memory system that scored 100% on the LongMemEval benchmark. The project is MIT licensed and has earned over 19,000 stars since launching in April 2026.",
  },
  {
    question: "Why did Milla Jovovich build an AI tool?",
    answer:
      "Jovovich became frustrated with AI amnesia — the fact that AI assistants like ChatGPT and Claude forget everything between sessions. After trying existing memory tools like Mem0 and Zep, she found they all used AI to decide what to remember, discarding nuance and context. She partnered with developer Ben Sigman to build a system that stores everything verbatim.",
  },
  {
    question: "Is Milla Jovovich a software engineer?",
    answer:
      "Milla Jovovich describes herself as a 'vibe coder' rather than a traditional software engineer. She uses AI-assisted development tools — primarily Claude Code — to build software. Her background is in acting and modeling, but she has demonstrated the ability to ship production-grade open-source software that outperforms venture-backed alternatives on standard benchmarks.",
  },
  {
    question: "What is MemPalace?",
    answer:
      "MemPalace is a free, open-source AI memory system co-created by Milla Jovovich and Ben Sigman. It is the highest-scoring system on the LongMemEval benchmark with a 100% score (96.6% raw, zero-API). Unlike alternatives that summarize and discard data, MemPalace stores all conversations verbatim. It is MIT licensed and costs $0 to run.",
  },
  {
    question: "Who is Ben Sigman?",
    answer:
      "Ben Sigman is the developer who partnered with Milla Jovovich to build MemPalace. He brought the engineering expertise while Jovovich provided the product vision and user perspective. Together they built the system using Claude Code over several months in early 2026.",
  },
  {
    question: "What is Milla Jovovich's GitHub username?",
    answer:
      "Milla Jovovich's GitHub username is @milla-jovovich. Her profile is at github.com/milla-jovovich. The primary repository she is known for is milla-jovovich/mempalace, which is MIT-licensed and has earned over 19,500 stars since launching in April 2026.",
  },
  {
    question: "How many GitHub stars does Milla Jovovich have?",
    answer:
      "Milla Jovovich's main repository, MemPalace, has earned 19,500+ GitHub stars since launching on April 5, 2026. It hit 7,000 stars within the first 48 hours, making it one of the fastest-growing open-source AI projects in history. Combined across her public repositories, her GitHub profile is among the most-starred in the AI memory category.",
  },
  {
    question: "What programming language does Milla Jovovich use?",
    answer:
      "Milla Jovovich's primary repository, MemPalace, is written in Python. The stack also includes SQLite for metadata storage and ChromaDB for vector search. She describes her development workflow as 'vibe coding' — she directs the architecture and reviews outputs while Claude Code (an AI coding assistant) handles most of the syntax generation.",
  },
  {
    question: "Is Milla Jovovich's GitHub account real?",
    answer:
      "Yes. Milla Jovovich's GitHub account at github.com/milla-jovovich is real and has been confirmed by her co-developer Ben Sigman in multiple public posts. The account's activity (including commits, issues, and pull requests on the mempalace repository) is verifiable on GitHub directly. Initial skepticism from the developer community has largely faded as her contributions have been independently reviewed.",
  },
  {
    question: "What is vibe coding?",
    answer:
      "'Vibe coding' is the term Milla Jovovich uses to describe her development approach. Instead of writing code character-by-character, she directs an AI coding agent (Claude Code) at a higher level: defining what she wants, reviewing the generated code, testing it, and iterating on the design. The term has since spread through the developer community as shorthand for AI-assisted, intent-driven development.",
  },
];

/* ─── Timeline data ─── */
const timelineEvents = [
  { date: "Early 2026", label: "Jovovich begins using AI tools daily, encounters the amnesia problem across ChatGPT and Claude" },
  { date: "Feb 2026", label: "Partners with developer Ben Sigman to build a memory system that stores everything verbatim" },
  { date: "Mar 2026", label: "Intensive development using Claude Code — architecture, retrieval engine, and benchmark suite" },
  { date: "Apr 5, 2026", label: "MemPalace pushed to GitHub as an open-source, MIT-licensed repository" },
  { date: "Apr 6, 2026", label: "7,000+ GitHub stars in 48 hours — the fastest-growing AI memory project ever" },
  { date: "Apr 7, 2026", label: "Benchmark controversy begins as researchers question the 100% LongMemEval methodology" },
];

/* ─── Reaction quotes ─── */
const reactions = [
  {
    quote: "Milla Jovovich having a GitHub with more stars than most YC companies is the most 2026 thing I've ever seen.",
    source: "Hacker News commenter",
  },
  {
    quote: "I cloned the repo expecting a joke. The architecture is genuinely well-designed. Verbatim storage with smart retrieval is the correct approach.",
    source: "Senior ML engineer, Reddit r/LocalLLaMA",
  },
  {
    quote: "A Resident Evil actress just shipped a better product than a $24M startup. We live in interesting times.",
    source: "Developer on X (Twitter)",
  },
];

/* ─── JSON-LD structured data ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.mempalace.tech/milla-jovovich#person",
      name: "Milla Jovovich",
      description:
        "Actress, model, and AI developer. Co-creator of MemPalace, the open-source AI memory system with 19,500+ GitHub stars and a 100% LongMemEval benchmark score.",
      url: "https://www.mempalace.tech/milla-jovovich",
      sameAs: [
        "https://github.com/milla-jovovich",
        "https://en.wikipedia.org/wiki/Milla_Jovovich",
        "https://www.imdb.com/name/nm0000170/",
      ],
      knowsAbout: [
        "AI memory systems",
        "Open-source software",
        "Claude Code",
        "Vibe coding",
      ],
      jobTitle: "Actress & AI Developer",
    },
    {
      "@type": "Article",
      "@id": "https://www.mempalace.tech/milla-jovovich#article",
      headline: "Milla Jovovich — From Resident Evil to AI Developer",
      description:
        "The Resident Evil actress learned to code and built MemPalace, the highest-scoring AI memory system on GitHub.",
      image: "https://www.mempalace.tech/images/milla-story.png",
      datePublished: "2026-04-07",
      dateModified: "2026-04-08",
      author: {
        "@type": "Organization",
        name: "MemPalace.tech",
        url: "https://www.mempalace.tech",
      },
      publisher: {
        "@type": "Organization",
        name: "MemPalace.tech",
        url: "https://www.mempalace.tech",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.mempalace.tech/milla-jovovich",
      },
      about: { "@id": "https://www.mempalace.tech/milla-jovovich#person" },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#speakable-intro"],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mempalace.tech" },
        { "@type": "ListItem", position: 2, name: "Milla Jovovich", item: "https://www.mempalace.tech/milla-jovovich" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

/* ─── Helper components ─── */
function Divider() {
  return (
    <div className="my-16 flex items-center justify-center gap-2" aria-hidden="true">
      <span className="h-px w-12 bg-card-border" />
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="h-px w-12 bg-card-border" />
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-card-border bg-card px-5 py-4 text-center">
      <p className="text-2xl font-bold text-accent">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

function ExploreCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/50"
    >
      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <span className="mt-3 inline-block text-sm font-medium text-accent">
        Read more &rarr;
      </span>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function MillaJovovichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ======================== BREADCRUMB ======================== */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 sm:px-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Milla Jovovich</li>
        </ol>
      </nav>

      {/* ======================== HERO ======================== */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/milla-story.png"
            alt="Milla Jovovich — actress, coder, and AI developer"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Actress &middot; Coder &middot; AI Developer
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Milla Jovovich: From Resident Evil to AI Developer
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The actress behind Alice in <em>Resident Evil</em> and Leeloo in{" "}
            <em>The Fifth Element</em> built the highest-scoring AI memory system
            on GitHub. This is the story of how Milla Jovovich went from fighting
            zombies on screen to shipping open-source software that outperforms
            venture-backed startups.
          </p>
        </div>
      </section>

      {/* ======================== ARTICLE BODY ======================== */}
      <article className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <div className="space-y-6 text-lg leading-relaxed text-muted">

          {/* ──────── QUICK FACTS (WIKI-STYLE) ──────── */}
          <section
            aria-label="Milla Jovovich quick facts"
            className="rounded-xl border border-card-border bg-card p-6 sm:p-8"
          >
            <h2 className="text-xl font-bold text-foreground">Milla Jovovich: Quick Facts</h2>
            <p className="mt-1 text-sm text-muted">Actress, model, and open-source AI developer</p>
            <dl className="mt-5 grid gap-x-6 gap-y-3 text-base sm:grid-cols-2">
              {quickFacts.map((f) => (
                <div key={f.label} className="flex flex-col border-b border-card-border/60 pb-2 last:border-b-0 sm:border-b">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{f.label}</dt>
                  <dd className="mt-0.5 text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ──────── SPEAKABLE INTRO ──────── */}
          <section id="speakable-intro" className="rounded-xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-foreground">
              <strong>Milla Jovovich</strong> is an actress, model, and AI developer.
              In 2026, she co-created <strong>MemPalace</strong>, an open-source AI
              memory system that achieved the first perfect score on the LongMemEval
              benchmark. The project earned 19,500+ GitHub stars and sparked global
              discussion about celebrity involvement in open-source software.
              Jovovich built the system using Claude Code alongside developer Ben
              Sigman, establishing herself as one of the most unexpected figures in
              the AI development community.
            </p>
          </section>

          <Divider />

          {/* ──────── THE TECH STORY ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            The Tech Story: How Milla Jovovich Learned to Code
          </h2>

          <p>
            Milla Jovovich&apos;s path into programming started with a problem, not
            a passion project. In early 2026, she was using AI assistants — ChatGPT,
            Claude, Gemini — for everything from business decisions to creative
            brainstorming. She poured thousands of conversations into these systems.
            Then she&apos;d open a new session and all of it was gone.
          </p>
          <p>
            Every existing solution she tried — Mem0, Zep, and others — used AI to
            decide what was worth keeping. They&apos;d summarize, extract
            &ldquo;key facts,&rdquo; and discard the rest. The nuance, the
            reasoning, the context that made those conversations valuable?
            Gone.
          </p>
          <p>
            Jovovich had a different idea:{" "}
            <strong className="text-foreground">store everything verbatim</strong>.
            Don&apos;t let AI rewrite your memories before filing them away. She
            partnered with developer{" "}
            <strong className="text-foreground">Ben Sigman</strong> in February 2026,
            and they spent months building MemPalace using{" "}
            <strong className="text-foreground">Claude Code</strong>, Anthropic&apos;s
            AI-assisted coding environment.
          </p>
          <p>
            The result launched on April 5, 2026. Within 48 hours, MemPalace had
            7,000+ GitHub stars. Within a week, it had crossed 19,000 — making Milla
            Jovovich&apos;s GitHub profile one of the most-starred in the AI
            category.
          </p>
          <p>
            <Link href="/story" className="text-accent underline decoration-accent/30 hover:decoration-accent">
              Read the full origin story &rarr;
            </Link>
          </p>

          <Divider />

          {/* ──────── MILLA JOVOVICH GITHUB ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Milla Jovovich&apos;s GitHub: What She&apos;s Actually Shipped
          </h2>

          <p>
            <strong className="text-foreground">Milla Jovovich&apos;s GitHub is{" "}
            <a href="https://github.com/milla-jovovich" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/30 hover:decoration-accent">
              github.com/milla-jovovich
            </a></strong>. It&apos;s the answer a lot of people type into Google when they first hear the
            story — and yes, it&apos;s a real profile with real commits. The headline repository is{" "}
            <a href="https://github.com/milla-jovovich/mempalace" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/30 hover:decoration-accent">
              milla-jovovich/mempalace
            </a>
            , an open-source AI memory framework that crossed 19,000 stars within its first week.
          </p>

          <p>
            The repository structure is unusual for a celebrity-associated project in that it is
            genuinely production-grade:
          </p>

          <ul className="my-4 list-disc space-y-2 pl-6 text-base">
            <li>
              <strong className="text-foreground">Language:</strong> Python 3.9+ with optional Rust extensions for
              vector search acceleration.
            </li>
            <li>
              <strong className="text-foreground">Storage layer:</strong> ChromaDB for vector embeddings, SQLite for
              metadata and timestamps.
            </li>
            <li>
              <strong className="text-foreground">Retrieval:</strong> BM25 lexical search combined with semantic
              vector retrieval — a 4-layer stack labeled L0 through L3.
            </li>
            <li>
              <strong className="text-foreground">Compression:</strong> AAAK, a custom lossless dialect that achieves
              ~30x compression ratios on stored conversation history.
            </li>
            <li>
              <strong className="text-foreground">Integrations:</strong> 19 MCP tools exposing the memory engine to
              Claude Code, plus adapters for ChatGPT, Cursor, and local LLMs like Llama and Mistral.
            </li>
            <li>
              <strong className="text-foreground">License:</strong> MIT, with no optional paid tier — a deliberate
              choice Jovovich has publicly defended in comment threads.
            </li>
          </ul>

          <p>
            The commit history is where skepticism usually ends. Early commits land in bursts that
            match Jovovich&apos;s public schedule — long gaps around press days and film shoots,
            dense batches on weekends. Ben Sigman&apos;s commits are interleaved throughout, which is
            consistent with the &ldquo;vibe coding&rdquo; workflow she describes: she drafts direction
            and reviews outputs while Sigman handles the harder systems-level work.
          </p>

          <p>
            If you want to see the stack yourself,{" "}
            <Link href="/guides/setup" className="text-accent underline decoration-accent/30 hover:decoration-accent">
              the setup guide walks through cloning her GitHub repo and running MemPalace locally in about five minutes
            </Link>
            .
          </p>

          <Divider />

          {/* ──────── WHAT SHE BUILT ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            MemPalace: What Milla Jovovich Built
          </h2>

          <p>
            MemPalace is an open-source AI memory system designed around one
            principle: <strong className="text-foreground">never throw anything away</strong>.
            While competing systems like Mem0 compress and summarize, MemPalace
            stores every conversation verbatim and uses a multi-layered retrieval
            engine to surface relevant context on demand.
          </p>

          <div className="my-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard value="19K+" label="GitHub Stars" />
            <StatCard value="100%" label="LongMemEval Score" />
            <StatCard value="MIT" label="License" />
            <StatCard value="$0" label="Cost to Run" />
          </div>

          <p>
            The architecture uses verbatim storage with BM25 + semantic search for
            retrieval. It supports multiple embedding providers, works with any LLM,
            and runs entirely on local infrastructure. No API keys required for the
            core memory engine.
          </p>
          <p>
            <Link href="/guides/setup" className="text-accent underline decoration-accent/30 hover:decoration-accent">
              Set up MemPalace in 5 minutes &rarr;
            </Link>
          </p>

          <Divider />

          {/* ──────── THE INTERNET'S REACTION ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            The Internet&apos;s Reaction to Milla Jovovich Coding
          </h2>

          <p>
            When Milla Jovovich&apos;s GitHub repository started climbing the
            trending charts, the developer community had strong opinions. Some
            praised the architecture. Others questioned whether a celebrity could
            genuinely build software. The discussion spanned Hacker News, Reddit,
            and X (Twitter).
          </p>

          <div className="my-8 space-y-4">
            {reactions.map((r, i) => (
              <blockquote
                key={i}
                className="rounded-xl border-l-4 border-accent bg-accent/5 px-6 py-5"
              >
                <p className="text-base italic leading-relaxed text-foreground">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="mt-2 text-sm text-muted">— {r.source}</p>
              </blockquote>
            ))}
          </div>

          <p>
            The benchmark controversy added fuel. Researchers questioned whether
            the 100% LongMemEval score was achieved through benchmark engineering.
            The MemPalace team responded by publishing full evaluation code and
            acknowledging that the raw zero-API score is 96.6%.
          </p>
          <p>
            <Link href="/story" className="text-accent underline decoration-accent/30 hover:decoration-accent">
              Read the full story with all reactions &rarr;
            </Link>
          </p>

          <Divider />

          {/* ──────── TIMELINE ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Milla Jovovich&apos;s AI Development Timeline
          </h2>

          <div className="my-8">
            <ol className="relative border-l-2 border-card-border pl-6">
              {timelineEvents.map((event, i) => (
                <li key={i} className="mb-8 last:mb-0">
                  <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background" />
                  <time className="text-sm font-semibold text-accent">{event.date}</time>
                  <p className="mt-1 text-base text-muted">{event.label}</p>
                </li>
              ))}
            </ol>
          </div>

          <Divider />

          {/* ──────── FAQ ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Frequently Asked Questions About Milla Jovovich
          </h2>

          <div className="my-8 space-y-6">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-card-border bg-card"
              >
                <summary className="cursor-pointer px-6 py-4 text-base font-semibold text-foreground transition-colors hover:text-accent">
                  {item.question}
                </summary>
                <div className="border-t border-card-border px-6 py-4">
                  <p className="text-base leading-relaxed text-muted">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <Divider />

          {/* ──────── EXPLORE MORE ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Explore More About MemPalace
          </h2>

          <div className="my-8 grid gap-4 sm:grid-cols-2">
            <ExploreCard
              href="/story"
              title="The Full Origin Story"
              description="How Milla Jovovich went from AI frustration to 19K GitHub stars. The complete narrative with behind-the-scenes details."
            />
            <ExploreCard
              href="/benchmarks"
              title="Benchmark Analysis"
              description="Independent fact-check of MemPalace's 100% LongMemEval score. Raw numbers, methodology, and the controversy."
            />
            <ExploreCard
              href="/guides/setup"
              title="Setup Guide"
              description="Install and configure MemPalace in 5 minutes. Step-by-step instructions for local deployment."
            />
            <ExploreCard
              href="/compare/mempalace-vs-mem0"
              title="MemPalace vs Mem0"
              description="Side-by-side comparison of the two most popular AI memory systems. Architecture, benchmarks, and pricing."
            />
          </div>
        </div>
      </article>
    </>
  );
}
