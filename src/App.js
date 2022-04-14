import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      playerOne: 'X',
      win: null,
    }
  }
  startGame = (index) => {
    const {squares, playerOne, win} = this.state;
      if(squares[index]|| win) {
        return;
      } squares[index] = playerOne ? 'X' : 'O'
      this.setState({squares: squares, playerOne: !playerOne});
      this.calculateWinner()
    }

calculateWinner = () => {
    const winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
        winning.forEach(value => {
          const [a, b, c] = value;
          if (this.state.squares[a] === 'X' && this.state.squares[b] === 'X' && this.state.squares[c] === 'X') {
            return this.setState({win: 'Player One Wins!!'})
          } else if (this.state.squares[a] === 'O' && this.state.squares[b] === 'O' && this.state.squares[c] === 'O') {
            return this.setState({win: 'Player Two Wins!!'})
        // } else if  if (this.state.win.length !== 8){
        //   alert ("No More Plays")
        }
      })
    }

restart = () => {

}

  render(){
    console.log(this.state.win)

    return(
      <div className='mainContainer'>
        <div className='container'>
          <h1>Tic Tac Toe</h1>
            <div className='ticTac'>
              {this.state.squares.map((value,index) =>
                {return (
                  <Square
                    key={index}
                    value={value}
                    index={index}
                    startGame = {this.startGame}
                    />
                  )
                }
              )}
            </div>
            <div className='player'>{this.state.win}</div>
        </div>
      </div>
    )
  }
}
export default App
