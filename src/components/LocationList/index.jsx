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
    display: flex;
    flex-direction : row;
    flex-wrap : wrap;
    justify-content: space-around;
    background-color: ${colors.secondary};
    border-radius: 25px;
    padding: 50px;
    box-sizing: border-box;
    width: 100%;
    gap: 45px;
    @media (max-width: 992px){
      gap: 25px;
      padding: 25px;
    }`


  const LinkLocation = styled(Link)`
    overflow: hidden;
    flex-direction : column;
    text-decoration : none;
    border-radius : 10px;
    width: 340px;
    height: 340px;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background: linear-gradient(180deg, ${colors.primary} 0%, rgba(0, 0, 0, 0.5) 100%);
    position : relative;
    justify-content : flex-end;
    align-items : flex-start;
    &:hover {
    cursor: pointer;
  }
  `
 const LocationImg = styled.img`
      width: auto;
    height: 340px;
    display: flex;
    object-fit: cover;
    position: absolute;
    z-index : 1;
    border-radius: 10px;
    `
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





  
  