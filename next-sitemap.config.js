module.exports = {
  siteUrl: "https://www.chat-whiz.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 1,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://www.chat-whiz.com/sitemap.xml",
    ],
  },
};
