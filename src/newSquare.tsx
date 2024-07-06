type NewSquareProps = {
    value: number | null;
    onSquareClick: () => void;
}

export default function NewSquare({value, onSquareClick}: NewSquareProps) {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
}

// Old way to declair before React 17 and not using Typing Component Props:
// const NewSquare: React.FC<{value: number, onClick: () => void }> = ({count, onClick}) => {
