import React, { useState, useEffect } from "react";

import ViewJobModal from "../../../Modals/ViewJobModal";
// used for calculating geo distances
import * as geokit from "geokit";

export default function OpenAndAssignedJobs(props) {
    let data = props.data;
    let washerGeoLocation = props.washerInfo;

    const [showModal, setShowModal] = useState(false);
    const [booking_id, setBooking_id] = useState("");
    const [modalData, setModalData] = useState({});
    const [showCompleteButton, setShowCompleteButton] = useState(null);

    const showJobModal = (e) => {
        setBooking_id(e.target.value);

        // filter the data based on the e.target.value
        // filtered array
        var requiredBooking = data.filter(
            (item) => item.booking_id == e.target.value
        );

        // create a data object so it can be passed into the component in correct format
        var tempDataObjForViewModal = {
            firstname: requiredBooking[0].firstname,
            lastname: requiredBooking[0].lastname,
            car_photo: requiredBooking[0].car_photo,
        };

        // need to put it in an object
        setModalData(tempDataObjForViewModal);
        setShowModal(true);
    };

    // if washer accepts, update the booking
    const onAccept = () => {
        console.log("ACCEPTED");
        setShowModal(false);
    };

    const determineWhichButton = (historicalDate, historicalStartTime) => {
        var currentDate = new Date().toLocaleDateString();
        var aa = currentDate.split("/").reverse();
        console.log("Current date", aa);
        console.log("Database DAte", historicalDate.split("-"));

        var currentTime = new Date().toLocaleTimeString();

        // console.log("Historical date", historicalDate);

        var hg = new Date().toLocaleDateString();

        //console.log("Current time in milliseconds", new Date().getTime());

        var datahour = parseInt(historicalStartTime.slice(0, 2));
        var dataminute = parseInt(historicalStartTime.slice(3, 5));

        var currentHour = parseInt(currentTime.slice(0, 2));
        var currentMinute = parseInt(currentTime.slice(3, 5));
        // console.log("Current Time", currentHour, currentMinute + 10);

        var dataTotalMinutes = datahour * 60 + dataminute;
        var currentTotalMinutes = currentHour * 60 + currentMinute;

        if (currentTotalMinutes + 5 < dataTotalMinutes) return true;
    };

    return (
        <div>
            <div className="open-assigned-jobs-container">
                <h3>WASHER - Upcoming Assigned Jobs</h3>

                <table className="table table-striped table-hover fixed_header">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>Vehicle</th>
                            <th>Earning</th>
                            {/* <th>Status</th> */}
                            <th>Distance (km)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((historialRowItem, index) => (
                            <tr key={index}>
                                <td>{historialRowItem.date}</td>
                                <td>{historialRowItem.start_time}</td>
                                <td>{historialRowItem.service_type}</td>
                                <td>{historialRowItem.service_fee}</td>
                                {/* <td>{historialRowItem.booking_status}</td> */}
                                <td>
                                    {Number(
                                        geokit
                                            .distance(
                                                washerGeoLocation,
                                                historialRowItem.geolocation
                                            )
                                            .toFixed(2)
                                    )}
                                </td>

                                <td>
                                    {determineWhichButton(
                                        historialRowItem.date,
                                        historialRowItem.start_time
                                    ) ? (
                                        <button
                                            className="btn btn-primary"
                                            // onClick={handleCancel}
                                            value={historialRowItem.booking_id}
                                            onClick={showJobModal}
                                        >
                                            View Details
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-warning"
                                            // onClick={handleCancel}
                                            value={historialRowItem.booking_id}
                                            onClick={showJobModal}
                                        >
                                            Complete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showModal && (
                    <ViewJobModal
                        show={showModal}
                        info={modalData}
                        onClose={() => setShowModal(false)}
                        onAccept={onAccept}
                    />
                )}
            </div>
        </div>
    );
}
