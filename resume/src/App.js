import { ThemeProvider, createGlobalStyle } from "styled-components"
import { useRef } from "react"
import { PDFExport } from "@progress/kendo-react-pdf"

import styled from "styled-components"
import Title from "./components/Title"
import {
  AcademicIcon,
  AftereffectsIcon,
  CertificateIcon,
  CppIcon,
  ExperienceIcon,
  FigmaIcon,
  FlaskIcon,
  GithubIcon,
  GitIcon,
  GmailIcon,
  JavaIcon,
  JavascriptIcon,
  JupyterIcon,
  LinkedinIcon,
  LinkIcon,
  LinuxIcon,
  MongodbIcon,
  NodeIcon,
  PersonalIcon,
  PhotoshopIcon,
  ProjectsIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  SkillsIcon,
  SqlIcon,
  VolunteerIcon,
} from "./components/Icons"

import SkillTag from "./components/SkillTag"
import SkillIcon from "./components/SkillIcon"

const Theme = {
  BodyColor: "#c8c8cc",

  BgColor: "#dbd9de",
  FgColor: "#2a2730",
  HlColor: "#A491D3",
  AcColor: "#6441a5",
}
// const Theme = {
//   BodyColor: "#E5E9F0",

//   BgColor: "#D8DEE9",
//   FgColor: "#2E3440",
//   HlColor: "#A491D3",
//   AcColor: "#6441a5",
// }
const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.FgColor};
    background-color: ${(props) => props.theme.BodyColor};
    font-family: 'Poppins', sans-serif;
  }
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
`
const Container = styled.main`
  width: auto;
  max-width: 816px;
  min-width: 320px;
  min-height: 1055px;
  max-height: 1055px;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${(props) => props.theme.BgColor};

  .about {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    place-items: center;
    h1 {
      text-align: center;
      color: ${(props) => props.theme.AcColor};
    }
    h3 {
      font-weight: 600;
    }
    p {
      font-weight: 500;
    }
  }
  .academic {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 0.125em 0.25em;
    h2 {
      font-size: 1rem;
      color: ${(props) => props.theme.AcColor};
      background-color: ${(props) => props.theme.BodyColor};
      width: 100%;
      text-align: center;
      border-radius: 0.25em;
    }
    p {
      font-weight: 500;
      background-color: ${(props) => props.theme.BodyColor};
      width: 100%;
      padding: 0 0.5em;
      border-radius: 0.25em;
    }
  }
  .experience {
    & > div {
      display: grid;
      grid-template-columns: 2fr 1fr;
      & > section {
        padding: 0 0.5em;

        & > p {
          font-weight: 500;
          span {
            font-size: 0.75rem;
            font-weight: 400;
          }
        }
      }
      & > div {
        display: flex;
        justify-content: end;
        align-items: flex-start;
        gap: 0.5em;
        p {
          font-size: 0.75rem;
          font-weight: 600;
          color: ${(props) => props.theme.BgColor};
          background-color: ${(props) => props.theme.FgColor};
          &:nth-of-type(even) {
            background-color: ${(props) => props.theme.AcColor};
          }
          padding: 0.125em 0.75em;
          border-radius: 0.75em;
        }
      }

      h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: ${(props) => props.theme.AcColor};
      }

      & > p {
        grid-column: 1 / 3;
        border-radius: 0.25em;
        padding: 0.5em;
        font-weight: 500;
        font-size: 0.875rem;
        background-color: ${(props) => props.theme.BodyColor};
        margin-top: 1em;
      }
    }
  }
  .skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: fit-content;
    gap: 1.5em;

    & > div > section {
      padding: 0.5em 0;
      & > P {
        padding-bottom: 0.25em;
        font-weight: 500;
      }
    }

    & > div:nth-child(1) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      & > section:nth-child(1) {
        grid-column: 1 / 3;
      }
      & > section:nth-child(3) {
        justify-self: end;
      }
    }
    & > div:nth-child(2) {
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(2, auto);

      & > section:nth-child(2) {
        grid-row: 1 / 3;
        grid-column: 2 / 3;
        & > div {
          display: grid;
          grid-template-columns: repeat(3, auto);
          gap: 0.5em 0;
          place-items: start;
        }
      }
    }

    .flex {
      display: flex;
      flex-flow: row wrap;
      gap: 0.5em;
    }
  }

  .projects {
    & > section {
      padding: 0.25em;
      & > section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          margin-left: 0.75em;
          padding-left: 0.25em;
          position: relative;
          font-size: 1.25rem;
          font-weight: 600;
          color: ${(props) => props.theme.AcColor};
          &::before {
            content: "";
            position: absolute;
            height: 0.65em;
            width: 0.65em;
            aspect-ratio: 1;
            border-radius: 0.75em;
            border: 0.175em solid ${(props) => props.theme.FgColor};
            top: 50%;
            transform: translateY(-50%);
            right: 100%;
            box-sizing: border-box;
          }
        }
        a {
          color: ${(props) => props.theme.AcColor};
          padding-right: 0.5em;
        }
      }
      & > div {
        display: flex;
        gap: 0.5em;
        padding: 0.5em 1em;
        span {
          font-size: 0.75rem;
          font-weight: 600;
          color: ${(props) => props.theme.BgColor};
          background-color: ${(props) => props.theme.FgColor};
          padding: 0.125em 0.75em;
          border-radius: 0.75em;
        }
      }
      & > p {
        border-radius: 0.25em;
        padding: 0.5em;
        font-weight: 500;
        font-size: 0.875rem;
        background-color: ${(props) => props.theme.BodyColor};
        margin-top: 0.5em;
        margin-left: 1em;

        ul {
          list-style-type: none;
          li {
            padding-left: 1em;
            position: relative;
            &::before {
              content: "";
              height: 0.45em;
              width: 0.45em;
              border-radius: 50%;
              background-color: ${(props) => props.theme.FgColor};
              position: absolute;
              top: 0.4em;
              left: 0.2em;
            }
          }
        }
      }
    }
  }
  .certificates {
    & > section {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0.125em 0.5em;

      & div > h3 {
        font-size: 1.125rem;
        font-weight: 600;
        position: relative;
        padding-left: 0.25em;
        margin-left: 0.25em;
        color: ${(props) => props.theme.AcColor};

        &::before {
          content: "";
          position: absolute;
          height: 0.375em;
          width: 0.375em;
          border-radius: 0.375em;
          background-color: ${(props) => props.theme.FgColor};

          top: 50%;
          transform: translateY(-50%);
          right: 100%;
        }
      }
      & div > p {
        font-weight: 500;
        margin-left: 0.75em;
        span {
          font-size: 0.75rem;
          font-weight: 400;
        }
      }
      & > span {
        font-size: 0.75rem;
        font-weight: 600;
        color: ${(props) => props.theme.BgColor};
        background-color: ${(props) => props.theme.FgColor};
        padding: 0.125em 0.75em;
        border-radius: 0.75em;
      }
    }
  }
  .volunteer {
    & > section {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0.125em 0.5em;

      & div > h3 {
        font-size: 1.125rem;
        font-weight: 600;
        position: relative;
        padding-left: 0.25em;
        margin-left: 0.25em;
        color: ${(props) => props.theme.AcColor};

        &::before {
          content: "";
          position: absolute;
          height: 0.375em;
          width: 0.375em;
          border-radius: 0.375em;
          background-color: ${(props) => props.theme.FgColor};

          top: 50%;
          transform: translateY(-50%);
          right: 100%;
        }
      }
      & div > p {
        font-weight: 500;
        margin-left: 0.75em;
        span {
          font-size: 0.75rem;
          font-weight: 400;
        }
      }
      & > div:nth-of-type(2) {
        display: flex;
        gap: 0.5em;
      }
      & > div > span {
        font-size: 0.75rem;
        font-weight: 600;
        color: ${(props) => props.theme.BgColor};
        background-color: ${(props) => props.theme.FgColor};
        &:nth-of-type(even) {
          background-color: ${(props) => props.theme.AcColor};
        }
        padding: 0.125em 0.75em;
        border-radius: 0.75em;
      }
    }
  }
  .personal {
    display: grid;
    grid-template-columns: repeat(3, auto);
    place-items: center;
    row-gap: 1em;
    & > section > p {
      font-weight: 500;
    }
    & > section:nth-of-type(1) {
      & > div {
        display: grid;
        border-radius: 0.25em;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.BodyColor};
        grid-template-columns: repeat(2, auto);
        overflow: hidden;
        margin: 0.125em 0;
        width: fit-content;
        h3 {
          min-width: 14ch;
          padding: 0.125em 0.5em;
          font-size: 0.75rem;
          font-weight: 700;
          background-color: ${(props) => props.theme.AcColor};
          color: ${(props) => props.theme.BgColor};
          width: 100%;
          text-align: right;
          justify-self: end;
        }
        p {
          min-width: 18ch;
          font-size: 0.75rem;
          padding: 0.125em 0.5em;
          font-weight: 600;
        }
      }
    }
    & > section:nth-of-type(2) {
      table {
        td {
          font-size: 0.75rem;
          padding: 0.125em 0.5em;
          font-weight: 600;
          margin: 0.1em;
          position: relative;
          background-color: ${(props) => props.theme.BodyColor};
          border-radius: 0.25em;
        }
        thead {
          td {
            color: ${(props) => props.theme.BgColor};
            background-color: ${(props) => props.theme.FgColor};
          }
          td:first-child {
            background-color: ${(props) => props.theme.BodyColor};
          }
        }
        tbody {
          td:first-child {
            color: ${(props) => props.theme.BgColor};
            background-color: ${(props) => props.theme.AcColor};
          }
        }
        .yes {
          &::before {
            content: "🗸";
            position: absolute;
            color: ${(props) => props.theme.AcColor};
            font-size: 1.125rem;
            top: 50%;

            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .no {
          &::before {
            content: "✗";
            position: absolute;
            color: ${(props) => props.theme.FgColor};
            font-size: 1rem;
            top: 50%;

            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
    & > section:nth-of-type(3) {
      & > div {
        padding: 1em 0 0 0;
        display: flex;
        gap: 1em;
      }
      h4 {
        font-weight: 500;
      }
    }
    & > section:nth-of-type(4) {
      grid-column: 1 / 4;
      justify-self: self-start;
      padding: 0 1em;
      p {
        text-align: left;
        padding-top: 0.25em;
      }
      h4 {
        font-weight: 400;
      }
    }
  }
`
const Content = styled.div`
  padding: 1em 0.5em;
`
function App() {
  const hide = {
    display: "none",
  }
  const pdfExportComponent = useRef(null)
  const handleExportWithComponent = (event) => {
    console.log("clicked")
    pdfExportComponent.current.save()
  }
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <button onClick={handleExportWithComponent} style={hide}>
        download pdf
      </button>
      <PDFExport ref={pdfExportComponent}>
        <Container>
          <Content>
            <div className="about">
              <div>
                <h1>Suraj T C</h1>
                <h3>{"<Programmer / Developer>"}</h3>
              </div>
              <p>
                I am a passionate student with Computer Science major, who is
                continuously seeking opportunities to learn new technologies and
                solve problems.
              </p>
            </div>
          </Content>
          <Title title="Academic Credencials" icon={AcademicIcon} />
          <Content>
            <div className="academic">
              <h2>Qualification</h2>
              <h2>Institution</h2>
              <h2>Year</h2>
              <h2>Percentage/Grade</h2>

              <p>B.E in Computer Science</p>
              <p>Maharaj Institute of Technology, Mysore</p>
              <p>2021</p>
              <p>7.75 CGPA</p>

              <p>II PUC / 12th Grade</p>
              <p>Sadvidya Composite PU College, Mysore</p>
              <p>2017</p>
              <p>79.83%</p>

              <p>SSLC / 10th Grade</p>
              <p>JSS Highschool, Mysore</p>
              <p>2015</p>
              <p>85.60%</p>
            </div>
          </Content>
          <Title title="Experience" icon={ExperienceIcon} />
          <Content>
            <div className="experience">
              <div>
                <section>
                  <h2>Machine Learning Intern</h2>
                  <p>
                    <span>at</span> IC Solutions, Bengaluru
                  </p>
                </section>
                <div>
                  <p>September 2020</p>
                  <p>2 Months</p>
                </div>
                <p>
                  This internship gave me an opportunity to learn Python and
                  Machine Learning. Worked on Python libraries used for Data
                  Processing and Visualization. Built some Regression models
                  from scratch and exposed to plenty of Regression and
                  Classification algorithms.
                </p>
              </div>
            </div>
          </Content>
          <Title title="Skills" icon={SkillsIcon} />
          <Content>
            <div className="skills">
              <div>
                <section>
                  <p>Core Programming Language</p>
                  <div className="flex">
                    <SkillTag skill="Python" icon={PythonIcon} />
                    <SkillTag skill="Javascript" icon={JavascriptIcon} />
                    <SkillTag skill="C++" icon={CppIcon} />
                    <SkillTag skill="Java" icon={JavaIcon} />
                  </div>
                </section>
                <section>
                  <p>Database Systems</p>
                  <div className="flex">
                    <SkillTag skill="SQL" icon={SqlIcon} />
                    <SkillTag skill="MongoDB" icon={MongodbIcon} />
                  </div>
                </section>
                <section>
                  <p>Version Control</p>
                  <div className="flex">
                    <SkillTag skill="Git" icon={GitIcon} />
                    <SkillTag skill="GitHub" icon={GithubIcon} />
                  </div>
                </section>
              </div>
              <div>
                <section>
                  <p>Frontend</p>
                  <div className="flex">
                    <SkillTag skill="Sass" icon={SassIcon} />
                    <SkillTag skill="React" icon={ReactIcon} />
                  </div>
                </section>

                <section>
                  <p>Other Tools / Skills</p>
                  <div>
                    <SkillIcon icon={LinuxIcon} />
                    <SkillIcon icon={FigmaIcon} />
                    <SkillIcon icon={JupyterIcon} />
                    <SkillIcon icon={PhotoshopIcon} />
                    <SkillIcon icon={AftereffectsIcon} />
                  </div>
                </section>
                <section>
                  <p>Backend</p>
                  <div className="flex">
                    <SkillTag skill="Flask" icon={FlaskIcon} />
                    <SkillTag skill="Node" icon={NodeIcon} />
                  </div>
                </section>
              </div>
            </div>
          </Content>
          <Title title="Projects" icon={ProjectsIcon} />
          <Content>
            <div className="projects">
              <section>
                <section>
                  <h2>COVID-19 Detection using Deep Learning</h2>
                  <a
                    href="https://github.com/SurajTC/FYP-Covid19-Detection-from-Chest-Xray"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {LinkIcon}
                  </a>
                </section>
                <div>
                  <span>Tensorflow</span>
                  <span>Flask</span>
                  <span>SASS</span>
                  <span>Javascript</span>
                </div>
                <p>
                  <ul>
                    <li>
                      Designed and developed a fully functional web application
                      suitable to be used by radiologists under a conventional
                      x-ray imaging center.
                    </li>
                    <li>
                      Designed a Convolutional Neural Network model that
                      differentiates healthy and infected chest x rays.
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <section>
                  <h2>Vocabulary Builder</h2>
                  <a
                    href="https://github.com/SurajTC/Vocabulary-Builder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {LinkIcon}
                  </a>
                </section>
                <div>
                  <span>Javascript</span>
                  <span>SASS</span>
                </div>
                <p>
                  <ul>
                    <li>
                      Built a static vocabulary website which helps students to
                      learn new English words using the Vocabulary Flashcards.
                    </li>
                  </ul>
                </p>
              </section>
              <Content></Content>
            </div>
          </Content>
        </Container>
        <Container>
          <Content>
            <div className="projects">
              <section>
                <section>
                  <h2>Automobile Price Prediction</h2>
                  <a
                    href="https://github.com/SurajTC/Internship-Assignment"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {LinkIcon}
                  </a>
                </section>
                <div>
                  <span>Tensorflow</span>
                  <span>Python</span>
                </div>
                <p>
                  <ul>
                    <li>
                      Did Exploratory Data Analysis on Automobile Dataset and
                      extracted necessary information required to train the
                      Machine Learning model.
                    </li>
                    <li>
                      Trained multiple Machine Learning models and compared and
                      contrasted each of them to determine the best fitting one.
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <section>
                  <h2>Handwritten Digit Recognition</h2>
                  <a
                    href="https://github.com/SurajTC/Machine-Learning/tree/main/Handwritten%20Digit%20Recognition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {LinkIcon}
                  </a>
                </section>
                <div>
                  <span>Tensorflow</span>
                  <span>Python</span>
                </div>
                <p>
                  <ul>
                    <li>
                      Worked on Deep Learning algorithm trained using MNIST
                      Dataset, which can recognize handwritten digits with a
                      high accuracy.
                    </li>
                  </ul>
                </p>
              </section>
            </div>
          </Content>
          <Title title="Additional Certification" icon={CertificateIcon} />
          <Content>
            <div className="certificates">
              <section>
                <div>
                  <h3>Machine Learning Specialization</h3>
                  <p>
                    <span>by</span> University of Washington
                  </p>
                </div>
                <span>4 courses</span>
              </section>
              <section>
                <div>
                  <h3>Python for Everybody</h3>
                  <p>
                    <span>by</span> University of Michigan
                  </p>
                </div>
                <span>5 courses</span>
              </section>
              <section>
                <div>
                  <h3>Visual Elements of User Interface Design</h3>
                  <p>
                    <span>by</span> California Institute of the Arts (CalArts)
                  </p>
                </div>
              </section>
            </div>
          </Content>
          <Title title="Volunteer Experience" icon={VolunteerIcon} />
          <Content>
            <div className="volunteer">
              <section>
                <div>
                  <h3>Coordinator / Member</h3>
                  <p>
                    <span>at</span> Kirunage Foundation{" (NGO)"}, Bengaluru
                  </p>
                </div>
                <div>
                  <span>December 2019</span>
                  <span>2 Months</span>
                </div>
              </section>
              <section>
                <div>
                  <h3>Volunteer</h3>
                  <p>
                    <span>at</span> COVID-19 Vaccine Drive - PHC
                  </p>
                </div>
                <div>
                  <span>June 2021</span>
                  <span>1 Week</span>
                </div>
              </section>
            </div>
          </Content>
          <Title title="Personal Details" icon={PersonalIcon} />
          <Content>
            <div className="personal">
              <section>
                <p>Bio-Data</p>
                <div>
                  <h3>DOB</h3>
                  <p>04 July 1999</p>
                </div>
                <div>
                  <h3>Gender</h3>
                  <p>Male</p>
                </div>
                <div>
                  <h3>Nationality</h3>
                  <p>Indian</p>
                </div>
                <div>
                  <h3>Father's Name</h3>
                  <p>Chandrashekhar T M</p>
                </div>
                <div>
                  <h3>Mother's Name</h3>
                  <p>Rajalakshmi J</p>
                </div>

                {/* <div>
                  <h3>Passport No.</h3>
                  <p>U9753900</p>
                </div> */}
              </section>
              <section>
                <p>Language proficiency</p>
                <table>
                  <thead>
                    <tr>
                      <td></td>
                      <td>Speak</td>
                      <td>Read</td>
                      <td>Write</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>English</td>
                      <td className="yes"></td>
                      <td className="yes"></td>
                      <td className="yes"></td>
                    </tr>
                    <tr>
                      <td>Hindi</td>
                      <td className="yes"></td>
                      <td className="yes"></td>
                      <td className="yes"></td>
                    </tr>
                    <tr>
                      <td>Kannada</td>
                      <td className="yes"></td>
                      <td className="yes"></td>
                      <td className="yes"></td>
                    </tr>
                    <tr>
                      <td>Tamil</td>
                      <td className="yes"></td>
                      <td className="no"></td>
                      <td className="no"></td>
                    </tr>
                  </tbody>
                </table>
              </section>

              {/* <p>Language proficiency RWS</p> */}

              <section>
                <p>Contact</p>
                {/* <h4>
                  Hey, Have a cool idea to share?
                  <br /> Let's connect!
                </h4> */}
                <h4>Phone: +91 7676272680</h4>
                <h4>Email: surzavon@gmail.com</h4>
                <div>
                  <a
                    href="mailto:[surzavon@gmail.com]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <SkillIcon icon={GmailIcon} />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SurajTC"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <SkillIcon icon={GithubIcon} />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suraj-t-c-30900920b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <SkillIcon icon={LinkedinIcon} />
                    </span>
                  </a>
                </div>
              </section>
              <section>
                <p>Permanent Address :</p>
                <h4>
                  No. 869, Primary School Road, Devaraj Mohalla, Mysuru-570024,
                  Karnataka, India
                </h4>
                {/* <p>
                  Passport No. : U9753900 &emsp;&emsp;Expiry Date : 15/04/2031
                </p> */}
              </section>
            </div>
          </Content>
        </Container>
      </PDFExport>
    </ThemeProvider>
  )
}

export default App
