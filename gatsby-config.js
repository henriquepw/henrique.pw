const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `My portfolio`,
    author: `Henrique M. Miranda`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        theme_color: `#4F5159`,
        display: `minimal-ui`,
        icon: `src/assets/man.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '~': path.join(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway:300,400,700`],
        display: `swap`,
      },
    },
  ],
};
