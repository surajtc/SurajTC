import { useState } from "react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./components/styles/Global.styled"

import Header from "./components/Header"
import Main from "./components/Main"

const LightTheme = {
  bgColor: "white",
  fgColor: "black",
}
const DarkTheme = {
  bgColor: "black",
  fgColor: "white",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle DefaultTheme={theme} />
        <Header theme={theme} setTheme={setTheme} />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App
