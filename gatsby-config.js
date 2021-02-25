const primary = `#51b3bf`

module.exports = {
  siteMetadata: {
    title: "tavis",
    author: "Tavis Lochhead",
    homeCity: "Toronto",
    siteUrl: `https://tavis.cc`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noreferrer noopener",
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "tavis",
        short_name: "tavis",
        icon: "static/logo.png",
        start_url: "/",
        background_color: primary,
        theme_color: primary,
        display: "minimal-ui",
      },
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-social-cards`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://tavis.cc",
        sitemap: "https://tavis.cc/sitemap.xml",
        policy: [{ userAgent: "*" }],
      },
    },
  ],
}
