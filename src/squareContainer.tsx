import { useState } from "react";
import NewSquare from "./NewSquare";

export default function SquareContainer() {
    
    const [squares, setSquares] = useState<Array<number|null>>(Array<number|null>(9).fill(null));

    function handleClick(i: number): void {
        if (win) {
            return;
        }
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
    const numCols = 9;
    const target = 20;

    const win = (calcWin(squares, numRows, numCols, target));
    let status;
    if (win) {
        status = `You have winnered with a score of ${win}`;
    } else {
        status = `Try to beat the target of ${target} in any row`;
    }
    console.log(win);

    const rangeRows = (Array.from({length:numRows}, (_, i)=>i));
    const rangeCols = (Array.from({length:numCols}, (_, i)=>i));
    
    return (
        <>
            <div className="status">{status}</div>
            {rangeRows.map((i) => (
                <div className="row square-row" key={`row-${i}`}>
                    {rangeCols.map((j) => (
                        <NewSquare key={`col-${i*numCols + j}`} value={squares[i*numCols + j]} onSquareClick={() => handleClick(i*numCols + j)} />
                    ))}
                </div>
            ))}
        </>
    );
}

// calcWin is outside because we don't need to pass it as a prop to components
// Just say win condition is per row. Can't do it easily for row and column because we didn't start as a grid. Go back?
function calcWin(squares: (number | null)[], numRows: number, numCols: number, target: number): number | null {
    let res: number = 0;

    // let colScore = (Array.from({length:numCols}, (_)=>0));
    // let rowScore = (Array.from({length:numRows}, (_)=>0));

    for (let i = 0; i < numRows; i += 1) {
        res = squares
            .slice(i * numCols, (i + 1) * numCols)
            .reduce<number>((acc, curVal=0) => (acc ?? 0) + (curVal ?? 0), 0);
        if (res > target) {
            return res;
        }
    }
    
    return null;
}