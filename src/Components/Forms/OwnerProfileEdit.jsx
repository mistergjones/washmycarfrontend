import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../Routes/routes";

import useApi from "../../hooks/useApi";
import ownersApi from "../../api/owners";
import AuthContext from "../../context/authContext";
import jwtService from "../../storage/jwt";
import ProfileRedirect from "../../ProfileRedirect/ProfileRedirect";
import SuccessModal from "../Modals/SuccessModal";

// 1.o need to retrieve the current record set for the owner and display it
// 2.0 need to have the form be able to update via text fields
// 3.0 Query needs to be written to UPDATE hte record based on the ID
// 4.0 A toast / modal is raised of successful update
// 5.0 All done.

export default function OwnerProfileEdit() {
    const { user, setUser } = useContext(AuthContext);
    // const [assignedBookings, setAssignedBookings] = useState({});
    // const [completedBookings, setCompletedBookings] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [dataReceived, setDataReceived] = useState(null);

    const [firstnameChange, setFirstnameChange] = useState(false);
    const [lastnameChange, setLastnameChange] = useState(false);
    const [streetAddressChange, setStreetAddressChange] = useState(false);
    const [suburbChange, setSuburbChange] = useState(false);
    const [stateChange, setStateChange] = useState(false);
    const [postcodeChange, setPostcodeChange] = useState(false);
    const [show, setShow] = useState(false);

    // obtain the specific owner data
    const { request: getSpecificOwner } = useApi(ownersApi.getCurrentOwner);
    // update the specific owner data
    const { request: updateOwner } = useApi(ownersApi.updateOwner);

    // establish object for all Form Inputs
    const [formInputs, setformInputs] = useState({
        firstname: "",
        lastname: "",
        streetAddress: "",
        suburb: "",
        state: "",
        postcode: "",
        credential_id: user.credential_id,
    });

    useEffect(() => {
        const loadOwnerDetails = async () => {
            const response = await getSpecificOwner(user);
            setDataReceived(response.data[0]);
            setIsDataLoaded(true);
        };

        loadOwnerDetails();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("The user is: ", user);
        // need to ensure the data object is updated to not allow blank fields when attempting an UPDATE
        Object.keys(formInputs).forEach((key) => {
            // formInputs[key] = "34";
            if (key === "firstname" && formInputs[key] === "") {
                formInputs[key] = user.firstname;
            } else if (key === "lastname" && formInputs[key] === "") {
                formInputs[key] = user.lastname;
            } else if (key === "streetAddress" && formInputs[key] === "") {
                formInputs[key] = dataReceived.street_address;
            } else if (key === "suburb" && formInputs[key] === "") {
                formInputs[key] = dataReceived.suburb;
            } else if (key === "state" && formInputs[key] === "") {
                formInputs[key] = dataReceived.state;
            } else if (key === "postcode" && formInputs[key] === "") {
                formInputs[key] = dataReceived.postcode;
            }
        });

        try {
            const result = await updateOwner(formInputs);
            if (result.data.rowCount === 1) {
                // display the modal
                setShow(true);
            }
        } catch (error) {}
    };

    const inputFieldStateChanges = (inputName) => {
        if (inputName === "firstname") {
            setFirstnameChange(true);
        } else if (inputName === "lastname") {
            setLastnameChange(true);
        } else if (inputName === "streetAddress") {
            setStreetAddressChange(true);
        } else if (inputName === "suburb") {
            setSuburbChange(true);
        } else if (inputName === "state") {
            setStateChange(true);
        } else if (inputName === "postcode") {
            setPostcodeChange(true);
        }
    };

    // obtain the input name and update the value based on it
    const handleChange = (event) => {
        const inputName = event.target.name;

        // determine which field is changing.
        inputFieldStateChanges(inputName);

        setformInputs({
            ...formInputs,
            [inputName]: event.target.value,
        });
    };

    return (
        <div>
            {/* <ProfileRedirect /> */}
            <h1>This is the owner profile edit form</h1>

            {isDataLoaded && (
                <form className="su-form" method="POST">
                    <h3>Edit Owner Profile Details:</h3>
                    <div className="mb-1 row p-0 m-0">
                        <label className="form-label" htmlFor="firstname">
                            Firstname:
                        </label>
                        <input
                            className="form-control col"
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            value={
                                firstnameChange === true
                                    ? formInputs.firstname
                                    : dataReceived.firstname
                            }
                        />
                    </div>
                    <div className="mb-1 row p-0 m-0">
                        <label htmlFor="">Lastname:</label>
                        <input
                            className="form-control col"
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            value={
                                lastnameChange === true
                                    ? formInputs.lastname
                                    : dataReceived.lastname
                            }
                        />
                    </div>
                    <div className="mb-1 row p-0 m-0">
                        <label htmlFor="">Street Address</label>
                        <input
                            className="form-control col"
                            type="text"
                            name="streetAddress"
                            onChange={handleChange}
                            value={
                                streetAddressChange === true
                                    ? formInputs.streetAddress
                                    : dataReceived.street_address
                            }
                        />
                    </div>
                    <div className="mb-1 row p-0 m-0">
                        <label htmlFor="">Suburb</label>
                        <input
                            className="form-control col"
                            type="text"
                            name="suburb"
                            onChange={handleChange}
                            value={
                                suburbChange === true
                                    ? formInputs.suburb
                                    : dataReceived.suburb
                            }
                        />
                    </div>
                    <div className="mb-1 row p-0 m-0">
                        <label htmlFor="">State</label>
                        <input
                            className="form-control col"
                            type="text"
                            name="state"
                            onChange={handleChange}
                            value={
                                stateChange === true
                                    ? formInputs.state
                                    : dataReceived.state
                            }
                        />
                    </div>
                    <div className="mb-1 row p-0 m-0">
                        <label htmlFor="">Postcode</label>
                        <input
                            className="form-control col"
                            type="text"
                            name="postcode"
                            onChange={handleChange}
                            value={
                                postcodeChange === true
                                    ? formInputs.postcode
                                    : dataReceived.postcode
                            }
                        />
                    </div>

                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Update
                        </button>

                        <NavLink
                            className="btn btn-danger"
                            to={routes.DASHBOARD_OWNER}
                        >
                            Return
                        </NavLink>
                    </div>
                </form>
            )}

            {show && (
                <SuccessModal show={show} onClose={() => setShow(false)} />
            )}
        </div>
    );
}
