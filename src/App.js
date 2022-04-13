import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import Board from './components/Board'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],      
      playerOne: true,
      
    }
  }




startGame = (index) => {
  const {squares} = this.state;
    if(squares[index]){
      return ;
    }
    squares[index] = this.state.playerOne ? 'X' : 'O'
    this.setState({squares: squares, playerOne: !this.state.playerOne})
  
  
}

    calculateWinner = (squares,) => {
        this.props.startGame(this.props.index)
        const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }if (this.calculateWinner){
          this.calculateWinner = 'Winner: ' + this.calculateWinner;
        }else {
          this.calculateWinner = 'Next player: ' + (this.state.playerOne)
        }
        }
        return null;
    }







  render(){
    
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
            <Board startGame = {this.startGame}/>
            </div>
        </div>
      </div>
    )
  }
}
export default App
