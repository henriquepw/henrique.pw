const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  i18n: {
    locales: ['en-US', 'pt-BR', 'pt', 'en'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: [
      'images.ctfassets.net',
      'i.scdn.co'
    ]
  }
});

