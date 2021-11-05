import BodyHead from "./BodyHead"
import Education from "./Education"
import Skills from "./Skills"
import Work from "./Work"
import Projects from "./Projects"
import ContactLinks from "./ContactLinks"

import { Container } from "./styles/Container.styled"
import { Grid } from "./styles/Grid.styled"
import { Column } from "./styles/Column.styled"
import { BodyDiv, TitleDiv } from "./styles/MainDivs.styled"

import {
  FaUserGraduate,
  FaTools,
  FaAddressCard,
  FaUserTie,
  FaFileCode,
} from "react-icons/fa"

function Main() {
  const titleStyle = {
    placeSelf: "center center",
    textAlign: "center",
  }
  return (
    <Container>
      <Grid>
        <TitleDiv style={titleStyle}>
          <h1>Suraj T C</h1>
          <h3>{"< Programmer / Developer >"}</h3>
        </TitleDiv>
        <TitleDiv>
          <p>
            I am a Computer Science graduate from Maharaja Institute of
            Technology Mysore. Strong communication, coupled with vibrant
            analytical thinking skills with practical approach. I am seeking an
            opportunity to prove my skillsets in the area of Computer Science.
          </p>
        </TitleDiv>
      </Grid>
      <Grid>
        <Column>
          <BodyDiv>
            <BodyHead
              titleName="Education"
              iconComponent={<FaUserGraduate />}
            />
            <Education
              courseName="Bachelor of Engineering in Computer Science"
              universityName="Maharaja Institute of Technology Mysore"
              yearFrom="2017"
              yearTo="2021"
            />
          </BodyDiv>
          <BodyDiv>
            <BodyHead
              titleName="Technical Skills"
              iconComponent={<FaTools />}
            />
            <Skills />
          </BodyDiv>
          <BodyDiv>
            <BodyHead titleName="Contact" iconComponent={<FaAddressCard />} />
            <ContactLinks />
          </BodyDiv>
        </Column>
        <Column>
          <BodyDiv>
            <BodyHead titleName="Internship" iconComponent={<FaUserTie />} />

            {/* <h5>Machine Learining Intern</h5>
            <p>IC Solutions</p>
            <h5>October 2020</h5>
            <p>2 Months</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, eaque? Ab odit incidunt sed debitis assumenda
              praesentium similique repudiandae unde?
            </p> */}

            <Work
              time="October 2020"
              duration="2 Months"
              jobName="Machine Learning Intern"
              companyName="IC Solution, Bangalore"
              experienceGained="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quasi magni earum possimus quidem itaque eum sint
                repellat, natus atque deleniti, voluptates ut sunt totam neque.
                Eaque eum reiciendis tenetur!"
            />
          </BodyDiv>
          <BodyDiv>
            <BodyHead titleName="Projects" iconComponent={<FaFileCode />} />

            <Projects />
          </BodyDiv>
        </Column>
      </Grid>
    </Container>
  )
}

export default Main
