import styled from "styled-components"

import { P1 } from "../styles/HTMLElements"
import { ProfileInfo } from "./content/Content"

const AboutStyled = styled.div``

function About() {
  return (
    <AboutStyled>
      <P1>{ProfileInfo.Description}</P1>
    </AboutStyled>
  )
}

export default About
