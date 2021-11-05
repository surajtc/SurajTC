import styled from "styled-components"

import SectionTitle from "./sub-components/SectionTitle"
import { ContactIcon } from "./content/Icons"

const ContactStyled = styled.div``

function Contact() {
  return (
    <ContactStyled>
      <SectionTitle title="Contact" icon={ContactIcon} />
    </ContactStyled>
  )
}

export default Contact
