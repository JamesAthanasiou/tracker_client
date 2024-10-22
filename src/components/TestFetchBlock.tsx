import { useState } from "react";
import Person from "../types/Person";
import { getAllPersons } from "../api";

export function TestFetchBlock () {
    const [people, setPeople] = useState<Person[]>([]);

    async function getValues() {
        const res = (await getAllPersons()) as Person[];
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
                    <p>{person['last_name']}</p>
                </div>
            ))}
        </div>
    )
}
