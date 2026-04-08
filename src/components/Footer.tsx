import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/setup" className="text-zinc-400 hover:text-foreground transition-colors">Installation &amp; Setup</Link></li>
              <li><Link href="/guides/setup#claude-code" className="text-zinc-400 hover:text-foreground transition-colors">Claude Code Integration</Link></li>
              <li><Link href="/guides/setup#concepts" className="text-zinc-400 hover:text-foreground transition-colors">Core Concepts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Compare</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare/mempalace-vs-mem0" className="text-zinc-400 hover:text-foreground transition-colors">MemPalace vs Mem0</Link></li>
              <li><Link href="/tools" className="text-zinc-400 hover:text-foreground transition-colors">All AI Memory Tools</Link></li>
              <li><Link href="/benchmarks" className="text-zinc-400 hover:text-foreground transition-colors">Benchmark Analysis</Link></li>
              <li><Link href="/quiz" className="text-zinc-400 hover:text-foreground transition-colors">Framework Quiz</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/story" className="text-zinc-400 hover:text-foreground transition-colors">The Story</Link></li>
              <li><a href="https://github.com/milla-jovovich/mempalace" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-foreground transition-colors">GitHub Repository</a></li>
              <li><a href="https://pypi.org/project/mempalace/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-foreground transition-colors">PyPI Package</a></li>
              <li><a href="https://ai-memory-weekly.beehiiv.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-foreground transition-colors">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Friends</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://bazi-calculator.app" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-foreground transition-colors">Bazi Calculator</a></li>
              <li><a href="https://www.impostergame.pro/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-foreground transition-colors">Imposter Game</a></li>
              <li><a href="https://www.bojacktest.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-foreground transition-colors">Bojack Test</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-card-border pt-6 text-center text-xs text-zinc-500">
          <p>MemPalace.tech is an independent resource site. Not affiliated with the official MemPalace project.</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} mempalace.tech &mdash; Built for developers who want AI with perfect memory.</p>
        </div>
      </div>
    </footer>
  );
}
