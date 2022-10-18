import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/LOGO.png'
import colors from '../../utils/style/colors'


const HeaderContainer = styled.div`
  width: 90%;
    justify-content: space-between;
    display:flex;
    flex-direction: row;
    @media (max-width: 899px){
        margin: 5% auto;
		align-items: center;
    
    }
    @media (min-width: 900px){
        margin: 2% auto;
		align-items: baseline;
		max-width: 1250px;
    }
`
const HomeLogo = styled.img`
  height: 70px;
`
const StyledNav = styled.nav`
    width: 50%;
    text-align: right;
    display:flex;
    justify-content: flex-end;
    

`

const StyledLink = styled(NavLink)`
color: ${colors.primary};
margin-left: 5%;

font-weight: 500;
text-decoration: none;
@media (max-width: 899px){
    font-size: small;
text-transform: uppercase;
}
@media (min-width: 900px){ font-size: x-large; }
`



function Header() {
  let activeStyle = {
      textDecoration: "underline",
    };
    
return (
  <HeaderContainer>
    <Link to="/">
      <HomeLogo src={logo} />
    </Link>
    <StyledNav>
        
            
      <StyledLink to="/" style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Accueil</StyledLink>
      
      <StyledLink to="/about" style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>A propos</StyledLink>
      
      
    </StyledNav>
  </HeaderContainer>
)
}
export default Header