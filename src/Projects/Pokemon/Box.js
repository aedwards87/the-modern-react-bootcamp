import React from 'react'
import styled from 'styled-components';
import TypeColors from './TypeColors'


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
  border-radius: 20px;
  color: ${(props) => props.color};
  background: ${(props) => 
    props.bgColor === 'fire' ? TypeColors.fire : 
    props.bgColor === 'water' ? TypeColors.water : 
    props.bgColor === 'grass' ? TypeColors.grass : 
    props.bgColor === 'poison' ? TypeColors.poison : 
    props.bgColor === 'electric' ? TypeColors.electric : 
    props.bgColor === 'ghost' ? TypeColors.ghost : 
    props.bgColor === 'psychic' ? TypeColors.psychic : 
    props.bgColor === 'flying' ? TypeColors.flying : 
    props.bgColor === 'ground' ? TypeColors.ground : 
    props.bgColor === 'rock' ? TypeColors.rock : 
    props.bgColor === 'normal' ? TypeColors.normal : 
    props.bgColor === 'ice' ? TypeColors.ice : 
    props.bgColor === 'dragon' ? TypeColors.dragon : 
    props.bgColor === 'dark' ? TypeColors.dark : 
    props.bgColor === 'steel' ? TypeColors.steel : 
    props.bgColor === 'fairy' ? TypeColors.fairy : 
    props.bgColor === 'bug' ? TypeColors.bug : 
    props.bgColor === 'fighting' ? TypeColors.fighting : 'white'
  };
  border: 2px solid ${(props) => 
    props.borderColor === 'fire' ? TypeColors.fire : 
    props.borderColor === 'water' ? TypeColors.water : 
    props.borderColor === 'grass' ? TypeColors.grass : 
    props.borderColor === 'poison' ? TypeColors.poison : 
    props.borderColor === 'electric' ? TypeColors.electric : 
    props.borderColor === 'ghost' ? TypeColors.ghost : 
    props.borderColor === 'psychic' ? TypeColors.psychic : 
    props.borderColor === 'flying' ? TypeColors.flying : 
    props.borderColor === 'ground' ? TypeColors.ground : 
    props.borderColor === 'rock' ? TypeColors.rock : 
    props.borderColor === 'normal' ? TypeColors.normal : 
    props.borderColor === 'ice' ? TypeColors.ice : 
    props.borderColor === 'dragon' ? TypeColors.dragon : 
    props.borderColor === 'dark' ? TypeColors.dark : 
    props.borderColor === 'steel' ? TypeColors.steel : 
    props.borderColor === 'fairy' ? TypeColors.fairy : 
    props.borderColor === 'bug' ? TypeColors.bug : 
    props.borderColor === 'fighting' ? TypeColors.fighting : 'white'
    
    // props => props.bgColor ? props.bgColor : '#A1A1A150'
  };
  padding: 10px;
  /* font-size: 1.2em; */
`

export default Box;
