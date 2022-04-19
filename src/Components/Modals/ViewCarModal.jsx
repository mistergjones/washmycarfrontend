import React from "react";

export default function ViewCardModal(props) {
    return (
        <div>
            <div className="modalBox">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title">View Car Modal</h1>
                    </div>

                    <div className="modal-body">
                        <div>
                            <h5>This is the vehicle washed</h5>
                        </div>
                        <div>
                            {/* <h5>Vehicle to be washed</h5> */}
                            <img src={props.data} width="50%" alt="" />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-primary"
                            onClick={props.onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
