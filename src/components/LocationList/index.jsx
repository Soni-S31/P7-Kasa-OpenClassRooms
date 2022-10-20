import { Link } from "react-router-dom";
import React from 'react';
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/Atoms'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const LocationsSection = styled.section`
    @media (min-width: 900px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: ${colors.secondary};
        border-radius: 25px;
        padding: 2%;
    }
`

  const LinkLocation = styled(Link)`
    text-decoration: none;
    text-decoration-line: none;
    overflow: hidden;
    flex-direction : column;
    text-decoration : none;
    border-radius : 10px;
    width: 340px;
    height: 340px;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-top: 35px;
    margin-left: 35px;
    background: linear-gradient(180deg, ${colors.primary} 0%, rgba(0, 0, 0, 0.5) 100%);
    &:hover {
    cursor: pointer;
  }
  `
 const LocationImg = styled.img`
      width: 340px;
    height: 340px;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-top: 35px;
    margin-left: 35px;
    border-radius: 10px;
    `
  const LocationTitle = styled.h2`
    margin-top: auto;
    margin-bottom: 5px;
    position: relative;
    z-index: 2;
    color: white;
    height: 52px;
    width: 250px;
    left: 20px;
    font-size: 18px;
    `

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





  
  