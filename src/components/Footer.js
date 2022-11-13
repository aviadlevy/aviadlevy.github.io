import React from "react"
import styled from "styled-components"
import {Link} from "gatsby";

const StyledFooter = styled.footer`
  width: 100%;
  height: 3.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
`

const footerLinks = {
    "GitHub": "https://github.com/aviadlevy",
    "Twitter": "https://twitter.com/AviadLevy",
    "Mastodon": "https://tooot.im/web/@aviadlevy",
    "Linkedin": "https://www.linkedin.com/in/aviadlevy/",
}

const Footer = () => (
    <StyledFooter>
        <ul style={{display: "flex"}}>
            {Object.keys(footerLinks).map((name) => (
                <li
                    key={name}
                    style={{
                        listStyleType: `none`,
                        padding: `1rem`,
                    }}
                >
                    <Link
                        to={footerLinks[name]}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    </StyledFooter>
)

export default Footer