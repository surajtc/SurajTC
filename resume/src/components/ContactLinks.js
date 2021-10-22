import { FaLinkedin, FaGithubAlt } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import styled from "styled-components"
import Contact from "./Contact"

const LinkDiv = styled.div`
  p {
    font-size: 0.75rem;
    font-weight: 600;
  }
  & > div {
    display: flex;
    gap: 1em;
    justify-content: start;
  }
`

function ContactLinks() {
  return (
    <LinkDiv>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel
        facilis tenetur.
      </p>
      <div>
        <Contact icon={<FaGithubAlt />} url="https://github.com/SurajTC" />
        <Contact
          icon={<FaLinkedin />}
          url="https://www.linkedin.com/in/suraj-t-c-30900920b/"
        />
        <Contact icon={<SiGmail />} url="google.com" />
      </div>
    </LinkDiv>
  )
}

export default ContactLinks
