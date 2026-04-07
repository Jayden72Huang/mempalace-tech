import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mempalace.tech";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/guides/setup`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/compare/mempalace-vs-mem0`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
