"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 animate-[slideUp_0.3s_ease-out]">
      <div className="flex items-center gap-3 rounded-full border border-accent/30 bg-card/95 px-4 py-2.5 shadow-lg shadow-black/40 backdrop-blur-sm">
        <span className="text-sm text-muted hidden sm:inline">Not sure which AI memory tool to pick?</span>
        <Link
          href="/quiz"
          className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Take the Quiz
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="ml-1 text-muted hover:text-foreground transition-colors text-lg leading-none"
          aria-label="Dismiss"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
