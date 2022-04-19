import React, { useState, useEffect } from "react";
import ViewCarModal from "../../../Modals/ViewCarModal";
import FormatTimeForDisplay from "../../../../Helpers/FormatTimeForDisplay";

import "./CompletedJobs.css";

export default function CompletedJobs(props) {
    var data = props.data.data;

    console.log("COMPLETD JOBS DTA IS", data.data);

    // require the time to be in a human format display
    if (data.data != 0) {
        data = FormatTimeForDisplay(data);
    }

    const [showModal, setShowModal] = useState(false);

    const [carPhotoToShow, setCarPhotoToShow] = useState(null);
    const [isThereDataToShow, SetIsThereDataToShow] = useState(false);

    const showJobModal = (e) => {
        // setBooking_id(e.target.value);

        setCarPhotoToShow(e.target.value);
        setShowModal(true);
    };

    // if washer accepts, update the booking
    const onAccept = () => {
        console.log("ACCEPTED");
        setShowModal(false);
    };

    useEffect(() => {
        // if there is no data, only display the headings and its box
        if (props.data.data.data == 0) {
            console.log("IS THERE DATA TO SHLOW: FALSE");
            SetIsThereDataToShow(false);
        } else {
            console.log("IS THERE DATA TO SHLOW: TRUE");
            SetIsThereDataToShow(true);
        }
        return () => {};
    }, [isThereDataToShow]);

    return (
        <div className="completed-jobs-container">
            <h3>WASHER FINISHED JOBS</h3>

            <table className="table table-striped table-hover fixed_header">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Vehicle</th>
                        <th>Income</th>
                        <th>Suburb</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {isThereDataToShow && (
                    <tbody>
                        {data.map((historialRowItem, index) => (
                            <tr key={index}>
                                <td>{historialRowItem.date}</td>
                                <td>{historialRowItem.humanTime}</td>
                                <td>{historialRowItem.service_type}</td>
                                <td>{historialRowItem.service_fee}</td>
                                <td>{historialRowItem.suburb}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        // onClick={handleCancel}
                                        value={
                                            historialRowItem.washer_completed_proof
                                        }
                                        onClick={showJobModal}
                                    >
                                        View Photo
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            {showModal && (
                <ViewCarModal
                    show={showModal}
                    data={carPhotoToShow}
                    onClose={() => setShowModal(false)}
                    onAccept={onAccept}
                />
            )}
        </div>
    );
}
