const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,

  i18n: {
    locales: ['en-US', 'pt-BR', 'pt', 'en'],
    defaultLocale: 'en-US',
  },

  images: {
    domains: ['images.ctfassets.net', 'i.scdn.co'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
