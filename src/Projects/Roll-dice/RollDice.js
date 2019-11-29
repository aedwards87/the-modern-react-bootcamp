import React, { Component } from 'react'
import styled from 'styled-components';
import Dice from './Dice'
import DiceSelection from './DiceSelection';

class RollDice extends Component {

  static defaultProps = [ 'one', 'two', 'three', 'four', 'five', 'six' ]

  state = {
    preInput: 1, input: 1, newState: { dice1: Math.floor(Math.random() * 6)}, 
  }

  handleChange = (e) => {
    // Only allow numbers
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ input: e.target.value })
    }
    // if (e.target.value.length > 1) {
    //   if (e.keyCode !== 48) {
    //     return false
    //   }
    // }
  }

  handleClick = (e) => {
    // loop and create key/value pairs in state for as many typed into the input

    delete this.state.newState

    const newState = {}
    // Loops X amount of times the users specifies within the input
    // and creates key/value pairs within the newState object for that amount
    for (let i = 0; i < this.state.input; i++) {
      const randNum = Math.floor(Math.random() * 6)
      newState[`dice${i + 1}`] = parseInt(randNum)
      // parseInt(`${i + 1}`)
    }
    // Sets newState to state
    this.setState({
      newState
    })

  }

  keyPress = (e) => {
    if (this.state.input <= 10) {
      if (e.keyCode === 13) {
        this.handleClick()
      }
    } else {
      alert('Max number of dice 10')
    }
  }

  handleIncrement = (e) => {
    // Add 1 to input value
    // if (this.state.input === '') {
    //   this.setState(() => ({
    //     input: parseInt(0)
    //   }))
    // }
    this.setState(({ input }) => ({
      input: parseInt(input) + 1
    }))
  }

  handleDecrement = (e) => {
    // Remove 1 to input value
    if (this.state.input <= 10) {
      this.setState(({ input }) => ({
        input: parseInt(input) - 1
      }))
    } else if (this.state.input > 10){
      this.setState(() => ({
        input: parseInt(11)
      }))}
    this.setState(({ input }) => ({
      input: parseInt(input) - 1
    }))
  }

  componentDidUpdate = () => {
    // console.log(Object.keys(this.state.newState).length)
    if (this.state.input <= 10) {
      if (this.state.input > Object.keys(this.state.newState).length) {
        this.handleClick()
      } else if (this.state.input < Object.keys(this.state.newState).length) {
        this.handleClick()
      }
    } else if (this.state.input > 10) {
      this.setState(() => ({
        input: parseInt(10)
      }))
    }
    

    // Using preInput state, could maybe determine whether input is > 10, if so error message
    // if (this.state.input > 10) {

    // }

  }

  // shouldComponentUpdate = () => {

  // }
  

  render() {  
    return (
      <StyledRollDice>

        <h1>Select number of dices</h1>
        <p>(Max number of dice: 10)</p>
        {/* input for number of dices */}
        <DiceSelection 
          input={this.state.input}
          handleChange={this.handleChange} 
          handleIncrement={this.handleIncrement} 
          handleDecrement={this.handleDecrement} 
          keyDown={this.keyPress} 
        />

        <StyledDiceContainer>
          {this.state.newState && 
            Object.values(this.state.newState).map((value, i) => 
              <Dice face={this.props[value]} key={i}/>
            ) 
          }
        </StyledDiceContainer>

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

const StyledDiceContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* border: 2px solid pink; */
`


export default RollDice

// <i class="fas fa-dice-one"></i