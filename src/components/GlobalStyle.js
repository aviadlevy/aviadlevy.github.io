import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: white;
    color: black;
    font-size: 1.125rem;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-weight: 400;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.375rem;
    color: black;
    @media (min-width: 1200px) {
      font-size: 2.625rem;
      line-height: 4rem;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: black;
    @media (min-width: 1200px) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    cursor: pointer;

    &:hover,
    &:focus {
      outline: 0;
    }
  }

  a.projects {
    color: #1f6feb;
    font-weight: bold;
  }

  pre code {
    display: block;
    background: #ffeff0;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    max-width: 100%;
    min-width: 100px;
    padding: 0;
  }

  /* Code in text */
  p > code,
  li > code,
  dd > code,
  td > code {
    background: #ffeff0;
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: .1rem .3rem .2rem;
    border-radius: .2rem;
  }

  blockquote {
    margin: 0;
    padding: 0 1em;
    color: #8b949e;
    border-left: .25em solid #30363d;
  }

  blockquote a {
    color: #58a6ff;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 2px 16px 26px;
    margin-bottom: 15px;
    border-radius: 25px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export default GlobalStyle