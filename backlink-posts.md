# MemPalace.tech 引蜘蛛发帖文案

## 1. Reddit r/LocalLLaMA

**Title:** MemPalace — local-first AI memory system, 100% LongMemEval, zero API cost, runs on your machine

**Body:**

Been testing MemPalace for a few days now and wanted to share since it ticks a lot of boxes this sub cares about.

**What it is:** An open-source (MIT) AI memory system that gives LLMs persistent cross-session memory. When you close a Claude or ChatGPT conversation, everything is forgotten. MemPalace fixes that by storing every interaction locally and making it retrievable in future sessions.

**Why local-first people will care:**

- Runs 100% on your machine. ChromaDB for vector search, SQLite for metadata. No cloud, no API keys required for the core system.
- Uses `all-MiniLM-L6-v2` or `bge-large` for embeddings — all local.
- Install is literally `pip install mempalace && mempalace init`. Done.
- Zero recurring cost. Not "$0 with asterisks." Actual $0.

**Benchmarks:**

- 100% on LongMemEval (hybrid mode) — first system to achieve a perfect score
- 96.6% on LongMemEval in raw mode (the zero-API-cost mode)
- 92.9% on ConvoMem (Salesforce Research benchmark)

For comparison, Mem0 (the $24M VC-backed one) scores ~85% on LongMemEval and 30-45% on ConvoMem. There's a detailed comparison at mempalace.tech/compare/mempalace-vs-mem0 if you want the full breakdown.

**Architecture:** Instead of having an LLM decide what's "important" and discarding the rest (which is what Mem0, Zep, etc. do), MemPalace stores everything verbatim, compresses it 30x with a lossless compression dialect called AAAK, and uses a 4-layer retrieval stack (L0-L3) to surface relevant memories.

Works with Claude Code (19 MCP tools), ChatGPT, Cursor, local models like Llama and Mistral — basically anything that can read structured text.

The origin story is wild: Milla Jovovich (yes, the Resident Evil actress) built it with a dev named Ben Sigman using Claude Code after getting frustrated that no memory system kept her full conversation history intact.

7,000+ GitHub stars in 2 days. Worth a look if you're running local models and want persistent memory without sending data anywhere.

---

## 2. Reddit r/MachineLearning

**Title:** [P] MemPalace: verbatim storage + vector retrieval achieves 100% on LongMemEval — challenging the extraction-based paradigm in AI memory

**Body:**

Sharing an interesting result in AI memory systems. MemPalace, a new open-source system, hit a perfect 100% recall@5 on the LongMemEval benchmark (500 questions covering fact recall, temporal reasoning, multi-hop inference, and knowledge updates). It also scored 92.9% on ConvoMem (Salesforce Research).

**The architectural insight worth discussing:**

Most AI memory systems (Mem0, Zep, Supermemory) use an LLM-in-the-loop approach: they pass conversations through a model that extracts "key facts," stores those summaries, and discards the original text. This is essentially lossy compression where the compression algorithm is an LLM's judgment about relevance.

MemPalace takes the opposite approach — **verbatim storage with retrieval-time intelligence**. Every conversation is stored in full, compressed with a lossless dialect (AAAK, ~30x compression ratio), and organized using ChromaDB vector search + SQLite metadata.

**Benchmark comparison:**
- MemPalace hybrid: 100% R@5 (optional Haiku rerank)
- MemPalace raw: 96.6% R@5 (zero API)
- Supermemory ASMR: ~99%
- Mastra: 94.87%
- Mem0: ~85%
- Zep: ~85%

ConvoMem results are even more divergent: MemPalace 92.9% vs Mem0's 30-45%.

Details and methodology notes: mempalace.tech/compare/mempalace-vs-mem0

Curious what this sub thinks about the verbatim vs. extraction tradeoff.

---

## 3. Reddit r/SideProject

**Title:** I built a resource site for MemPalace, the AI memory system that went from 0 to 7K GitHub stars in 48 hours

**Body:**

