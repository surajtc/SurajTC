import styled from "styled-components"

const H2Styled = styled.h2`
  display: flex;
  gap: 0.25em;
  span:nth-child(1) {
    font-size: 1.25rem;
    align-self: center;
  }
  /* @media (max-width: 640px) {
    justify-content: center;
    align-items: center;
  } */
`

function BodyHead({ titleName, iconComponent }) {
  return (
    <H2Styled>
      <span>{iconComponent}</span>
      <span>{titleName}</span>
    </H2Styled>
  )
}

export default BodyHead
