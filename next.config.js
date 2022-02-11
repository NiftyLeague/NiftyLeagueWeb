const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['secure.gravatar.com', 'nleagueblog.wpengine.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/shop',
        destination: 'https://shop.niftyleague.com',
      },
      {
        source: '/app',
        destination: 'https://app.niftyleague.com',
      },
      {
        source: '/docs',
        destination: 'https://docs.niftyleague.com',
      },
      {
        source: '/feedback',
        destination: 'https://feedback.niftyleague.com/',
      },
    ];
  },
};

module.exports = nextConfig;
