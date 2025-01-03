import { Link } from "@tanstack/react-router";
import LogoutButton from "./LogoutButton";
import { isAuthenticated } from "../services/auth";
import { useContext } from "react";
import { UserContext } from "../app-context/user-context";
      
export default function Navbar() {
    // TODO, unify isAuthenticated, which checks we have a token, and UserContext, the context for triggering rerenders.
    const { user } = useContext(UserContext)

    return (
        <>
            <div className="p-2 flex gap-2 main-nav">
                { isAuthenticated() && !!user ? (
                    <>
                        <Link to="/" className="[&.active]:font-bold">
                            Home
                        </Link>{' '}
                        <Link to="/about" className="[&.active]:font-bold">
                            About
                        </Link>{' '}
                        <Link to="/gamer" className="[&.active]:font-bold">
                            Gamer
                        </Link>{' '}
                        <Link to="/friends" className="[&.active]:font-bold">
                            Friends
                        </Link>
                        {' '}
                        <LogoutButton />
                    </>
                ) : (
                    <Link to="/login" className="[&.active]:font-bold">
                        Login
                    </Link>
                    // TODO signup
                )}
            </div>
            <hr />
        </>
                
    )
}