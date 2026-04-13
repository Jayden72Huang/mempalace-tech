import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import QuizModule from "@/components/QuizModule";
import AdsterraNative from "@/components/AdsterraNative";
import { getGitHubStats } from "@/lib/github";

export const metadata: Metadata = {
  title: "MemPalace — Milla Jovovich's AI Memory System on GitHub",
  description:
    "Milla Jovovich built MemPalace on GitHub — 19K+ stars, first 100% LongMemEval score. Free, local, MIT licensed. The story, benchmark controversy & 5-minute setup guide.",
  keywords: [
    "mempalace",
    "milla jovovich",
    "milla jovovich github",
    "milla jovovich ai",
    "ben sigman",
    "ai memory system",
    "mempalace benchmark",
    "LongMemEval",
  ],
};

const faqItems = [
  {
    question: "Who created MemPalace?",
    answer:
      "MemPalace was created by Milla Jovovich (the actress known for the Resident Evil franchise) and developer Ben Sigman. They built it over several months using Claude Code after Jovovich became frustrated that existing AI memory systems would decide what to remember for her, discarding the reasoning and context she actually needed.",
  },
  {
    question: "Does Milla Jovovich actually code?",
    answer:
      "Milla Jovovich co-developed MemPalace using Claude Code, an AI-assisted coding tool. She described the project as a collaboration between her vision for how AI memory should work and Ben Sigman's engineering expertise. The project is MIT licensed and available on her GitHub account at github.com/milla-jovovich/mempalace.",
  },
  {
    question: "What is MemPalace?",
    answer:
      "MemPalace is a free, open-source AI memory system that gives large language models persistent, cross-session memory. As of 2026, it holds the highest score on the LongMemEval benchmark (96.6% raw, 100% hybrid) among free tools. It stores all conversation data verbatim — rather than using AI to extract summaries — and uses vector search to retrieve relevant memories. It runs entirely locally using ChromaDB and SQLite, with zero API costs. MemPalace was created by Milla Jovovich and Ben Sigman and is MIT-licensed.",
  },
  {
    question: "Is the 100% benchmark score real?",
    answer:
      "MemPalace claims 100% on LongMemEval in hybrid mode (with optional Haiku reranking) and 96.6% in raw mode (zero API). However, these scores have been questioned by independent reviewers. The 100% hybrid score was achieved after targeted fixes for specific failing questions, and some methodology choices (like top_k settings) have been debated. The raw 96.6% score is generally considered more credible. See our full benchmark analysis for details.",
  },
  {
    question: "Is MemPalace free?",
    answer:
      "Yes — MemPalace is 100% free and MIT-licensed. It runs entirely on your local machine with zero cloud dependencies. The raw search mode requires no API keys and no cost at all. The optional hybrid mode (which achieves the 100% benchmark score) uses a cloud LLM for reranking at approximately $0.001 per query. There are no paid tiers, subscriptions, or usage limits.",
  },
  {
    question: "How does MemPalace compare to Mem0?",
    answer:
      "MemPalace outperforms Mem0 on benchmarks (96.6–100% vs ~85% on LongMemEval) and costs $0 versus Mem0's $19–249/month. The key architectural difference: MemPalace stores everything verbatim and uses vector search, while Mem0 uses an LLM to extract key facts and discards the rest. MemPalace runs fully locally; Mem0 is cloud-first. However, Mem0 has advantages in enterprise support ($24M YC funding), managed infrastructure, and ecosystem maturity. Choose MemPalace for accuracy and privacy, Mem0 for enterprise needs.",
  },
  {
    question: "How do I install MemPalace?",
    answer:
      "Install with pip install mempalace, then run mempalace init. It requires Python 3.9+. For Claude Code integration, add the MCP server config to your settings. Full tutorial at mempalace.tech/guides/setup.",
  },
  {
    question: "What is AAAK compression?",
    answer:
      "AAAK is a custom lossless compression dialect that MemPalace uses to compress stored memories approximately 30x. Any LLM can read AAAK natively without a decoder. However, independent testing suggests that using AAAK may reduce retrieval accuracy from 96.6% to approximately 84.2%, which is a tradeoff worth considering.",
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
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: "MemPalace",
      description: "Open-source AI memory system created by Milla Jovovich and Ben Sigman.",
      url: "https://github.com/milla-jovovich/mempalace",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows, macOS, Linux",
      softwareVersion: "3.0.0",
      downloadUrl: "https://pypi.org/project/mempalace/",
      installUrl: "https://www.mempalace.tech/guides/setup",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "7000", bestRating: "5", worstRating: "1" },
      author: { "@type": "Person", name: "Milla Jovovich" },
      license: "https://opensource.org/licenses/MIT",
    },
    {
      "@type": "WebPage",
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable"] },
    },
  ],
};

