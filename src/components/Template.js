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
    const {frontmatter, rawMarkdownBody} = content
    let title;
    if (frontmatter.greetings !== "") {
        title = <h1 className="title">
            {frontmatter.greetings}{" "}
            <span role="img" aria-label="emoji">
          {frontmatter.emoji}
        </span>
            <br/>
            {frontmatter.title}
        </h1>;
    } else {
        title = <h1 className="title">
            {frontmatter.title}
        </h1>;
    }
    return (
        <StyledSection id="hero">
            {title}
            <h2 className="subtitle">
                {frontmatter.subtitlePrefix}{" "}
                <span className="highlighted">{frontmatter.subtitleHighlight}</span>{" "}
                {frontmatter.subtitleSuffix}
            </h2>
            <div className="description">{rawMarkdownBody}</div>
        </StyledSection>
    )
}

export default Template