import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Chevron from '../../assets/ChevronOpen.png'


const CollapseDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const Button = styled.button`
    background-color: ${colors.primary};
    border-radius: 5px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    display: flex;
    justify-content: space-between;
`
const CollapseTitle = styled.p`
    font-weight: 500;
    font-size: 24px;
    text-align: left;
    color: white;
    display: flex;
    align-items: left;
    padding-left: 18px;
    
`
const CollapseChevron = styled.img`
    display: flex;
    padding-right: 18px;

`
const ContentCollapse = styled.div`
    background-color: ${colors.secondary};
    border-radius: 5px;
    width : inherit;
    overflow: auto;

`
const Text = styled.p`
    color: ${colors.primary};
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    padding : 18px;
`

export default function Collapse (props) {
   
   
   

    
    
    return (
        <CollapseDiv>
        <Button  >
            <CollapseTitle >{props.title}</CollapseTitle>
            <CollapseChevron src={Chevron}/>
            
        </Button>
        <ContentCollapse>
            <Text>{props.content}</Text>
        </ContentCollapse>

        </CollapseDiv>
    
       
    );}
    
  
    