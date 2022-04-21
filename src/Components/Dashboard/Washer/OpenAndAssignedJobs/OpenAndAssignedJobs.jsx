import React, { useState, useEffect } from "react";
import "./OpenAndAssignedJobs.css";

import ViewJobModal from "../../../Modals/ViewJobModal";
import UploadPhotoModal from "../../../Modals/UploadPhotoModal";
import FormatTimeForDisplay from "../../../../Helpers/FormatTimeForDisplay";

// used for calculating geo distances
import * as geokit from "geokit";

export default function OpenAndAssignedJobs(props) {
    let data = props.data;
    let washerGeoLocation = props.washerInfo;

    // require the time to be in a human format display
    data = FormatTimeForDisplay(data);

    const [showModal, setShowModal] = useState(false);
    const [booking_id, setBooking_id] = useState("");
    const [modalData, setModalData] = useState({});
    const [showCompleteButton, setShowCompleteButton] = useState(null);
    const [uploadPhotoModal, setUploadPhotoModal] = useState(null);

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

    const updateJobWithPhoto = (e) => {
        console.log("Booking ID", e.target.value);

        // 1.0 uploading photo to Cloudinary
        setUploadPhotoModal(true);

        // 2.0 updating the database with relevant details
        setBooking_id(e.target.value);
    };

    // if washer accepts, update the booking
    const onAccept = () => {
        console.log("ACCEPTED");
        setShowModal(false);
    };

    const determineWhichButton = (historicalStartTime) => {
        var currentDate = new Date().getTime();
        var fiveMinutesInMilliseconds = 300000;

        if (currentDate + fiveMinutesInMilliseconds < historicalStartTime)
            return true;
    };

    return (
        <div>
            <div className="open-assigned-jobs-container">
                <h3>Your upcoming assigned jobs</h3>

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
                                <td>{historialRowItem.humanTime}</td>
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
                                            onClick={updateJobWithPhoto}
                                        >
                                            &nbsp;&nbsp;&nbsp;&nbsp;Update&nbsp;&nbsp;&nbsp;&nbsp;
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
                {uploadPhotoModal && (
                    <UploadPhotoModal
                        show={uploadPhotoModal}
                        info={modalData}
                        onClose={() => setUploadPhotoModal(false)}
                        onAccept={onAccept}
                        booking_id={booking_id}
                    />
                )}
            </div>
        </div>
    );
}
