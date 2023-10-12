/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/typewriter-generator",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
