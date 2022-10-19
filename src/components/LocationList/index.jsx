import { Link } from "react-router-dom";
import React from 'react';
import styled from 'styled-components'
import colors from '../../utils/style/colors'
//import { useFetch } from "../../utils/hooks";
//import Logements from "../../datas/logements.json"


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



export default function LocationList({title, picture}) {
  

  return (
      
          <div>
              <LinkLocation>
                  <LocationImg >
                  <LocationTitle></LocationTitle>
                      
                  </LocationImg>
               </LinkLocation>
          </div>
    
  )
}


  
  