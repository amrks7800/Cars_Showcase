/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.unsplash.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "cdn.imagin.studio",
      },
    ],
  },
};

module.exports = nextConfig;
