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
        source: '/collections/:path*',
        destination: 'https://shop.niftyleague.com/collections/:path*',
      },
      {
        source: '/pages/:path*',
        destination: 'https://shop.niftyleague.com/pages/:path*',
      },
      {
        source: '/products/:path*',
        destination: 'https://shop.niftyleague.com/products/:path*',
      },
      {
        source: '/cart/:path*',
        destination: 'https://shop.niftyleague.com/cart/:path*',
      },
      {
        source: '/account/login',
        destination: 'https://shop.niftyleague.com/account/login',
      },
      {
        source: '/docs/:path*',
        destination: 'https://docs.niftyleague.com/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/app',
        destination: 'https://app.niftyleague.com',
        permanent: true,
      },
      {
        source: '/feedback',
        destination: 'https://feedback.niftyleague.com/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
