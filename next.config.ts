import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.rareblocks.xyz",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "www.google.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "cdn.weatherapi.com",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
