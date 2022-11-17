import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Template from "../components/Template";
import React from "react";
import Seo from "../components/Seo";

const NodeTemplate = ({
                          data: {markdownRemark: node},
                      }) => {

    return (
        <Layout>
            <Template content={node}/>
        </Layout>
    )
}

export const Head = ({data: {markdownRemark: node}}) => {
    return (
        <Seo
            title={node.frontmatter.title}
            description={node.frontmatter.description || node.excerpt}
        />
    )
}

export default NodeTemplate

export const pageQuery = graphql`
  query NodesBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        emoji
        subtitlePrefix
        subtitleHighlight
        subtitleSuffix
        slug
      }
    }
  }
`