import {
  PythonIcon,
  JavaIcon,
  CppIcon,
  JavascriptIcon,
  SassIcon,
  ReactIcon,
  FlaskIcon,
  NodeIcon,
  SqlIcon,
  MongodbIcon,
  GitIcon,
  GithubIcon,
  JupyterIcon,
  PhotoshopIcon,
  AftereffectsIcon,
  FigmaIcon,
  LinuxIcon,
} from "./Icons"

import { LinkedinIcon, GmailIcon } from "./Icons"

export const ProfileInfo = {
  Name: "Suraj T C",
  Title: "< Programmer / Developer >",
  Description:
    "I'm a passionate computer science major, who is continuously seeking opportunities to learn new technologies and solve problems.",
}
export const EducationInfo = {
  // PUC: {
  //   Course: "Pre Universtiy Course",
  //   College: "Sadvidya Composite PU College",
  //   From: "2015",
  //   To: "2017",
  // },
  UnderGraduation: {
    Course: "Bachelor of Engineering in Computer Science",
    College: "Maharaja Institute of Technology Mysore",
    From: "2017",
    To: "2021",
  },
}
export const SkillsInfo = {
  Core: {
    Title: "Core Programming Language",
    Tags: [
      ["Python", PythonIcon],
      ["Java", JavaIcon],
      ["C++", CppIcon],
      ["Javascript", JavascriptIcon],
    ],
  },
  Forntend: {
    Title: "Frontend",
    Tags: [
      ["Sass", SassIcon],
      ["React", ReactIcon],
    ],
  },
  Backend: {
    Title: "Backend",
    Tags: [
      ["Flask", FlaskIcon],
      ["Node", NodeIcon],
    ],
  },
  Database: {
    Title: "DBMS",
    Tags: [
      ["SQL", SqlIcon],
      ["MongoDB", MongodbIcon],
    ],
  },
  VersionControl: {
    Title: "Version Control",
    Tags: [
      ["Git", GitIcon],
      ["GitHub", GithubIcon],
    ],
  },
}

export const OtherSkillsInfo = [
  JupyterIcon,
  PhotoshopIcon,
  AftereffectsIcon,
  FigmaIcon,
  LinuxIcon,
]

export const ExperienceInfo = {
  Internship: {
    position: "Machine Learning Intern",
    company: "IC Solutions, Bengaluru",
    date: "September 2020",
    duration: "2 Months",
    description:
      "This internship allowed me to get my hands dirty with python and machine learning. I have worked on python libraries which are essentially used for data processing and visualization. Built some regression models from scratch and exposed to plenty of regression and classification algorithms. ",
  },
}

export const ProjectsInfo = {
  Project1: {
    title: "COVID-19 Detection using Deep Learning",
    technology: ["Tensorflow", "Flask", "SASS", "Javascript"],
    link: "https://github.com/SurajTC/FYP-Covid19-Detection-from-Chest-Xray",
    description: {
      point1:
        "Designed and developed a fully functional web application suitable to be used by radiologists under a conventional x-ray imaging center.",
      point2:
        "Designed a convolutional neural network model that differentiates healthy and infected chest x rays.",
    },
  },
  Project2: {
    title: "Automobile Price Prediction",
    technology: ["Tensorflow", "Python"],
    link: "https://github.com/SurajTC/Internship-Assignment",
    description: {
      point1:
        "Did exploratory data analysis on automobile dataset and extracted necessary information required to train the machine learning model.",
      point2:
        "Trained multiple machine learning models and compared and contrasted each of them to determine the best fitting model.",
    },
  },
  Project3: {
    title: "Vocabulary Builder",
    technology: ["Javascript", "SASS"],
    link: "https://github.com/SurajTC/Vocabulary-Builder",
    description: {
      point1:
        "Built a static vocabulary website which helps students to learn new english words using the vocabulary flashcards.",
    },
  },
  Project4: {
    title: "Handwritten Digit Recognition",
    technology: ["Tensorflow", "Python"],
    link: "https://github.com/SurajTC/Machine-Learning/tree/main/Handwritten%20Digit%20Recognition",
    description: {
      point1:
        "Worked on Deep learning algorithm trained using MNIST Dataset, which can recognize handwritten digits with an accuracy of 86.2%",
    },
  },
}

export const ContactInfo = {
  message: "Hey, Have a cool idea to share? Let's connect!",
  email: "surzavon@gmail.com",
  links: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/suraj-t-c-30900920b/",
      icon: LinkedinIcon,
    },

    Github: {
      link: "https://github.com/SurajTC",
      icon: GithubIcon,
    },
    Gmail: {
      link: "mailto: [surzavon@gmail.com]",
      icon: GmailIcon,
    },
  },
}
