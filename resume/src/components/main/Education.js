import styled from "styled-components"

import { H3, H4, P2 } from "../styles/HTMLElements"

import SectionTitle from "./sub-components/SectionTitle"
import { EducationIcon } from "./content/Icons"

import { EducationInfo } from "./content/Content"

const EducationStyled = styled.div``

const Fragment = styled.div`
  display: grid;
  place-items: start start;
  grid-template-columns: auto 4fr;
  p,
  h3 {
    font-size: 1rem;
  }
  p {
    font-weight: 600;
    padding-bottom: 0.25em;
  }
  section {
    place-self: center end;
    max-width: 7ch;
    min-width: 7ch;
    padding-right: 1em;

    span {
      font-size: 0.65rem;
      display: block;
      text-align: right;
    }
    h4 {
      font-size: 0.75rem;
      text-align: right;
      font-weight: 600;
      /* background-color: green; */
    }
  }

  div {
    position: relative;
    height: 100%;
    /* width: 100%; */
    padding-left: 0.5em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 0.25em;
      transform: translateX(-0.125em);
      background-color: ${(props) => props.theme.AcColor};
      top: 0;
      right: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      height: 0.5em;
      width: 0.5em;
      top: 50%;
      right: 100%;
      transform: translate(0.25em, -50%);
      border-radius: 50%;
      border: 0.25em solid ${(props) => props.theme.AcColor};
      background-color: ${(props) => props.theme.BgColor};
    }
  }
  &:first-of-type {
    div::before {
      border-top-left-radius: 0.125em;
      border-top-right-radius: 0.125em;
    }
  }
  &:last-of-type {
    div::before {
      border-bottom-left-radius: 0.125em;
      border-bottom-right-radius: 0.125em;
    }
  }
`
// const outer = {
//   inner1: { info: "test1" },
//   inner2: { info: "test2" },
//   inner3: { info: "test3" },
// }
// {Object.entries(outer).map(([key, value]) => {
//     return (
//       <div key={key}>
//         <p> {value.info} </p>
//       </div>
//     )
//   })}

function Education() {
  return (
    <EducationStyled>
      <SectionTitle title="Education" icon={EducationIcon} />
      {Object.entries(EducationInfo).map(([key, education]) => {
        return (
          <Fragment key={key}>
            <section>
              <H4>{education.From}</H4>
              <span>to</span>
              <H4>{education.To}</H4>
            </section>
            <div>
              <P2>{education.Course}</P2>
              <H3>{education.College}</H3>
            </div>
          </Fragment>
        )
      })}
    </EducationStyled>
  )
}

export default Education
