import { createGlobalStyle } from "styled-components"

// color scheme
// color 1 : #1e1e24
// color 2 : #6900FC
// color 3 : #F8F7F9
// color 4 : #A491D3

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.fgColor};
    background-color: ${(props) => props.theme.bgColor};
  }
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
`
