import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import {StaticImage} from "gatsby-plugin-image"

const Header = ({menuLinks}) => (
    <header
        style={{
            background: "black",
            marginBottom: "1rem",
        }}
    >
        <div
            style={{
                margin: "0 auto",
                maxWidth: "1100px",
                padding: "1.45rem 1.0875rem",
                display: "flex",
                justifyItems: "space-between",
                alignItems: "center",
                height: 80,
                zIndex: "12",
            }}
        >
            <StaticImage src="../images/icon.png"
                         alt="Aviad Levy"
                         placeholder="blurred"
                         layout="constrained"
                         width={75}
                         height={75}
                         style={{margin: 0,}}/>
            <div style={{display: "flex", flex: 1}}/>
            <div>
                <nav>
                    <ul style={{display: "flex", flex: 1}}>
                        {menuLinks.map(link => (
                            <li
                                key={link.name}
                                style={{
                                    listStyleType: `none`,
                                    padding: `1rem`,
                                }}
                            >
                                <Link style={{color: `white`}} to={link.link}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header