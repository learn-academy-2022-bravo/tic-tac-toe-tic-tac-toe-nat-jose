import React, { Component } from 'react';

class Board extends Component {
  //    const winner = this.calculateWinner(this.state.squares);
  // let status = 'Next player: ' + (this.state.playerOne ? 'X' : 'O');
  // if (winner) {
  //   status = 'Winner: ' + winner;
  // } else {
  //   status = 'Next player: ' + (this.props.playerOne ? 'X' : 'O');
  // }

    render() {

    return (
            <div>
                {this.calculateWinner}
            </div>
        );
    }
}

export default Board;
