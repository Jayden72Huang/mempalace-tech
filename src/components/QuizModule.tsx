"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data: Questions, Options, Scoring                                  */
/* ------------------------------------------------------------------ */

type FrameworkKey = "mempalace" | "mem0" | "zep" | "letta" | "diy";

interface Option {
  id: string;
  icon: string;
  label: string;
  desc: string;
  scores: Record<FrameworkKey, number>;
}

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "hosting",
    title: "Where should your AI memories live?",
    subtitle: "This determines your deployment model and data sovereignty.",
    options: [
      { id: "local", icon: "\u{1F3E0}", label: "My machine", desc: "Full control, zero cloud", scores: { mempalace: 3, mem0: 0, zep: 0, letta: 1, diy: 2 } },
      { id: "cloud", icon: "\u2601\uFE0F", label: "Cloud is fine", desc: "Managed infrastructure", scores: { mempalace: 0, mem0: 3, zep: 3, letta: 1, diy: 0 } },
      { id: "any", icon: "\u{1F937}", label: "Don't care", desc: "Whatever works best", scores: { mempalace: 1, mem0: 2, zep: 2, letta: 2, diy: 1 } },
    ],
  },
  {
    id: "budget",
    title: "What's your budget for AI memory?",
    subtitle: "Some frameworks are free, others charge $19-475/month.",
    options: [
      { id: "free", icon: "\u{1F4B8}", label: "$0 — free only", desc: "Open source, no subscription", scores: { mempalace: 3, mem0: 1, zep: 0, letta: 1, diy: 3 } },
      { id: "mid", icon: "\u{1F4B0}", label: "Under $50/mo", desc: "Reasonable for side projects", scores: { mempalace: 2, mem0: 2, zep: 2, letta: 2, diy: 1 } },
      { id: "enterprise", icon: "\u{1F3E2}", label: "Enterprise budget", desc: "SLAs and support matter", scores: { mempalace: 0, mem0: 3, zep: 3, letta: 2, diy: 0 } },
    ],
  },
  {
    id: "priority",
    title: "What matters most to you?",
    subtitle: "Choose the single most important factor.",
    options: [
      { id: "accuracy", icon: "\u{1F3AF}", label: "Highest accuracy", desc: "Best benchmark scores", scores: { mempalace: 3, mem0: 1, zep: 1, letta: 1, diy: 1 } },
      { id: "ease", icon: "\u26A1", label: "Easy setup", desc: "Up and running fast", scores: { mempalace: 2, mem0: 3, zep: 2, letta: 1, diy: 0 } },
      { id: "support", icon: "\u{1F6E1}\uFE0F", label: "Enterprise support", desc: "SLAs, dedicated team", scores: { mempalace: 0, mem0: 3, zep: 3, letta: 2, diy: 0 } },
    ],
  },
  {
    id: "llm",
    title: "Which LLM do you primarily use?",
    subtitle: "Different frameworks integrate better with different models.",
    options: [
      { id: "claude", icon: "\u{1F7E3}", label: "Claude", desc: "Anthropic's models", scores: { mempalace: 3, mem0: 2, zep: 1, letta: 2, diy: 1 } },
      { id: "chatgpt", icon: "\u{1F7E2}", label: "ChatGPT", desc: "OpenAI's models", scores: { mempalace: 1, mem0: 3, zep: 2, letta: 2, diy: 1 } },
      { id: "local", icon: "\u{1F9E0}", label: "Local models", desc: "Llama, Mistral, etc.", scores: { mempalace: 3, mem0: 0, zep: 0, letta: 1, diy: 3 } },
      { id: "multi", icon: "\u{1F504}", label: "Multiple", desc: "I switch between them", scores: { mempalace: 2, mem0: 2, zep: 2, letta: 2, diy: 2 } },
    ],
  },
  {
    id: "history",
    title: "How much conversation history do you have?",
    subtitle: "This affects storage and retrieval requirements.",
    options: [
      { id: "new", icon: "\u{1F4DD}", label: "Just starting", desc: "Less than a month", scores: { mempalace: 2, mem0: 3, zep: 2, letta: 2, diy: 2 } },
      { id: "months", icon: "\u{1F4DA}", label: "Months of daily use", desc: "Hundreds of conversations", scores: { mempalace: 3, mem0: 2, zep: 2, letta: 2, diy: 1 } },
      { id: "years", icon: "\u{1F5C4}\uFE0F", label: "Years of data", desc: "Massive archive", scores: { mempalace: 3, mem0: 1, zep: 1, letta: 1, diy: 2 } },
    ],
  },
  {
    id: "privacy",
    title: "How important is data privacy?",
    subtitle: "Some solutions require sending data to cloud servers.",
    options: [
      { id: "strict", icon: "\u{1F512}", label: "Everything local", desc: "Zero data leaves my machine", scores: { mempalace: 3, mem0: 0, zep: 0, letta: 1, diy: 3 } },
      { id: "ok", icon: "\u2601\uFE0F", label: "Cloud is OK", desc: "Standard security is fine", scores: { mempalace: 1, mem0: 3, zep: 3, letta: 2, diy: 1 } },
      { id: "compliance", icon: "\u{1F4CB}", label: "Compliance required", desc: "SOC2, HIPAA, GDPR", scores: { mempalace: 2, mem0: 2, zep: 2, letta: 1, diy: 1 } },
    ],
  },
  {
    id: "skill",
    title: "Your technical skill level?",
    subtitle: "Some frameworks need more hands-on configuration.",
    options: [
      { id: "dev", icon: "\u{1F468}\u200D\u{1F4BB}", label: "Developer", desc: "Comfortable with CLI & code", scores: { mempalace: 3, mem0: 2, zep: 2, letta: 2, diy: 3 } },
      { id: "pm", icon: "\u{1F527}", label: "Technical PM", desc: "Can follow docs", scores: { mempalace: 2, mem0: 3, zep: 2, letta: 1, diy: 0 } },
      { id: "non-tech", icon: "\u{1F4CA}", label: "Non-technical", desc: "Prefer managed solutions", scores: { mempalace: 0, mem0: 3, zep: 2, letta: 0, diy: 0 } },
    ],
  },
];

