/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sofascore.app",
      },
    ],
  },
};

export default nextConfig;
