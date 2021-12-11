import styled from "styled-components"

const IconStyled = styled.div`
  display: inline-block;

  span {
    display: grid;
    place-items: center;
    color: ${(props) => props.theme.BgColor};
    background-color: ${(props) => props.theme.FgColor};
    font-size: 1.5rem;
    padding: 0.125em;
    border-radius: 0.25rem;
  }
`
function SkillIcon({ icon }) {
  return (
    <IconStyled>
      <span>{icon}</span>
    </IconStyled>
  )
}

export default SkillIcon
