import styled from "styled-components";
import React from "react";
import {graphql, StaticQuery} from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;

  #main-content {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.0875rem;
  }
`

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
             menuLinks {
               name
               link
             }
          }
        }
      }
    `}
        render={data => (
            <StyledLayout>
                <GlobalStyle/>
                <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title}/>
                <main id="main-content">{children}</main>
                <Footer/>
            </StyledLayout>
        )}
    />
)

export default Layout;