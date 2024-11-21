import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};
module.exports = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
