import styled from "styled-components"

import { H3, H6, P2 } from "../styles/HTMLElements"

import SectionTitle from "./sub-components/SectionTitle"
import { EducationIcon } from "./content/Icons"

import { EducationInfo } from "./content/Content"

const EducationStyled = styled.div``

const Fragment = styled.div`
  display: grid;
  place-items: start start;
  /* grid-template-columns: 1fr 4fr; */
  grid-template-columns: 20% 80%;

  p {
    padding-bottom: 0.25em;
  }
  section {
    place-self: center end;
    max-width: 7ch;
    min-width: 7ch;
    padding-right: 1em;

    span {
      font-size: 0.75rem;
      font-weight: 400;
      display: block;
      text-align: right;
    }
    H6 {
      text-align: right;

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

    align-items: flex-start;
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
      <SectionTitle title="EDUCATION" icon={EducationIcon} />
      {Object.entries(EducationInfo).map(([key, education]) => {
        return (
          <Fragment key={key}>
            <section>
              <H6>{education.From}</H6>
              <span>to</span>
              <H6>{education.To}</H6>
            </section>
            <div>
              <H3>{education.Course}</H3>
              <P2>{education.College}</P2>
            </div>
          </Fragment>
        )
      })}
    </EducationStyled>
  )
}

export default Education
