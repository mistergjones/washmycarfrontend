import React from "react";
import "./CompletedJobs.css";

export default function CompletedJobs(props) {
    const data = props.data;

    return (
        <div className="completed-jobs-container">
            <h3>WASHER FINISHED JOBS</h3>

            <table className="table table-striped table-hover fixed_header">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Washed</th>
                        <th>Fee</th>
                        <th>Suburb</th>
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
                            <td>{historialRowItem.suburb}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    // onClick={handleCancel}
                                    value={
                                        historialRowItem.washerCompletedProof
                                    }
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
