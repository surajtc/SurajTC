import styled from "styled-components"

const ContactStyled = styled.div``

function ContactTag({ link, icon }) {
  return (
    <ContactStyled>
      <a href={link}>
        <span>{icon}</span>
      </a>
    </ContactStyled>
  )
}

export default ContactTag
