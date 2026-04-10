import type { Metadata } from "next";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import ContinueReading from "@/components/ContinueReading";

/* ---------- metadata ---------- */

export const metadata: Metadata = {
  title: "How to Add Persistent Memory to Claude Code (2026 Guide)",
  description:
    "Give Claude Code permanent memory with MemPalace. 3 commands to install. Your AI remembers every conversation, decision, and context — forever. Free, local, no API keys.",
  keywords: [
    "add memory to claude code",
    "claude code memory",
    "claude code mcp",
    "persistent memory claude",
    "mempalace claude code setup",
  ],
  alternates: { canonical: "https://www.mempalace.tech/blog/add-memory-to-claude-code" },
  openGraph: {
    title: "How to Add Persistent Memory to Claude Code (2026 Guide)",
    description:
      "Give Claude Code permanent memory with MemPalace. 3 commands to install. Your AI remembers everything — forever.",
    url: "https://www.mempalace.tech/blog/add-memory-to-claude-code",
    type: "article",
    siteName: "MemPalace.tech",
    locale: "en_US",
    images: [{ url: "/images/og-image.png", width: 1200, height: 675, alt: "Add memory to Claude Code with MemPalace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Add Persistent Memory to Claude Code (2026 Guide)",
    description:
      "Give Claude Code permanent memory with MemPalace. 3 commands. Free, local, no API keys.",
  },
};

/* ---------- tiny helpers (server component, zero JS) ---------- */

function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent ring-1 ring-accent/30">
      {n}
    </span>
  );
}

function CodeBlock({ children, lang = "bash" }: { children: string; lang?: string }) {
  return (
    <div className="group relative my-4 overflow-x-auto rounded-lg bg-zinc-900 ring-1 ring-card-border">
      <div className="flex items-center justify-between border-b border-card-border px-4 py-2">
        <span className="text-xs font-medium text-muted">{lang}</span>
        <CopyButton text={children.trim()} />
      </div>
      <pre className="p-4 text-sm leading-relaxed">
        <code className="font-mono text-zinc-300">{children}</code>
      </pre>
    </div>
  );
}

/* ---------- JSON-LD structured data ---------- */

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mempalace.tech" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mempalace.tech/blog" },
    { "@type": "ListItem", position: 3, name: "Add Memory to Claude Code" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Persistent Memory to Claude Code in 5 Minutes",
  description:
    "Give Claude Code permanent memory with MemPalace. 3 commands to install. Your AI remembers every conversation, decision, and context — forever.",
  url: "https://www.mempalace.tech/blog/add-memory-to-claude-code",
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
  author: { "@type": "Organization", name: "MemPalace.tech", url: "https://www.mempalace.tech" },
  publisher: { "@type": "Organization", name: "MemPalace.tech", url: "https://www.mempalace.tech" },
  mainEntityOfPage: "https://www.mempalace.tech/blog/add-memory-to-claude-code",
  keywords: "add memory to claude code, claude code memory, claude code mcp, persistent memory claude, mempalace claude code",
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Add Persistent Memory to Claude Code",
  description:
    "Step-by-step guide to give Claude Code permanent memory using the MemPalace MCP server. 3 commands, 5 minutes, free and local.",
  totalTime: "PT5M",
  estimatedCost: { "@type": "MonetaryCost", currency: "USD", value: "0" },
  tool: [
    { "@type": "HowToTool", name: "Python 3.9+" },
    { "@type": "HowToTool", name: "Claude Code CLI" },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Install MemPalace",
      text: "Run pip install mempalace to install the package and all dependencies.",
      url: "https://www.mempalace.tech/blog/add-memory-to-claude-code#step-1",
    },
    {
      "@type": "HowToStep",
      name: "Initialize Your Palace",
      text: "Run mempalace init to create the local memory directory structure.",
      url: "https://www.mempalace.tech/blog/add-memory-to-claude-code#step-2",
    },
    {
      "@type": "HowToStep",
      name: "Connect to Claude Code",
      text: "Add the MemPalace MCP server configuration to your Claude Code settings JSON file.",
      url: "https://www.mempalace.tech/blog/add-memory-to-claude-code#step-3",
    },
    {
      "@type": "HowToStep",
      name: "Verify It Works",
      text: "Start a Claude Code session and ask it to store and recall a memory to confirm the integration is working.",
      url: "https://www.mempalace.tech/blog/add-memory-to-claude-code#step-4",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does adding memory slow down Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MemPalace responds in under 100ms per query. Memory retrieval runs in parallel with Claude's thinking, so you won't notice any delay in normal usage.",
      },
    },
    {
      "@type": "Question",
      name: "Where is my Claude Code memory data stored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All data is stored locally in ~/.mempalace/ on your machine. Nothing is sent to the cloud. The directory contains a ChromaDB vector database and a SQLite metadata store, both fully under your control.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use MemPalace with Claude Desktop too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MemPalace works with any MCP-compatible client, including Claude Desktop, Claude Code, ChatGPT, Cursor, and Windsurf. The same memory database is shared across all connected clients.",
      },
    },
    {
      "@type": "Question",
      name: "How much storage does MemPalace use for Claude Code memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 1MB per 1,000 memories thanks to AAAK compression achieving 30x compression ratios. A typical 6-month conversation history uses roughly 50-100MB of disk space.",
      },
    },
    {
      "@type": "Question",
      name: "Is MemPalace free to use with Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MemPalace is MIT licensed and completely free. There are no API keys, no cloud accounts, no subscription fees, and no usage limits. Everything runs locally on your machine.",
      },
    },
  ],
};

