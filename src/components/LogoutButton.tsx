import { useContext } from "react"
import { UserContext } from "../app-context/user-context"
import { logout } from "../services/auth";
import { useNavigate } from "@tanstack/react-router";

export default function LogoutButton() {

    const { updateState } = useContext(UserContext);

    const signOut = async (): Promise<void> => {
        await updateState({user: undefined});
    }

    const navigate = useNavigate()

    function handleClick(){ 
        logout(signOut);
        
        navigate({
            to: '/login',
        });
    }

    return (
        <button onClick={handleClick}>
            Logout
        </button>
    )
}