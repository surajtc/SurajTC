import styled from "styled-components"

export const TitleDiv = styled.div`
  h1 {
    color: ${(props) => props.theme.accentColor};
    font-size: 2.5rem;
  }
  h1,
  h3,
  p {
    font-weight: 600;
  }
  @media (max-width: 640px) {
    p {
      text-align: center;
    }
  }
`

export const BodyDiv = styled.div``
