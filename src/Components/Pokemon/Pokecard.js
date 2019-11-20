import React from 'react'
import styled from 'styled-components';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKE_API}${padToThree(id)}.png`
  return (
    <StyledPokecard>
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} />
      <p>Type: {type}</p>
      <p>Exp: {exp}</p>
    </StyledPokecard>
  )
}

const StyledPokecard = styled.div`
  /* border: 3px solid #A1A1A110; */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 #A1A1A110, 0 5px 15px 0 #A1A1A130;
  img {
    width: 75%;
  }

`

export default Pokecard