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
    <Container>
      <h1>Head</h1>
      <button onClick={changeTheme}>click me</button>
    </Container>
  )
}

export default Header
