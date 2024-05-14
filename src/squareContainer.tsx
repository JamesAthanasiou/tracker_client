import { useState } from "react";
import NewSquare from "./NewSquare";

export default function SquareContainer() {
    const [squares, setSquares] = useState<Array<number|null>>(Array<number|null>(9).fill(null));

    function handleClick(i: number): void {
        // We copy for two reasons. To not mutate existing data, but also to not immediately trigger a rerender of children.
        const nextSquares = squares.slice();
        if (nextSquares[i] == null) {
            nextSquares[i] = i;
        } else {
            nextSquares[i] = null;
        }
        setSquares(nextSquares);
    }

    const numRows = 3;
    const numCols = 3;
    
    return (
        <>
            {(Array.from({length:numRows}, (_, i)=>i)).map((i) => (
                <div className="row square-row">
                    <NewSquare value={squares[i*numCols]} onSquareClick={() => handleClick(i*numCols)} />
                    <NewSquare value={squares[i*numCols+1]} onSquareClick={() => handleClick(i*numCols+1)} />
                    <NewSquare value={squares[i*numCols+2]} onSquareClick={() => handleClick(i*numCols+2)} />
                </div>
            ))}
        </>
    );
}