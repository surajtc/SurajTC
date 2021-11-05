import styled from "styled-components"

const WorkStyled = styled.div`
  div {
    padding: 0.25em 0;
    h2 {
      font-size: 1rem;
      font-weight: 600;
    }
    h3 {
      font-size: 1rem;
      span {
        font-weight: normal;
      }
    }
  }

  section {
    display: flex;
    gap: 0.5em;
    padding: 0.25em 0;

    span {
      background-color: ${(props) => props.theme.accentColor};
      color: ${(props) => props.theme.backgroundColor};
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 0.75rem;
      padding: 0 0.5em;
      &:first-child {
        background-color: ${(props) => props.theme.foregroundColor};
        color: ${(props) => props.theme.backgroundColor};
      }
    }
  }
  & > p {
    font-size: 0.75rem;
    font-weight: 600;
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
      </div>
      <section>
        <span>{time}</span>
        <span>{duration}</span>
      </section>
      <p>{experienceGained}</p>
    </WorkStyled>
  )
}

export default Work
