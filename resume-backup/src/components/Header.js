import { Container } from "./styles/Container.styled"
import ToggleSwitch from "./ToggleSwitch"

import styled from "styled-components"
import { FaEye, FaDownload } from "react-icons/fa"

const HeadDiv = styled.div`
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  border-bottom: 0.1em solid ${(props) => props.theme.accentColor};
  & > div {
    display: flex;
    gap: 1em;
  }
`

function Header({ currentTheme, setTheme }) {
  return (
    <Container>
      <HeadDiv>
        <div>
          <h3>Resume</h3>
        </div>
        <div>
          <FaEye />
          <FaDownload />
          <ToggleSwitch currentTheme={currentTheme} setTheme={setTheme} />
        </div>
      </HeadDiv>
    </Container>
  )
}

export default Header
