import React, { useEffect, useState } from "react";
import "./OpenAssignedJobs.css";
import FormatTimeForDisplay from "../../../../Helpers/FormatTimeForDisplay";

export default function OpenAssignedJobs(props) {
    var data = props.infoToPass;
    const [isThereDataToShow, SetIsThereDataToShow] = useState(false);

    // require the time to be in a human format display
    data = FormatTimeForDisplay(data);

    useEffect(() => {
        if (props.infoToPass.length == 0) {
            SetIsThereDataToShow(false);
        } else {
            SetIsThereDataToShow(true);
        }
        return () => {};
    }, []);

    return (
        <div className="open-assigned-jobs-container">
            <h3>Your Open and Assigned Appointments</h3>

            <table className="table table-striped table-hover fixed_header">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Washing Your</th>
                        <th>Paying</th>
                        <th>Washer Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {isThereDataToShow &&
                        data.map((historialRowItem, index) => (
                            <tr key={index}>
                                <td>{historialRowItem.date}</td>
                                <td>{historialRowItem.humanTime}</td>
                                <td>
                                    {!historialRowItem.service_type
                                        ? "N/a"
                                        : historialRowItem.service_type}
                                </td>
                                <td>
                                    {!historialRowItem.service_fee
                                        ? "$0"
                                        : "$" + historialRowItem.service_fee}
                                </td>

                                <td>
                                    {historialRowItem.firstname === null
                                        ? "Not Assigned"
                                        : historialRowItem.firstname +
                                          " " +
                                          historialRowItem.lastname}
                                </td>
                                <td>{historialRowItem.booking_status}</td>

                                <td>
                                    {historialRowItem.firstname !== null ? (
                                        <button
                                            className="btn btn-primary"
                                            // onClick={handleCancel}
                                            value={historialRowItem.booking_id}
                                        >
                                            Cancel
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-grey"
                                            disabled={true}
                                        >
                                            N/a
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
