import Link from "next/link";

interface ReadingCard {
  href: string;
  title: string;
  desc: string;
}

const allCards: Record<string, ReadingCard> = {
  story: { href: "/story", title: "The Full Story", desc: "How Milla Jovovich went from Resident Evil to GitHub" },
  benchmarks: { href: "/benchmarks", title: "Benchmark Analysis", desc: "Is the 100% score real? We fact-checked every claim" },
  setup: { href: "/guides/setup", title: "Setup Guide", desc: "Install MemPalace in 5 minutes — 3 commands" },
  "vs-mem0": { href: "/compare/mempalace-vs-mem0", title: "MemPalace vs Mem0", desc: "$0 vs $249/mo — full comparison" },
  "vs-zep": { href: "/compare/mempalace-vs-zep", title: "MemPalace vs Zep", desc: "$0 vs $475/mo — knowledge graph showdown" },
  "vs-letta": { href: "/compare/mempalace-vs-letta", title: "MemPalace vs Letta", desc: "Verbatim storage vs self-editing agent memory" },
  "vs-supermemory": { href: "/compare/mempalace-vs-supermemory", title: "MemPalace vs SuperMemory", desc: "96.6% vs 81.6% on LongMemEval" },
  "vs-cognee": { href: "/compare/mempalace-vs-cognee", title: "MemPalace vs Cognee", desc: "$0 vs $1,970/mo — developer vs enterprise" },
  "vs-langmem": { href: "/compare/mempalace-vs-langmem", title: "MemPalace vs LangMem", desc: "Complete system vs LangGraph building block" },
  tools: { href: "/tools", title: "Tools Directory", desc: "Compare every AI memory framework at a glance" },
  quiz: { href: "/quiz", title: "Take the Quiz", desc: "Which AI memory framework fits you? 7 questions" },
};

export default function ContinueReading({ exclude }: { exclude: string }) {
  const cards = Object.entries(allCards)
    .filter(([key]) => key !== exclude)
    .slice(0, 3)
    .map(([, card]) => card);

  return (
    <section className="border-t border-card-border py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-xl font-bold tracking-tight">Continue Reading</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-card-border bg-card p-5 transition-colors hover:border-accent/50"
            >
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
