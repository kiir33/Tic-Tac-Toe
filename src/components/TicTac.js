import React, { Component } from 'react'
import Box from './Box'

export class TicTac extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nextTurn: 'X',
      boxes: Array(9).fill(''),
      gameFinished: false,
      winner: '',
    }
  }

  restartGame = () => {
    this.setState(
      {
        nextTurn: 'X',
        boxes: Array(9).fill(''),
        gameFinished: false,
        winner: '',
      }
    )
  }

  handleClick = (pos) => {

    let state = this.state
    var newBoxes = state.boxes

    let emptyCount = state.boxes.filter(x => x === '').length


    if(state.gameFinished){
      return
    }

    if (newBoxes[pos] === '') {
      newBoxes[pos] = state.nextTurn
      this.setState({ boxes: newBoxes })
      if (state.nextTurn === 'X') {
        this.setState({ nextTurn: 'O' })
      } else {
        this.setState({ nextTurn: 'X' })
      }

      const winner = this.calculateWinner(newBoxes)

      if (winner) {
        this.finishGame()
        this.setState({ winner: winner })
      }
      if (emptyCount < 2) {
        this.finishGame()
      }

    }else if(emptyCount>0){
      
      return
    } 
    else {
      this.finishGame()
    }

  }

  finishGame = () => {
    this.setState({ gameFinished: true })
  }

  renderSquare = (pos) => {

    let box = this.state.boxes[pos]
    return (
      <Box
        item={box}
        pos={pos}
        handleClick={this.handleClick}
      />
    )
  }

  calculateWinner = (squares) => {
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
      if (squares[a] !== '' && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {

    return (
      <div className="container text-light pt-4 pb-4">
        <div className=" m-auto">
          <div className="game-board mb-4">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}

            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}

            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>

        <div className="m-auto h2">
          {!this.state.gameFinished &&
            <div> Next player: {this.state.nextTurn}</div>}

          {this.state.gameFinished && this.state.winner &&
            <div className="text-warning"> Winner: {this.state.winner}</div>}

          {this.state.gameFinished && this.state.winner === '' &&
            <div className="text-info">Game Draw</div>}


          <button className="btn btn-primary mt-4"
            onClick={this.restartGame}>Restart</button>
        </div>

      </div>
    )
  }
}

export default TicTac
