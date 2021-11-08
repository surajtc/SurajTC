import styled from "styled-components"

import { H3 } from "../styles/HTMLElements"

import SectionTitle from "./sub-components/SectionTitle"
import SkillTag from "./sub-components/SkillTag"

import { SkillsIcon } from "./content/Icons"
import { SkillsInfo, OtherSkillsInfo } from "./content/Content"

const SkillsStyled = styled.div``

const Fragment = styled.div``

function Skills() {
  return (
    <SkillsStyled>
      <SectionTitle title="Skills" icon={SkillsIcon} />
      {Object.entries(SkillsInfo).map(([key, value]) => {
        return (
          <Fragment key={key}>
            <H3>{value.Title}</H3>
            {value.Tags.map((tag, key) => {
              const skill = tag[0]
              const icon = tag[1]
              return <SkillTag key={key} skill={skill} icon={icon} />
            })}
          </Fragment>
        )
      })}
      <Fragment>
        <H3>Other Skills</H3>
        {OtherSkillsInfo.map((icon, key) => {
          return <span key={key}>{icon}</span>
        })}
      </Fragment>
    </SkillsStyled>
  )
}

export default Skills
