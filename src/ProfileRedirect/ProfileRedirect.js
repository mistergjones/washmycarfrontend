/**
 * This is designed to check if there is a user and determine
 * if they have a profile. If they have a profile they will be
 * redirected to dashboard otherwise go to profile screen.
 *
 * If there is no user retuns null doesn't do anything.
 *
 */

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import routes from "../Routes/routes";

function ProfileRedirect(props) {
    const { user } = useContext(AuthContext);
    // console.log("user profile rediderct = ", user);
    if (user && user.type === "O") {
        return user.hasProfile ? (
            <Navigate to={routes.DASHBOARD_OWNER} />
        ) : (
            <Navigate to={routes.PROFILE_OWNER} />
        );
    }
    if (user && user.type === "W") {
        return user.hasProfile ? (
            <Navigate to={routes.DASHBOARD_WASHER} />
        ) : (
            <Navigate to={routes.PROFILE_WASHER} />
        );
    }

    return null;
}

export default ProfileRedirect;
