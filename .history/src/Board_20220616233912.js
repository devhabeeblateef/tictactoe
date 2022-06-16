import React, {useState} from 'react'
import Square from './Square'
import classes from './App.module.css'

function Board() {
    <center>
  const [reset, setReset] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  let message;
  
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setReset(false);
  }

  const clickHandler = (i) => {
    setReset(true)
    if (decideWinner(squares))
    {
      return
    }

    if (squares[i] == null)
    {
    squares[i] = isX ? "X" : "O"
    setSquares(squares)
    setIsX(!isX)
    }
  }

const decideWinner = (squares) => {
    const winningPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for ( let i = 0; i < winningPatterns.length; i++)
    {
      const [a,b,c] = winningPatterns[i];
      
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      {
        return squares[a]
      }
    }
      return null
}

let status;

const winner = decideWinner(squares);
  if(winner)
  {
    message = "Play Again?"
  }
  else{
    message="Reset Game"
  }

if (winner)
{
  status = winner + " wins!"
}

if (!winner)
{
  status = "Next Player: " + `${isX ? "X":"O"}`
}

const ticTacToe = (i) => {
  return <Square value={squares[i]} onClick={() => {clickHandler(i)}}/>
}

if (!winner &&  squares. every(value => value !== null))
  {
    status = "No Winner"
    message = "Play Again?"
  }
  return (
    <div>
    <h2>Tic Tac Toe</h2>
    <p>{status}</p>
    <button onClick={resetGame} disabled={!reset}>{message}</button>
    <div className={classes.board}>
    <div className={classes.rowOne}>
    {ticTacToe(0)}
    {ticTacToe(1)}
    {ticTacToe(2)}
    </div>
    <div className={classes.rowOne}>
    {ticTacToe(3)}
    {ticTacToe(4)}  
    {ticTacToe(5)}
    </div>
    <div className={classes.rowOne}>
    {ticTacToe(6)}
    {ticTacToe(7)}
    {ticTacToe(8)}
    </div>
    
  </div>
  </div>
  )
}

export default Board