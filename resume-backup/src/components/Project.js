import styled from "styled-components"

const ProjectDiv = styled.div`
  & > h2 {
    position: relative;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.25em;
    margin-left: 0.75em;
    color: ${(props) => props.theme.accentColor};
    &::before {
      content: "";
      position: absolute;
      height: 0.75em;
      width: 0.75em;
      aspect-ratio: 1;
      border-radius: 0.75em;
      border: 0.2em solid ${(props) => props.theme.foregroundColor};
      top: 50%;
      transform: translateY(-50%);
      right: 100%;
      box-sizing: border-box;
    }
  }
  & > div {
    display: flex;
    flex-flow: row wrap;
    gap: 0.5em;
    padding: 0.25em 0.75em;
    span {
      background-color: green;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0 0.5em;
      border-radius: 0.75rem;
      color: ${(props) => props.theme.backgroundColor};
      background-color: ${(props) => props.theme.foregroundColor};
    }
  }
  & > p {
    font-weight: 600;
    font-size: 0.75rem;
    padding: 0.25em 0;
  }
`

function Project({ name, techStack, description }) {
  const stack = techStack.map((tech, index) => <span key={index}>{tech}</span>)
  return (
    <ProjectDiv>
      <h2>{name}</h2>
      <div>{stack}</div>
      <p>{description}</p>
    </ProjectDiv>
  )
}

export default Project
