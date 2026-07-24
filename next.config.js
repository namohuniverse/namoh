/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  ...(process.env.NODE_ENV === "production" && {
    basePath: "/namoh",
    assetPrefix: "/namoh",
  }),

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

module.exports = nextConfig;