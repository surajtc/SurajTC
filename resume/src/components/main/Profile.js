import styled from "styled-components"

import { H1, H5 } from "../styles/HTMLElements"
import { ProfileInfo } from "./content/Content"

const ProfileStyled = styled.div`
  display: grid;
  place-items: center;
`

function Profile() {
  return (
    <ProfileStyled>
      <H1>{ProfileInfo.Name}</H1>
      <H5>{ProfileInfo.Title}</H5>
    </ProfileStyled>
  )
}

export default Profile
