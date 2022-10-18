import React from 'react'
import BannerHome from '../../assets/bannerHome.png'
//import BannerHomeMobile from '../../assets/bannerHomeMobile.png'
import styled from 'styled-components'


const Banner = styled.div`
    display:flex;
    position:relative;
    background: rgba(0,0,0,.5);
    border-radius: 25px;
    width: 90%;
    height: 100%;
    margin: auto;
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
}
    `
const TitleHome = styled.h2`
    position: absolute;
    z-index: 3;
    font-family: "Montserrat", sans-serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 142.6%;
    align-items : center;
    display:flex;
  
    color: #FFFFFF;
    @media (max-width: 899px){
      display:flex;
      align-items:flex-end;
    font-size: 24px;
    line-height:100%;
    right:33%;
    left: 10%;

}
    
    
    
    @media (max-width: 375px){
      right: 60%;
        top: 25%;
        bottom: 80.05%;
        font-size: 24px;
        line-height: 100%;
        text-align: center;
    }`

function Home() {
  return (
    <main>
        <Banner>
          <ImgTitle src={BannerHome} alt="Chez vous, partout et ailleurs" />
          <TitleHome>Chez vous, partout et ailleurs</TitleHome>
          </Banner>
      Page d'accueil hello
        
     
    </main>
  );}

export default Home;
