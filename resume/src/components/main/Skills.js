import styled from "styled-components"

import { H3 } from "../styles/HTMLElements"

import SectionTitle from "./sub-components/SectionTitle"
import SkillTag from "./sub-components/SkillTag"

import { SkillsIcon } from "./content/Icons"
import { SkillsInfo, OtherSkillsInfo } from "./content/Content"

const SkillsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "core core"
    ". ."
    ". ."
    "other other";

  & > div:first-of-type {
    grid-area: core;
  }
  & > div:last-of-type {
    grid-area: other;
  }
`

const Fragment = styled.div`
  display: grid;
  gap: 0.125em;

  & > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    & > span {
      font-size: 1.25rem;
      background-color: ${(props) => props.theme.FgColor};
      color: ${(props) => props.theme.BgColor};
      display: grid;
      /* width: 1.25em;
      height: 1.25em; */
      padding: 0.2em;
      border-radius: 0.125em;
      place-items: center;
    }
  }
  &:last-child {
    & > div {
      justify-content: space-evenly;
    }
    H3 {
      text-align: center;
    }
  }
  padding: 0.5em 0.6em 0.5em 0;
`

function Skills() {
  return (
    <>
      <SectionTitle title="SKILLS" icon={SkillsIcon} />

      <SkillsStyled>
        {Object.entries(SkillsInfo).map(([key, value]) => {
          return (
            <Fragment key={key}>
              <H3>{value.Title}</H3>
              <div>
                {value.Tags.map((tag, key) => {
                  const skill = tag[0]
                  const icon = tag[1]
                  return <SkillTag key={key} skill={skill} icon={icon} />
                })}
              </div>
            </Fragment>
          )
        })}
        <Fragment>
          <H3>Other Skills</H3>
          <div>
            {OtherSkillsInfo.map((icon, key) => {
              return <span key={key}>{icon}</span>
            })}
          </div>
        </Fragment>
      </SkillsStyled>
    </>
  )
}

export default Skills
