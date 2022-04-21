import React, { Component } from 'react'

class Square extends Component{

handleOnclick = () => {
  this.props.startGame(this.props.index)
}

  render(){
    return(
      <>
        <div className="square" onClick={this.handleOnclick}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
