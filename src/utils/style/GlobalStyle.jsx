//import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
//import { ThemeContext } from '../context'
import './font.css'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
    body{
      margin: 0px;
      background-color : white;
    }
`
function GlobalStyle() {
  

  return <StyledGlobalStyle />
}
export default GlobalStyle
