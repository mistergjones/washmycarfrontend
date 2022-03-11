import React from "react";
import "./CompletedJobs.css";

export default function CompletedJobs() {
    const data = [
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            viewResult: "http://www.news.com.au",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            viewResult: "http://www.news.com.au",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            viewResult: "http://www.news.com.au",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            viewResult: "http://www.news.com.au",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            viewResult: "http://www.news.com.au",
        },
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            fee: "10.00",
            viewResult: "http://www.news.com.au",
        },
    ];
    return (
        <div className="completed-jobs-container">
            <h3>WASHER COMPLETED JOBS</h3>

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
                                    value={historialRowItem.viewResult}
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
