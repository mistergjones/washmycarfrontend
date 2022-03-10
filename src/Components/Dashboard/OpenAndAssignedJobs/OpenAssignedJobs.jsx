import React from "react";
import "./OpenAssignedJobs.css";

export default function OpenAssignedJobs({ data2, handleCancel }) {
    const data = [
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "1",
        },
        {
            date: "01/02/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "2",
        },
        {
            date: "01/03/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "3",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",

            firstname: "Glen",
            lastname: "Jones",
            booking_id: "4",
        },
    ];

    return (
        <div className="open-assigned-jobs-container">
            <h3>Open and ASsigned Jobs</h3>

            <table className="table table-striped table-hover fixed_header">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Service</th>
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
                            <td>{historialRowItem.service_type}</td>

                            <td>
                                {historialRowItem.firstname +
                                    " " +
                                    historialRowItem.lastname}
                            </td>
                            <td></td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    // onClick={handleCancel}
                                    value={historialRowItem.booking_id}
                                >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
