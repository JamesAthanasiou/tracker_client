import { useState } from "react";
import SquareContainer from "./SquareContainer";

export default function Game(): JSX.Element {
    const numRows = 3;
    const numCols = 9;
    const target = 20;

    const [history, setHistory] = useState([Array(numRows * numCols).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    // const currentSquares = history[history.length - 1];
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: Array<number|null>) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number): any {
      setCurrentMove(nextMove);
      // todo
    }

    const moves = history.map((squares, move) => {
      let label;
      if (move > 0) {
        label = `Go to move ${move}`;
      } else {
        label = `Go to game start`;
      }

      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{label}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <SquareContainer 
            numRows={numRows}
            numCols={numCols}
            target={target}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }