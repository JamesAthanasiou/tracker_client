import Person from "../types/Person";
import PersonLine from "./PersonLine";

type AllPersonsProps = {
    persons: Person[]
}

export default function AllPersons({persons}: AllPersonsProps) {

    return (
        <div>
            {persons.map((e, key) => {
                return <PersonLine key={key}  person={e} />
            })}
        </div>
    )
}