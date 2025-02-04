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
            <div className="main-nav">
                { isAuthenticated() && !!user ? (
                    <>
                    <div  className="links">
                        <Link to="/" className="[&.active]:font-bold">
                            Home
                        </Link>{' '}
                        <Link to="/person" className="[&.active]:font-bold">
                            People
                        </Link>{' '}
                        {/* <Link to="/groups" className="[&.active]:font-bold">
                            Groups
                        </Link>{' '}
                        <Link to="/schedule" className="[&.active]:font-bold">
                            Schedule
                        </Link>{' '} */}
                        <Link to="/gamer" className="[&.active]:font-bold">
                            Gamer
                        </Link>{' '}
                    </div>
                        
                        {'   '}
                        <LogoutButton />
                    </>
                ) : (
                    <Link to="/login" className="[&.active]:font-bold">
                        Login
                    </Link>
                    // TODO signup
                )}
            </div>
        </>
                
    )
}