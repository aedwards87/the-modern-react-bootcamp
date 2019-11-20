import React, { Component } from 'react'
import styled from 'styled-components';
import Pokecard from './Pokecard'


class Pokedex extends Component {
  static defaultProps = {
    pokemon : [
      {id: '4', name: 'Charmander', type: 'fire', base_experience: 62},
      {id: '7', name: 'Squirtle', type: 'water', base_experience: 63},
      {id: '11', name: 'Metapod', type: 'bug', base_experience: 72},
      {id: '12', name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: '25', name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: '39', name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: '94', name: 'Gengar', type: 'poison', base_experience: 225},
      {id: '133', name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  }
  render() {
    return (
      <StyledPokedex>
        <h1>Pokedex</h1>
        <StyledPokecardContainer>
          {this.props.pokemon.map(p => (
            <Pokecard 
              id={p.id}
              key={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience} 
            />
          ))}
        </StyledPokecardContainer>
      </StyledPokedex>
    )
  }
}

const StyledPokedex = styled.div`
  h1 {
    padding-bottom: 40px;
  }
`

const StyledPokecardContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  max-width: 1500px;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  /* padding: 40px; */
  grid-gap: 20px;
  grid-row-gap: 40px;
`


export default Pokedex