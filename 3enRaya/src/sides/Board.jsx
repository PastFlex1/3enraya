import { useState } from "react";

let Square = ({value, OnSquareClick}) => {
  // const [value, setValue] = useState(null);
  // let handleClick = () => {
  //   setValue("X");
  // };


  return (
    <button className="square" onClick={OnSquareClick}>
      {value}
    </button>
  );
};

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else if (isDraw) {
    status = "¡Empate! Nadie gana esta vez";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

 let handleClick = (i) => {

    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  let resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div>
      <div className="status">{status}</div>
      {(winner || isDraw) && (
        <button className="reset-button" onClick={resetGame}>
          ¡Reiniciar Partida!
        </button>
      )}
      <div className="board-row">
        <Square value={squares[0]} OnSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} OnSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} OnSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} OnSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} OnSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} OnSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} OnSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} OnSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} OnSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

let calculateWinner = (squares) => {
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
