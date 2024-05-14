// const Square = (value: string) => {
//     return <button className="square">{value}</button>;
// }

// export default Square;
type NewSquareProps = {
    value: number | null;
    onSquareClick: () => void;
}

export default function NewSquare({value, onSquareClick}: NewSquareProps) {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
}