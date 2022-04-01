import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext";
import routes from "../../Routes/routes";
import storageService from "../../storage/localStorage";
import "./HeaderNavigation.css";

export default function HeaderNavigation() {
    // GJ: the below is not working
    const { user, setUser } = useContext(AuthContext);
    const type = !user ? null : user.type;

    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to={routes.HOME}>Home</NavLink>
                </li>

                {type === "O" && user.is_profile_established && (
                    <li>
                        <NavLink to={routes.DASHBOARD_OWNER}>Dashboard</NavLink>
                    </li>
                )}
                {type === "O" && user.is_profile_established && (
                    <li>
                        <NavLink to={routes.CREATE_BOOKINGS_OWNER}>
                            Create Booking
                        </NavLink>
                    </li>
                )}

                {type === "W" && user.is_profile_established && (
                    <li>
                        <NavLink to={routes.DASHBOARD_WASHER}>
                            Dashboard
                        </NavLink>
                    </li>
                )}

                {type === "W" && user.is_profile_established && (
                    <li>
                        <NavLink to={routes.NEW_LISTINGS}>
                            View Open Listings
                        </NavLink>
                    </li>
                )}

                {!user && (
                    <li>
                        <NavLink to={routes.SIGNUP}>SignUp</NavLink>
                    </li>
                )}
                {!user ? (
                    <li>
                        <NavLink to={routes.LOGIN}> Login</NavLink>
                    </li>
                ) : (
                    <li>{user.email}</li>
                )}
                {user && (
                    <li>
                        <NavLink
                            to={routes.HOME}
                            onClick={() => {
                                storageService.removeToken();
                                setUser(null);
                            }}
                        >
                            Logout
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
}
