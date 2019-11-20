import React from 'react'
import styled from 'styled-components';


const Box = ({ color, bgColor, borderColor, children }) => {
  return (
    <StyledBox
      color={color}
      bgColor={bgColor}
      borderColor={borderColor}
    >
      {children}
    </StyledBox>
  )
}

const StyledBox = styled.div`
  border-radius: 40px;
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor ? props.bgColor : 'white'};
  border: 2px solid ${props => props.bgColor ? props.bgColor : '#A1A1A150'};
  padding: 10px;
  font-size: 1.2em;
`


export default Box;
