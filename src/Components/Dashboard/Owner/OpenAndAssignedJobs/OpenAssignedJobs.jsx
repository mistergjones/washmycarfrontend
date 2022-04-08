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
                        <th>Paying</th>
                        <th>Washer Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((historialRowItem, index) => (
                        <tr key={index}>
                            <td>{historialRowItem.date}</td>
                            <td>{historialRowItem.start_time}</td>
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
