import styled from 'styled-components'
import LogoWhite from '../../assets/logoWhite.png'


const FooterContainer = styled.div`
        background-color: black;
        color : white;
        padding: 3%;
        size: 24px;
        text-align: center;
        display:flex;
        width : auto;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        gap: 30px;
        
        @media (max-width: 899px){
        height: 209px;
        padding : 0px;
        
}`
const FooterDiv = styled.div`
        font-family: 'Montserrat';
        font-size: 24px;
        font-weight: 500;
        line-height: 142.6%;
        @media (max-width: 899px){
        font-size: 12px;
}`

const FooterLogo = styled.img`
        align-items:center;
        width:122px;
        height: 40px;
        top: 66px;
        @media (max-width: 899px){
        top: 29%;
}`

function Footer() {
    
    return (
    <FooterContainer>
        <FooterLogo src={LogoWhite} alt="logo"/>
        <FooterDiv>© 2020 Kasa. All rights reserved </FooterDiv>
    </FooterContainer>
    )
  }
  
  export default Footer
  