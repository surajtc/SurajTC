import styled from "styled-components"

import SkillTag from "./SkillTag"

import {
  SiPython,
  SiJava,
  SiJavascript,
  SiSass,
  SiReact,
  SiSqlite,
  SiCplusplus,
  SiFlask,
  SiDjango,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiFigma,
  SiAdobeaftereffects,
  SiJupyter,
  SiArchlinux,
} from "react-icons/si"

const CoreDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5em;
  justify-content: center;
  padding-bottom: 1em;

  @media (max-width: 640px) {
    justify-content: space-around;
  }
`
const WebDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 1em;
  div {
    display: flex;
    flex-flow: row wrap;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
  }
`

const H5Styled = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  padding: 0.25em 0;
`

const IconTag = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  div {
    font-size: 1.25rem;
    background-color: ${(props) => props.theme.foregroundColor};
    color: ${(props) => props.theme.backgroundColor};
    height: 1.7rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border-radius: 0.25em;
  }
`

function Skills() {
  return (
    <>
      <H5Styled>Core Programming Language</H5Styled>
      {/* <p>Python, Java, C++</p> */}
      <CoreDiv>
        <SkillTag icon={<SiPython />} name="Python" />
        <SkillTag icon={<SiJava />} name="Java" />
        <SkillTag icon={<SiCplusplus />} name="C++" />
      </CoreDiv>

      <WebDiv>
        <H5Styled>Frontend</H5Styled>
        <H5Styled>Backend</H5Styled>
        {/* <p>Javascript, CSS/SASS, ReactJs</p> */}
        <div>
          <SkillTag icon={<SiJavascript />} name="Javascript" />
          <SkillTag icon={<SiSass />} name="Sass" />
          <SkillTag icon={<SiReact />} name="React" />
        </div>
        {/* <p>Flask, Django, NodeJS</p> */}
        <div>
          <SkillTag icon={<SiFlask />} name="Flask" />
          <SkillTag icon={<SiDjango />} name="Django" />
          <SkillTag icon={<SiNodedotjs />} name="Node" />
        </div>
      </WebDiv>
      <WebDiv>
        <H5Styled>DBMS</H5Styled>
        <H5Styled>VCS</H5Styled>
        {/* <p>SQL(MySQL), MongoDB</p> */}
        <div>
          <SkillTag icon={<SiSqlite />} name="SQL" />
          <SkillTag icon={<SiMongodb />} name="MongoDB" />
        </div>
        {/* <p>Git, GitHub</p> */}
        <div>
          <SkillTag icon={<SiGit />} name="Git" />
          <SkillTag icon={<SiGithub />} name="GitHub" />
        </div>
      </WebDiv>
      <H5Styled>Other Tools</H5Styled>
      {/* <p>Photoshop, Figma, AfterEffects, JupyterNotebook, Linux</p> */}
      <IconTag>
        <div>
          <SiAdobephotoshop />
        </div>
        <div>
          <SiFigma />
        </div>
        <div>
          <SiAdobeaftereffects />
        </div>
        <div>
          <SiJupyter />
        </div>
        <div>
          <SiArchlinux />
        </div>
      </IconTag>
    </>
  )
}

export default Skills
