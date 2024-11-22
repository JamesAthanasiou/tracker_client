import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { UserContext } from "../app-context/user-context";
import LogoutButton from "./LogoutButton";

      
export default function Navbar() {
    const { user } = useContext(UserContext);

    return (
        <>
            <div className="p-2 flex gap-2 main-nav">
                {/* TODO change this to something more clear like AuthVerify */}
                { user?.username ? (
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