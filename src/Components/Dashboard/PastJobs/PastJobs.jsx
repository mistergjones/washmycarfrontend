import React from "react";
import "./PastJobs.css";
export default function PastJobs(props) {
    const data = [
        {
            date: "01/01/22",
            start_time: "10 am",
            service_type: "Car",
            service_fee: "$10",
            firstname: "Glen",
            lastname: "Jones",
            walk_completed_proof: "https://www.theage.com.au",
            stripeaccountid: "stripeacctID",
            service_stripe_fee_id: "asdfaf23424",
        },
        {
            date: "01/02/22",
            start_time: "10 am",
            service_type: "Car",
            service_fee: "$10",
            firstname: "Glen",
            lastname: "Jones",
            walk_completed_proof: "https://www.theage.com.au",
            stripeaccountid: "stripeacctID",
            service_stripe_fee_id: "asdfaf23424",
        },
        {
            date: "01/03/22",
            start_time: "10 am",
            service_type: "Car",
            service_fee: "$10",
            firstname: "Glen",
            lastname: "Jones",
            walk_completed_proof: "https://www.theage.com.au",
            stripeaccountid: "stripeacctID",
            service_stripe_fee_id: "asdfaf23424",
        },
        {
            date: "01/04/22",
            start_time: "10 am",
            service_type: "Car",
            service_fee: "$10",
            firstname: "Glen",
            lastname: "Jones",
            walk_completed_proof: "https://www.theage.com.au",
            stripeaccountid: "stripeacctID",
            service_stripe_fee_id: "asdfaf23424",
        },
    ];

    return (
        <div className="past-jobs-container">
            <h3>This is the Past Jobs Compoennt</h3>

            <table className="">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Service</th>
                        <th>Service Fee</th>
                        <th>Washer Name</th>
                        <th>Result</th>
                        <th>Pay Washer</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((historialRowItem, index) => (
                        <tr key={index}>
                            <td>{historialRowItem.date}</td>
                            <td>{historialRowItem.start_time}</td>
                            <td>{historialRowItem.service_type}</td>
                            <td>{historialRowItem.service_fee}</td>
                            <td>
                                {historialRowItem.firstname +
                                    " " +
                                    historialRowItem.lastname}
                            </td>
                            <td>
                                <button
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
