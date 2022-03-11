import React from "react";

export default function OpenAndAssignedJobs() {
    const data = [
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            booking_id: "1",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            booking_id: "1",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            booking_id: "1",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            booking_id: "1",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            booking_id: "1",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            booking_id: "1",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            booking_id: "1",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            booking_id: "1",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            booking_id: "1",
        },
    ];

    return (
        <div>
            <div className="open-assigned-jobs-container">
                <h3>WASHER - Open And Assigned Jobs</h3>

                <table className="table table-striped table-hover fixed_header">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>Service</th>
                            <th>Fee</th>
                            <th></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((historialRowItem, index) => (
                            <tr key={index}>
                                <td>{historialRowItem.date}</td>
                                <td>{historialRowItem.start_time}</td>
                                <td>{historialRowItem.service_type}</td>

                                <td>{historialRowItem.fee}</td>
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
