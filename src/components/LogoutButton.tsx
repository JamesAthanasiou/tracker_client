import { useContext } from "react"
import { UserContext } from "../app-context/user-context"
import { logout } from "../services/auth";
import { useNavigate } from "@tanstack/react-router";

export default function LogoutButton() {

    const { updateState } = useContext(UserContext);

    const navigate = useNavigate()

    function handleClick(){ 
        logout();

        // TOOD: Move this into the auth file so all things to do with loging out pass through one spot?
        updateState({user: undefined});
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