import styled from "styled-components"

import { useState } from "react"

import { FaSun, FaMoon } from "react-icons/fa"

const Switch = styled.div`
  position: relative;
  width: 2rem;
  height: 1.25rem;
  input {
    position: absolute;
    visibility: hidden;
    width: 0;
    height: 0;
  }
  span,
  label {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
  span {
    display: grid;
    place-items: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 1.25rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme.BgColor};
    background-color: ${(props) => props.theme.AcColor};

    transition: transform 200ms ease-in-out;
  }
  input:checked + label > span {
    transform: translate(0.75rem, -50%);
  }
  label {
    display: inline-block;
    width: 100%;
    height: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${(props) => props.theme.FgColor};
  }
`

function ThemeSwitch({ theme, setTheme }) {
  const [switchIcon, changeIcon] = useState(<FaSun />)

  function toggleTheme() {
    if (theme === "Light") {
      setTheme("Dark")
      changeIcon(<FaMoon />)
    } else {
      setTheme("Light")
      changeIcon(<FaSun />)
    }
  }

  return (
    <Switch>
      <input type="checkbox" onChange={toggleTheme} id="switch" />
      <label htmlFor="switch">
        <span>{switchIcon}</span>
      </label>
    </Switch>
  )
}

export default ThemeSwitch
