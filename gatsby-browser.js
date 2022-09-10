import React from "react"
import theme from "./src/theme"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Layout from "./src/components/Layout"

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

  /* 
    Keeps footer at bottom.
    I'm not a fan of this because it can cause problems
    with @reach/router, or maybe it was something else.
    layoutStyles.js makes a 100% height call as well.
  */
  html, body, main, #___gatsby, #gatsby-focus-wrapper, #gatsby-focus-wrapper > div {
    height: 100%;
  }

html {
  background-color: ${theme.grayscale.darkest};

}

body {
  background-color: ${theme.grayscale.light1};
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em;
}
body {
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}
`
