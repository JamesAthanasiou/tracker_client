import { Link } from "@tanstack/react-router";
import LogoutButton from "./LogoutButton";
import { isAuthenticated } from "../services/auth";

      
export default function Navbar() {
    return (
        <>
            <div className="p-2 flex gap-2 main-nav">
                { isAuthenticated() ? (
                    <>
                        <Link to="/" className="[&.active]:font-bold">
                            Home
                        </Link>{' '}
                        <Link to="/about" className="[&.active]:font-bold">
                            About
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