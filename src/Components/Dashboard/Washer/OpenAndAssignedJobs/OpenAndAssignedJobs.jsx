import React, { useState } from "react";

import ViewJobModal from "../../../Modals/ViewJobModal";
// used for calculating geo distances
import * as geokit from "geokit";

export default function OpenAndAssignedJobs(props) {
    let data = props.data;
    let washerGeoLocation = props.washerInfo;

    const [showModal, setShowModal] = useState(false);
    const [booking_id, setBooking_id] = useState("");
    const [modalData, setModalData] = useState({});

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
                                    <button
                                        className="btn btn-primary"
                                        // onClick={handleCancel}
                                        value={historialRowItem.booking_id}
                                        onClick={showJobModal}
                                    >
                                        View
                                    </button>
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
