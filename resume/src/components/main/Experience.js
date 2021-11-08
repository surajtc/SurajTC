import styled from "styled-components"

import SectionTitle from "./sub-components/SectionTitle"
import { ExperienceIcon } from "./content/Icons"
import { ExperienceInfo } from "./content/Content"

const ExperienceStyled = styled.div``
const Fragment = styled.div``

function Experience() {
  return (
    <ExperienceStyled>
      <SectionTitle title="Experience" icon={ExperienceIcon} />
      {Object.entries(ExperienceInfo).map(([key, experience]) => {
        return (
          <Fragment key={key}>
            <p>{experience.position}</p>
            <span>at</span>
            <p>{experience.company}</p>
            {experience.date}
            {experience.duration}
            {experience.description}
          </Fragment>
        )
      })}
    </ExperienceStyled>
  )
}

export default Experience
