import React, { useState, useContext } from "react";
import "./NewBooking.css";

import useApi from "../../hooks/useApi";
import bookingsApi from "../../api/bookings";
import AuthContext from "../../context/authContext";

export default function NewBooking() {
    const { user, setUser } = useContext(AuthContext);

    // establish object for all Form Inputs
    const [formInputs, setformInputs] = useState({
        whatVehicle: "",
        whatDate: "",
        whatTime: "",
        whatInstructions: "",
        credential_id: user.credential_id,
    });

    // establish which specific API function we are invoking
    const { request: postNewBooking } = useApi(bookingsApi.insertNewBooking);
    // need to obtain the owner id so we can update the booking with it.

    const handleChange = (event) => {
        const inputName = event.target.name;

        setformInputs({
            ...formInputs,
            [inputName]: event.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await postNewBooking(formInputs);

            // console.log("Inserting a New Booking", response);
        } catch (error) {
            console.log("There was an error inserting a booking", error);
        }
    };

    return (
        <div>
            {/* <h3>This is the new booking form</h3> */}

            <form className="new-booking-form-container" action="">
                <h3>Create your new car wash session</h3>
                <div className="form-group">
                    <label htmlFor="whatVehicle">For which Vehicle?</label>
                    <input
                        type="text"
                        className="form-control"
                        id="whatVehicle"
                        name="whatVehicle"
                        placeholder="Which Vehicle"
                        onChange={handleChange}
                        value={formInputs.whatVehicle}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="whatDate">On what Date?</label>
                    <input
                        type="date"
                        className="form-control"
                        id="whatDate"
                        name="whatDate"
                        placeholder="Example input"
                        onChange={handleChange}
                        value={formInputs.whatDate}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">
                        For what time?
                    </label>
                    <input
                        className="form-control"
                        type="time"
                        id="whatTime"
                        name="whatTime"
                        min="08:00"
                        max="18:00"
                        required
                        onChange={handleChange}
                        value={formInputs.whatTime}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="whatInstructions">
                        Any Special Instructions?
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="whatInstructions"
                        name="whatInstructions"
                        onChange={handleChange}
                        value={formInputs.whatInstructions}
                    />
                </div>
                <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}
