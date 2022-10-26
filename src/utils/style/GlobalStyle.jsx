import { createGlobalStyle } from 'styled-components'
import './globalStyle.css'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
    .body{
      margin:0px;
    }
    
`
function GlobalStyle() {
  

  return <StyledGlobalStyle />
}
export default GlobalStyle
