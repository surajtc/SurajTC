import styled from "styled-components"

export const Container = styled.div`
  width: auto;
  max-width: 1160px;
  min-width: 320px;
  margin: 0 auto;

  background-color: ${(props) => props.theme.backgroundColor};
  /* border-left: 0.1em solid;
  border-right: 0.1em solid; */
`
