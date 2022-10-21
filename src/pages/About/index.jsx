import React from 'react'
import BannerAbout from'../../assets/BannerAbout.png'
import styled from 'styled-components';
import Collapse from '../../components/Collapse';

const Main = styled.main`
    background-color : white;
    padding: 0px 100px;
    @media (max-width: 899px){
      padding : 0px 20px;
    }`
//Banner CSS   
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
}`

const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 25px;
    opacity: 0.6;
    @media (max-width: 899px){
    height:110px;
    border-radius: 10px;
    object-fit: cover;
}`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top : 30px;
    margin-bottom : 30px;
    gap: 30px;
    `
 const CollapseContainer = styled.div`
    width: 85%;
 `       

function About() {
  return (
    <Main>
      <Banner>
        <BannerImg src={BannerAbout} alt="paysage montagne" />
      </Banner>

      <Section>
            
            <CollapseContainer>
                <Collapse 
                title= "Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
            </CollapseContainer>

            <CollapseContainer>
                <Collapse 
                title= "Respect"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
            </CollapseContainer>
            <CollapseContainer>
                <Collapse 
                title= "Service"
                content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
            </CollapseContainer>
            <CollapseContainer>
                <Collapse 
                title= "Sécurité"
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </CollapseContainer>
          
        </Section>
     
    </Main>
  );}

export default About;