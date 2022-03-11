import React, { useContext } from "react";
import "./DashboardScreenWasherContent.css";

import AuthContext from "../../context/authContext";
import CompletedJobs from "../../Components/Dashboard/Washer/CompletedJobs/CompletedJobs";
import OpenAndAssignedJobs from "../../Components/Dashboard/Washer/OpenAndAssignedJobs/OpenAndAssignedJobs";

export default function DashboardScreenWasherContent() {
    const { user, setUser } = useContext(AuthContext);

    return (
        <div className="dsoc-container">
            <h5>Dashboard Screen Content</h5>

            <h3>The user tyoe is:{user.type}</h3>

            <CompletedJobs />
            <OpenAndAssignedJobs />
        </div>
    );
}
