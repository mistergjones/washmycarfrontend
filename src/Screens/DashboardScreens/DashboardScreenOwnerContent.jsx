import React, { useContext, useState, useEffect } from "react";
import "./DashboardScreenOwnerContent.css";
import useApi from "../../hooks/useApi";
import bookingsApi from "../../api/bookings";

import AuthContext from "../../context/authContext";
import EditProfile from "../../Components/Dashboard/Owner/Profile/EditProfile";
import PastJobs from "../../Components/Dashboard/Owner/PastJobs/PastJobs";
import OpenAssignedJobs from "../../Components/Dashboard/Owner/OpenAndAssignedJobs/OpenAssignedJobs";

export default function DashboardScreenOwnerContent() {
    const { user, setUser } = useContext(AuthContext);

    // const [assignedBookings, setAssignedBookings] = useState({});
    const [completedBookings, setCompletedBookings] = useState({});
    // const [openBookings, setOpenBookings] = useState({});
    const [openAssignedData, setOpenAssignedData] = useState({});

    const [isDataLoaded, setIsDataLoaded] = useState(null);

    const { request: getOwnerCompletedJobs } = useApi(
        bookingsApi.getAllOwnerCompletedJobs
    );

    const { request: getOwnerAssignedBookings } = useApi(
        bookingsApi.getOwnerAssignedBookings
    );
    const { request: getOwnerOpenBookings } = useApi(
        bookingsApi.getOwnerOpenBookings
    );

    const getData = async () => {
        try {
            // get the completed jobs
            const result = await getOwnerCompletedJobs(user);
            setCompletedBookings(result.data);
            // get the assigned jobds
            const result2 = await getOwnerAssignedBookings(user);
            // setAssignedBookings(result2.data);
            // get the open jobs
            const result3 = await getOwnerOpenBookings(user);
            // setOpenBookings(result3);

            const combinedInfo = result2.data.concat(result3.data);
            setOpenAssignedData(combinedInfo);

            setIsDataLoaded(true);
        } catch (error) {
            console.log(
                "Error with retrieveing Owner Completed / Assigned Jobs",
                error
            );
        }
    };

    useEffect(() => {
        getData();

        return () => {};
    }, [isDataLoaded]);

    return (
        <div className="dsoc-container">
            <h5>Dashboard Screen Content</h5>

            <h3>The user tyoe is:{user.type}</h3>

            <EditProfile />
            {isDataLoaded && <PastJobs infoToPass={completedBookings} />}
            {isDataLoaded && <OpenAssignedJobs infoToPass={openAssignedData} />}
        </div>
    );
}
