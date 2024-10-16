type AButtonProps = {
    count: number;
    onClick: () => void;
}

const AButton = ({count, onClick}: AButtonProps) => {

        return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

// Old way to declair before React 17 and not using Typing Component Props:
// const AButton: React.FC<{count: number, onClick: () => void }> = ({count, onClick}) => {

export default AButton;