import React from "react";

export default function ViewJobModal(props) {
    return (
        <div>
            <div className="modalBox">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title">View Job Modal</h1>
                    </div>

                    <div className="modal-body">
                        <div>
                            <h5>
                                Owner Name: {props.info.firstname}{" "}
                                {props.info.lastname}{" "}
                            </h5>
                        </div>
                        <div>
                            <h5>Vehicle to be washed</h5>
                            <img
                                src={props.info.car_photo}
                                width="50%"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-primary"
                            onClick={props.onClose}
                        >
                            Close
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={props.onAccept}
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
