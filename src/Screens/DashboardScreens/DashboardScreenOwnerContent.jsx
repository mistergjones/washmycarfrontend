import React, { useContext } from "react";
import "./DashboardScreenOwnerContent.css";

import AuthContext from "../../context/authContext";
import EditProfile from "../../Components/Dashboard/Owner/Profile/EditProfile";
import PastJobs from "../../Components/Dashboard/Owner/PastJobs/PastJobs";
import OpenAssignedJobs from "../../Components/Dashboard/Owner/OpenAndAssignedJobs/OpenAssignedJobs";

export default function DashboardScreenOwnerContent() {
    const { user, setUser } = useContext(AuthContext);

    return (
        <div className="dsoc-container">
            <h5>Dashboard Screen Content</h5>

            <h3>The user tyoe is:{user.type}</h3>

            <EditProfile />
            <PastJobs />
            <OpenAssignedJobs />
        </div>
    );
}
