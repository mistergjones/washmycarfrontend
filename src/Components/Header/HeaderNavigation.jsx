import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext";
import routes from "../../Routes/routes";
import storageService from "../../storage/localStorage";
import "./HeaderNavigation.css";

export default function HeaderNavigation() {
    // GJ: the below is not working
    // const { user, setUser } = useContext(AuthContext);

    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to={routes.HOME}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={routes.LOGIN}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={routes.SIGNUP}>Sign Up</NavLink>
                </li>
            </ul>
        </div>
    );
}
