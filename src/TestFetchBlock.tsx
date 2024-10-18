import { useState } from "react";

/*
TODO:
- break out data fetching logic
- build general service for handling api calls
- break out types
*/

async function getData(): Promise<unknown[]> {
    const url = `${import.meta.env.VITE_API_URL}/person/show-all`
    console.log(url)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json;
    } catch (error) {
        console.error({message: getErrorMessage(error)});
    }
    return [];
}

function getErrorMessage(error: unknown): string {
	if (error instanceof Error) return error.message
	return String(error)
}

type Person = {
    id: string;
    first_name: string;
    last_name: string;
    gender: 'man' | 'woman' | 'other';
}

export function TestFetchBlock () {
    const [people, setPeople] = useState<Person[]>([]);
    // const [someVal, setSomeVal] = useState('');

    async function getValues() {
        const res = (await getData()) as Person[];
        console.log(res);
        setPeople(res);
    }

    return (
        <div>
            <button onClick={getValues}>
                Click me
            </button>
            { people.map(person => (
                <div>
                    <p>{person['first_name']}</p>
                </div>
            ))}
        </div>
    )
}
