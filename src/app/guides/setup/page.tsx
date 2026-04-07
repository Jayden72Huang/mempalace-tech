import type { Metadata } from "next";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "MemPalace Setup Guide — Install & Configure in 5 Minutes",
  description:
    "Step-by-step guide to install MemPalace, the AI memory system. Works with Claude, ChatGPT, Cursor, and local LLMs. pip install mempalace.",
  alternates: { canonical: "https://mempalace.tech/guides/setup" },
};

/* ---------- tiny helpers (server-only, zero JS shipped) ---------- */

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

function Card({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <div id={id} className={`rounded-xl border border-card-border bg-card p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

/* ---------- JSON-LD HowTo structured data ---------- */

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Install and Set Up MemPalace",
  description:
    "Step-by-step guide to install MemPalace, the AI memory system. Works with Claude Code, ChatGPT, Cursor, and local LLMs.",
  totalTime: "PT5M",
  estimatedCost: { "@type": "MonetaryCost", currency: "USD", value: "0" },
  tool: [
    { "@type": "HowToTool", name: "Python 3.9+" },
    { "@type": "HowToTool", name: "pip package manager" },
    { "@type": "HowToTool", name: "An MCP-compatible client (Claude Code, ChatGPT, Cursor)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Install MemPalace",
      text: "Run pip install mempalace to install the package and its dependencies (ChromaDB, SQLite, Sentence Transformers).",
      url: "https://mempalace.tech/guides/setup#step-1",
    },
    {
      "@type": "HowToStep",
      name: "Initialize Your Palace",
      text: "Run mempalace init to create the palace directory structure with Wings, Rooms, and Halls.",
      url: "https://mempalace.tech/guides/setup#step-2",
    },
    {
      "@type": "HowToStep",
      name: "Connect to Claude Code",
      text: "Add the MemPalace MCP server configuration to your Claude Code settings.",
      url: "https://mempalace.tech/guides/setup#step-3",
    },
    {
      "@type": "HowToStep",
      name: "Connect to ChatGPT or Cursor",
      text: "Configure alternative MCP-compatible clients to use MemPalace.",
      url: "https://mempalace.tech/guides/setup#step-4",
    },
    {
      "@type": "HowToStep",
      name: "Store Your First Memory",
      text: "Use mempalace mine conversations to import conversation history, or store memories through the MCP interface.",
      url: "https://mempalace.tech/guides/setup#step-5",
    },
    {
      "@type": "HowToStep",
      name: "Search Your Memories",
      text: "Query your palace using semantic search to retrieve relevant memories.",
      url: "https://mempalace.tech/guides/setup#step-6",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to install MemPalace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The full installation takes about 5 minutes. Running pip install mempalace downloads all dependencies (ChromaDB, Sentence Transformers, SQLite). First-time model download for all-MiniLM-L6-v2 may add 1-2 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Does MemPalace work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After the initial setup, MemPalace works entirely offline. All embeddings are computed locally using Sentence Transformers, and data is stored in local ChromaDB and SQLite databases. No API keys or cloud services required.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI clients are compatible with MemPalace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MemPalace works with any MCP-compatible client including Claude Code (CLI), Claude Desktop, ChatGPT, Cursor, Windsurf, and other editors that support the Model Context Protocol.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use MemPalace with multiple AI assistants at the same time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MemPalace uses a local database that can be accessed by multiple MCP clients simultaneously. Your memories are shared across all connected AI assistants, so context learned in Claude is available in Cursor and vice versa.",
      },
    },
  ],
};

/* ---------- page ---------- */

export default function SetupGuidePage() {
  return (
    <>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* ======== Hero / Intro ======== */}
        <section className="py-12 sm:py-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">Setup Guide</p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            MemPalace Setup Guide: Install&nbsp;&amp;&nbsp;Configure in 5&nbsp;Minutes
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Follow this step-by-step tutorial to install MemPalace, connect it to your favourite AI client, and store
            your first memory. No cloud account needed &mdash; everything runs locally on your machine.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">5 min read</span>
            <span className="rounded-full bg-card px-3 py-1 text-muted ring-1 ring-card-border">Python 3.9+</span>
            <span className="rounded-full bg-card px-3 py-1 text-muted ring-1 ring-card-border">pip</span>
            <span className="rounded-full bg-card px-3 py-1 text-muted ring-1 ring-card-border">MCP</span>
          </div>
        </section>

        {/* ======== Table of Contents ======== */}
        <nav className="mb-12 rounded-xl border border-card-border bg-card p-6" aria-label="Table of contents">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">On this page</h2>
          <ol className="columns-1 gap-x-8 space-y-1.5 text-sm sm:columns-2">
            {[
              ["#prerequisites", "Prerequisites"],
              ["#step-1", "Step 1 — Install MemPalace"],
              ["#step-2", "Step 2 — Initialize Your Palace"],
              ["#step-3", "Step 3 — Connect to Claude Code"],
              ["#step-4", "Step 4 — Connect to ChatGPT / Cursor"],
              ["#step-5", "Step 5 — Store Your First Memory"],
              ["#step-6", "Step 6 — Search Your Memories"],
              ["#concepts", "Core Concepts"],
              ["#memory-stack", "4-Layer Memory Stack"],
              ["#troubleshooting", "Troubleshooting"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-muted transition-colors hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ======== Prerequisites ======== */}
        <section id="prerequisites" className="py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight">Prerequisites</h2>
          <p className="mt-3 text-muted">
            Before you install MemPalace, make sure you have the following on your system:
          </p>
          <ul className="mt-5 space-y-3">
            {[
              [
                "Python 3.9+",
                "MemPalace uses modern Python features. Run python --version to check. We recommend 3.11+ for best performance.",
              ],
              [
                "pip package manager",
                "Ships with Python. Verify with pip --version. If you use conda or poetry, those work too.",
              ],
              [
                "An MCP-compatible client",
                "Claude Code (CLI), Claude Desktop, ChatGPT, Cursor, Windsurf, or any editor supporting the Model Context Protocol.",
              ],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-0.5 text-success">&#10003;</span>
                <div>
                  <strong className="text-foreground">{title}</strong>
                  <span className="text-muted"> &mdash; {desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ======== Step 1 ======== */}
        <section id="step-1" className="py-12 sm:py-16 border-t border-card-border">
          <div className="flex items-center gap-4">
            <StepNumber n={1} />
            <h2 className="text-2xl font-bold tracking-tight">Install MemPalace</h2>
          </div>
          <p className="mt-4 text-muted">
            Open your terminal and run the install command. This single line pulls in everything you need:
          </p>
          <CodeBlock>pip install mempalace</CodeBlock>
          <p className="text-muted">
            The command installs MemPalace along with its core dependencies:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong className="text-foreground">ChromaDB</strong> &mdash; the vector database that powers semantic
                search across your memories. Stores embeddings locally, no cloud needed.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong className="text-foreground">SQLite</strong> &mdash; lightweight relational storage for
                metadata, relationships, and the structural hierarchy of your palace.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong className="text-foreground">Sentence Transformers (all-MiniLM-L6-v2)</strong> &mdash; a compact
                384-dimensional embedding model that runs on CPU. Converts text into vectors for similarity search.
              </span>
            </li>
          </ul>
          <Card className="mt-6">
            <p className="text-sm text-muted">
              <strong className="text-info">Tip:</strong> First-time installation may take 2&ndash;3 minutes because
              pip downloads the Sentence Transformers model (~80&nbsp;MB). Subsequent installs are near-instant.
            </p>
          </Card>
        </section>

        {/* ======== Step 2 ======== */}
        <section id="step-2" className="py-12 sm:py-16 border-t border-card-border">
          <div className="flex items-center gap-4">
            <StepNumber n={2} />
            <h2 className="text-2xl font-bold tracking-tight">Initialize Your Palace</h2>
          </div>
          <p className="mt-4 text-muted">
            Create the directory structure that MemPalace uses to organise your memories:
          </p>
          <CodeBlock>mempalace init</CodeBlock>
          <p className="text-muted">
            This creates a <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">.mempalace/</code>{" "}
            directory in your home folder with the following layout:
          </p>
          <CodeBlock lang="text">{`.mempalace/
├── palace.db          # SQLite metadata
├── chroma/            # Vector embeddings
└── wings/
    └── default/
        ├── hall_facts/
        ├── hall_events/
        ├── hall_discoveries/
        ├── hall_preferences/
        └── hall_advice/`}</CodeBlock>
          <p className="mt-4 text-muted">
            Think of it like a real memory palace: <strong className="text-foreground">Wings</strong> are top-level
            containers (one per person or project), <strong className="text-foreground">Rooms</strong> are specific
            topics within a wing, and <strong className="text-foreground">Halls</strong> are corridors that categorise
            memories by type. We cover the full architecture in the{" "}
            <a href="#concepts" className="text-accent hover:text-accent-hover transition-colors">
              Core Concepts
            </a>{" "}
            section below.
          </p>
        </section>

        {/* ======== Step 3 ======== */}
        <section id="step-3" className="py-12 sm:py-16 border-t border-card-border">
          <div className="flex items-center gap-4">
            <StepNumber n={3} />
            <h2 className="text-2xl font-bold tracking-tight">Connect to Claude Code</h2>
          </div>
          <p className="mt-4 text-muted">
            Claude Code is the most popular integration for MemPalace. Add the following MCP server configuration to
            your Claude Code settings file (
            <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">~/.claude.json</code> or your
            project&apos;s <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">.mcp.json</code>
            ):
          </p>
          <CodeBlock lang="json">{`{
  "mcpServers": {
    "mempalace": {
      "command": "mempalace",
      "args": ["mcp"]
    }
  }
}`}</CodeBlock>
          <p className="text-muted">
            That&apos;s it. Restart Claude Code and MemPalace will appear as an available MCP tool. Claude can now
            read, write, and search your memories automatically during conversations.
          </p>
          <Card className="mt-6">
            <p className="text-sm text-muted">
              <strong className="text-info">How it works:</strong> The{" "}
              <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">mempalace mcp</code> command
              starts a local MCP server that communicates with Claude Code over stdio. All data stays on your machine
              &mdash; nothing is sent to external servers.
            </p>
          </Card>
        </section>

        {/* ======== Step 4 ======== */}
        <section id="step-4" className="py-12 sm:py-16 border-t border-card-border">
          <div className="flex items-center gap-4">
            <StepNumber n={4} />
            <h2 className="text-2xl font-bold tracking-tight">Connect to ChatGPT / Cursor</h2>
          </div>
          <p className="mt-4 text-muted">
            MemPalace works with any MCP-compatible client. Here are quick setup instructions for the most common
            alternatives:
          </p>

          <div className="mt-6 space-y-4">
            <Card>
              <h3 className="mb-2 font-semibold text-foreground">ChatGPT Desktop</h3>
              <p className="text-sm text-muted">
                Open <strong>Settings &rarr; MCP Servers &rarr; Add Server</strong>. Enter{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">mempalace</code> as the
                command and{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">mcp</code> as the argument.
                ChatGPT will auto-detect the available tools.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-foreground">Cursor</h3>
              <p className="text-sm text-muted">
                Go to <strong>Settings &rarr; MCP</strong> and add a new server with the same config as Claude Code.
                Cursor supports MCP natively, so MemPalace tools will appear in the Composer and Agent panels.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-foreground">Claude Desktop</h3>
              <p className="text-sm text-muted">
                Edit{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">
                  claude_desktop_config.json
                </code>{" "}
                and add the same{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">mcpServers</code> block
                shown in Step&nbsp;3. Restart the app to activate.
              </p>
            </Card>
          </div>
        </section>

        {/* ======== Step 5 ======== */}
        <section id="step-5" className="py-12 sm:py-16 border-t border-card-border">
          <div className="flex items-center gap-4">
            <StepNumber n={5} />
            <h2 className="text-2xl font-bold tracking-tight">Store Your First Memory</h2>
          </div>
          <p className="mt-4 text-muted">
            There are two ways to populate your palace: bulk import from conversation exports, or real-time storage
            through the MCP interface.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Option A: Import conversation history</h3>
          <p className="mt-2 text-sm text-muted">
            Export your conversation history from Claude, ChatGPT, or any supported client, then run:
          </p>
          <CodeBlock>mempalace mine conversations ./path/to/export.json</CodeBlock>
          <p className="text-sm text-muted">
            MemPalace will parse the conversations, extract facts, events, preferences, and discoveries, then file each
            memory into the appropriate hall.
          </p>

          <h3 className="mt-8 text-lg font-semibold">Option B: Through the MCP interface</h3>
          <p className="mt-2 text-sm text-muted">
            Once connected, simply chat with your AI assistant. MemPalace automatically captures important information
            during your conversations. You can also explicitly ask your assistant to &ldquo;remember&rdquo; something:
          </p>
          <CodeBlock lang="text">{`You: "Remember that our production database is on us-east-1
      and the staging DB is on eu-west-2."

Claude: "Stored in hall_facts under the 'infrastructure' room."`}</CodeBlock>
        </section>

        {/* ======== Step 6 ======== */}
        <section id="step-6" className="py-12 sm:py-16 border-t border-card-border">
          <div className="flex items-center gap-4">
            <StepNumber n={6} />
            <h2 className="text-2xl font-bold tracking-tight">Search Your Memories</h2>
          </div>
          <p className="mt-4 text-muted">
            Query your palace from the command line or let your AI assistant search automatically.
          </p>

          <h3 className="mt-6 text-lg font-semibold">CLI search</h3>
          <CodeBlock>mempalace search &quot;database configuration&quot;</CodeBlock>
          <p className="text-sm text-muted">
            Returns semantically relevant memories ranked by similarity. You can filter by wing, room, or hall:
          </p>
          <CodeBlock>mempalace search &quot;database config&quot; --wing=work --hall=hall_facts</CodeBlock>

          <h3 className="mt-8 text-lg font-semibold">AI-assisted search</h3>
          <p className="mt-2 text-sm text-muted">
            When connected via MCP, your AI assistant searches automatically whenever context is needed. You can also
            ask directly:
          </p>
          <CodeBlock lang="text">{`You: "What did we decide about the caching strategy last week?"

Claude: [searches palace] "On March 30 you decided to use Redis for
session cache and CloudFront for static assets. The TTL for sessions
is 4 hours. (Source: hall_events/infrastructure)"`}</CodeBlock>
        </section>

        {/* ======== Core Concepts ======== */}
        <section id="concepts" className="py-12 sm:py-16 border-t border-card-border">
          <h2 className="text-2xl font-bold tracking-tight">Core Concepts</h2>
          <p className="mt-3 text-muted">
            MemPalace borrows from the ancient{" "}
            <em>method of loci</em> &mdash; a mnemonic technique where you associate memories with physical locations
            in an imagined building. Here&apos;s how the metaphor maps to the system:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-accent">Wings</h3>
              <p className="text-sm text-muted">
                Top-level containers. Create one wing per person, project, or domain. Example: a &ldquo;work&rdquo;
                wing and a &ldquo;personal&rdquo; wing, or one wing per client.
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-accent">Rooms</h3>
              <p className="text-sm text-muted">
                Specific topics within a wing. A &ldquo;work&rdquo; wing might have rooms for &ldquo;infrastructure&rdquo;,
                &ldquo;frontend&rdquo;, and &ldquo;team-processes&rdquo;.
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-accent">Halls</h3>
              <p className="text-sm text-muted">
                Memory-type corridors that exist in every room. Five built-in halls categorise what kind of information
                each memory represents:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-muted">
                <li>
                  <strong className="text-foreground">hall_facts</strong> &mdash; stable truths (API keys, config,
                  preferences)
                </li>
                <li>
                  <strong className="text-foreground">hall_events</strong> &mdash; things that happened (decisions,
                  incidents)
                </li>
                <li>
                  <strong className="text-foreground">hall_discoveries</strong> &mdash; insights and learnings
                </li>
                <li>
                  <strong className="text-foreground">hall_preferences</strong> &mdash; user likes, dislikes, style
                </li>
                <li>
                  <strong className="text-foreground">hall_advice</strong> &mdash; recommendations and best practices
                </li>
              </ul>
            </Card>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-accent">Closets &amp; Drawers</h3>
              <p className="text-sm text-muted">
                <strong className="text-foreground">Closets</strong> hold compressed summaries in AAAK format
                (Assertion &rarr; Assumption &rarr; Action &rarr; Knowledge) &mdash; distilled to fit in limited
                context windows.{" "}
                <strong className="text-foreground">Drawers</strong> store the original verbatim files for deep
                retrieval when full detail is needed.
              </p>
            </Card>
          </div>
        </section>

        {/* ======== 4-Layer Memory Stack ======== */}
        <section id="memory-stack" className="py-12 sm:py-16 border-t border-card-border">
          <h2 className="text-2xl font-bold tracking-tight">4-Layer Memory Stack</h2>
          <p className="mt-3 text-muted">
            MemPalace uses a tiered retrieval system that balances context window efficiency with recall depth. Only
            the layers that are needed get loaded, keeping token usage minimal.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border text-left">
                  <th className="py-3 pr-4 font-semibold text-foreground">Layer</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">What</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Size</th>
                  <th className="py-3 font-semibold text-foreground">When loaded</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border/50">
                  <td className="py-3 pr-4 font-mono text-accent">L0</td>
                  <td className="py-3 pr-4">Identity &mdash; who you are, core prefs</td>
                  <td className="py-3 pr-4 whitespace-nowrap">~50 tokens</td>
                  <td className="py-3">
                    <span className="rounded bg-success/15 px-2 py-0.5 text-xs text-success">Always</span>
                  </td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="py-3 pr-4 font-mono text-accent">L1</td>
                  <td className="py-3 pr-4">Critical facts (AAAK summaries from closets)</td>
                  <td className="py-3 pr-4 whitespace-nowrap">~120 tokens</td>
                  <td className="py-3">
                    <span className="rounded bg-success/15 px-2 py-0.5 text-xs text-success">Always</span>
                  </td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="py-3 pr-4 font-mono text-accent">L2</td>
                  <td className="py-3 pr-4">Room recall &mdash; topic-specific context</td>
                  <td className="py-3 pr-4 whitespace-nowrap">Variable</td>
                  <td className="py-3">
                    <span className="rounded bg-info/15 px-2 py-0.5 text-xs text-info">On demand</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-mono text-accent">L3</td>
                  <td className="py-3 pr-4">Deep semantic search &mdash; full drawer retrieval</td>
                  <td className="py-3 pr-4 whitespace-nowrap">Variable</td>
                  <td className="py-3">
                    <span className="rounded bg-info/15 px-2 py-0.5 text-xs text-info">On demand</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">
            L0 and L1 are injected into every conversation automatically (&lt;200 tokens total). L2 activates when the
            conversation topic matches a known room. L3 fires only when the user or AI explicitly requests a deep
            search. This design means MemPalace adds virtually zero overhead to normal conversations while providing
            perfect recall when needed.
          </p>
        </section>

        {/* ======== Troubleshooting ======== */}
        <section id="troubleshooting" className="py-12 sm:py-16 border-t border-card-border">
          <h2 className="text-2xl font-bold tracking-tight">Troubleshooting</h2>
          <p className="mt-3 text-muted">
            Running into issues? Here are solutions to the most common problems:
          </p>

          <div className="mt-6 space-y-4">
            <Card>
              <h3 className="mb-2 font-semibold text-foreground">Windows Unicode crash (GitHub issue #47)</h3>
              <p className="text-sm text-muted">
                On some Windows systems, MemPalace crashes when processing text with non-ASCII characters. Fix: set the
                environment variable{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">
                  PYTHONIOENCODING=utf-8
                </code>{" "}
                before running any MemPalace command, or upgrade to v0.4.2+ where this is patched.
              </p>
              <CodeBlock>{`# Windows PowerShell
$env:PYTHONIOENCODING = "utf-8"
mempalace init`}</CodeBlock>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-foreground">Python version compatibility</h3>
              <p className="text-sm text-muted">
                MemPalace requires Python 3.9 or higher. If you see{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">SyntaxError</code> or{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">
                  ModuleNotFoundError
                </code>
                , check your Python version. On systems with multiple Python installations, use{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">python3</code> and{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">pip3</code> explicitly.
              </p>
              <CodeBlock>{`python3 --version   # Should be 3.9+
pip3 install mempalace`}</CodeBlock>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-foreground">ChromaDB dependency issues</h3>
              <p className="text-sm text-muted">
                ChromaDB may fail to install on older systems due to native dependencies. If you see build errors
                related to <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">hnswlib</code> or{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">chroma-hnswlib</code>,
                install the build tools first:
              </p>
              <CodeBlock>{`# macOS
xcode-select --install

# Ubuntu/Debian
sudo apt-get install build-essential python3-dev

# Then retry
pip install mempalace`}</CodeBlock>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-foreground">MCP connection not working</h3>
              <p className="text-sm text-muted">
                If your AI client does not detect MemPalace tools, verify the command is on your PATH:
              </p>
              <CodeBlock>{`which mempalace   # Should print a path
mempalace mcp     # Should start the MCP server`}</CodeBlock>
              <p className="mt-2 text-sm text-muted">
                If <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">which mempalace</code>{" "}
                returns nothing, the package was installed in a virtual environment that is not active, or your PATH
                does not include pip&apos;s script directory.
              </p>
            </Card>
          </div>
        </section>

        {/* ======== FAQ ======== */}
        <section id="faq" className="py-12 sm:py-16 border-t border-card-border">
          <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            {[
              {
                q: "How long does it take to install MemPalace?",
                a: "The full installation takes about 5 minutes. Running pip install mempalace downloads all dependencies (ChromaDB, Sentence Transformers, SQLite). The first-time model download for all-MiniLM-L6-v2 may add 1\u20132 minutes on slower connections.",
              },
              {
                q: "Does MemPalace work offline?",
                a: "Yes. After the initial setup, MemPalace works entirely offline. All embeddings are computed locally using Sentence Transformers, and data is stored in local ChromaDB and SQLite databases. No API keys or cloud services required.",
              },
              {
                q: "Which AI clients are compatible with MemPalace?",
                a: "MemPalace works with any MCP-compatible client including Claude Code (CLI), Claude Desktop, ChatGPT, Cursor, Windsurf, and other editors that support the Model Context Protocol. The MCP standard is growing fast, so more clients are added regularly.",
              },
              {
                q: "Can I use MemPalace with multiple AI assistants at the same time?",
                a: "Yes. MemPalace uses a local database that can be accessed by multiple MCP clients simultaneously. Your memories are shared across all connected AI assistants, so context learned in Claude is available in Cursor and vice versa.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-card-border bg-card p-6">
                <h3 className="font-semibold text-foreground">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ======== Next Steps CTA ======== */}
        <section className="py-12 sm:py-16 border-t border-card-border">
          <Card className="text-center">
            <h2 className="text-xl font-bold">Ready to go deeper?</h2>
            <p className="mt-2 text-sm text-muted">
              Now that your palace is set up, see how MemPalace compares to other AI memory solutions.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/compare/mempalace-vs-mem0"
                className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                MemPalace vs Mem0
              </Link>
              <a
                href="https://github.com/milla-jovovich/mempalace"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-card-border px-6 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                View on GitHub &rarr;
              </a>
            </div>
          </Card>
        </section>
      </article>
    </>
  );
}
