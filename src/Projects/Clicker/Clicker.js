import React, { Component } from 'react'


class Clicker extends Component {

  state = {
    num: ''
  }

  handleClick = () => {
    const RandNum = Math.floor(Math.random() * 10 + 1)
    this.setState({
      num: RandNum
    })
  }

  render() {
    const { num } = this.state
    return (
      <div style={style}>
        <h1 style={{paddingTop: 40}}>Number is: {num}</h1>
        {num !== 7 ? 
          <button style={ButtonStyle} onClick={this.handleClick}>Random Number</button>
          :
          <h2>You WIN!</h2>
        }
      </div>
    )
  }

}

const style = {
  margin: '0 auto',
  textAlign: 'center',
}

const ButtonStyle = {
  padding: 15,
  background: 'white',
  borderRadius: 10,
  border: '2px solid rgba(138,142,156,1)',
  color: 'rgba(138,142,156,1)'
}

export default Clicker