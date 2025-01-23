import { useState } from "react";
import { createPerson } from "../api";

interface Person {
    id?: number;
    first_name: string;
    last_name: string;
    gender: 'man' | 'woman' | 'other' | '';
}

export default function PersonForm() {
    const [values,setValues] = useState<Person>({
        first_name: "",
        last_name: "",
        gender: ""
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    // TODO should update list of friends. Add context.
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(values)
    }

    async function onSubmit(data: Person){
        createPerson(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First Name:</label>
            <input type="text" onChange={handleChange} name="first_name" value={values.first_name}/>
            <br/>
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" onChange={handleChange} name="last_name" value={values.last_name}/>
            <br/>
            <label htmlFor="gender">Gender:</label>
            <input type="text" onChange={handleChange} name="gender" value={values.gender}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}
