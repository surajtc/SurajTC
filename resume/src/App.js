import { ThemeProvider } from "styled-components"
import { useState } from "react"

import { GlobalStyle } from "./components/styles/Global.style"
import { Themes } from "./components/styles/Theme"

import Head from "./components/Head"
import Main from "./components/Main"

function App() {
  const [theme, setTheme] = useState("Light")
  // const Profile = {
  //   Name: "Suraj T C",
  //   Title: "< Programmer / Developer >",
  //   Description:
  //     "I'm a passionate computer science major, who is continuously seeking opportunities to learn new technologies and solve problems.",
  // }
  // Object.entries(Profile).forEach((entry) => {
  //   const [key, value] = entry
  //   console.log(key, value)
  // })
  // Object.keys(Profile).forEach((key) => {
  //   console.log(key, Profile[key])
  // })
  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyle />
        <Head theme={theme} setTheme={setTheme} />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App
