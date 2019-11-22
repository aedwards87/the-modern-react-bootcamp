import React, { Component } from 'react'
import styled from 'styled-components';
import Pokecard from './Pokecard'
import Pokedata from './Pokedata'

class Pokedex extends Component {
  render() {
    const { player, pokemon, exp, isWinner } = this.props
    return (
      <StyledPokedex>
        {!player ? 
          <h1>Pokedex</h1> 
          : 
          <>
            <h2>{player}</h2>
            <h3>{isWinner ? 'WINNER' : 'LOSER'}</h3>
            <h4>Total xp: {exp}</h4>
          </>
        }
        <StyledPokecardContainer>
          {!player ? 
            Pokedata.pokemon.map(p => (
              <Pokecard 
                id={p.id}
                key={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience} 
              />
            )) 
            :
            pokemon.map(p => (
              <Pokecard 
                id={p.id}
                key={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience} 
              />
            ))
          }
        </StyledPokecardContainer>
      </StyledPokedex>
    )
  }
}

const StyledPokedex = styled.div`
  h1 {
    padding-bottom: 40px;
  }
  h2 {
    padding: 35px 0 15px;
  }
  h3 {
    padding: 30px 0 10px;
  }
  h4 {
    padding: 25px 0 5px;
    font-weight: 400;
  }
`

const StyledPokecardContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  max-width: 1500px;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 30px;
  grid-row-gap: 35px;
`


export default Pokedex