import React, { Component } from 'react'
import styled from 'styled-components';
import Pokecard from './Pokecard'
import Pokedata from './Pokedata'

class Pokedex extends Component {
  render() {
    const { player, pokemon, exp, isWinner } = this.props
    return (
      <StyledPokedex isWinner={isWinner}>
        {!player ? 
          <h1>Pokedex</h1> 
          : 
          <>
            {/* <h2>{player}</h2> */}
            <h2>{isWinner ? 'You win' : 'You lose'}</h2>
            <p>Total xp: {exp}</p>
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
  min-width: 360px;
  box-shadow: ${props => 
    props.isWinner === undefined ? null : props.isWinner ? 
    '0 0px 5px 0 #51F65255, 0 0px 15px 0 #51F65280' :
    '0 0px 5px 0 #f2242455, 0 0px 15px 0 #f2242455'
  };
  padding: 40px 0 60px;
  border-radius: 20px;
  color: rgba(138,142,156,1);
  > h2 {
    font-size: 2.5em;
    color: ${props => props.isWinner ? '#51F652' : '#f22424'};
  }
  p {
    margin: 10px 0 30px;
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
  @media (min-width: 1040px) {
    grid-template-columns: repeat(2, minmax(300px, auto));
  }
  @media (min-width: 1370px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  }
`


export default Pokedex