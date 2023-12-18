const HIGH_PRIORITY_PATHS = ['/', '/games', '/niftyverse', '/degens', '/roadmap', '/community'];
const MID_PRIORITY_PATHS = ['/compete-and-earn', '/lore', '/overview', '/team', '/docs', '/shop'];

function customPathPriority(path) {
  if (HIGH_PRIORITY_PATHS.includes(path)) return '1.0';
  if (MID_PRIORITY_PATHS.includes(path)) return '0.7';
  return '0.4';
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://niftyleague.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/docs/*', '/collections/*', '/products/*', '/cart/*', '/account/*'],
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: customPathPriority(path),
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async config => [await config.transform(config, '/docs'), await config.transform(config, '/shop')],
};
