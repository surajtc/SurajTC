import styled from "styled-components"

const EducationStyled = styled.div`
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
      background-color: ${(props) => props.theme.accentColor};
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
      border: 0.25em solid ${(props) => props.theme.accentColor};
      background-color: ${(props) => props.theme.backgroundColor};
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

function Education({ courseName, universityName, yearFrom, yearTo }) {
  return (
    <EducationStyled>
      <section>
        <h4>{yearFrom}</h4>
        <span>to</span>
        <h4>{yearTo}</h4>
      </section>
      <div>
        <p>{courseName}</p>
        <h3>{universityName}</h3>
      </div>
    </EducationStyled>
  )
}

export default Education
