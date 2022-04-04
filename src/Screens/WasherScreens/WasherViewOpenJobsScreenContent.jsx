import React, { useState, useEffect, useContext } from "react";
import ShowOpenListings from "../../Components/Listings/ShowOpenListings";

import routes from "../../Routes/routes";

import useApi from "../../hooks/useApi";
import bookingsApi from "../../api/bookings";
import washersApi from "../../api/washers";
import AuthContext from "../../context/authContext";
import jwtService from "../../storage/jwt";
import ProfileRedirect from "../../ProfileRedirect/ProfileRedirect";

export default function WasherViewOpenJobsScreenContent() {
    const { user, setUser } = useContext(AuthContext);
    const [allListings, setAllListings] = useState(null);
    const [allWasherInfo, setAllWasherInfo] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(null);
    const [isWasherLoaded, setIsWasherLoaded] = useState(false);

    const { request: getOpenBookings } = useApi(bookingsApi.getOpenBookings);

    const { request: getWasherDetails } = useApi(washersApi.getCurrentWasher);

    const getOpenListings = async () => {
        try {
            const result = await getOpenBookings();

            var aa = result.data;
            aa.forEach((record) => {
                record["lat"] = Number(record.lat);
                record["lng"] = Number(record.lng);
                record["geolocation"] = {
                    lat: Number(record.lat),
                    lng: Number(record.lng),
                };
            });

            setAllListings(aa);
            setIsDataLoaded(true);
        } catch (error) {}
    };

    // need to get the lat and lng from the washer to calculate distance
    const getWasherLatLng = async () => {
        try {
            const result = await getWasherDetails(user);

            let tempLatLngData = {
                lat: Number(result.data[0].lat),
                lng: Number(result.data[0].lng),
            };
            setAllWasherInfo(tempLatLngData);
            setIsWasherLoaded(true);
        } catch (error) {}
    };

    useEffect(() => {
        getWasherLatLng();
        getOpenListings();

        return () => {};
    }, []);

    return (
        <div>
            <h3>Washer can view jobs screen</h3>asd
            {isDataLoaded && isWasherLoaded && (
                <ShowOpenListings
                    data={allListings}
                    washerInfo={allWasherInfo}
                />
            )}
        </div>
    );
}
