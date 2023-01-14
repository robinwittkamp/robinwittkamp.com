/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  // generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // disallow: '/',
      },
    ],
  },
  exclude: ['*/404', '*/500', '*/imprint', '*/privacy-policy', '*/de', '*/de/*'],
  alternateRefs: [
    {
      href: process.env.SITE_URL,
      hrefLang: 'en',
    },
    {
      href: process.env.SITE_URL,
      hrefLang: 'de',
    },
  ],
};
