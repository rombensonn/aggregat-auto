import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/aggregat-auto",
        assetPrefix: "/aggregat-auto/",
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
