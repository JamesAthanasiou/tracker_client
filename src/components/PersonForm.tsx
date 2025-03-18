import { useState } from "react";
import { createPerson } from "../api";
import Person from "../types/Person";

type PersonFormProps = {
    updateParent: () => Promise<any>
}

export default function PersonForm({updateParent}: PersonFormProps) {
    const [values,setValues] = useState<Person>({
        first_name: "",
        last_name: "",
        gender: ""
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await onSubmit(values);
        await updateParent();
    }

    async function onSubmit(data: Person): Promise<void>{
        await createPerson(data);
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
