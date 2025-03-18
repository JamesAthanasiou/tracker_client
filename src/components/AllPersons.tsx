import { useEffect, useState } from "react";
import Person from "../types/Person";
import { getAllPersons } from "../api";
import PersonLine from "./PersonLine";


export default function AllPersons() {
    const [persons, setPersons] = useState<Person[]>([]);

    useEffect(() => {
        let active = true;

        const fetchAllPersons = async () => {
            const data = await (getAllPersons()) as Person[];
            if (active) {
                setPersons(data);
            }
        }

        fetchAllPersons();
        return () => {
            active = false;
        };
    },[]);
    
    return (
        <div>
            {persons.map((e, key) => {
                return <PersonLine key={key}  person={e} />
            })}
        </div>
    )
}