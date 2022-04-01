import React from "react";

export default function ViewJobModal(props) {
    console.log("View Job Modal -> Props are: ", props);
    return (
        <div>
            <div className="modalBox">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title">View Job Modal</h1>
                    </div>

                    <div className="modal-body">
                        Feel free to close this message
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
