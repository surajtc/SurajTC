import styled from "styled-components"
import { useState } from "react"

import { FaSun, FaMoon } from "react-icons/fa"

const SwitchDiv = styled.div`
  position: relative;
  width: 2rem;
  height: 1.25rem;
  input {
    visibility: hidden;
    height: 0;
    width: 0;
    position: absolute;
  }
  span,
  label {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
  span {
    width: 1.25rem;
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.backgroundColor};
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-radius: 1.25rem;
    font-size: 0.75rem;
    transition: transform 200ms ease-in-out;
  }
  input:checked + label > span {
    transform: translate(0.75rem, -50%);
  }
  label {
    width: 100%;
    height: 1rem;
    background-color: ${(props) => props.theme.foregroundColor};
    display: inline-block;
    border-radius: 1rem;
  }
`

function ToggleSwitch({ currentTheme, setTheme }) {
  const [switchIcon, changeIcon] = useState(<FaSun />)

  function toggleTheme() {
    if (currentTheme === "light") {
      setTheme("dark")
      changeIcon(<FaMoon />)
    } else {
      setTheme("light")
      changeIcon(<FaSun />)
    }
  }
  return (
    <SwitchDiv>
      <input type="checkbox" onChange={toggleTheme} id="switch" />
      <label htmlFor="switch">
        <span>{switchIcon}</span>
      </label>
    </SwitchDiv>
  )
}

export default ToggleSwitch
