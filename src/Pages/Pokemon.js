import React from 'react'
import styled from 'styled-components';
// import Pokecard from '../Components/Pokemon/Pokecard'
import Pokedex from '../Data/Pokedex'

const Pokemon = () => {
  return (
    <StyledPokedex>
      <Pokedex />
    </StyledPokedex>
  )
}

const StyledPokedex = styled.div`
  padding: 40px;
  /* background: pink; */
  text-align: center;
  margin: 0 auto;
`



export default Pokemon 
