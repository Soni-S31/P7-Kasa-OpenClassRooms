//import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
//import { ThemeContext } from '../context'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
    
`
function GlobalStyle() {
  

  return <StyledGlobalStyle />
}
export default GlobalStyle
