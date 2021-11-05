import styled from "styled-components"

import SectionTitle from "./sub-components/SectionTitle"
import { ExperienceIcon } from "./content/Icons"

const ExperienceStyled = styled.div``

function Experience() {
  return (
    <ExperienceStyled>
      <SectionTitle title="Experience" icon={ExperienceIcon} />
    </ExperienceStyled>
  )
}

export default Experience
