import styled from "styled-components"

const TitleStyled = styled.div`
  display: flex;
  color: ${(props) => props.theme.BgColor};
  background-color: ${(props) => props.theme.AcColor};
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  p {
    font-size: 1.25rem;
    font-weight: 600;
  }
  span {
    font-size: 1.5rem;
    display: grid;
  }
`

function Title({ title, icon }) {
  return (
    <TitleStyled>
      <span>{icon}</span>
      <p>{title}</p>
    </TitleStyled>
  )
}

export default Title
