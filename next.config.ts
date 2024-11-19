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
        ],
    },
};

export default nextConfig;
