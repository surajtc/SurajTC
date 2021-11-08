import styled from "styled-components"

import SectionTitle from "./sub-components/SectionTitle"
import { ProjectsIcon } from "./content/Icons"
import { ProjectsInfo } from "./content/Content"

const ProjectsStyled = styled.div``
const Fragment = styled.div``

function Projects() {
  return (
    <ProjectsStyled>
      <SectionTitle title="Projects" icon={ProjectsIcon} />
      {Object.entries(ProjectsInfo).map(([key, project]) => {
        return (
          <Fragment key={key}>
            <a href={project.link}>link</a>
            <p>{project.title}</p>
            {project.technology.map((technology, key) => {
              return <p key={key}>{technology}</p>
            })}
            {Object.entries(project.description).map(([key, value]) => {
              return <li key={key}>{value}</li>
            })}
          </Fragment>
        )
      })}
    </ProjectsStyled>
  )
}

export default Projects
