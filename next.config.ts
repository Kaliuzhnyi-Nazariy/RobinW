import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "cdn.pixabay.com"],
  },
};

export default nextConfig;
