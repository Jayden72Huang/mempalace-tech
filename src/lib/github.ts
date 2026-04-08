export interface GitHubStats {
  stars: string;
  forks: string;
  watchers: string;
  openIssues: string;
}

const FALLBACK: GitHubStats = {
  stars: "19K+",
  forks: "2.2K+",
  watchers: "146",
  openIssues: "52+",
};

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K+`;
  return `${n}+`;
}

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const res = await fetch("https://api.github.com/repos/milla-jovovich/mempalace", {
      next: { revalidate: 86400 }, // 24 hours
      headers: { Accept: "application/vnd.github.v3+json" },
    });

    if (!res.ok) return FALLBACK;

    const data = await res.json();

    return {
      stars: formatNumber(data.stargazers_count ?? 0),
      forks: formatNumber(data.forks_count ?? 0),
      watchers: formatNumber(data.subscribers_count ?? 0),
      openIssues: formatNumber(data.open_issues_count ?? 0),
    };
  } catch {
    return FALLBACK;
  }
}
