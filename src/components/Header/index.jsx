import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/LOGO.png'
import colors from '../../utils/style/colors'


const HeaderContainer = styled.header`
    justify-content: space-between;
    display:flex;
    flex-direction: row;
    padding: 40px 100px;
    @media (max-width: 899px){
      padding : 20px;
		  align-items: center;
      display: flex;
    }
`
const HomeLogo = styled.img`
  height: 70px;
  @media (max-width: 899px){
    height: 45px;
    width: 145px;
}
  @media (max-width : 350px){
    width : 80%;
    height: 80%;
  }
`
//Navbar
const StyledNav = styled.nav`
  text-align: right;
  display:flex;
  justify-content: flex-end;
  gap: 50px;
  align-items: center;
  @media (max-width: 899px){
    gap: 15px;
    }
`

const StyledLink = styled(NavLink)`
  color: ${colors.primary};
  font-weight: 500;
  text-decoration: none;
  font-size: 24px;
  @media (max-width: 899px){
    font-size: 12px;
  text-transform: uppercase;
  }
  
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