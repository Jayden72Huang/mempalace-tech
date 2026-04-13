import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Consolidate non-www → www (fix ranking signal dilution)
      {
        source: "/:path*",
        has: [{ type: "host", value: "mempalace.tech" }],
        destination: "https://www.mempalace.tech/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
