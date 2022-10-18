import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/LOGO.png'
//import colors from '../../utils/style/colors'


const NavContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const HomeLogo = styled.img`
  height: 70px;
`
const NavUl = styled.ul`
    list-style-type: none;
    display: flex;
    `

const StyledLi = styled.li`
  padding: 10px 15px;
  
  text-align: center;
  
`




function Header() {
    let activeStyle = {
        textDecoration: "none",
      };
      
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={logo} />
      </Link>
      <nav>
          <NavUl>
              <StyledLi>
        <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Accueil</NavLink></StyledLi>
        <StyledLi>
        <NavLink to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>A propos</NavLink>
        </StyledLi>
        </NavUl>
      </nav>
    </NavContainer>
  )
}
export default Header