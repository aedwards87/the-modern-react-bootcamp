import React, { Component } from 'react'
import styled from 'styled-components';

class RollDice extends Component {

  state = {
    input: 1, newState: { dice1: Math.floor(Math.random() * 6 + 1) }, 
  }

  handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ input: e.target.value })
    }
    if (e.target.value > 10) {
      return
    }
  }

  handleClick = (e) => {
    // loop and create key/value pairs in state for as many typed into the input

    delete this.state.newState

    const newState = {}
    // Loops X amount of times the users specifies within the input
    // and creates key/value pairs within the newState object for that amount
    for (let i = 0; i < this.state.input; i++) {
      const randNum = Math.floor(Math.random() * 6 + 1)
      newState[`dice${i + 1}`] = parseInt(randNum)
      // parseInt(`${i + 1}`)
    }
    // Sets newState to state
    this.setState({
      newState
    })

  }

  keyPress = (e) => {
    if (e.keyCode === 13) {
      this.handleClick()
    }
  }

  handleIncrement = (e) => {
    // Add 1 to input value
    if (this.state.input === '') {
      this.setState(({ input }) => ({
        input: parseInt(0)
      }))
    }
    this.setState(({ input }) => ({
      input: parseInt(input) + 1
    }))
  }


  handleDecrement = (e) => {
    // Remove 1 to input value
    this.setState(({ input }) => ({
      input: parseInt(input) - 1
    }))
  }


  componentDidUpdate(prevProps, prevState) {
    // console.log(Object.keys(this.state.newState).length)
    if (this.state.input > Object.keys(this.state.newState).length) {
      this.handleClick()
    } else if (this.state.input < Object.keys(this.state.newState).length) {
      this.handleClick()
    }
  }

  render() {  
    return (
      <StyledRollDice>

        <h1>Select number of dices</h1>

        {/* input for number of dices */}

        <div>
          <button 
            onClick={this.handleDecrement} 
            disabled={this.state.input <= 1}
          >
            &larr;
          </button>
          <StyledInput 
            type='text'
            value={this.state.input} 
            onChange={this.handleChange} 
            onKeyDown={this.keyPress}
          />
          <button 
            onClick={this.handleIncrement} 
            disabled={this.state.input >= 10}
          >
            &rarr;
          </button>
        </div>

        <StyledDiceContainer>
          {this.state.newState && 
            Object.values(this.state.newState).map((value, i) => 
              <StyledDice 
                key={i}
                // class={`fas dice-`}
              >
                {value}
              </StyledDice>
            ) 
          }
        </StyledDiceContainer>
        
        

        {/* {console.log(this.state.newState)} */}
      </StyledRollDice>
    )
  }
}

// TO DO
// > Only allow numbers to be entered
// > Warning message when trying to enter other characters
// > Only allow max number of 10 dices
// > Random number function loop between 1-6
// > Convert numbers to words to be able to access fontawesome icons
// > present each dice icon on screen
// > total calculation

const StyledRollDice = styled.div`
  padding-left: calc(100vw - 100%);
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding-top: 40px;
  h1 {
    font-weight: 400;
    font-size: 2.2em;
    color: black;
  }
  button {
    border-radius: 4px;
    padding: 0 0 5px;
    margin: 20px;
    cursor: pointer;
    outline-style: none;
    border: none;
    background: #3ecf8e;
    color: #fff;
    font-weight: 600;
    height: 50px;
    width: 60px;
    font-size: 1.6em;
    line-height: 0;
    transition: all 0.3s ease;
  }
  button:hover {
    box-shadow: 0 6px 6px rgba(50,50,93,.21), 0 2px 3px rgba(0,0,0,.15);
    transition: all 0.3s ease;
  }
  button, button:active {
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  }
  button:disabled, button:disabled:hover {
    background: #3ecf8e50;
    cursor: auto;
    box-shadow: none;
  }


  h1 {
    padding: 40px 0px 20px;
  }
`

const StyledInput = styled.input`
  text-align: center;
  height: 51px;
  margin-top: 2px;
  border-radius: 4px;
  width: 80px;
  border: 1px solid #7795f8;
  box-shadow: inset 0 2px 3px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  outline: none;
  color: #7795f8;
  font-size: 1.3em;
  font-weight: 600;
  :hover {
    box-shadow: inset 0 3px 5px rgba(50,50,93,.21), 0 2px 3px rgba(0,0,0,.15);
  }
`

const StyledDiceContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* border: 2px solid pink; */
`

const StyledDice = styled.div`
  background: yellow;
  width: 100px;
  text-align: center;
  padding: 20px;
  margin: 10px;
`


export default RollDice

// <i class="fas fa-dice-one"></i