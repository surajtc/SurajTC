import styled from "styled-components"

import SectionTitle from "./sub-components/SectionTitle"
import { LinkIcon, ProjectsIcon } from "./content/Icons"
import { ProjectsInfo } from "./content/Content"
import { H3, P2 } from "../styles/HTMLElements"

const ProjectsStyled = styled.div``
const Fragment = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    padding-right: 2rem;
    & > H3 {
      position: relative;
      padding: 0.25em;
      margin-left: 0.75em;
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

    & > a {
      width: fit-content;
    }
  }
  & > section {
    display: flex;
    gap: 0.5em;
    padding: 0.25em 0;

    span {
      background-color: ${(props) => props.theme.FgColor};
      color: ${(props) => props.theme.BgColor};
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 0.75rem;
      padding: 0 0.5em;
    }
  }
`

function Projects() {
  return (
    <ProjectsStyled>
      <SectionTitle title="Projects" icon={ProjectsIcon} />
      {Object.entries(ProjectsInfo).map(([key, project]) => {
        return (
          <Fragment key={key}>
            <div>
              <H3>{project.title}</H3>
              <a href={project.link} target="_blank" rel="noreferrer">
                {LinkIcon}
              </a>
            </div>
            <section>
              {project.technology.map((technology, key) => {
                return <span key={key}>{technology}</span>
              })}
            </section>
            {Object.entries(project.description).map(([key, value]) => {
              return (
                <P2 key={key}>
                  <li>{value}</li>
                </P2>
              )
            })}
          </Fragment>
        )
      })}
    </ProjectsStyled>
  )
}

export default Projects
