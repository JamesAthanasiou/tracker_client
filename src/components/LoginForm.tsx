import { useContext, useState } from "react";
import { login } from "../services/auth";
import { CurrentUser } from "../types/CurrentUser";
import { UserLogin } from "../types/UserLogin";
import { UserContext } from "../app-context/user-context";
import { useSearch } from "@tanstack/react-router";
import { router } from "../main";

export default function LoginForm() {

    const { updateState } = useContext(UserContext);

    const signIn = async (user: CurrentUser): Promise<void> => {
        await updateState({user: user});
    }

    const [values,setValues] = useState<UserLogin>({
        username: "",
        password: ""
    });

    const search = useSearch({ from: "/login"}) as {redirect:string};

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

    async function onSubmit(data: UserLogin) {
        try {
            await login(data, signIn);
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

            <button type="submit">Submit</button>
        </form>
    );
}
