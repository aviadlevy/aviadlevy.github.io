import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/Layout"
import Template from "../components/Template"
import Seo from "../components/Seo";

const IndexPage = ({data}) => {
    function getContent() {
        return data.template.edges.filter(edge => edge.node.frontmatter.slug === "home").map(edge => edge.node)[0];
    }

    return (
        <Layout>
            <Template content={getContent()}/>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <Seo title="Home"/>

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
          html
        }
      }
    }
  }
`