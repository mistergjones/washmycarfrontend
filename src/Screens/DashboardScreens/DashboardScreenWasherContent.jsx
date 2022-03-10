import React, { useContext } from "react";
import "./DashboardScreenWasherContent.css";

import AuthContext from "../../context/authContext";
import EditProfile from "../../Components/Dashboard/Profile/EditProfile";

export default function DashboardScreenWasherContent() {
    const { user, setUser } = useContext(AuthContext);

    return (
        <div className="dsoc-container">
            <h5>Dashboard Screen Content</h5>

            <h3>The user tyoe is:{user.type}</h3>
        </div>
    );
}
