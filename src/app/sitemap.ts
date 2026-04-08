import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mempalace.tech";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/story`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/benchmarks`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/quiz`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/guides/setup`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/compare/mempalace-vs-mem0`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/compare/mempalace-vs-zep`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/mempalace-vs-letta`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/mempalace-vs-supermemory`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/mempalace-vs-cognee`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/mempalace-vs-langmem`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];
}
