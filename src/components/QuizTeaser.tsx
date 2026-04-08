import Link from "next/link";

export default function QuizTeaser() {
  return (
    <section className="border-t border-card-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card to-card p-8 text-center sm:p-12">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Interactive tool</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Not sure which AI memory framework to use?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            Answer 7 quick questions and get a personalized recommendation with cost estimates. Takes 2 minutes.
          </p>
          <Link
            href="/quiz"
            className="mt-6 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Take the Quiz &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
