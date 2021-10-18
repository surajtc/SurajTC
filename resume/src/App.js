import { useState } from "react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./components/styles/Global.styled"
import { themes } from "./components/styles/ColorScheme"

import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle DefaultTheme={theme} />
        <Header theme={theme} setTheme={setTheme} />
        <Main theme={theme} />
      </ThemeProvider>
    </>
  )
}

export default App
