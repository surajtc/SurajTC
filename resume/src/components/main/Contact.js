import styled from "styled-components"

import { H3, P2 } from "../styles/HTMLElements"

import SectionTitle from "./sub-components/SectionTitle"
import ContactTag from "./sub-components/ContactTag"
import { ContactIcon } from "./content/Icons"

import { ContactInfo } from "./content/Content"

const ContactStyled = styled.div`
  & > div {
    display: flex;
    gap: 1em;
    /* justify-content: center; */
  }
  & > P {
    width: 70%;
  }
`

function Contact() {
  return (
    <ContactStyled>
      <SectionTitle title="Contact" icon={ContactIcon} />
      <P2>{ContactInfo.message}</P2>
      <H3>{ContactInfo.email}</H3>

      <div>
        {Object.entries(ContactInfo.links).map(([key, value]) => {
          return <ContactTag key={key} link={value.link} icon={value.icon} />
        })}
      </div>
    </ContactStyled>
  )
}

export default Contact
