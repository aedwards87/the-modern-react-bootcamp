import React from 'react'
import styled from 'styled-components';
import Box from './Box'
import { color } from './Colors'


const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKE_API}${padToThree(id)}.png`
 const s = type.toUpperCase()
  return (
    <StyledPokecard>
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} />
      <StyledBoxContainer>
        <Box color='white' bgColor={color.fire}>{type}</Box>
        <Box >xp: {exp}</Box>
      </StyledBoxContainer>
    </StyledPokecard>
  )
}

const StyledBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5em;
`


const StyledPokecard = styled.div`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 #A1A1A110, 0 5px 15px 0 #A1A1A130;
  img {
    width: 75%;
    margin: 10px;
  }

`

export default Pokecard