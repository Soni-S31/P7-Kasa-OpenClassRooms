import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

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
`
const CollapseTitle = styled.h3`
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    color: white;
    display: flex;
    align-items: left;
`
const CollapseChevron = styled.img`
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
        <Button>
            <CollapseTitle>
            </CollapseTitle>
            <CollapseChevron>
            </CollapseChevron>      
        </Button>
        <ContentCollapse>
            <Text></Text>
        </ContentCollapse>

        </CollapseDiv>
       
    );}
    
  
    