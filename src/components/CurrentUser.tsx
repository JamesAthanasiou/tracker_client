import { useContext } from "react";
import { UserContext } from "../app-context/user-context";
import { isAuthenticated } from "../services/auth";

export default function CurrentUser() {
    const { user } = useContext(UserContext)

    return (
        <div>
            { isAuthenticated() ? (
                user!.username
            ) : (
                'Not logged in'
            )}
        </div>
    )
}