/* ---------- page ---------- */

export default function AddMemoryToClaudeCodePage() {
  return (
    <>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="pt-8 text-sm text-muted">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-accent">Blog</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium">Add Memory to Claude Code</li>
          </ol>
        </nav>

        {/* ======== Hero ======== */}
        <header className="py-12 sm:py-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">Tutorial</p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            How to Add Persistent Memory to Claude&nbsp;Code in 5&nbsp;Minutes
          </h1>
          <p className="speakable mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Claude Code is powerful &mdash; but every new session starts with amnesia. MemPalace fixes that. Three
            commands give Claude Code permanent memory via the Model Context Protocol. Your decisions, your context,
            your preferences &mdash; remembered forever. Free, local, no API keys required.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">5 min read</span>
            <time className="rounded-full bg-card px-3 py-1 text-muted ring-1 ring-card-border" dateTime="2026-04-08">
              April 2026
            </time>
            <span className="rounded-full bg-card px-3 py-1 text-muted ring-1 ring-card-border">Claude Code</span>
            <span className="rounded-full bg-card px-3 py-1 text-muted ring-1 ring-card-border">MCP</span>
          </div>
        </header>

        {/* ── Table of Contents ── */}
        <nav className="mb-12 rounded-xl border border-card-border bg-card p-6" aria-label="Table of contents">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">On this page</h2>
          <ol className="columns-1 gap-x-8 space-y-1.5 text-sm sm:columns-2">
            {[
              ["#the-problem", "The Problem: Claude Code Forgets Everything"],
              ["#the-solution", "The Solution: MemPalace MCP Server"],
              ["#prerequisites", "Prerequisites"],
              ["#step-1", "Step 1 — Install MemPalace"],
              ["#step-2", "Step 2 — Initialize Your Palace"],
              ["#step-3", "Step 3 — Connect to Claude Code"],
              ["#step-4", "Step 4 — Verify It Works"],
              ["#behind-the-scenes", "What Happens Behind the Scenes"],
              ["#advanced", "Advanced: Connect to ChatGPT & Cursor Too"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-muted transition-colors hover:text-accent">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ======== Section 1: The Problem ======== */}
        <section id="the-problem" className="py-10">
          <h2 className="text-2xl font-bold tracking-tight">The Problem: Claude Code Forgets Everything</h2>
          <p className="mt-4 leading-relaxed text-muted">
            You spend an hour explaining your project architecture to Claude Code. You walk through your database schema,
            your naming conventions, the reason you chose that specific folder structure. Claude gives great answers.
            Then you close the terminal.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Next session? <strong className="text-foreground">Gone.</strong> Every conversation, every decision, every
            piece of context &mdash; wiped clean. Claude Code has no persistent memory. You start over from scratch,
            every single time.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            This is not a minor inconvenience. For teams that use Claude Code daily, the repeated context-setting wastes
            hours each week and leads to inconsistent outputs. Your AI assistant should remember what you told it
            yesterday.
          </p>
        </section>

        {/* ======== Section 2: The Solution ======== */}
        <section id="the-solution" className="py-10">
          <h2 className="text-2xl font-bold tracking-tight">The Solution: MemPalace MCP Server</h2>
          <p className="speakable mt-4 leading-relaxed text-muted">
            <Link href="/" className="font-semibold text-accent hover:underline">MemPalace</Link> is an open-source
            memory system that gives Claude Code persistent memory through the{" "}
            <strong className="text-foreground">Model Context Protocol (MCP)</strong>. It stores every conversation
            verbatim, generates vector embeddings for semantic search, and retrieves the right context automatically
            when Claude needs it. Everything runs locally on your machine &mdash; no cloud, no API keys, no cost.
          </p>
          <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-5">
            <p className="text-sm font-medium text-accent">What you get after setup:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              <li>Claude Code remembers your project decisions across sessions</li>
              <li>Semantic search finds relevant context from any past conversation</li>
              <li>19 MCP tools for storing, searching, and managing memories</li>
              <li>Shared memory across Claude Code, ChatGPT, Cursor, and more</li>
            </ul>
          </div>
        </section>

        {/* ======== Prerequisites ======== */}
        <section id="prerequisites" className="py-10">
          <h2 className="text-2xl font-bold tracking-tight">Prerequisites</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">&#10003;</span>
              <span><strong className="text-foreground">Python 3.9+</strong> &mdash; run <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">python --version</code> to check</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">&#10003;</span>
              <span><strong className="text-foreground">Claude Code CLI</strong> &mdash; installed and authenticated</span>
            </li>
          </ul>
        </section>

        {/* ======== Step 1: Install ======== */}
        <section id="step-1" className="py-10">
          <div className="flex items-center gap-3">
            <StepNumber n={1} />
            <h2 className="text-2xl font-bold tracking-tight">Install MemPalace</h2>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            One command installs MemPalace and all its dependencies &mdash; ChromaDB for vector storage, SQLite for
            metadata, and Sentence Transformers for local embeddings.
          </p>
          <CodeBlock>pip install mempalace</CodeBlock>
          <p className="mt-2 text-sm text-muted">
            First-time install downloads the <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">all-MiniLM-L6-v2</code> embedding
            model (~80MB). This only happens once.
          </p>
        </section>

        {/* ======== Step 2: Init ======== */}
        <section id="step-2" className="py-10">
          <div className="flex items-center gap-3">
            <StepNumber n={2} />
            <h2 className="text-2xl font-bold tracking-tight">Initialize Your Palace</h2>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            Create the local memory directory structure. This sets up the palace with its Wings, Rooms, and Halls &mdash;
            the organizational hierarchy for your memories.
          </p>
          <CodeBlock>mempalace init</CodeBlock>
          <p className="mt-2 text-sm text-muted">You should see output like:</p>
          <CodeBlock lang="text">{`🏛️  Initializing MemPalace...
   Created: ~/.mempalace/
   Created: ~/.mempalace/palace.db
   Created: ~/.mempalace/vectors/
   ✓ Palace initialized with default Wing: "main"
   ✓ Room "general" created in Wing "main"
   ✓ MCP server ready on stdio

Your palace is ready. Connect it to an MCP client to start remembering.`}</CodeBlock>
        </section>

        {/* ======== Step 3: Connect ======== */}
        <section id="step-3" className="py-10">
          <div className="flex items-center gap-3">
            <StepNumber n={3} />
            <h2 className="text-2xl font-bold tracking-tight">Connect to Claude Code</h2>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            Add the MemPalace MCP server to your Claude Code configuration. Open your Claude Code settings file and add
            the following to the <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">mcpServers</code> section:
          </p>
          <CodeBlock lang="json">{`{
  "mcpServers": {
    "mempalace": {
      "command": "mempalace",
      "args": ["serve", "--mcp"],
      "env": {}
    }
  }
}`}</CodeBlock>
          <p className="mt-3 text-sm text-muted">
            <strong className="text-foreground">Where to add this:</strong> Your Claude Code settings file is typically at{" "}
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">~/.claude/settings.json</code>.
            If the file already has other MCP servers configured, just add the <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">&quot;mempalace&quot;</code> entry
            inside the existing <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">mcpServers</code> object.
          </p>
          <p className="mt-3 text-sm text-muted">
            Alternatively, you can run the shortcut command to do this automatically:
          </p>
          <CodeBlock>mempalace connect claude-code</CodeBlock>
        </section>

        {/* ======== Step 4: Verify ======== */}
        <section id="step-4" className="py-10">
          <div className="flex items-center gap-3">
            <StepNumber n={4} />
            <h2 className="text-2xl font-bold tracking-tight">Verify It Works</h2>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            Start a new Claude Code session and test the memory integration. Try this conversation:
          </p>
          <CodeBlock lang="text">{`You: Remember that our API uses snake_case for all endpoints
     and we deploy to AWS us-east-1.

Claude: I've stored that in memory. Your API uses snake_case
        endpoints and deploys to AWS us-east-1.

--- close terminal, open a new session ---

You: What conventions does our API use?

Claude: Based on my memory, your API uses snake_case for all
        endpoints and you deploy to AWS us-east-1.`}</CodeBlock>
          <p className="mt-3 leading-relaxed text-muted">
            That is it. Claude Code now has <strong className="text-foreground">persistent memory</strong> that
            survives across sessions. Every decision you share, every context you provide &mdash; it stays.
          </p>
        </section>

        {/* ======== Behind the Scenes ======== */}
        <section id="behind-the-scenes" className="py-10">
          <h2 className="text-2xl font-bold tracking-tight">What Happens Behind the Scenes</h2>
          <p className="mt-4 leading-relaxed text-muted">
            When Claude Code stores a memory through MemPalace, four things happen in sequence:
          </p>
          <ol className="mt-5 space-y-4">
            {[
              {
                title: "Verbatim Storage",
                desc: "The full conversation text is saved to SQLite with metadata (timestamps, tags, room). Nothing is summarized or lost.",
              },
              {
                title: "Vector Embeddings",
                desc: "Sentence Transformers generates a 384-dimensional vector embedding of the content using the all-MiniLM-L6-v2 model, running entirely on your CPU.",
              },
              {
                title: "Semantic Indexing",
                desc: "ChromaDB indexes the embedding for fast nearest-neighbor search. This is what makes \"find anything about our deployment setup\" work.",
              },
              {
                title: "Retrieval on Demand",
                desc: "When Claude Code asks a question, MemPalace searches for semantically similar memories and injects the most relevant ones into the context window. Under 100ms round-trip.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            The result: Claude Code gets the right context at the right time, without you having to repeat yourself. AAAK
            compression keeps storage efficient at roughly 1MB per 1,000 memories.
          </p>
        </section>

        {/* ======== Advanced ======== */}
        <section id="advanced" className="py-10">
          <h2 className="text-2xl font-bold tracking-tight">Advanced: Connect to ChatGPT &amp; Cursor Too</h2>
          <p className="mt-4 leading-relaxed text-muted">
            MemPalace is not limited to Claude Code. The same MCP server works with any compatible client. Once you have
            MemPalace running, you can connect it to ChatGPT, Cursor, Windsurf, or any other tool that supports MCP.
            Your memories are shared across all of them &mdash; context learned in Claude Code is instantly available
            in Cursor, and vice versa.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            For full configuration details for every supported client, see the{" "}
            <Link href="/guides/setup" className="font-semibold text-accent hover:underline">
              complete setup guide
            </Link>.
          </p>
        </section>

        {/* ======== FAQ ======== */}
        <section id="faq" className="py-10">
          <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6">
            {[
              {
                q: "Does this slow down Claude Code?",
                a: "No. MemPalace responds in under 100ms per query. Memory retrieval runs in parallel with Claude's own processing, so you won't notice any delay during normal usage. The MCP server uses stdio transport, which adds negligible overhead.",
              },
              {
                q: "Where is my data stored?",
                a: "Everything is stored locally in ~/.mempalace/ on your machine. The directory contains a ChromaDB vector database for embeddings and a SQLite database for full-text memories and metadata. Nothing is ever sent to the cloud. You own your data completely.",
              },
              {
                q: "Can I use this with Claude Desktop too?",
                a: "Yes. MemPalace works with Claude Desktop, Claude Code, ChatGPT, Cursor, Windsurf, and any other MCP-compatible client. The same local memory database is shared across all connected clients, so your context carries over everywhere.",
              },
              {
                q: "How much storage does it use?",
                a: "Approximately 1MB per 1,000 memories thanks to AAAK compression achieving 30x compression ratios. A typical developer's 6-month conversation history (roughly 19.5 million tokens) compresses to about 50-100MB of disk space.",
              },
              {
                q: "Is this free?",
                a: "Yes. MemPalace is MIT licensed with zero cost, no API keys, no cloud accounts, and no usage limits. The entire system runs locally on your machine. You can use it commercially, modify it, and distribute it freely.",
              },
            ].map((item, i) => (
              <details key={i} className="group rounded-xl border border-card-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-foreground transition-colors hover:text-accent">
                  {item.q}
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
                    className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ======== CTA ======== */}
        <section className="py-12">
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Ready to Give Claude Code Memory?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Three commands. Five minutes. Your AI remembers everything &mdash; forever.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/mempalace/mempalace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
              <Link
                href="/guides/setup"
                className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                Full Setup Guide
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* ── Continue Reading ── */}
      <ContinueReading exclude="setup" />
    </>
  );
}
