import styled from "styled-components"

const WorkStyled = styled.div`
  display: grid;
  place-items: start start;
  grid-template-columns: auto 4fr;
  h2,
  h3 {
    text-align: right;
    padding-right: 1em;
  }
  h2 {
    font-weight: 600;
    font-size: 1rem;
  }
  h3 {
    font-size: 0.8rem;
  }
  p {
    padding-bottom: 0.25em;
    font-size: 0.8rem;
  }
  span {
    font-size: 0.65rem;
    font-weight: normal;
  }
  section {
    place-self: center start;
    max-width: 7ch;
    min-width: 7ch;
    padding-left: 1em;

    span {
      display: block;
      text-align: left;
    }
    h4 {
      font-size: 0.75rem;
      text-align: left;
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
      transform: translateX(0.125em);
      background-color: ${(props) => props.theme.accentColor};
      top: 0;
      left: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      height: 0.5em;
      width: 0.5em;
      top: 50%;
      left: 100%;
      transform: translate(-0.25em, -50%);
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

function Work({ time, duration, jobName, companyName, experienceGained }) {
  return (
    <WorkStyled>
      <div>
        <h2>{jobName}</h2>
        <h3>
          <span>at</span> {companyName}
        </h3>
        <p>{experienceGained}</p>
      </div>
      <section>
        <h4>{time}</h4>
        <h4>{duration}</h4>
      </section>
    </WorkStyled>
  )
}

export default Work
