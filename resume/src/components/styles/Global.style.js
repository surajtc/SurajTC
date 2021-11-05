import { createGlobalStyle } from "styled-components"

// A4 (wxh)     : 794 x 1123 pixels
// Letter (wxh) : 816 x 1054 pixels

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.FgColor};
    background-color: ${(props) => props.theme.BodyColor};
    font-family: 'Poppins', sans-serif;
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  /* @media screen and (min-width: 816px) {
  body {
    background-color: lightgreen;
  } 
}*/
`
export const Container = `
  width: auto;
  max-width: 816px;
  min-width: 320px;
  margin: 0 auto;
`
