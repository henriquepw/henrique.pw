const path = require(`path`);

const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My portfilio`,
        short_name: `portfilio`,
        start_url: `/`,
        background_color: `#F2F1F0`,
        theme_color: `#634D90`,
        display: `minimal-ui`,
        icon: `src/assets/man.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-polished`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#634D90`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154984485-1',
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '~': path.join(__dirname, 'src'),
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
