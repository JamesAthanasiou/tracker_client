import { useState } from "react";
import { login } from "../services/auth";
import { CurrentUser } from "../types/CurrentUser";
import { UserLogin } from "../types/UserLogin";

interface LoginFormProps {
    setUserObject: (user: CurrentUser) => Promise<void>
}

export default function LoginForm(props: LoginFormProps) {
    const [values,setValues] = useState<UserLogin>({
        username: "",
        password: ""
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(values)
    }

    async function onSubmit(data: UserLogin){
        login(data, props.setUserObject);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" onChange={handleChange} name="username" value={values.username}/>
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password" onChange={handleChange} name="password" value={values.password}/>
            <br/>

            <button type="submit">Submit</button>
        </form>
    );
}
