import React from 'react'
import styled from 'styled-components';
import Box from './Box'
import TypeColors from './TypeColors'


const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)


const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKE_API}${padToThree(id)}.png`

  // Creates title case sentence
  const titleCase = (str) => (
    str.toLowerCase().split(' ').map((word) => 
      (word.charAt(0).toUpperCase() + word.slice(1))
    ).join(' ')
  )

  return (
    <StyledPokecard>
      <PokemonName bgColor={type.toLowerCase()}>{name}</PokemonName>
      <img src={imgSrc} alt={name} />
      <StyledBoxContainer>
        <Box color='white' bgColor={type.toLowerCase()}>{titleCase(type)}</Box>
        <Box borderColor={type.toLowerCase()}>xp: {exp}</Box>
      </StyledBoxContainer>
    </StyledPokecard>
  )
}


const StyledBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
`

const StyledPokecard = styled.div`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 3px 5px 0 #00000015, 0 10px 15px 0 #00000020;
  img {
    width: 75%;
    margin: 10px;
    transition: all 0.3s ease;
    :hover {
      transform: scale(1.25);
      transition: all 0.3s ease;
    }
  }

`

const PokemonName = styled.h2`
  color: ${(props) => 
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
`

export default Pokecard