import React from "react";
import "./PastJobs.css";
export default function PastJobs(props) {
    const data = props.infoToPass;

    return (
        <div className="past-jobs-container">
            <h3>This is the Past Jobs Compoennt</h3>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        {/* <th>Booked Time</th> */}
                        <th>Washed Your</th>
                        <th>Total Paid</th>
                        <th>Washer Name</th>
                        <th>Photo Proof</th>
                        <th>Paid?</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((historialRowItem, index) => (
                        <tr key={index}>
                            <td>{historialRowItem.date}</td>
                            {/* <td>{historialRowItem.start_time}</td> */}
                            <td>{historialRowItem.service_type}</td>
                            <td>{historialRowItem.service_fee + 5}</td>
                            <td>
                                {historialRowItem.firstname +
                                    " " +
                                    historialRowItem.lastname}
                            </td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    value={
                                        historialRowItem.walk_completed_proof
                                    }
                                    // onClick={viewMap}
                                >
                                    View
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    id={historialRowItem.stripeaccountid}
                                    value={
                                        historialRowItem.service_stripe_fee_id
                                    }
                                    // onClick={handlePayment}
                                >
                                    Pay
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
