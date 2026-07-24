/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",

  ...(isProd && {
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