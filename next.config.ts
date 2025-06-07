import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
        pathname: "/content/v1/**",
      },
    ]
  }
};

export default nextConfig;
