import styled from "styled-components"

const ContactTag = styled.div`
  height: 2.2rem;
  aspect-ratio: 1;
  /* background-color: ${(props) => props.theme.accentColor}; */
  display: grid;
  place-items: center;
  border-radius: 1rem;
  /* border: 0.125em solid ${(props) => props.theme.foregroundColor}; */
  a {
    color: ${(props) => props.theme.accentColor};
    display: block;
  }
  h4 {
    font-size: 1.5rem;
    padding-top: 0.05em;
    margin: 0;
  }
`

function Contact({ icon, url }) {
  return (
    <ContactTag>
      <a href={url} target="_blank">
        <h4>{icon}</h4>
      </a>
    </ContactTag>
  )
}

export default Contact
