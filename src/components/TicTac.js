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
    if (newBoxes[pos] === '' && !state.gameFinished) {
      newBoxes[pos] = state.nextTurn
      this.setState({ boxes: newBoxes })
      if (state.nextTurn === 'X') {
        this.setState({ nextTurn: 'O' })
      } else {
        this.setState({ nextTurn: 'X' })
      }

      const winner = this.calculateWinner(newBoxes)
      let status
      if (winner) {
        this.finishGame()
        this.setState({ winner: winner })
      }
    } else {
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
      <div className="container text-capitalize mt-4 mb-5">
        <div class="row" style={style}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div class="row" style={style}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div class="row" style={style}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        <div className="row mt-4 bg-secondary p-4 rounded text-light">

          {!this.state.gameFinished &&
            <div className="col-8 h2"> Next player: {this.state.nextTurn}</div>}

          {this.state.gameFinished && this.state.winner &&
            <div className="col-8 h2 text-warning"> Winner: {this.state.winner}</div>}

          {this.state.gameFinished && this.state.winner === '' &&
            <div className="col-8 h2 text-info">Game Draw</div>}

          <button className="btn btn-dark col-2 ms-auto"
            onClick={this.restartGame}>Restart</button>
        </div>

      </div>
    )
  }
}

const style = {
  height: '100px',
}

export default TicTac
