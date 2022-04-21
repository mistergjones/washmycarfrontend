import React, { useState, useEffect } from "react";
import "./PastJobs.css";

import OwnerConfirmsCarWashModal from "../../../Modals/OwnerConfirmsCarWashModal";

import useApi from "../../../../hooks/useApi";
import bookingsApi from "../../../../api/bookings";

export default function PastJobs(props) {
    const data = props.infoToPass;

    const [showModal, setShowModal] = useState(false);
    const [isThereDataToShow, SetIsThereDataToShow] = useState(false);
    const [carPhotoToShow, setCarPhotoToShow] = useState(null);

    const { request: updateBookingOwnerConfirmsCompleted } = useApi(
        bookingsApi.updateBookingOwnerConfirmsCompleted
    );

    const { request: updateBookingOwnerMakesPayment } = useApi(
        bookingsApi.updateBookingOwnerMakesPayment
    );

    const ownerMakesPayment = async (e) => {
        console.log("WHAT IS HERE", e.target.value);
        var data = {
            booking_id: e.target.value,
        };

        const result = await updateBookingOwnerMakesPayment(data);

        console.log("THE RESULT IS", result);
    };

    const showJobModal = (e) => {
        setCarPhotoToShow(e.target.value);
        setShowModal(true);
    };

    // if washer accepts, update the booking
    const onAccept = async () => {
        // grab the photo name and update the query based on that

        const result = await updateBookingOwnerConfirmsCompleted(
            carPhotoToShow
        );

        setShowModal(false);
    };

    useEffect(() => {
        if (props.infoToPass.length == 0) {
            SetIsThereDataToShow(false);
        } else {
            SetIsThereDataToShow(true);
        }
        return () => {};
    }, []);

    return (
        <div className="past-jobs-container">
            <h3>Your Washed Vehicle History</h3>

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
                    {isThereDataToShow &&
                        data.map((historialRowItem, index) => (
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
                                            historialRowItem.washer_completed_proof
                                        }
                                        value2={historialRowItem.booking_id}
                                        onClick={showJobModal}
                                    >
                                        View
                                    </button>
                                </td>
                                <td>
                                    {historialRowItem.has_owner_paid ? (
                                        <button
                                            className="btn btn-primary"
                                            // id={
                                            //     historialRowItem.stripeaccountid
                                            // }
                                            // value={
                                            //     historialRowItem.service_stripe_fee_id
                                            // }
                                            // onClick={handlePayment}
                                        >
                                            Paid
                                        </button>
                                    ) : (
                                        <button
                                            // className="btn btn-primary"
                                            // id={
                                            //     historialRowItem.stripeaccountid
                                            // }
                                            // value={
                                            //     historialRowItem.service_stripe_fee_id
                                            // }
                                            // onClick={handlePayment}
                                            className="btn btn-primary"
                                            value={historialRowItem.booking_id}
                                            onClick={ownerMakesPayment}
                                        >
                                            Pay Now
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {showModal && (
                <OwnerConfirmsCarWashModal
                    show={showModal}
                    data={carPhotoToShow}
                    onClose={() => setShowModal(false)}
                    onAccept={onAccept}
                />
            )}
        </div>
    );
}
