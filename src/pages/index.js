import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import {BrowserRouter} from "react-router-dom";

const IndexPage = ({data}) => {
    return (
        <BrowserRouter>
            <Layout>
                <Hero content={data.hero.edges[0].node}/>
            </Layout>
        </BrowserRouter>
    )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
            subtitleSuffix
          }
          rawMarkdownBody
        }
      }
    }
  }
`