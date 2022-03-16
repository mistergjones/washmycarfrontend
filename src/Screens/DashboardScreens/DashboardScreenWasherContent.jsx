import React, { useContext, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import bookingsApi from "../../api/bookings";
import "./DashboardScreenWasherContent.css";

import AuthContext from "../../context/authContext";
import CompletedJobs from "../../Components/Dashboard/Washer/CompletedJobs/CompletedJobs";
import OpenAndAssignedJobs from "../../Components/Dashboard/Washer/OpenAndAssignedJobs/OpenAndAssignedJobs";

export default function DashboardScreenWasherContent() {
    const { user, setUser } = useContext(AuthContext);
    const [assignedBookings, setAssignedBookings] = useState({});
    const [completedBookings, setCompletedBookings] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const { request: getWasherCompletedJobs } = useApi(
        bookingsApi.getAllWasherCompletedJobs
    );

    const { request: getAssignedBookings } = useApi(
        bookingsApi.getAssignedBookings
    );

    useEffect(() => {
        // get all open and assigned bookings
        const getWasherAssignedCompletedJobs = async () => {
            try {
                const completedJobs = await getWasherCompletedJobs(user);
                setCompletedBookings(completedJobs.data);

                const openAssignedJobs = await getAssignedBookings(user);
                setAssignedBookings(openAssignedJobs.data);

                setIsDataLoaded(true);
            } catch (error) {
                console.log("WHAT IS HAPPENIG HERE", error);
            }
        };

        getWasherAssignedCompletedJobs();
    }, [isDataLoaded]);

    // need to obtain a list of all open and assigned bookings

    return (
        <div className="dsoc-container">
            <h5>Dashboard Screen Content</h5>

            <h3>The user tyoe is:{user.type}</h3>

            {isDataLoaded && <CompletedJobs data={completedBookings} />}
            {isDataLoaded && <OpenAndAssignedJobs data={assignedBookings} />}
        </div>
    );
}
