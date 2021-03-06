/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
   siteMetadata: {
     title: `Gatsby Default Starter`,
     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
     author: `@gatsbyjs`,
   },
  plugins: [
     `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
       name: `images`,
       path: `${__dirname}/src/images`,
      },
    },
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
     resolve: `gatsby-source-filesystem`,
     options: {
       name: `images`,
       path: `${__dirname}/src/images`,
     },
    },

   {
     resolve: `gatsby-source-filesystem`,
     options: {
       name: `data`,
       path: `${__dirname}/src/data/`,
     },
   },
   `gatsby-transformer-csv`


   ],

 }
