/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** @type {import('next').NextConfig} */

// Next.js bundle analyzer
// Usage: ANALYZE=true npm run build
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Next.js config
const nextConfig = withBundleAnalyzer({
  env: {
    SITE_URL: process.env.SITE_URL,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  // ignoreBuildErrors: true,
  reactStrictMode: true,

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});

module.exports = nextConfig;
