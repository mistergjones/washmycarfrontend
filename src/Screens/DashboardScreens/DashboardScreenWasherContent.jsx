import React, { useContext, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import bookingsApi from "../../api/bookings";
import washersApi from "../../api/washers";
import "./DashboardScreenWasherContent.css";

import AuthContext from "../../context/authContext";
import CompletedJobs from "../../Components/Dashboard/Washer/CompletedJobs/CompletedJobs";
import OpenAndAssignedJobs from "../../Components/Dashboard/Washer/OpenAndAssignedJobs/OpenAndAssignedJobs";
import EditProfile from "../../Components/Dashboard/Washer/Profile/EditProfile";
import makeGeoLocationDataObject from "../../Helpers/geoLocationDataObject";

export default function DashboardScreenWasherContent() {
    const { user, setUser } = useContext(AuthContext);
    const [assignedBookings, setAssignedBookings] = useState({});
    const [completedBookings, setCompletedBookings] = useState({});

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const [washerGeoInfo, setWasherGeoInfo] = useState(null);

    const { request: getWasherDetails } = useApi(washersApi.getCurrentWasher);

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
                // get washer id
                const tempWasherInfo = await getWasherDetails(user);
                let tempLatLngData = {
                    lat: Number(tempWasherInfo.data[0].lat),
                    lng: Number(tempWasherInfo.data[0].lng),
                };
                setWasherGeoInfo(tempLatLngData);

                // pass the tempWasher response object directly to the query below
                const completedJobs = await getWasherCompletedJobs(
                    tempWasherInfo.data[0]
                );
                setCompletedBookings(completedJobs);

                // pass the tempWasher response object directly to the query below
                const openAssignedJobs = await getAssignedBookings(
                    tempWasherInfo.data[0]
                );

                // establish geolocation objectin the data resiults
                var geoLocationObj = makeGeoLocationDataObject(
                    openAssignedJobs
                );
                setAssignedBookings(geoLocationObj);

                setIsDataLoaded(true);

                // setIsGetOpenAssignedJobsCompleted(true);
            } catch (error) {
                console.log("WHAT IS HAPPENIG HERE", error);
            }
        };

        getWasherAssignedCompletedJobs();
    }, [isDataLoaded]);

    // need to obtain a list of all open and assigned bookings

    return (
        <div className="dsoc-container">
            {/* <h5>Dashboard Screen Content</h5>

            <h3>The user tyoe is:{user.type}</h3> */}

            <EditProfile />
            {isDataLoaded && <CompletedJobs data={completedBookings} />}
            {isDataLoaded && (
                <OpenAndAssignedJobs
                    data={assignedBookings}
                    washerInfo={washerGeoInfo}
                />
            )}
        </div>
    );
}
