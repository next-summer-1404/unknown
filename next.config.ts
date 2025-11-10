import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // برای گرفتن تصویر از همه دامنه ها
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // یعنی همه دامنه‌ها
      },
    ],
    // تا اینجا

    // domains: ["storage.c2.liara.space"],
  },
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

export default nextConfig;
