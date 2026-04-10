import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milla Jovovich — From Resident Evil to AI Developer",
  description:
    "Yes, that Milla Jovovich. The Resident Evil actress learned to code and built MemPalace — the #1 AI memory system with 19K+ GitHub stars. Here's her tech story.",
  alternates: { canonical: "https://www.mempalace.tech/milla-jovovich" },
  keywords: [
    "milla jovovich",
    "milla jovovich github",
    "milla jovovich ai",
    "milla jovovich coding",
    "milla jovovich developer",
    "milla jovovich mempalace",
    "milla jovovich programming",
  ],
  openGraph: {
    title: "Milla Jovovich — From Resident Evil to AI Developer",
    description:
      "The Resident Evil actress learned to code and built MemPalace, the highest-scoring AI memory system on GitHub with 19K+ stars.",
    url: "https://www.mempalace.tech/milla-jovovich",
    type: "article",
    images: [{ url: "/images/milla-story.png", width: 1200, height: 675, alt: "Milla Jovovich — Actress, Coder, AI Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milla Jovovich — From Resident Evil to AI Developer",
    description:
      "Yes, that Milla Jovovich. She learned to code and built MemPalace — 19K+ GitHub stars, 100% LongMemEval score.",
    images: ["/images/milla-story.png"],
  },
};

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
