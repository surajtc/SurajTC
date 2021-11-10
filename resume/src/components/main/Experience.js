import styled from "styled-components"

import SectionTitle from "./sub-components/SectionTitle"
import { ExperienceIcon } from "./content/Icons"
import { ExperienceInfo } from "./content/Content"
import { H3, P2 } from "../styles/HTMLElements"

const ExperienceStyled = styled.div``
const Fragment = styled.div`
  & > div > p > span {
    font-size: 0.75rem;
    font-weight: 400;
    padding-right: 0.5em;
  }
  & > section {
    display: flex;
    gap: 0.5em;
    padding: 0.25em 0;

    span {
      background-color: ${(props) => props.theme.AcColor};
      color: ${(props) => props.theme.BgColor};
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 0.75rem;
      padding: 0 0.5em;
      &:first-child {
        background-color: ${(props) => props.theme.FgColor};
        color: ${(props) => props.theme.BgColor};
      }
    }
  }

  & > p {
  }
`

function Experience() {
  return (
    <ExperienceStyled>
      <SectionTitle title="EXPERIENCE" icon={ExperienceIcon} />
      {Object.entries(ExperienceInfo).map(([key, experience]) => {
        return (
          <Fragment key={key}>
            <div>
              <H3>{experience.position}</H3>
              <P2>
                <span>at</span>
                {experience.company}
              </P2>
            </div>
            <section>
              <span>{experience.date}</span>
              <span>{experience.duration}</span>
            </section>
            <P2>{experience.description}</P2>
          </Fragment>
        )
      })}
    </ExperienceStyled>
  )
}

export default Experience
