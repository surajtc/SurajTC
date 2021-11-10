import { ThemeProvider } from "styled-components"
import { useState } from "react"

import { GlobalStyle } from "./components/styles/Global.style"
import { Themes } from "./components/styles/Theme"

import Head from "./components/Head"
import Main from "./components/Main"

function App() {
  const [theme, setTheme] = useState("Light")

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
