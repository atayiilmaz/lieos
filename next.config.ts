import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  devIndicators: false,
};

export default nextConfig;
