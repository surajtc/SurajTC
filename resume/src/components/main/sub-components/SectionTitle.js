import { H2, IconSpan } from "../../styles/HTMLElements"

function SectionTitle({ title, icon }) {
  return (
    <H2>
      <IconSpan>{icon}</IconSpan>
      {title}
    </H2>
  )
}

export default SectionTitle
