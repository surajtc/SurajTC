import styled from "styled-components"

import SectionTitle from "./sub-components/SectionTitle"
import { SkillsIcon } from "./content/Icons"

const SkillsStyled = styled.div``

function Skills() {
  return (
    <SkillsStyled>
      <SectionTitle title="Skills" icon={SkillsIcon} />
    </SkillsStyled>
  )
}

export default Skills
