import React from 'react'
import styled from 'styled-components';
import Box from './Box'


const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)


const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKE_API}${padToThree(id)}.png`

  const titleCase = (str) => (
    str.toLowerCase().split(' ').map((word) => 
      (word.charAt(0).toUpperCase() + word.slice(1))
    ).join(' ')
  )

  return (
    <StyledPokecard>
      <h2>{name}</h2>
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
  }

`

export default Pokecard