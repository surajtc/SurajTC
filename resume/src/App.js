import { ThemeProvider } from "styled-components"
import { useState } from "react"

import { GlobalStyle } from "./components/styles/Global.styled"
import { themes } from "./components/Theme"

import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Header currentTheme={theme} setTheme={setTheme} />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App
