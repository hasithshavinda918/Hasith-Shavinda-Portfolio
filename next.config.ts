import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static build for shared hosting (no Node runtime needed)
  output: "export",
  images: {
    // Allow next/image to work in static export without the image optimizer
    unoptimized: true,
  },
};

export default nextConfig;
