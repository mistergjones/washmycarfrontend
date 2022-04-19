import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ViewJobModal from "../Modals/ViewJobModal";

import useApi from "../../hooks/useApi";
import bookingsApi from "../../api/bookings";
import AuthContext from "../../context/authContext";
import routes from "../../Routes/routes";
import FormatTimeForDisplay from "../../Helpers/FormatTimeForDisplay";

// used for calculating geo distances
import * as geokit from "geokit";

export default function ShowOpenListings(props) {
    // 1.0 get open booking data
    var data = props.data;

    // require the time to be in a human format display
    data = FormatTimeForDisplay(data);

    // Washer LAT LNT into an Object
    const washerLatLngDataObj = props.washerInfo;

    const navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false);
    const [booking_id, setBooking_id] = useState("");
    const [displayData, setDisplayData] = useState({});
    const [updatedRow, setUpdatedRow] = useState(false);

    const { request: updateBookingWithWasher } = useApi(
        bookingsApi.updateBookingWithAssignedWasher
    );

    const showJobModal = (e) => {
        setBooking_id(e.target.value);
        const dataObj = {};
        // For the View Modal itself, loop through data on booking_id and create an object just for that booking ID
        data.forEach((item) => {
            for (let key in item) {
                if (item[key] == e.target.value) {
                    dataObj["firstname"] = item["firstname"];
                    dataObj["lastname"] = item["lastname"];
                    dataObj["car_photo"] = item["car_photo"];
                }
            }
        });
        setDisplayData(dataObj);

        // need to only provide the lastname, firstname, photo to show in the modal based on booking_id
        setShowModal(true);
    };

    // if washer accepts, update the booking
    const onAccept = async (e) => {
        const requiredInfoObj = {
            washer_id: props.washer_id,
            booking_id: booking_id,
        };

        try {
            // 1.0 need to update the database
            const result = await updateBookingWithWasher(requiredInfoObj);

            if (result.data.rowCount == 1) {
                setUpdatedRow(true);
            }
        } catch (error) {
            console.log(
                "Error in updating a Booking with Washer Information",
                error
            );
        }

        setShowModal(false);
    };

    useEffect(() => {
        if (updatedRow === true) {
            navigate(routes.DASHBOARD_WASHER);
        }

        return () => {};
    }, [updatedRow]);

    return (
        <>
            <div>
                <h3>Open Listings here</h3>
            </div>

            <div>
                <h1>This is where all the open listings go</h1>

                <table className="table table-striped table-hover fixed_header">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>Needs Washing</th>
                            <th>Fee</th>
                            <th>Suburb</th>
                            <th>Distance (km)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((openListingItem, index) => (
                            <tr key={index}>
                                <td>{openListingItem.date}</td>
                                <td>{openListingItem.humanTime}</td>
                                <td>{openListingItem.vehicle_type}</td>

                                <td>{openListingItem.service_fee}</td>
                                <td>{openListingItem.suburb}</td>
                                <td>
                                    {Number(
                                        geokit
                                            .distance(
                                                washerLatLngDataObj,
                                                openListingItem.geolocation
                                            )
                                            .toFixed(2)
                                    )}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        // onClick={handleCancel}
                                        value={openListingItem.booking_id}
                                        onClick={showJobModal}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showModal && (
                    <ViewJobModal
                        show={showModal}
                        data={booking_id}
                        onClose={() => setShowModal(false)}
                        onAccept={onAccept}
                        info={displayData}
                    />
                )}
            </div>
        </>
    );
}