interface FrameworkResult {
  key: FrameworkKey;
  name: string;
  tagline: string;
  color: string;
  advantages: string[];
  monthlyCost: string;
  annualSavings: string;
  cta: { label: string; href: string };
}

const FRAMEWORKS: Record<FrameworkKey, Omit<FrameworkResult, "key" | "monthlyCost" | "annualSavings">> = {
  mempalace: {
    name: "MemPalace",
    tagline: "Maximum accuracy, zero cost, fully local",
    color: "text-accent",
    advantages: [
      "96.6% LongMemEval (raw, no API) — highest local-only score",
      "Completely free, MIT licensed, runs on your machine",
      "Stores everything verbatim — no information loss",
    ],
    cta: { label: "Setup MemPalace Now", href: "/guides/setup" },
  },
  mem0: {
    name: "Mem0",
    tagline: "Enterprise-grade managed memory platform",
    color: "text-info",
    advantages: [
      "$24M funded, YC-backed — enterprise support & SLAs",
      "Managed cloud — no infrastructure to maintain",
      "AWS Strands integration, broad ecosystem",
    ],
    cta: { label: "Compare MemPalace vs Mem0", href: "/compare/mempalace-vs-mem0" },
  },
  zep: {
    name: "Zep",
    tagline: "Knowledge graph with temporal reasoning",
    color: "text-success",
    advantages: [
      "Graphiti knowledge graph — best for temporal relationships",
      "Managed cloud with enterprise tiers",
      "Strong at entity extraction and relationship tracking",
    ],
    cta: { label: "Compare MemPalace vs Zep", href: "/compare/mempalace-vs-mem0" },
  },
  letta: {
    name: "Letta (MemGPT)",
    tagline: "Agent-managed hierarchical memory",
    color: "text-warning",
    advantages: [
      "Agents autonomously manage their own memory layers",
      "Core/recall/archival memory hierarchy",
      "Apache 2.0, self-hostable",
    ],
    cta: { label: "Learn About AI Memory Options", href: "/benchmarks" },
  },
  diy: {
    name: "Build Your Own",
    tagline: "Maximum control with a custom solution",
    color: "text-foreground",
    advantages: [
      "Full control over architecture and data flow",
      "No vendor lock-in whatsoever",
      "Tailor-made for your exact use case",
    ],
    cta: { label: "See How MemPalace Works", href: "/benchmarks" },
  },
};

