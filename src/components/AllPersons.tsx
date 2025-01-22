import { useEffect, useState } from "react";
import Person from "../types/Person";
import { getAllPersons } from "../api";
import PersonLine from "./PersonLine";


export default function AllPersons() {
    const [persons, setPersons] = useState<Person[]>([]);

    useEffect(() => {
        (async function getF(): Promise<void> {
            const result = (await getAllPersons()) as Person[];
            setPersons(result);
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return (
        <div>
            {persons.map((e, key) => {
                return <PersonLine key={key}  person={e} />
            })}
        </div>
    )
}