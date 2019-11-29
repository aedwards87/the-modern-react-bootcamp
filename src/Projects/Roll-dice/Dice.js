import React from 'react'

const Dice = ({ face }) => {
  return (
    <i style={{fontSize: '8em',  color: '#7795f8', margin: 20}} className={`fas fa-dice-${face}`}></i>
  )
}

export default Dice;