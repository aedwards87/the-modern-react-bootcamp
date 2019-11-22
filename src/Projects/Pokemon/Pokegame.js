import React from 'react'
import styled from 'styled-components';
import Pokedata from './Pokedata'
import Pokedex from './Pokedex'



const Pokegame = () => {


  const hand1 = []
  const hand2 = [ ...Pokedata.pokemon ]

// Picks random pokemon from the data stored in hand2, and puts them into hand1 until both hands have the same amount
  while(hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length)
    let randPokemon = hand2.splice(randIdx, 1)[0]
    hand1.push(randPokemon)
  }

  const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience,0)
  const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience,0)
  
  return (
    <StyledPokeGame>
      <h1>PokeGame</h1>
      <Pokedex pokemon={hand1} player='Player 1' exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} player='Player 2' exp={exp2} isWinner={exp2 > exp1} />
    </StyledPokeGame>
  )
}

const StyledPokeGame = styled.div`
  padding: 40px;
  text-align: center;
  margin: 0 auto;
  h1 { 
    padding: 40px 0 20px;
  }
`


export default Pokegame