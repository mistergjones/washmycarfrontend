import React from "react";
import "./OpenAssignedJobs.css";

export default function OpenAssignedJobs(props) {
    const data = props.infoToPass;

    return (
        <div className="open-assigned-jobs-container">
            <h3>Open and ASsigned Jobs</h3>

            <table className="table table-striped table-hover fixed_header">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Washing Your</th>
                        <th>Washer Name</th>
                        <th></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((historialRowItem, index) => (
                        <tr key={index}>
                            <td>{historialRowItem.date}</td>
                            <td>{historialRowItem.start_time}</td>
                            <td>{historialRowItem.vehicle_type}</td>

                            <td>
                                {historialRowItem.firstname === null
                                    ? "Not Assigned"
                                    : historialRowItem.firstname +
                                      " " +
                                      historialRowItem.lastname}
                            </td>
                            <td></td>
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
