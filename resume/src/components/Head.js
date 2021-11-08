import ThemeSwitch from "./head/ThemeSwitch"

import styled from "styled-components"

import { Container } from "./styles/Global.style"

const HeadStyled = styled.header`
  display: flex;
  place-items: center;
  ${Container}
  background-color: ${(props) => props.theme.HlColor};
`

function Head({ theme, setTheme }) {
  return (
    <HeadStyled>
      <h3>Résumé</h3>
      <nav>
        <ThemeSwitch theme={theme} setTheme={setTheme} />
      </nav>
    </HeadStyled>
  )
}

export default Head
