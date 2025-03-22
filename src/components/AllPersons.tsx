import { Paper } from "@mui/material";
import Person from "../types/Person";
import PersonLine from "./PersonLine";

type AllPersonsProps = {
    persons: Person[]
}

export default function AllPersons({persons}: AllPersonsProps) {

    return (
        <Paper style={{maxHeight: 400, overflow: 'auto'}}>
            {persons.map((person, index) => {
                return <PersonLine index={index}  person={person} />
            })}
        </Paper>
    )
}