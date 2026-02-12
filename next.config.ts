import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://172.16.0.*",
    "http://192.168.*.*",
    "http://10.*.*.*",
  ],
};

export default nextConfig;
