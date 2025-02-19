import { useContext, useState } from "react";
import { CurrentUser } from "../types/CurrentUser";
import { UserContext } from "../app-context/user-context";
import { useSearch } from "@tanstack/react-router";
import { router } from "../main";
import { LoginFormData } from "../types/LoginFormData";

type LoginFormProps = {
    loginFunction: (data: LoginFormData, signIn: (user: CurrentUser) => Promise<void>) => Promise<void>,
    path: "/login" | "/signup"
}

export default function LoginForm({loginFunction, path}: LoginFormProps) {

    const { updateState } = useContext(UserContext);

    const setUser = async (user: CurrentUser): Promise<void> => {
        await updateState({user: user});
    }

    const isSignup = (path == "/signup");

    const [values,setValues] = useState<LoginFormData>({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        gender: ""
    });

    const search = useSearch({ from: path}) as {redirect:string};

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(values)
    }

    function redirectAfterLogin() {
        if (search?.redirect) {
            router.history.push(search.redirect);
        } else {
            router.history.push("/");
        }
    }

    async function onSubmit(data: LoginFormData) {
        try {
            await loginFunction(data, setUser);
            redirectAfterLogin();
        } catch (e) {
            throw e as Error;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" onChange={handleChange} name="username" value={values.username}/>
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password" onChange={handleChange} name="password" value={values.password}/>
            <br/>

            { isSignup ? 
                <>
                    <label htmlFor="first_name">First Name:</label>
                    <input type="text" onChange={handleChange} name="first_name" value={values.first_name}/>
                    <br/>
                    <label htmlFor="last_name">Last Name:</label>
                    <input type="text" onChange={handleChange} name="last_name" value={values.last_name}/>
                    <br/>
                    <label htmlFor="gender">Gender:</label>
                    <input type="text" onChange={handleChange} name="gender" value={values.gender}/>
                    <br/>
                    </>
            : null }

            <button type="submit">Submit</button>
        </form>
    );
}
