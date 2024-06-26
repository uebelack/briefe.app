const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = withMDX({
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
});

module.exports = nextConfig;
