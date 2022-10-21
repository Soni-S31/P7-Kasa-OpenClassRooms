import { Link } from "react-router-dom";
import React from 'react';
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/Atoms'

//css pour le loader
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const LocationsSection = styled.section`
    margin-top: 43px;
    margin-bottom: 43px;
    display: flex;
    flex-direction : row;
    flex-wrap : wrap;
    justify-content: space-around;
    background-color: ${colors.secondary};
    border-radius: 25px;
    padding: 4%;
    box-sizing: border-box;
    width: 100%;
    gap: 40px;
    @media (max-width: 1085px){
      gap: 40px;
      padding: 4%;
  
    }
    @media (max-width: 800px){
      gap: 25px;
      padding: 0px;
      background-color : white;
      border-radius: 10px;
      
    }
    `

  const LinkLocation = styled(Link)`
    overflow: hidden;
    flex-direction : column;
    text-decoration : none;
    border-radius : 10px;
    width: 340px;
    max-width : inherit;
    min-width: 320px;
    height: 340px;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    position : relative;
    justify-content : flex-end;
    align-items : flex-start;
    &:hover {
    cursor: pointer;}  
    @media (max-width: 992px){
      
  }
    @media (max-width: 768px){
      width: 100%;
      min-width : 250px;
      height: 250px;
    max-width : inherit;
  }`

 const LocationImg = styled.img`
      width: auto;
    height: 340px;
    display: flex;
    object-fit: cover;
    position: absolute;
    z-index : 1;
    border-radius: 10px;
    opacity: 0.9;

    @media (max-width: 768px){
      width: 100%;
      min-width : 250px;
      min-height: 250px;
    max-width : inherit;
  }`

  const LocationTitle = styled.h2`
    margin-bottom: 5px;
    position: relative;
    z-index: 8;
    color: white;
    height: 52px;
    width: 250px;
    left: 20px;
    font-size: 18px;
  `

//appel APi pour les date avec UseFetch et du loader inclus
export default function LocationList() {
  const { data, isLoading, error } = useFetch(`/logements.json`)
  if (error) {
    return <pre>{error}</pre>
  }
      return(
          <LocationsSection >
          {isLoading ? (
            <LoaderWrapper>
              <Loader data-testid="loader" />
            </LoaderWrapper>
          ) : (
                  data.map((logement) => (
                      <LinkLocation key={logement.id} to={`/Logement/${logement.id}`} className="flex">
                          <LocationImg key={"cover"+logement.id} src={logement.cover} alt={logement.title} />
                          <LocationTitle key={"title"+logement.id}>{logement.title}</LocationTitle>
                      </LinkLocation>
                  )
              ))}
          </LocationsSection>
      )
  }





  
  