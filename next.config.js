/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["imgcolibweb.s3.us-west-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
