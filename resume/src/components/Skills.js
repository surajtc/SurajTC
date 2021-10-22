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
  flex-flow: row wrap;
  gap: 0.5em;
  /* justify-content: center; */
  padding-bottom: 0.5em;

  /* @media (max-width: 640px) {
    justify-content: center;
  } */
`
const WebDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  place-items: center start;
  padding-bottom: 0.5em;
  /* div {
    display: flex;
    flex-flow: row wrap;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
  } */
  & > div {
    display: flex;
    flex-flow: row wrap;
    gap: 0.5em;
    /* justify-content: center;
    align-items: center; */
  }
  /* @media (max-width: 640px) {
    place-items: center;
    & > div {
      justify-content: center;
      align-items: center;
    }
  } */
`

const H5Styled = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  /* text-align: center; */
  padding: 0.25em 0;
  /* @media (max-width: 640px) {
    text-align: center;
  } */
`

const IconTag = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5em;
  justify-content: start;
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
  /* @media (max-width: 640px) {
    justify-content: space-evenly;
  } */
`

function Skills() {
  return (
    <>
      <H5Styled>Core Programming Language</H5Styled>
      <CoreDiv>
        <SkillTag icon={<SiPython />} name="Python" />
        <SkillTag icon={<SiJava />} name="Java" />
        <SkillTag icon={<SiCplusplus />} name="C++" />
        <SkillTag icon={<SiJavascript />} name="Javascript" />
      </CoreDiv>
      {/* <H5Styled>Frontend</H5Styled>
      <CoreDiv>
        <SkillTag icon={<SiJavascript />} name="Javascript" />
        <SkillTag icon={<SiSass />} name="Sass" />
        <SkillTag icon={<SiReact />} name="React" />
      </CoreDiv>
      <H5Styled>Backend</H5Styled>
      <CoreDiv>
        <SkillTag icon={<SiFlask />} name="Flask" />
        <SkillTag icon={<SiDjango />} name="Django" />
        <SkillTag icon={<SiNodedotjs />} name="Node" />
      </CoreDiv> */}
      <WebDiv>
        <H5Styled>Frontend</H5Styled>
        <H5Styled>Backend</H5Styled>
        <div>
          <SkillTag icon={<SiSass />} name="Sass" />
          <SkillTag icon={<SiReact />} name="React" />
        </div>
        <div>
          <SkillTag icon={<SiFlask />} name="Flask" />
          <SkillTag icon={<SiNodedotjs />} name="Node" />
        </div>
      </WebDiv>
      <WebDiv>
        <H5Styled>DBMS</H5Styled>
        <H5Styled>Version Control</H5Styled>
        <div>
          <SkillTag icon={<SiSqlite />} name="SQL" />
          <SkillTag icon={<SiMongodb />} name="MongoDB" />
        </div>
        <div>
          <SkillTag icon={<SiGit />} name="Git" />
          <SkillTag icon={<SiGithub />} name="GitHub" />
        </div>
      </WebDiv>
      <H5Styled>Other Tools</H5Styled>
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
