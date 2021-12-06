module.exports = {
  siteMetadata: {
    title: `Kitsune Cafe`,
    author: `Mochan`,
    siteUrl: `https://kitsu.cafe`,
    description: `A blog for game development and personal projects.`,
    twitterUsername: 'GrumpyMochan',
    displayTitle: `キツネの喫茶店`,
    displayAuthor: `キツネ`,
    kofiId: 'H2H6270D0',
    social: [
      {
        name: `twitter`,
        icon: `${__dirname}/src/icons/twitter.svg`,
        url: `https://twitter.com/GrumpyMochan`,
      },
      {
        name: `github`,
        icon: `${__dirname}/src/icons/github.svg`,
        url: `https://github.com/mochancrimthann`,
      },
      {
        name: `itchio`,
        icon: `${__dirname}/src/icons/itchdotio.svg`,
        url: `https://mochancrimthann.itch.io/`,
      },
      {
        name: `steam`,
        icon: `${__dirname}/src/icons/steam.svg`,
        url: `https://steamcommunity.com/id/samsamsamoyed`,
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.svg$/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/icons/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: '/blog',
        preset: "@theme-ui/preset-deep",
        webfontURL: 'https://fonts.googleapis.com/css2?family=Inconsolata&display=swap'
      },
    },
  ],
}
