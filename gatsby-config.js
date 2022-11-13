/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Aviad Levy`,
        description: `Aviad Levy's website`,
        siteUrl: `https://aviadlevy.github.io`,
        social: {
            twitter: `aviadlevy`
        },
        twitterUsername: `@aviadlevy`,
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
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Aviad Levy",
                short_name: "Aviad Levy",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                display: "standalone",
                icon: "src/images/icon.png",
            }
        },
    ]
};