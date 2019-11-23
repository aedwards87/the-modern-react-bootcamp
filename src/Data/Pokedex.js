import React, { Component } from 'react'
import styled from 'styled-components';
import Pokecard from '../Components/Pokemon/Pokecard'


class Pokedex extends Component {
  static defaultProps = {
    pokemon : [
      {id: '004', name: 'Charmander', type: 'fire', base_experience: 62},
      {id: '007', name: 'Squirtle', type: 'water', base_experience: 63},
      {id: '011', name: 'Metapod', type: 'bug', base_experience: 72},
      {id: '012', name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: '025', name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: '039', name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: '094', name: 'Gengar', type: 'poison', base_experience: 225},
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
`

const StyledPokecardContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, 200px);
  /* padding: 40px; */
  grid-gap: 3vmax;
`


export default Pokedex