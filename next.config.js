/** @type {import('next').NextConfig} */

// Next.js bundle analyzer
// Usage: ANALYZE=true npm run build
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Next.js config
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    newNextLinkBehavior: true,
  },
});

module.exports = nextConfig;
