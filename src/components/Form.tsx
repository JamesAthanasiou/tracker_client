import { useState } from "react";

interface Person {
    id?: number;
    first_name: string;
    last_name: string;
    gender: 'man' | 'woman' | 'other' | '';
}

export default function AForm() {
    const [values,setValues] = useState<Person>({
        first_name: "",
        last_name: "",
        gender: ""
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values)

        onSubmitUsername(values)
    }

    async function onSubmitUsername(data: Person){
        // TODO this should be moved out into its own routing file or something.
        const url = `${import.meta.env.VITE_API_URL}/person/create`;

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        try {
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: myHeaders,
           });
          console.log(response);
        } catch (error) {
          console.error(error);
        }
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