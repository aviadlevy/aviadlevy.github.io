const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

const projectTemplate = path.resolve(`./src/templates/nodes.js`)

exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions

    const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your nodes`,
            result.errors
        )
        return
    }
    const nodes = result.data.allMarkdownRemark.nodes

    if (nodes.length > 0) {
        nodes.forEach((node) => {
            if (!node.fields.slug.includes("README")) {
                createPage({
                    path: node.fields.slug,
                    component: projectTemplate,
                    context: {
                        id: node.id,
                    },
                })
            }
        })
    }
}

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode}).replaceAll(" ", "-")

        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}