import type { Metadata } from "next";
import QuizModule from "@/components/QuizModule";

type Props = { searchParams: Promise<{ result?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { result } = await searchParams;
  const names: Record<string, string> = {
    mempalace: "MemPalace",
    mem0: "Mem0",
    zep: "Zep",
    letta: "Letta",
    diy: "Build Your Own",
  };

  const title = result && names[result]
    ? `My Result: ${names[result]} — AI Memory Framework Quiz`
    : "Which AI Memory Framework Should You Use? — Quiz";

  const description = result && names[result]
    ? `I got ${names[result]} as my recommended AI memory framework. Take the quiz to find yours.`
    : "Answer 7 questions and get a personalized AI memory framework recommendation with cost estimates. Free, no signup required.";

  return {
    title,
    description,
    alternates: { canonical: "https://www.mempalace.tech/quiz" },
    openGraph: {
      title,
      description,
      url: "https://www.mempalace.tech/quiz",
      type: "website",
      images: [{ url: "/images/og-image.png", width: 1200, height: 675, alt: "AI Memory Framework Quiz" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  name: "Which AI Memory Framework Should You Use?",
  description: "Interactive quiz to find the best AI memory framework for your needs. Compares MemPalace, Mem0, Zep, Letta, and custom solutions.",
  about: { "@type": "Thing", name: "AI memory systems" },
  educationalLevel: "beginner",
  provider: { "@type": "Organization", name: "MemPalace.tech", url: "https://www.mempalace.tech" },
};

export default async function QuizPage({ searchParams }: Props) {
  const { result } = await searchParams;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <QuizModule initialResult={result} />
    </>
  );
}
