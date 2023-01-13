/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://robinwittkamp.com',
  generateRobotsTxt: true,
  // generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        // allow: '/',
        disallow: '/',
      },
    ],
  },
  exclude: ['*/404', '*/500', '*/imprint', '*/privacy-policy', '*/de', '*/de/*'],
  alternateRefs: [
    {
      href: 'https://robinwittkamp.com',
      hrefLang: 'en',
    },
    {
      href: 'https://robinwittkamp.com/de',
      hrefLang: 'de',
    },
  ],
};
