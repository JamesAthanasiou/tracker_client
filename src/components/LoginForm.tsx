import { useContext, useState } from "react";
import { CurrentUser } from "../types/CurrentUser";
import { UserContext } from "../app-context/user-context";
import { useSearch } from "@tanstack/react-router";
import { router } from "../main";
import { LoginFormData } from "../types/LoginFormData";
import { Box, Button, FormControl, TextField } from "@mui/material";
import ErrorMessage from "./ErrorMessage";

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

    const [error, setError] = useState<Error>();

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
        } catch (e: any) {
            setError(e)
        }
    }

    return (
        <Box component="form" onSubmit={handleSubmit}  sx={{ display: 'flex', flexDirection:'column' }}>
            <FormControl sx={{ mb: 1}}>
                <TextField
                    label="Username"
                    type="username"
                    name="username"
                    size="small"
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl sx={{ mb: 1}}>
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    size="small"
                    onChange={handleChange}
                />
            </FormControl>

            { isSignup ? 
                <>
                    <FormControl sx={{ mb: 1}}>
                        <TextField
                            label="First Name"
                            name="first_name"
                            size="small"
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl sx={{ mb: 1}}>
                        <TextField
                            label="Last Name"
                            name="last_name"
                            size="small"
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl sx={{ mb: 1}}>
                        <TextField
                            label="Gender"
                            type="gender"
                            size="small"
                            onChange={handleChange}
                        />
                    </FormControl>
                </>
            : null }

            {  error === undefined ? '' : 
                <Box sx={{ mb: 1}}>
                    <ErrorMessage error={error.message} /> 
                </Box>
            }

            <Button type="submit" variant="contained" >Submit</Button>

        </Box>
    );
}
