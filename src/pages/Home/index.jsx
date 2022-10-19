import React from 'react'
import BannerHome from '../../assets/bannerHome.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors';
//import LocationList from '../../components/LocationList';



const Main = styled.main`
    background-color : white;
    padding: 0px 100px;
   
    @media (max-width: 899px){
      padding : 0px 20px;
    }`
    
const Banner = styled.article`
    display:flex;
    position:relative;
    background: rgba(0,0,0,.5);
    border-radius: 25px;
    
    align-items: center;
    justify-content: center;
    
    @media (max-width: 899px){
    height:110px;
    border-radius: 10px;
}
    `
const ImgTitle = styled.img`
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 25px;
    opacity: 0.6;
    
    @media (max-width: 899px){
    height:110px;
    border-radius: 10px;
    object-fit: cover;
}
    `
const TitleHome = styled.h2`
    position: absolute;
    z-index: 3;
    font-family: "Montserrat", sans-serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 142.6%;
    display:flex;
    color: #FFFFFF;
    @media (max-width: 899px){
    font-size: 24px;
    line-height:100%;
    text-align: left;
    font-weight: 500;
    left:9%;
    right:25%;
    }`

const Location = styled.section`
display: flex;
    margin : 20px 0px;
    flex-direction : column;
    justify-content: space-around;
    padding: 50px;
    background-color : ${colors.secondary};
    border-radius: 25px;
    &:hover {
    cursor: pointer;
  }
`



export default function Home() {

  return (
    <Main>
        <Banner>
          <ImgTitle src={BannerHome} alt="Chez vous, partout et ailleurs" />
          <TitleHome>Chez vous, partout et ailleurs</TitleHome>
        </Banner>
        <Location>Hello
        </Location>
    </Main>
  )}

 