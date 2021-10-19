import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  gap: 0.5em;

  padding: 0.5em 1em;

  @media (min-width: 640px) {
    grid-template-columns: 2fr 3fr;
  }
`
