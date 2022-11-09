/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Aviad Levy`,
        siteUrl: `https://aviadlevy.github.io`,
        menuLinks: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Projects',
                link: '/projects'
            },
            {
                name: 'Blogs',
                link: '/blogs'
            }
        ]
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                "trackingIds": ["G-V88YY4SCDX"]
            }
        },
        "gatsby-plugin-sitemap",
        "gatsby-transformer-remark",
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
    ]
};