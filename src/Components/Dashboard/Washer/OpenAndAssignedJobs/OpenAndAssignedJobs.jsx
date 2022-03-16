import React from "react";

export default function OpenAndAssignedJobs(props) {
    let data = props.data;

    return (
        <div>
            <div className="open-assigned-jobs-container">
                <h3>WASHER - Upcoming Assigned Jobs</h3>

                <table className="table table-striped table-hover fixed_header">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>Washing</th>
                            <th>Fee</th>
                            <th>Status</th>
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
                                <td>{historialRowItem.service_fee}</td>
                                <td>{historialRowItem.booking_status}</td>

                                <td></td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        // onClick={handleCancel}
                                        value={historialRowItem.booking_id}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
