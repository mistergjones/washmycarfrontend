import React from "react";
import "./SuccessModal.css";

export default function SuccessModal(props) {
    return (
        <div className="modalBox">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title">Successfully Completed</h1>
                </div>

                <div className="modal-body">
                    Feel free to close this message
                </div>

                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={props.onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
