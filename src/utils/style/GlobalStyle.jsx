import { createGlobalStyle } from 'styled-components'
import './globalStyle.css'

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
