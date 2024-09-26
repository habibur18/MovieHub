/** @type {import('next').NextConfig} */
const nextConfig = {
  // add multiple image host domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
