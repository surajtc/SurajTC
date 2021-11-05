import styled from "styled-components"

const TagWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25em;
  height: 1.7em;
  color: ${(props) => props.theme.foregroundColor};
  /* background-color: ${(props) => props.theme.accentColor}; */
  /* border: 0.1em solid ${(props) => props.theme.accentColor}; */
  background-color: ${(props) => props.theme.accentColor};

  /* border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em; */
  border-radius: 0.25em;
  overflow: hidden;
  div {
    font-size: 1.25rem;
    background-color: ${(props) => props.theme.foregroundColor};
    color: ${(props) => props.theme.backgroundColor};
    height: 100%;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
  }
  p {
    /* min-width: 10ch; */
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme.backgroundColor};
    /* padding: 0 0.25em; */
    padding-right: 0.5em;
  }
`
function SkillTag({ icon, name }) {
  return (
    <TagWrap>
      <div>{icon}</div>
      <p>{name}</p>
    </TagWrap>
  )
}

export default SkillTag
