import styled from "styled-components"

import { H3 } from "../../styles/HTMLElements"

const TagStyle = styled.div`
  color: blue;
`

function SkillTag({ skill, icon }) {
  return (
    <TagStyle>
      <H3>
        <span>{icon}</span>
        {skill}
      </H3>
    </TagStyle>
  )
}

export default SkillTag
