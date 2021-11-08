import styled from "styled-components"

import { P2 } from "../styles/HTMLElements"

import SectionTitle from "./sub-components/SectionTitle"
import ContactTag from "./sub-components/ContactTag"
import { ContactIcon } from "./content/Icons"

import { ContactInfo } from "./content/Content"

const ContactStyled = styled.div``

function Contact() {
  return (
    <ContactStyled>
      <SectionTitle title="Contact" icon={ContactIcon} />
      <P2>{ContactInfo.message}</P2>
      <div>
        {Object.entries(ContactInfo.links).map(([key, value]) => {
          return <ContactTag key={key} link={value.link} icon={value.icon} />
        })}
      </div>
    </ContactStyled>
  )
}

export default Contact
