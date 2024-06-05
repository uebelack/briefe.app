const createNextIntlPlugin = require('next-intl/plugin');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const withNextIntl = createNextIntlPlugin();

const nextConfig = withNextIntl(withMDX({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui'],
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
