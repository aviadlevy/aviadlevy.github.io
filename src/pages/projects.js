import React from "react"

import Layout from "../components/Layout"
import Template from "../components/Template"
import {graphql} from "gatsby";
import Seo from "../components/Seo";

const ProjectsPage = ({data}) => {
    function getContent() {
        return data.template.edges.filter(edge => edge.node.frontmatter.slug === "projects").map(edge => edge.node)[0];
    }

    return (
        <Layout>
            <Template content={getContent()}/>
        </Layout>
    )
}

export default ProjectsPage

export const Head = () => <Seo title="Projects"/>

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