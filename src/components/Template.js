import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }

  .subtitle {
    margin-top: 0;
  }

  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const Template = ({content}) => {
    const {frontmatter, html} = content
    let title = <h1 className="title">
        {frontmatter.title}{" "}
        <span role="img" aria-label="emoji">
            {frontmatter.emoji}</span>
    </h1>;
    return (
        <StyledSection id="hero">
            {title}
            <h2 className="subtitle">
                {frontmatter.subtitlePrefix}{" "}
                <span className="highlighted">{frontmatter.subtitleHighlight}</span>{" "}
                {frontmatter.subtitleSuffix}
            </h2>
            <section
                dangerouslySetInnerHTML={{__html: html}}
            />
        </StyledSection>
    )
}

export default Template