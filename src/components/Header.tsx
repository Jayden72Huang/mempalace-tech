"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/guides/setup", label: "Setup Guide" },
  { href: "/compare/mempalace-vs-mem0", label: "vs Mem0" },
  { href: "https://github.com/milla-jovovich/mempalace", label: "GitHub", external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="text-accent">&#9670;</span>
          <span>MemPalace</span>
          <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">.tech</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label} <span className="text-xs">&#8599;</span>
              </a>
            ) : (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-foreground">
                {item.label}
              </Link>
            )
          )}
          <a
            href="https://pypi.org/project/mempalace/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            pip install mempalace
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="sm:hidden p-2 text-muted" aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open ? (
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-card-border px-4 pb-4 sm:hidden">
          {navItems.map((item) =>
            item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-muted">
                {item.label} &#8599;
              </a>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted">
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
