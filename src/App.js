import React, { useState } from "react";
import './App.css';
import circle from './Components/Assets/circle.png'; // Import the circle image
import cross from './Components/Assets/cross.png';   // Import the cross image

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(squares);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {squares[index] === 'X' ? <img src={cross} alt="X" className="icon"/> :
         squares[index] === 'O' ? <img src={circle} alt="O" className="icon"/> : null}
      </button>
    );
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`}
      </div>
      <div className="board">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
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
    }
  }
  return null;
};

export default App;