Hey everyone. I built mempalace.tech — an independent resource site for MemPalace, the open-source AI memory system.

MemPalace is an AI memory system built by Milla Jovovich (yes, the actress) and dev Ben Sigman. It launched a few days ago and hit 7,000+ GitHub stars in 48 hours, which caught my attention.

The project itself has documentation on GitHub, but I noticed there wasn't a good standalone resource that organized the benchmarks, comparisons, and setup instructions in one clean place. So I built one.

**What the site has:**

- **Homepage** (mempalace.tech) — overview, benchmark comparison table, architecture explanation, FAQ
- **Setup Guide** (mempalace.tech/guides/setup) — step-by-step installation
- **Comparison Page** (mempalace.tech/compare/mempalace-vs-mem0) — detailed MemPalace vs Mem0 comparison

**Lessons from building it fast:**

1. When a new project is blowing up, there's a window to build a resource site before the space gets crowded
2. Comparison pages are SEO gold — people search "[thing] vs [other thing]" all the time
3. Structured data (JSON-LD) is worth the effort even on a small site

Would love feedback on the site!

---

## 4. HackerNews "Show HN"

**Title:** Show HN: MemPalace.tech – Independent benchmark comparison of AI memory systems

**Text:**

I built a comparison and reference site for AI memory systems, anchored by MemPalace (the open-source memory system that just got 7K GitHub stars in two days).

The comparison page (https://www.mempalace.tech/compare/mempalace-vs-mem0) covers:

- LongMemEval scores: MemPalace 100% (hybrid) / 96.6% (raw, zero API) vs. Mem0 ~85%
- ConvoMem scores: MemPalace 92.9% vs. Mem0 30-45%
- Pricing: $0/year (fully local) vs. $19-249/month
- Architecture: verbatim storage + vector retrieval vs. LLM-extracted summaries
- 15-row feature comparison table

Setup guide at https://www.mempalace.tech/guides/setup — `pip install mempalace` and you're running.

---

## 5. Twitter/X Thread (5 Tweets)

**Tweet 1 (Hook):**
Milla Jovovich — the Resident Evil actress — just shipped an AI memory system that scored a perfect 100% on the hardest memory benchmark in the field.

7,000+ GitHub stars in 48 hours.

Here's what's actually going on (it's more interesting than the celebrity angle):

**Tweet 2 (Problem):**
The problem she was solving: every AI memory system (Mem0, Zep, etc.) uses an LLM to decide what's "important" and throws away the rest.

After months of AI collaboration, she found the discarded context — the reasoning, the alternatives, the nuance — was exactly what she needed most.

**Tweet 3 (Solution + Data):**
So she built MemPalace: store everything verbatim, compress it 30x losslessly, use vector search to surface the right memories.

The benchmark results:
- 100% on LongMemEval (first perfect score ever)
- 92.9% on ConvoMem
- vs. Mem0: ~85% and 30-45%

Runs locally. $0 cost. MIT license.

**Tweet 4 (Technical substance):**
The architecture is clever:
- ChromaDB + SQLite, fully local
- AAAK compression: 30x lossless
- 4-layer retrieval stack (L0-L3)
- 170-token cold start
- 19 MCP tools for Claude Code

Full breakdown: https://www.mempalace.tech/compare/mempalace-vs-mem0

**Tweet 5 (Takeaway):**
The bigger insight: "store everything, then make it findable" is beating "use AI to decide what matters."

This mirrors a pattern across tech — raw data + smart retrieval > pre-filtered data. Search engines figured this out 20 years ago. AI memory is catching up.

Try it: pip install mempalace 
Site: https://www.mempalace.tech

---

## 6. DEV.to 文章标题

**"Why Your AI Forgets Everything (and How Verbatim Memory Systems Fix It)"**

核心章节: AI 遗忘问题 → 当前竞品格局 → 提取式记忆的缺陷 → MemPalace 架构 → Benchmark 深度解读 → 成本对比 → 5 分钟上手 → 何时不适用
