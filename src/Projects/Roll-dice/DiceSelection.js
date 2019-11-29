import React from 'react'
import styled from 'styled-components';


const DiceSelection = ({ input, handleChange, handleIncrement, handleDecrement, keyDown }) => {
  return (
    <div>
      <button 
        onClick={handleDecrement} 
        disabled={input <= 1}
      >
        &larr;
      </button>
      <StyledInput 
        type="tel"
        value={input} 
        onChange={handleChange} 
        onKeyDown={keyDown}
        max="10"
        maxLength="2"
      />
      <button 
        onClick={handleIncrement} 
        disabled={input >= 10}
      >
        &rarr;
      </button>
    </div>
  )
}

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

export default DiceSelection