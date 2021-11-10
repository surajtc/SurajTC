import styled from "styled-components"

import { Container } from "./styles/Global.style"

import Profile from "./main/Profile"
import About from "./main/About"

import Education from "./main/Education"
import Skills from "./main/Skills"
import Experience from "./main/Experience"
import Projects from "./main/Projects"
import Contact from "./main/Contact"

const MainStyled = styled.main`
  ${Container}
  min-height: 1054px;
  background-color: ${(props) => props.theme.BgColor};
  padding: 0.5em;
  display: grid;
  gap: 0.5em;
`
const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 0.1em;
`
const Column = styled.section``

function Main() {
  return (
    <MainStyled>
      <Section>
        {/* Name with job */}
        <Profile />
        {/* Description */}
        <About />
      </Section>
      <Section>
        <Column>
          {/* Left Items */}

          {/* Education */}
          <Education />
          {/* Skills */}
          <Skills />
          {/* Contact */}
          <Contact />
        </Column>
        <Column>
          {/* Right Items */}

          {/* WorkExp */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* Contact (on mobile view)*/}
          {/* <Contact /> */}
        </Column>
      </Section>
    </MainStyled>
  )
}

export default Main
