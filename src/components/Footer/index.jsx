import styled from 'styled-components'
import LogoWhite from '../../assets/logoWhite.png'


const FooterContainer = styled.div`
        background-color: black;
        color : white;
        padding: 3%;
        size: 24px;
        
        text-align: center;`
const FooterDiv = styled.div`
        margin-top: 2%;
        font-weight: 500;`

/*const FooterLogo = styled.img`
        align-items:center;
        width:122px`*/

function Footer() {
    
    return (
    <FooterContainer>
        <img src={LogoWhite} alt="logo"/>
        <FooterDiv>© 2020 Kasa. All rights reserved </FooterDiv>
    </FooterContainer>
    )
  }
  
  export default Footer
  