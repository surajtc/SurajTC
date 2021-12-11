import styled from "styled-components"

const TagStyled = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  place-items: center;
  border-radius: 0.25em;
  overflow: hidden;
  background-color: pink;
  span {
    color: ${(props) => props.theme.BgColor};
    background-color: ${(props) => props.theme.FgColor};
    display: grid;
    font-size: 1.125rem;
    padding: 0.125em;
    place-self: start;
  }
  p {
    color: ${(props) => props.theme.BgColor};
    background-color: ${(props) => props.theme.AcColor};
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0 0.5em;
    display: grid;
    height: 100%;
    place-items: center;
  }
`

function SkillTag({ skill, icon }) {
  return (
    <TagStyled>
      <span>{icon}</span>
      <p>{skill}</p>
    </TagStyled>
  )
}

export default SkillTag
