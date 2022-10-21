import React from 'react'
import styled from 'styled-components'

const CollapseDiv = styled.div`

`
const Button = styled.button`
`
const CollapseTitle = styled.h3`
`
const CollapseChevron = styled.img`
`
const Content = styled.dic`
`
const Text = styled.p`
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
        <Content>
            <Text></Text>
        </Content>

        </CollapseDiv>
       
    );}
    
  
    