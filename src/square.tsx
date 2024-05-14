import { useState } from "react";

function Square() {
    const [value, setValue] = useState<string | null>(null);

    function handleClick() {
        setValue('e');
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    )
}

export default Square;