require('dotenv').config();

const path = require(`path`);

const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henrique Miranda`,
        short_name: `Henrique`,
        start_url: `/`,
        background_color: `#F2F1F0`,
        theme_color: `#634D90`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
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
    /* {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#634D90`,
      },
    }, */
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
    `gatsby-plugin-offline`,
  ],
};
