import { Container } from "./styles/Container.styled"
import { Grid } from "./styles/Grid.styled"
import { Column } from "./styles/Column.styled"

function Main({ theme }) {
  const jobProfile = "< Programmer / Developer >"
  return (
    <Container theme={theme}>
      <Grid>
        <Column theme={theme}>
          <div>
            <h1>Suraj T C</h1>
            <h3>{jobProfile}</h3>
          </div>
          <div>
            <h2>Education</h2>
            <div>
              <p>Bachelor of Engineering in Computer Science</p>
              <h5>Maharaj Institute of Technology Mysore</h5>
              <h5>2017 - 2021</h5>
            </div>
          </div>
          <div>
            <h2>Technical Skills</h2>
            <h5>Core Programming Language</h5>
            <p>Python, Java, C++</p>
            <h5>Frontend</h5>
            <p>Javascript, CSS/SASS, ReactJs</p>
            <h5>Backend</h5>
            <p>Flask, Django, NodeJS</p>
            <h5>Database Mangement Systems</h5>
            <p>SQL(MySQL), MongoDB</p>
            <h5>Version Control Systems</h5>
            <p>Git, GitHub</p>
            <h5>Other Tools</h5>
            <p>Photoshop, Figma, AfterEffects, JupyterNotebook, Linux</p>
          </div>
          <div>
            <h2>Contact</h2>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
        </Column>
        <Column theme={theme}>
          <div>
            <h4>
              I am a Computer Science graduate from Maharaja Institute of
              Technology Mysore. Strong communication, coupled with vibrant
              analytical thinking skills with practical approach. I am seeking
              an opportunity to prove my skillsets in the area of Computer
              Science.
            </h4>
          </div>
          <div>
            <h2>Internship</h2>
            <h5>Machine Learining Intern</h5>
            <p>IC Solutions</p>
            <h5>October 2020</h5>
            <p>2 Months</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, eaque? Ab odit incidunt sed debitis assumenda
              praesentium similique repudiandae unde?
            </p>
          </div>
          <div>
            <h2>Projects</h2>
            <div>
              <h5>* Covid 19 Detection using Deep Learning</h5>
              <h5>Python, Flask, SASS, JavaScript</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quasi magni earum possimus quidem itaque eum sint
                repellat, natus atque deleniti, voluptates ut sunt totam neque.
                Eaque eum reiciendis tenetur!
              </p>
            </div>
            <div>
              <h5>* Automobile Price Prediction</h5>
              <h5>Python, Tensorflow</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quasi magni earum possimus quidem itaque eum sint
                repellat, natus atque deleniti, voluptates ut sunt totam neque.
                Eaque eum reiciendis tenetur!
              </p>
            </div>
            <div>
              <h5>* Vocabulary Builder</h5>
              <h5>Javascript, SASS</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quasi magni earum possimus quidem itaque eum sint
                repellat, natus atque deleniti, voluptates ut sunt totam neque.
                Eaque eum reiciendis tenetur!
              </p>
            </div>
          </div>
        </Column>
      </Grid>
    </Container>
  )
}

export default Main
