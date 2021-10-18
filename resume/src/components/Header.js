import { Container } from "./styles/Container.styled"

function Header({ theme, setTheme }) {
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <Container theme={theme}>
      <button onClick={changeTheme}>click me</button>
    </Container>
  )
}

export default Header