function getCostEstimate(key: FrameworkKey, budget: string, history: string): { monthly: string; annual: string; savings: string } {
  const costs: Record<FrameworkKey, Record<string, number>> = {
    mempalace: { free: 0, mid: 0, enterprise: 0 },
    mem0: { free: 0, mid: 19, enterprise: 249 },
    zep: { free: 0, mid: 25, enterprise: 475 },
    letta: { free: 0, mid: 19, enterprise: 249 },
    diy: { free: 0, mid: 10, enterprise: 50 },
  };

  const monthly = costs[key]?.[budget] ?? 0;
  const annual = monthly * 12;
  const mempalaceAnnual = 0;
  const savings = annual - mempalaceAnnual;

  return {
    monthly: `$${monthly}/mo`,
    annual: `$${annual}/yr`,
    savings: savings > 0 ? `$${savings}/yr with MemPalace` : "$0 — already free",
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function QuizModule({ initialResult }: { initialResult?: string }) {
  const [phase, setPhase] = useState<"intro" | "questions" | "results">(
    initialResult ? "results" : "intro"
  );
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const calculateScores = useCallback((): Record<FrameworkKey, number> => {
    const scores: Record<FrameworkKey, number> = { mempalace: 0, mem0: 0, zep: 0, letta: 0, diy: 0 };
    for (const q of QUESTIONS) {
      const selected = answers[q.id];
      if (!selected) continue;
      const option = q.options.find((o) => o.id === selected);
      if (!option) continue;
      for (const [fw, pts] of Object.entries(option.scores)) {
        scores[fw as FrameworkKey] += pts;
      }
    }
    return scores;
  }, [answers]);

  const getWinner = useCallback((): FrameworkKey => {
    if (initialResult && phase === "results" && Object.keys(answers).length === 0) {
      return (initialResult as FrameworkKey) || "mempalace";
    }
    const scores = calculateScores();
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sorted[0][0] as FrameworkKey;
  }, [answers, calculateScores, initialResult, phase]);

  const selectAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    if (currentQ < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQ((q) => q + 1), 300);
    } else {
      setTimeout(() => {
        setPhase("results");
        const winner = getWinner();
        if (typeof window !== "undefined") {
          window.history.replaceState(null, "", `/quiz?result=${winner}`);
        }
      }, 300);
    }
  };

  const shareResult = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  const restart = () => {
    setPhase("intro");
    setCurrentQ(0);
    setAnswers({});
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/quiz");
    }
  };

  /* ---------- INTRO ---------- */
  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Interactive tool</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Which AI Memory Framework Should You Use?
        </h2>
        <p className="mt-4 text-lg text-muted">
          Answer 7 quick questions and get a personalized recommendation — with cost estimates.
          Takes about 2 minutes.
        </p>
        <button
          onClick={() => setPhase("questions")}
          className="mt-8 inline-flex items-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Start the Quiz &rarr;
        </button>
        <p className="mt-4 text-xs text-muted">No signup required. Your answers stay in your browser.</p>
      </div>
    );
  }

  /* ---------- QUESTIONS ---------- */
  if (phase === "questions") {
    const q = QUESTIONS[currentQ];
    const progress = ((currentQ) / QUESTIONS.length) * 100;

    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-muted mb-2">
            <span>Question {currentQ + 1} of {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-card-border">
            <div
              className="h-1.5 rounded-full bg-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="transition-all duration-300">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{q.title}</h3>
          <p className="mt-2 text-muted">{q.subtitle}</p>

          {/* Options */}
          <div className={`mt-8 grid gap-4 ${q.options.length <= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            {q.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => selectAnswer(q.id, opt.id)}
                className={`group rounded-xl border p-5 text-left transition-all duration-200 hover:scale-[1.02] hover:border-accent/50 ${
                  answers[q.id] === opt.id
                    ? "border-accent bg-accent/10"
                    : "border-card-border bg-card"
                }`}
              >
                <span className="text-3xl">{opt.icon}</span>
                <h4 className="mt-3 font-semibold text-foreground group-hover:text-accent transition-colors">
                  {opt.label}
                </h4>
                <p className="mt-1 text-sm text-muted">{opt.desc}</p>
              </button>
            ))}
          </div>

          {/* Back button */}
          {currentQ > 0 && (
            <button
              onClick={() => setCurrentQ((q) => q - 1)}
              className="mt-6 text-sm text-muted hover:text-foreground transition-colors"
            >
              &larr; Previous question
            </button>
          )}
        </div>
      </div>
    );
  }

  /* ---------- RESULTS ---------- */
  const winner = getWinner();
  const fw = FRAMEWORKS[winner];
  const scores = calculateScores();
  const budget = answers.budget || "free";
  const cost = getCostEstimate(winner, budget, answers.history || "new");

  const sortedFrameworks = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">Your result</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        We recommend: <span className={fw.color}>{fw.name}</span>
      </h2>
      <p className="mt-3 text-lg text-muted">{fw.tagline}</p>

      {/* Result card */}
      <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-foreground">Why {fw.name}?</h3>
        <ul className="mt-4 space-y-3">
          {fw.advantages.map((a, i) => (
            <li key={i} className="flex items-start gap-3 text-muted">
              <span className="mt-0.5 text-success">\u2713</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>

        {/* Cost estimate */}
        <div className="mt-6 rounded-lg bg-card p-4 border border-card-border">
          <p className="text-sm font-medium text-foreground">Estimated cost for you</p>
          <p className="mt-1 text-2xl font-bold text-accent">{cost.monthly}</p>
          <p className="text-xs text-muted">
            {cost.annual} annually{" "}
            {winner !== "mempalace" && cost.savings !== "$0 — already free" && (
              <span className="text-success">&mdash; Save {cost.savings}</span>
            )}
          </p>
        </div>

        <Link
          href={fw.cta.href}
          className="mt-6 inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          {fw.cta.label} &rarr;
        </Link>
      </div>

      {/* Score breakdown */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-foreground">Score breakdown</h3>
        <div className="mt-4 space-y-3">
          {sortedFrameworks.map(([key, score]) => {
            const pct = Math.round((score / 21) * 100);
            const f = FRAMEWORKS[key as FrameworkKey];
            return (
              <div key={key}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className={`font-medium ${f.color}`}>{f.name}</span>
                  <span className="text-muted">{score}/21 ({pct}%)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-card-border">
                  <div
                    className="h-2 rounded-full bg-accent transition-all duration-700"
                    style={{ width: `${pct}%`, opacity: key === winner ? 1 : 0.4 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={shareResult}
          className="inline-flex items-center justify-center rounded-full border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
        >
          {copied ? "\u2713 Link copied!" : "Share your result"}
        </button>
        <button
          onClick={restart}
          className="inline-flex items-center justify-center rounded-full border border-card-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-foreground"
        >
          Retake quiz
        </button>
      </div>
    </div>
  );
}
