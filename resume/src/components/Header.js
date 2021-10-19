import { Container } from "./styles/Container.styled"

function Header({ currentTheme, setTheme }) {
  function toggleTheme() {
    if (currentTheme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <Container>
      <button onClick={toggleTheme}>click me</button>
    </Container>
  )
}

export default Header
