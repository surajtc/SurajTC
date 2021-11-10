import styled from "styled-components"

import { H6 } from "../../styles/HTMLElements"

const TagStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content minmax(4ch, auto);
  /* grid-template-columns: auto auto;
  grid-auto-columns: max-content; */
  place-items: center;
  color: ${(props) => props.theme.BgColor};
  background-color: ${(props) => props.theme.AcColor};
  border-radius: 0.125em;
  overflow: hidden;

  & > H6 {
    padding: 0 0.25em;
  }
  & > span {
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    font-size: 0.875rem;
    justify-self: start;
    color: ${(props) => props.theme.BgColor};
    background-color: ${(props) => props.theme.FgColor};
  }
`

function SkillTag({ skill, icon }) {
  return (
    <TagStyle>
      <span>{icon}</span>
      <H6>{skill}</H6>
    </TagStyle>
  )
}

export default SkillTag
