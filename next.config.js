const createNextIntlPlugin = require('next-intl/plugin');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const withNextIntl = createNextIntlPlugin();

const nextConfig = withNextIntl(withMDX({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui'],
  // i18n: {
  //   locales: ['en', 'de', 'es', 'fr', 'it', 'nl', 'pt'],
  //   defaultLocale: 'en',
  //   // domains: [
  //   //   {
  //   //     domain: 'briefe.app',
  //   //     defaultLocale: 'de',
  //   //   },
  //   //   {
  //   //     domain: 'letter-app.com',
  //   //     defaultLocale: 'en',
  //   //     locales: ['es', 'fr', 'it', 'nl', 'pt'],
  //   //     http: true,
  //   //   },
  //   // ],
  // },
  images: {
    deviceSizes: [480, 768, 976, 1024],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.medium.com',
        port: '',
        pathname: '**/*',
      },
    ],
  },
  pageExtensions: ['js', 'mdx'],
}));

module.exports = nextConfig;
