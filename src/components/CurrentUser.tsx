import { useContext } from "react";
import { UserContext } from "../app-context/user-context";

export default function CurrentUser() {
    const { user } = useContext(UserContext)

    return (
        <div>
            {user?.username || 'Not logged in'}
        </div>
    )
}
