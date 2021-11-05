import styled from "styled-components"

import SectionTitle from "./sub-components/SectionTitle"
import { ProjectsIcon } from "./content/Icons"

const ProjectsStyled = styled.div``

function Projects() {
  return (
    <ProjectsStyled>
      <SectionTitle title="Projects" icon={ProjectsIcon} />
    </ProjectsStyled>
  )
}

export default Projects
