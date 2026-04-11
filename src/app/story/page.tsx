import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ContinueReading from "@/components/ContinueReading";
import AdsterraNative from "@/components/AdsterraNative";

export const metadata: Metadata = {
  title: "Why Milla Jovovich Has a GitHub — The MemPalace Origin Story",
  description:
    "A Resident Evil actress got frustrated with AI amnesia. So she learned to code and built the #1 AI memory system — 19K+ GitHub stars, 100% benchmark score. Here's what happened.",
  alternates: { canonical: "https://www.mempalace.tech/story" },
  openGraph: {
    title: "Why Milla Jovovich Has a GitHub — The MemPalace Origin Story",
    description:
      "A Resident Evil actress learned to code and built the highest-scoring AI memory system. 19K+ stars in weeks.",
    url: "https://www.mempalace.tech/story",
    type: "article",
    images: [{ url: "/images/hero-palace.png", width: 1200, height: 675 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Milla Jovovich Has a GitHub — The MemPalace Origin Story",
  description:
    "A Resident Evil actress got frustrated with AI amnesia. So she learned to code and built the #1 AI memory system — 19K+ stars, 100% benchmark score.",
  image: "https://www.mempalace.tech/images/hero-palace.png",
  datePublished: "2026-04-06",
  dateModified: "2026-04-07",
  author: [
    { "@type": "Organization", name: "MemPalace.tech", url: "https://www.mempalace.tech" },
  ],
  publisher: {
    "@type": "Organization",
    name: "MemPalace.tech",
    url: "https://www.mempalace.tech",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.mempalace.tech/story",
  },
  about: [
    { "@type": "Person", name: "Milla Jovovich" },
    { "@type": "Person", name: "Ben Sigman" },
    { "@type": "SoftwareApplication", name: "MemPalace" },
  ],
  keywords:
    "milla jovovich github, milla jovovich mempalace, milla jovovich ai, ben sigman, mempalace story",
};

/* ─── Pull‑quote component ─── */
function PullQuote({ children, attribution }: { children: React.ReactNode; attribution?: string }) {
  return (
    <blockquote className="my-10 rounded-xl border-l-4 border-accent bg-accent/5 px-6 py-5">
      <p className="text-lg italic leading-relaxed text-foreground">{children}</p>
      {attribution && <p className="mt-3 text-sm text-muted">— {attribution}</p>}
    </blockquote>
  );
}

/* ─── Section divider ─── */
function Divider() {
  return (
    <div className="my-16 flex items-center justify-center gap-2" aria-hidden="true">
      <span className="h-px w-12 bg-card-border" />
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="h-px w-12 bg-card-border" />
    </div>
  );
}

export default function StoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ======================== HERO ======================== */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image src="/images/hero-palace.png" alt="MemPalace visualization" fill className="object-cover opacity-10" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Feature Story</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            How Milla Jovovich Built MemPalace — The Full Story
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            A Resident Evil actress, frustrated by AI amnesia, teamed up with a developer and spent months coding
            an open-source memory system. It scored 100% on the benchmark everyone uses. Then the internet had opinions.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted">
            <time dateTime="2026-04-06">April 6, 2026</time>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span>12 min read</span>
          </div>
        </div>
      </section>

      {/* ======================== ARTICLE BODY ======================== */}
      <article className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="prose-custom space-y-6 text-lg leading-relaxed text-muted">

          {/* ──────── ACT 1: THE FRUSTRATION ──────── */}
          <h2 className="!mt-0 text-2xl font-bold text-foreground sm:text-3xl">Act 1: The Frustration</h2>

          <p>
            <Link href="/milla-jovovich" className="text-foreground font-semibold hover:text-accent transition-colors">Milla Jovovich</Link> is not the person you expect to find on GitHub.
          </p>
          <p>
            She is, of course, the actress who made Alice an icon across six <em>Resident Evil</em> films, who played Leeloo
            in Luc Besson&apos;s <em>The Fifth Element</em>, and who has spent three decades as one of Hollywood&apos;s
            most recognizable action stars. She is not, by any stretch of the traditional imagination, a software developer.{" "}
            <Link href="/milla-jovovich" className="text-accent underline decoration-accent/30 hover:decoration-accent">
              (See her full profile, GitHub, and dev stack &rarr;)
            </Link>
          </p>
          <p>
            But somewhere in late 2025, Jovovich started using AI — ChatGPT, Claude, the usual suspects — not casually,
            but <strong className="text-foreground">intensively</strong>. She poured thousands of conversations into these
            systems: business decisions, creative brainstorming, contract reasoning, debugging sessions for projects she was
            managing. Over months, those conversations became a sprawling archive of her thinking — a digital record of every
            alternative she considered, every nuance she weighed, every decision she made and why.
          </p>
          <p>
            Then she&apos;d open a new chat window, and <strong className="text-foreground">all of it was gone</strong>.
          </p>
          <p>
            Total amnesia. Every session started from zero. The AI that had just helped her reason through a complex
            negotiation couldn&apos;t remember a single word of it the next morning. She was, in her own words, dealing
            with &ldquo;a brilliant assistant with permanent short-term memory loss.&rdquo;
          </p>
          <p>
            So she went looking for a fix. She tried{" "}
            <Link href="/compare/mempalace-vs-mem0" className="text-accent underline decoration-accent/30 hover:decoration-accent">Mem0</Link>,
            the YC-backed memory layer that has raised $24 million. She tried{" "}
            <Link href="/compare/mempalace-vs-zep" className="text-accent underline decoration-accent/30 hover:decoration-accent">Zep</Link>.
            She tried several other memory tools in the emerging ecosystem.
          </p>
          <p>
            Every one of them had the same fundamental problem: <strong className="text-foreground">they used AI to
            decide what was worth keeping</strong>. An LLM would read her conversations, extract what it deemed to be
            &ldquo;key facts,&rdquo; compress the rest into summaries, and throw away the originals. Her reasoning,
            the alternatives she considered, the nuance that made her decisions actually useful — discarded.
            Replaced with neat little bullet points that missed the point entirely.
          </p>

          <PullQuote attribution="The philosophy behind MemPalace">
            &ldquo;Why should AI decide what I need to remember? It doesn&apos;t know what&apos;s going to be relevant
            tomorrow. Nobody does. That&apos;s why you keep everything.&rdquo;
          </PullQuote>

          <p>
            That was the moment. Not a technical insight — a human one. The entire AI memory industry was built on the
            assumption that storage is expensive and context windows are limited, so you need to be smart about what you
            keep. But Jovovich, coming at the problem as a user rather than an engineer, saw it differently: the
            &ldquo;smart&rdquo; part was the problem. If you let the machine decide what to forget, you&apos;ve already lost.
          </p>

          <Divider />

          {/* ──────── ACT 2: THE BUILD ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Act 2: The Build</h2>

          <p>
            She needed a developer. She found <strong className="text-foreground">Ben Sigman</strong>.
          </p>
          <p>
            The details of how they connected are sparse — neither has said much publicly beyond their respective social
            media posts — but the partnership was clear from the start. Jovovich had the vision: an AI memory system
            that never throws anything away. Sigman had the engineering chops to make it real. And they had a tool
            that would let them move fast:{" "}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/30 hover:decoration-accent">Claude Code</a>,
            Anthropic&apos;s AI-assisted coding environment.
          </p>
          <p>
            They spent months building. The design principle was radical in its simplicity:{" "}
            <strong className="text-foreground">store everything verbatim</strong>. Don&apos;t summarize. Don&apos;t
            extract. Don&apos;t let an LLM rewrite your memories before filing them away. Just keep the raw
            conversations, index them properly, and make them searchable.
          </p>
          <p>
            The architecture borrowed a metaphor from one of the oldest learning techniques in human history: the{" "}
            <strong className="text-foreground">memory palace</strong>. The ancient Greek technique of mentally
            placing information in rooms of an imagined building, then walking through it to recall what you need.
            MemPalace made this literal.
          </p>
          <p>
            The system organized memories into a hierarchy that any human could understand:
          </p>

          <div className="my-8 grid gap-3 sm:grid-cols-2">
            {[
              { name: "Wings", desc: "Top-level containers — a wing for each project or person" },
              { name: "Rooms", desc: "Specific topics within each wing" },
              { name: "Halls", desc: "Corridors connecting rooms by memory type: facts, events, discoveries" },
              { name: "Closets", desc: "Compressed summaries using AAAK, a custom 30x lossless format" },
              { name: "Drawers", desc: "The originals — verbatim files, the source of truth, never deleted" },
              { name: "AAAK", desc: "A custom compression dialect any LLM can read without a decoder" },
            ].map((item) => (
              <div key={item.name} className="rounded-lg border border-card-border bg-card px-4 py-3">
                <span className="font-semibold text-accent">{item.name}</span>
                <span className="ml-2 text-sm text-muted">{item.desc}</span>
              </div>
            ))}
          </div>

          <p>
            Under the hood, it ran on <strong className="text-foreground">ChromaDB</strong> for vector search and{" "}
            <strong className="text-foreground">SQLite</strong> for metadata — both entirely local, both free.
            No API keys required. No cloud dependency. No subscription. Your memories stayed on your machine.
          </p>
          <p>
            The name came naturally: <strong className="text-foreground">MemPalace</strong>. And the internet, being
            the internet, immediately pointed out the missed opportunity: &ldquo;She should have called it{" "}
            <em>Resident Eval</em>.&rdquo;
          </p>

          <PullQuote attribution="Ben Sigman, launch day tweet">
            &ldquo;Multipass.&rdquo;
          </PullQuote>

          <p>
            That single-word tweet — a reference to Jovovich&apos;s most quotable line from <em>The Fifth Element</em> —
            became one of the most-shared posts of the launch. Sigman understood the assignment.
          </p>

          <Divider />

          <AdsterraNative />

          {/* ──────── ACT 3: THE LAUNCH ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Act 3: The Launch</h2>

          <p>
            On April 5, 2026, Milla Jovovich pushed MemPalace to GitHub under her own account:{" "}
            <a href="https://github.com/milla-jovovich/mempalace" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/30 hover:decoration-accent">
              github.com/milla-jovovich/mempalace
            </a>. MIT licensed. Free to use. Free to modify.
          </p>
          <p>
            What happened next was one of those rare moments where Hollywood and the developer world collide in real
            time.
          </p>
          <p>
            <strong className="text-foreground">Within 48 hours, the repository had over 7,000 stars.</strong>
          </p>
          <p>
            Ben Sigman&apos;s launch tweet passed <strong className="text-foreground">1.5 million impressions</strong>.
            Threads, Twitter, LinkedIn — every platform lit up simultaneously. Not because another AI memory tool
            had launched (there are plenty of those), but because{" "}
            <em>Milla Jovovich had a GitHub account, and the code she shipped actually worked</em>.
          </p>
          <p>
            The reactions were a genre unto themselves:
          </p>

          <div className="my-8 space-y-3">
            {[
              { quote: "Milla Jovovich has a GitHub? What a boss.", attribution: "Multiple Twitter users, paraphrased" },
              { quote: "This was not on my 2026 bingo card.", attribution: "Wayne Sutton" },
              { quote: "The Resident Evil franchise was training montage for battling AI amnesia.", attribution: "Tech Twitter" },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-card-border bg-card px-5 py-4">
                <p className="text-base italic text-foreground">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-1 text-xs text-muted">— {item.attribution}</p>
              </div>
            ))}
          </div>

          <p>
            <strong className="text-foreground">Brian Roemmele</strong>, the tech commentator and founder of
            The Zero-Human Company, didn&apos;t just tweet about it — he deployed MemPalace to{" "}
            <strong className="text-foreground">79 employees</strong>. A live production deployment, within
            days of the public launch, at a company that was already betting its operations on AI-first workflows.
          </p>
          <p>
            The media coverage wasn&apos;t limited to tech circles. The novelty of the story — actress ships
            open-source software, scores higher than VC-funded competitors — crossed over into mainstream
            tech conversation. It was the kind of narrative that writes itself: the underdog, the unexpected
            protagonist, the audacious claim.
          </p>
          <p>
            But the claim was the part that got people thinking.
          </p>

          <Divider />

          {/* ──────── ACT 4: THE CONTROVERSY ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Act 4: The Controversy</h2>

          <p>
            The README made a bold statement: <strong className="text-foreground">100% on LongMemEval</strong>, the
            standard benchmark for AI memory systems. A perfect score. The first one ever published. Higher than
            <Link href="/compare/mempalace-vs-mem0" className="text-foreground underline decoration-accent/30 hover:decoration-accent">Mem0</Link>, higher than <Link href="/compare/mempalace-vs-zep" className="text-foreground underline decoration-accent/30 hover:decoration-accent">Zep</Link>, higher than every well-funded competitor in the space.
          </p>
          <p>
            Within hours, the scrutiny began.
          </p>
          <p>
            <strong className="text-foreground">Penfield Labs</strong> published a critical analysis on Substack
            with a title that didn&apos;t mince words: <em>&ldquo;None of the benchmark scores are real.&rdquo;</em>{" "}
            Their detailed examination raised several pointed questions about MemPalace&apos;s claimed performance.
          </p>
          <p>
            The key criticisms, stripped of rhetoric:
          </p>

          <ul className="my-6 space-y-3 pl-5">
            <li className="list-disc">
              <strong className="text-foreground">top_k settings:</strong> The LoCoMo benchmark test used{" "}
              <code className="rounded bg-card px-1.5 py-0.5 text-sm font-mono text-accent">top_k=50</code>,
              which critics argued could exceed the actual number of candidates in the test pool — effectively
              returning everything and trivially achieving a high score.
            </li>
            <li className="list-disc">
              <strong className="text-foreground">Tuning on the test set:</strong> Three specific fixes were made
              to push the score from 99.4% to 100%. The team disclosed this, but critics argued it constituted
              overfitting to the evaluation set rather than genuine capability improvement.
            </li>
            <li className="list-disc">
              <strong className="text-foreground">README vs. codebase gaps:</strong> Some performance claims in the
              README didn&apos;t match what the code actually implemented. The marketing was ahead of the engineering.
            </li>
            <li className="list-disc">
              <strong className="text-foreground">Hybrid vs. raw distinction:</strong> The headline 100% required
              LLM reranking via Haiku — not purely local as the positioning implied. The raw score was 96.6%:
              still best-in-class, but not 100%.
            </li>
          </ul>

          <p>
            GitHub issues{" "}
            <a href="https://github.com/milla-jovovich/mempalace/issues/27" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/30 hover:decoration-accent">#27</a>{" "}
            and{" "}
            <a href="https://github.com/milla-jovovich/mempalace/issues/29" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/30 hover:decoration-accent">#29</a>{" "}
            became the epicenter of the technical debate. HackerNews threads ran long — a mix of legitimate
            methodological scrutiny and the inevitable celebrity-meets-tech spectacle. Some commenters carefully
            dissected the evaluation pipeline. Others couldn&apos;t get past the fact that they were reviewing
            a pull request from the woman who fought zombies in a red dress.
          </p>

          <PullQuote attribution="A representative HackerNews comment">
            &ldquo;The benchmarks are debatable. The architecture is interesting. The fact that I&apos;m reading
            a GitHub issue filed against Milla Jovovich&apos;s repository is something I absolutely did not
            expect to be doing today.&rdquo;
          </PullQuote>

          <p>
            The controversy wasn&apos;t entirely fair, and it wasn&apos;t entirely unfair. Aggressive benchmark
            marketing is endemic to the AI industry — half the papers on arXiv make claims that crumble under
            independent replication. What made MemPalace different wasn&apos;t that its numbers were questioned.
            It was <em>who</em> was doing the claiming.
          </p>
          <p>
            For a deeper dive into every benchmark claim and criticism, see our{" "}
            <Link href="/benchmarks" className="text-accent underline decoration-accent/30 hover:decoration-accent">
              full independent benchmark analysis
            </Link>.
          </p>

          <Divider />

          {/* ──────── ACT 5: WHAT HAPPENS NEXT ──────── */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Act 5: What Happens Next</h2>

          <p>
            As of this writing, the MemPalace community is growing quickly. The{" "}
            <a href="https://twitter.com/i/communities" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/30 hover:decoration-accent">X Community</a>{" "}
            has crossed 161 members. Feature requests are pouring in: integrations with{" "}
            <strong className="text-foreground">Cursor</strong>,{" "}
            <strong className="text-foreground">GitHub Copilot</strong>, Windows support, improved onboarding.
          </p>
          <p>
            A <strong className="text-foreground">Chinese developer community</strong> has already emerged around
            the project — GitHub{" "}
            <a href="https://github.com/milla-jovovich/mempalace/issues/37" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/30 hover:decoration-accent">issue #37</a>{" "}
            is a dedicated thread for Chinese-language discussion and localization efforts. For an open-source
            project that&apos;s barely a week old, that kind of international adoption is notable.
          </p>
          <p>
            The real question isn&apos;t whether MemPalace&apos;s benchmarks hold up under perfect scrutiny. The
            real question is whether the <strong className="text-foreground">&ldquo;store everything&rdquo;
            philosophy</strong> is the right approach to AI memory.
          </p>
          <p>
            The incumbent tools — Mem0, Zep, and others — all bet on extraction: use AI to pull out important
            facts, compress the rest, manage a tidy knowledge graph. It&apos;s elegant. It&apos;s efficient.
            And it loses information by design.
          </p>
          <p>
            MemPalace bets the opposite way: keep everything raw, index it intelligently, let search do the
            work. It&apos;s less elegant. It uses more storage. But you never lose a thought you might need later.
            That&apos;s a real design tradeoff, and it&apos;s sparked a genuine debate in the AI developer
            community about what &ldquo;memory&rdquo; should mean for machines.
          </p>
          <p>
            Whether MemPalace becomes the standard or becomes a footnote, it has already accomplished
            something unusual: it made people rethink an assumption that the entire industry had taken for
            granted. And it did it because an actress got frustrated enough to build something better.
          </p>

          <PullQuote>
            &ldquo;The best tools come from people who are angry about the way things work. Milla was angry.
            And now there&apos;s a memory system that doesn&apos;t throw away your reasoning.&rdquo;
          </PullQuote>

          <Divider />

          {/* ──────── SIDEBAR: WHO IS BEN SIGMAN? ──────── */}
          <aside className="rounded-xl border border-card-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground">Sidebar: Who Is Ben Sigman?</h2>
            <div className="mt-4 space-y-4 text-base text-muted">
              <p>
                Every viral story has a face. For MemPalace, that face is Milla Jovovich. But every viral
                <em> open-source project</em> has an engineer, and for MemPalace, that&apos;s{" "}
                <strong className="text-foreground">Ben Sigman</strong>.
              </p>
              <p>
                Sigman is the developer who turned Jovovich&apos;s frustration into a working system. He designed
                the architecture — the Wings/Rooms/Halls hierarchy, the ChromaDB integration, the AAAK compression
                format — and he wrote the code alongside Claude Code over months of iteration.
              </p>
              <p>
                His public profile is modest compared to Jovovich&apos;s megawatt fame: a developer with a clear
                talent for systems design and a dry sense of humor (his launch-day &ldquo;Multipass&rdquo; tweet
                remains iconic). He hasn&apos;t done extensive press or interviews, letting the code — and the
                GitHub star count — do the talking.
              </p>
              <p>
                What&apos;s clear from the project is that Sigman understood something important about the
                collaboration: Jovovich wasn&apos;t a celebrity lending her name to a tech product. She was a
                power user with a specific, well-articulated problem. His job was to solve it. By most accounts,
                he did.
              </p>
            </div>
          </aside>

          <Divider />

          {/* ──────── CTA ──────── */}
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 text-center sm:p-8">
            <h2 className="text-xl font-bold text-foreground">Keep Reading</h2>
            <p className="mt-2 text-base text-muted">
              Go deeper into the story, the numbers, and the system itself.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/benchmarks"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Benchmark Analysis &rarr;
              </Link>
              <Link
                href="/guides/setup"
                className="inline-flex items-center rounded-full border border-card-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                Setup Guide &rarr;
              </Link>
              <Link
                href="/compare/mempalace-vs-mem0"
                className="inline-flex items-center rounded-full border border-card-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                MemPalace vs Mem0 &rarr;
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center rounded-full border border-card-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                All AI Memory Tools &rarr;
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center rounded-full border border-card-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                Take the Quiz &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>

      <ContinueReading exclude="story" />
    </>
  );
}
