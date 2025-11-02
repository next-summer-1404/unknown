import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["storage.c2.liara.space"],
  },
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

export default nextConfig;
