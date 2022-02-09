/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
        source: '/blog',
        destination: 'https://blog.niftyleague.com',
      },
      {
        source: '/feedback',
        destination: 'https://feedback.niftyleague.com/',
      },
    ];
  },
};

module.exports = nextConfig;
