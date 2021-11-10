import styled from "styled-components"

const ContactStyled = styled.div`
  a {
    color: ${(props) => props.theme.AcColor};

    span {
      font-size: 1.25rem;
    }
  }
`

function ContactTag({ link, icon }) {
  return (
    <ContactStyled>
      <a href={link} target="_blank" rel="noreferrer">
        <span>{icon}</span>
      </a>
    </ContactStyled>
  )
}

export default ContactTag
