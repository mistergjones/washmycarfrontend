import React, { useState, useContext } from "react";
import "./UploadPhotoModal.css";

import AuthContext from "../../context/authContext";
import jwtService from "../../storage/jwt";
import axios from "axios";

import useApi from "../../hooks/useApi";
import bookingsApi from "../../api/bookings";

export default function UploadPhotoModal(props) {
    console.log("Booking ID", props.booking_id);
    const { user, setUser } = useContext(AuthContext);
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const [showCloseButton, setShowCloseButton] = useState(false);

    const [showSubmitButtonClose, setSubmitButtonClose] = useState(false);

    const { request: updateBookingThatIsWasherCompleted } = useApi(
        bookingsApi.updateBookingThatIsWasherCompleted
    );

    const uploadImage = async () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "s2g31ynm");
        data.append("cloud_name", "dwndlszzc");
        const cloudinaryResponse = await axios.post(
            "https://api.cloudinary.com/v1_1/dwndlszzc/image/upload",
            data
        );

        setUrl(cloudinaryResponse.data.secure_url);
        setImage("");
    };

    const updateBooking = async () => {
        const data = {
            washer_completed_proof: url,
            booking_id: props.booking_id,
        };
        const result = await updateBookingThatIsWasherCompleted(data);

        console.log("REsult is:", result);
        if (result.status == 200) {
            setShowCloseButton(true);
            setSubmitButtonClose(true);
        }
    };

    return (
        <div>
            <div className="modalBox">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title">
                            Upload Your Washed Vehicle Photo
                        </h1>
                    </div>

                    <div className="modal-body">
                        <div>
                            <h5>Owner Name:</h5>
                        </div>
                        <div>
                            <h5>Vehicle that was washed:</h5>
                            <label htmlFor="inputCarPhoto">
                                <input
                                    className="form-control"
                                    name="inputCarPhoto"
                                    type="file"
                                    onChange={(e) =>
                                        setImage(e.target.files[0])
                                    }
                                ></input>
                                {image && (
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={uploadImage}
                                    >
                                        Upload
                                    </button>
                                )}
                            </label>
                        </div>
                    </div>

                    <div className="modal-footer">
                        {!showCloseButton ? (
                            <button
                                className="btn btn-primary"
                                onClick={props.onClose}
                            >
                                Back
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={props.onClose}
                            >
                                Close
                            </button>
                        )}

                        {url && (
                            <button
                                className="btn btn-primary"
                                onClick={updateBooking}
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
