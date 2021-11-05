import { H2 } from "../../styles/HTMLElements"

function SectionTitle({ title, icon }) {
  return (
    <H2>
      <span>{icon}</span>
      {title}
    </H2>
  )
}

export default SectionTitle
