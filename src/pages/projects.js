import React from "react"

import Layout from "../components/Layout"
import Template from "../components/Template"
import {graphql} from "gatsby";

const BlogPage = ({data}) => {
    function getContent() {
        return data.template.edges.filter(edge => edge.node.frontmatter.slug === "projects").map(edge => edge.node)[0];
    }

    return (
        <Layout>
            <Template content={getContent()}/>
        </Layout>
    )
}

export default BlogPage

export const pageQuery = graphql`
  {
    template: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
            subtitleSuffix
            slug
          }
          rawMarkdownBody
        }
      }
    }
  }
`