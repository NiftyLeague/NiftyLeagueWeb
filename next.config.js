// This file sets a custom webpack configuration to use your Next.js app with Sentry
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: [
      'secure.gravatar.com',
      'nleagueblog.wpengine.com',
      'nifty-league.s3.amazonaws.com',
      'pixls.blob.core.windows.net',
    ],
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
      {
        source: '/d/:token_id(\\d{1,})',
        destination: 'https://opensea.io/assets/ethereum/0x986aea67c7d6a15036e18678065eb663fc5be883/:token_id',
        permanent: false,
      },
      // For now, disable rentals and land pages
      {
        source: '/rentals',
        destination: '/',
        permanent: true,
      },
      {
        source: '/land',
        destination: '/',
        permanent: true,
      },
    ];
  },
  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true,
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
