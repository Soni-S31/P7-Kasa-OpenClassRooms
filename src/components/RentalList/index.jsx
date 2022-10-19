import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledSection = styled.section`
    display: flex;
    flex-direction : column;
    justify-content: space-around;
    padding: 50px;
    background-color : ${colors.secondary};
    border-radius : 25px;
    &:hover {
    cursor: pointer;
  }
`
  const Card = styled(Link)`
    overflow: hidden;
    flex-direction : column;
    text-decoration : none;
    border-radius : 10px;
    background-color: ${colors.primary}
  
  `
 const CardImage = styled.img`
      object-fit: cover;
      height: 100%;
    `
  const CardTitle = styled.h2`
    font-size: 18px; 
    line-height: 142.6%;
    color : white;
    `


export default function RentalList() {
    return (
    <StyledSection>
      <Card>
        <CardImage />
        <CardTitle></CardTitle>
      </Card>
    </StyledSection>)
  }
  