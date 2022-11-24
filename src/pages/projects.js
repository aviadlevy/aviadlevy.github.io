import React from "react"

import Layout from "../components/Layout"
import Template from "../components/Template"
import {graphql} from "gatsby";
import Seo from "../components/Seo";
import styled from "styled-components";

const StyledLinksInProject = styled.main`
  a {
    color: #1f6feb;
    font-weight: bold;
  }
`

const ProjectsPage = ({data}) => {
    function getContent() {
        return data.template.edges.filter(edge => edge.node.frontmatter.slug === "projects").map(edge => edge.node)[0];
    }

    return (
        <Layout>
            <StyledLinksInProject>
                <Template content={getContent()}/>
            </StyledLinksInProject>
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