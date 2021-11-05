import styled from "styled-components"

import { H1, H3 } from "../styles/HTMLElements"
import { ProfileInfo } from "./content/Content"

const ProfileStyled = styled.div``

function Profile() {
  return (
    <ProfileStyled>
      <H1>{ProfileInfo.Name}</H1>
      <H3>{ProfileInfo.Title}</H3>
    </ProfileStyled>
  )
}

export default Profile
