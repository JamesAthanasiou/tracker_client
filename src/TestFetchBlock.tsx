import { useState } from "react";

async function getData(): Promise<string> {
    const url = `${import.meta.env.VITE_API_URL}/person/show-all`
    console.log(url)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(json);
        return JSON.stringify(json);
    } catch (error) {
        console.error({message: getErrorMessage(error)});
    }
    return '';
}

function getErrorMessage(error: unknown): string {
	if (error instanceof Error) return error.message
	return String(error)
}

export function TestFetchBlock () {
    const [someValue, setSomeValue] = useState('');

    async function someGuy() {
        setSomeValue(await getData())
    }

    return (
        <div>
            <button onClick={someGuy}>
                Click me
            </button>
            <p>{someValue}</p>
        </div>
    )
}