export default async function HomePage() {
  const gh = await getGitHubStats();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ======================== HERO — STORY HOOK ======================== */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image src="/images/hero-palace.png" alt="MemPalace visualization" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">The story everyone&apos;s talking about</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              A Resident Evil Actress Built an AI Memory System.{" "}
              <span className="text-accent">It Broke Every Benchmark.</span>
            </h1>
            <p className="speakable mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              Milla Jovovich and developer Ben Sigman spent months building MemPalace with Claude Code.
              It scored 100% on LongMemEval — the first perfect score ever. 7,000+ GitHub stars in 48 hours.
              But not everyone believes the numbers.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Link href="/story" className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover">
                Read the Full Story &rarr;
              </Link>
              <Link href="/milla-jovovich" className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-7 py-3.5 text-base font-semibold text-accent transition-colors hover:bg-accent/20">
                Who Is Milla Jovovich? &rarr;
              </Link>
              <Link href="/benchmarks" className="inline-flex items-center rounded-full border border-card-border px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-card">
                Are the Benchmarks Real?
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: gh.stars, label: "GitHub Stars" },
                { value: "100%", label: "LongMemEval Score" },
                { value: "$0", label: "Cost (MIT Licensed)" },
                { value: "100%", label: "Local — No Cloud" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-card-border bg-card px-4 py-5">
                  <p className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== THE ORIGIN STORY ======================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why a Hollywood Actress Started Coding AI Tools
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-card-border">
            <Image src="/images/milla-story.png" alt="Milla Jovovich coding MemPalace — the actress turned AI developer, with a holographic memory palace in the background" width={1200} height={675} className="w-full" priority />
          </div>
          <div className="mt-8 space-y-6 text-muted leading-relaxed">
            <p className="text-lg">
              <Link href="/milla-jovovich" className="text-foreground font-bold hover:text-accent transition-colors">Milla Jovovich</Link> — the actress behind Alice in the <em>Resident Evil</em> franchise and
              Leeloo in <em>The Fifth Element</em> — has been using AI tools daily for months. She accumulated thousands of conversations
              with ChatGPT and Claude: decisions, creative ideas, business reasoning, debugging sessions.{" "}
              <Link href="/milla-jovovich" className="text-accent underline decoration-accent/30 hover:decoration-accent">
                Read the full Milla Jovovich backstory &rarr;
              </Link>
            </p>
            <p className="text-lg">
              Then she noticed something infuriating: <strong className="text-foreground">every time she started a new session, her AI had amnesia.</strong>{" "}
              All those decisions, all that context — gone. She tried existing memory tools like <Link href="/compare/mempalace-vs-mem0" className="text-foreground underline decoration-accent/30 hover:decoration-accent">Mem0</Link> and <Link href="/compare/mempalace-vs-zep" className="text-foreground underline decoration-accent/30 hover:decoration-accent">Zep</Link>, but they had a fundamental problem:
              they used AI to decide what was worth remembering. The reasoning she needed most was exactly what got discarded.
            </p>
            <p className="text-lg">
              So she partnered with developer <strong className="text-foreground">Ben Sigman</strong> and spent months building MemPalace
              using Claude Code. Their radical idea: <strong className="text-foreground">don&apos;t let AI decide what to forget — store everything, then make it findable.</strong>
            </p>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-6">
              <p className="text-base italic text-foreground">
                &ldquo;I wanted my AI to remember the way I remember — not just the conclusions, but the journey. The alternatives
                I considered, the reasons I changed my mind, the nuance. That&apos;s what existing memory systems throw away.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted">— The motivation behind MemPalace, as described by its creators</p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/story" className="text-accent font-medium hover:text-accent-hover transition-colors">
              Read the complete origin story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ======================== THE CONTROVERSY ======================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Benchmark Controversy: Is 100% Real?
          </h2>
          <div className="mt-8 space-y-6 text-muted leading-relaxed">
            <p className="text-lg">
              MemPalace claims a <strong className="text-foreground">perfect 100% score on LongMemEval</strong> — the standard benchmark for AI memory systems.
              Within hours of launch, the tech community started asking: <em>is this actually legit?</em>
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-success/30 bg-success/5 p-5">
                <h3 className="font-semibold text-success">What&apos;s credible</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>96.6% raw score (zero API) is the highest published result requiring no external services</li>
                  <li>Verbatim storage approach is architecturally sound — you can&apos;t lose what you never discard</li>
                  <li>The team openly disclosed that 3 fixes (99.4% → 100%) were tuned on failing questions</li>
                  <li>Held-out test score of 98.4% shows strong generalization</li>
                </ul>
              </div>
              <div className="rounded-xl border border-warning/30 bg-warning/5 p-5">
                <h3 className="font-semibold text-warning">What&apos;s been questioned</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>100% hybrid score uses LLM reranking — not purely local</li>
                  <li>LoCoMo test used top_k=50, which may exceed candidate pool size</li>
                  <li>Some README claims don&apos;t match the actual codebase</li>
                  <li>AAAK compression may reduce accuracy from 96.6% to ~84.2%</li>
                </ul>
              </div>
            </div>

            <p className="text-lg">
              <strong className="text-foreground">Our take:</strong> The 96.6% raw score is genuinely impressive and beats all competitors that don&apos;t require API access.
              The 100% hybrid score is real but comes with caveats that the marketing doesn&apos;t emphasize. This is a real project with real innovations,
              wrapped in aggressive benchmark marketing that has sparked legitimate pushback.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/benchmarks" className="text-accent font-medium hover:text-accent-hover transition-colors">
              Read our full independent benchmark analysis &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ======================== SOCIAL PROOF — TWEETS ======================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What People Are Saying</h2>
          <p className="mt-3 text-muted">The internet reacted. Here are some highlights.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ben Sigman",
                handle: "@bensig",
                text: "My friend Milla Jovovich and I spent months building MemPalace with Claude Code. First perfect score on LongMemEval. 5,400 GitHub stars in 24 hours.",
                metric: "1.5M+ impressions",
                color: "border-accent/30",
              },
              {
                name: "Brian Roemmele",
                handle: "@BrianRoemmele",
                text: "We tested MemPalace at The Zero-Human Company and deployed it to 79 employees. This is a masterpiece.",
                metric: "AI industry KOL",
                color: "border-success/30",
              },
              {
                name: "Wayne Sutton",
                handle: "@WayneSutton",
                text: "Milla Jovovich launching an AI memory system was NOT on my 2026 bingo card.",
                metric: "Viral reaction",
                color: "border-warning/30",
              },
              {
                name: "HackerNews comment",
                handle: "denysvitali",
                text: "Yes, that Milla Jovovich (Resident Evil actress). This was definitely not on my 2026 Bingo Card. Missed opportunity to call it Resident Eval.",
                metric: "Top HN comment",
                color: "border-info/30",
              },
              {
                name: "Community reaction",
                handle: "@am_will",
                text: "Milla Jovovich has a GitHub. She's co-developed the highest-scoring AI memory system. What a boss.",
                metric: "Viral tweet",
                color: "border-accent/30",
              },
              {
                name: "Penfield Labs",
                handle: "Substack",
                text: "None of the benchmark scores are real... the LongMemEval 100% was achieved after targeted fixes on specific failing questions.",
                metric: "Critical analysis",
                color: "border-warning/30",
              },
            ].map((tweet, i) => (
              <div key={i} className={`rounded-xl border ${tweet.color} bg-card p-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{tweet.name}</p>
                    <p className="text-xs text-muted">{tweet.handle}</p>
                  </div>
                  <span className="rounded-full bg-card-border px-2 py-0.5 text-[10px] text-muted">{tweet.metric}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">&ldquo;{tweet.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== AD PLACEMENT ======================== */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <AdsterraNative />
      </div>

      {/* ======================== HOW IT WORKS (CONCISE) ======================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How MemPalace Actually Works
          </h2>
          <p className="mt-4 max-w-3xl text-muted text-lg">
            The core idea: instead of letting AI decide what&apos;s worth remembering (like Mem0 and Zep do),
            store everything verbatim and use vector search to find it later. It&apos;s inspired by the
            ancient &ldquo;memory palace&rdquo; mnemonic technique.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-card-border">
            <Image src="/images/architecture.png" alt="MemPalace architecture" width={1200} height={675} className="w-full" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Wings", desc: "Top-level containers for projects or people" },
              { title: "Rooms", desc: "Specific topics within each wing" },
              { title: "Halls", desc: "Corridors connecting rooms by memory type: facts, events, discoveries" },
              { title: "Closets", desc: "30x compressed summaries in AAAK lossless format" },
              { title: "Drawers", desc: "Original verbatim files — the source of truth, never deleted" },
              { title: "AAAK", desc: "Custom 30x compression dialect any LLM reads natively" },
            ].map((c) => (
              <div key={c.title} className="rounded-lg border border-card-border bg-card p-4">
                <h3 className="font-semibold text-accent">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-card-border overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-card-border bg-card text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-3 font-semibold">System</th>
                  <th className="px-5 py-3 font-semibold">LongMemEval</th>
                  <th className="px-5 py-3 font-semibold">Cost</th>
                  <th className="px-5 py-3 font-semibold">Local</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                <tr className="bg-accent/5">
                  <td className="px-5 py-3 font-semibold text-accent">MemPalace (raw)</td>
                  <td className="px-5 py-3 font-bold text-success">96.6%</td>
                  <td className="px-5 py-3 text-success">Free</td>
                  <td className="px-5 py-3 text-success">Yes</td>
                </tr>
                <tr><td className="px-5 py-3 text-foreground">Supermemory</td><td className="px-5 py-3 text-muted">~99%</td><td className="px-5 py-3 text-muted">Paid</td><td className="px-5 py-3 text-muted">No</td></tr>
                <tr><td className="px-5 py-3 text-foreground"><Link href="/compare/mempalace-vs-mem0" className="hover:text-accent transition-colors">Mem0</Link></td><td className="px-5 py-3 text-muted">~85%</td><td className="px-5 py-3 text-muted">$19-249/mo</td><td className="px-5 py-3 text-muted">No</td></tr>
                <tr><td className="px-5 py-3 text-foreground"><Link href="/compare/mempalace-vs-zep" className="hover:text-accent transition-colors">Zep</Link></td><td className="px-5 py-3 text-muted">~85%</td><td className="px-5 py-3 text-muted">$25/mo+</td><td className="px-5 py-3 text-muted">No</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            Table shows raw scores (no LLM reranking). Sources: <a href="https://arxiv.org/abs/2410.10813" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">LongMemEval paper</a>. See <Link href="/benchmarks" className="underline hover:text-foreground">our benchmark analysis</Link> for methodology caveats.
          </p>

          {/* GEO-optimized quotable summary */}
          <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6 speakable">
            <p className="text-sm leading-relaxed text-muted">
              <strong className="text-foreground">What is MemPalace?</strong> MemPalace is a free, open-source AI memory system created by actress Milla Jovovich and developer Ben Sigman. As of 2026, it is the highest-scoring free AI memory framework on the LongMemEval benchmark (96.6% raw, 100% hybrid). Unlike cloud-based alternatives like Mem0 ($19&ndash;249/mo) and Zep ($25/mo+), MemPalace runs entirely locally with zero API costs and stores all conversation data verbatim rather than using AI to extract summaries. It is MIT-licensed, supports Claude Code, ChatGPT, and Cursor via MCP, and has earned 19,500+ GitHub stars since launch.
            </p>
          </div>
        </div>
      </section>

      {/* ======================== QUIZ — INLINE ======================== */}
      <section className="border-t border-card-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-16 sm:pt-24 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">1-minute interactive tool</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Which AI Memory Framework Fits You?</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted">7 quick questions. Personalized recommendation with cost estimate. No signup needed.</p>
          </div>
          <QuizModule skipIntro />
        </div>
      </section>

      {/* ======================== GITHUB PULSE ======================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">GitHub Pulse</h2>
          <p className="mt-3 text-muted">What&apos;s happening in the MemPalace repository right now.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "GitHub Stars", value: gh.stars, sub: "Growing fast", icon: "\u2B50" },
              { label: "Forks", value: gh.forks, sub: "Active community", icon: "\u{1F500}" },
              { label: "Watchers", value: gh.watchers, sub: "Following updates", icon: "\u{1F440}" },
              { label: "Open Issues", value: gh.openIssues, sub: "Feature requests + bugs", icon: "\u{1F4AC}" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-card-border bg-card p-5 text-center">
                <span className="text-2xl">{s.icon}</span>
                <p className="mt-2 text-2xl font-bold text-accent">{s.value}</p>
                <p className="text-sm font-medium text-foreground">{s.label}</p>
                <p className="mt-1 text-xs text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-card-border bg-card p-5">
            <h3 className="font-semibold text-foreground">Hottest Issues Right Now</h3>
            <div className="mt-3 space-y-2">
              {[
                { num: "#59", title: "Import support for Cursor, Copilot, Codex, Windsurf", tag: "feature" },
                { num: "#50", title: "Multilingual search support (non-English memories)", tag: "feature" },
                { num: "#47", title: "UnicodeEncodeError crash on Windows", tag: "bug" },
                { num: "#37", title: "Chinese community deep analysis & discussion", tag: "community" },
                { num: "#29", title: "Benchmark methodology questions", tag: "discussion" },
              ].map((issue) => (
                <a
                  key={issue.num}
                  href={`https://github.com/milla-jovovich/mempalace/issues/${issue.num.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-card-border px-4 py-2.5 text-sm transition-colors hover:border-accent/50"
                >
                  <span className="text-muted">
                    <span className="font-mono text-accent">{issue.num}</span>{" "}
                    <span className="text-foreground">{issue.title}</span>
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] ${
                    issue.tag === "bug" ? "bg-warning/15 text-warning" :
                    issue.tag === "feature" ? "bg-accent/15 text-accent" :
                    issue.tag === "community" ? "bg-success/15 text-success" :
                    "bg-info/15 text-info"
                  }`}>{issue.tag}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== QUICK LINKS ======================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore MemPalace</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { href: "/milla-jovovich", title: "Milla Jovovich", desc: "Actress, coder, AI developer — her full profile & GitHub story", icon: "🎬" },
              { href: "/story", title: "The Full Story", desc: "How a Resident Evil actress shipped open-source AI", icon: "📖" },
              { href: "/benchmarks", title: "Benchmark Analysis", desc: "Independent look at the 100% score controversy", icon: "📊" },
              { href: "/guides/setup", title: "Setup Guide", desc: "Install and configure MemPalace in 5 minutes", icon: "🛠" },
              { href: "/compare/mempalace-vs-mem0", title: "vs Mem0", desc: "Feature-by-feature comparison with pricing", icon: "⚖" },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="group rounded-xl border border-card-border bg-card p-5 transition-colors hover:border-accent/50">
                <span className="text-2xl">{card.icon}</span>
                <h3 className="mt-3 font-semibold text-foreground group-hover:text-accent transition-colors">{card.title}</h3>
                <p className="mt-1 text-sm text-muted">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== BLOG + MORE COMPARISONS ======================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Blog articles */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">From the Blog</h2>
              <p className="mt-2 text-muted text-sm">Tutorials and deep dives on AI memory systems.</p>
              <div className="mt-6 space-y-4">
                {[
                  { href: "/blog/what-is-ai-memory", title: "What Is an AI Memory System? Complete Guide (2026)", desc: "How persistent memory works, why it matters, and how the top frameworks compare." },
                  { href: "/blog/add-memory-to-claude-code", title: "How to Add Persistent Memory to Claude Code", desc: "3 commands to give Claude Code permanent memory. Free, local, no API keys." },
                  { href: "/blog/best-ai-memory-frameworks-2026", title: "Best AI Memory Frameworks in 2026 — Ranked", desc: "We tested 8 frameworks on LongMemEval. Full comparison of pricing, features & architecture." },
                ].map((post) => (
                  <Link key={post.href} href={post.href} className="group block rounded-lg border border-card-border bg-card p-4 transition-colors hover:border-accent/50">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors text-[15px]">{post.title}</h3>
                    <p className="mt-1 text-sm text-muted">{post.desc}</p>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="mt-4 inline-block text-sm text-accent font-medium hover:text-accent-hover transition-colors">
                All blog posts &rarr;
              </Link>
            </div>

            {/* Right: More comparisons */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Compare AI Memory Systems</h2>
              <p className="mt-2 text-muted text-sm">See how MemPalace stacks up against every alternative.</p>
              <div className="mt-6 space-y-4">
                {[
                  { href: "/compare/mempalace-vs-mem0", title: "MemPalace vs Mem0", desc: "$0 vs $249/mo. 96.6% vs ~85% on LongMemEval." },
                  { href: "/compare/mempalace-vs-supermemory", title: "MemPalace vs SuperMemory", desc: "Open-source vs managed cloud. Local-first vs API-dependent." },
                  { href: "/compare/mempalace-vs-letta", title: "MemPalace vs Letta", desc: "Pure memory vs agent framework. Different goals, different strengths." },
                  { href: "/compare/mempalace-vs-zep", title: "MemPalace vs Zep", desc: "Free vs usage-based pricing. Verbatim vs summarization." },
                  { href: "/compare/mempalace-vs-cognee", title: "MemPalace vs Cognee", desc: "Vector search vs knowledge graph. Two approaches to AI memory." },
                ].map((comp) => (
                  <Link key={comp.href} href={comp.href} className="group block rounded-lg border border-card-border bg-card p-4 transition-colors hover:border-accent/50">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors text-[15px]">{comp.title}</h3>
                    <p className="mt-1 text-sm text-muted">{comp.desc}</p>
                  </Link>
                ))}
              </div>
              <Link href="/tools" className="mt-4 inline-block text-sm text-accent font-medium hover:text-accent-hover transition-colors">
                View all AI memory tools &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== FAQ ======================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group rounded-xl border border-card-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-base font-medium text-foreground">
                  <span>{item.question}</span>
                  <span className="ml-4 text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CTA + NEWSLETTER (COMBINED) ======================== */}
      <section className="border-t border-card-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Try it */}
            <div className="rounded-2xl border border-card-border bg-card p-8 text-center sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Try MemPalace Yourself</h2>
              <p className="mt-3 text-muted">Free, open-source, installs in under a minute. See if the hype is justified.</p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/guides/setup" className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover">
                  Setup Guide &rarr;
                </Link>
                <a href="https://github.com/milla-jovovich/mempalace" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-card-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card">
                  GitHub &#8599;
                </a>
              </div>
            </div>
            {/* Right: Newsletter */}
            <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card to-card p-8 text-center sm:p-10">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">Weekly newsletter</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">AI Memory System Weekly</h2>
              <p className="mt-3 text-muted">Framework updates, benchmark news, controversy breakdowns. One email/week.</p>
              <a
                href="https://ai-memory-weekly.beehiiv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Subscribe Free &rarr;
              </a>
              <p className="mt-3 text-xs text-muted">Free. No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
