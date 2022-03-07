import React, { useState, useContext } from "react";
import "./ProfileForm.css";

import useApi from "../../hooks/useApi";
import ownersApi from "../../api/owners";
import washersApi from "../../api/washers";

import AuthContext from "../../context/authContext";
import jwtService from "../../storage/jwt";

export default function ProfileForm() {
    const { user, setUser } = useContext(AuthContext);
    const [checked, setChecked] = useState(false);
    // establish object for all Form Inputs
    const [formInputs, setformInputs] = useState({
        inputFirstname: "",
        inputLastname: "",
        inputStreetAddress: "",
        inputSuburb: "",
        inputState: "",
        inputPostcode: "",
        inputMobile: "",
        inputDOB: "",
        inputCarPhoto: "",
        inputBankName: "",
        inputBSB: "",
        inputAccountNumber: "",
    });

    // obtain both specific API function we are invoking
    const { request: postNewOwnerData } = useApi(ownersApi.insertNewOwner);
    const { request: postNewWasherData } = useApi(washersApi.insertNewWasher);

    // obtain the input name and update the value based on it
    const handleChange = (event) => {
        const inputName = event.target.name;

        // cater for the Accept Terms checkbox
        if (inputName === "inputAcceptTerms" && event.target.value === "true") {
            setChecked(false);
        } else if (
            inputName === "inputAcceptTerms" &&
            event.target.value === "false"
        ) {
            setChecked(true);
        }

        // spread & update the specific key with the target value
        setformInputs({
            ...formInputs,
            [inputName]: event.target.value,
            inputEmail: user.email,
            credential_id: user.credential_id,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit -> ProfileScreen:", formInputs);
        // need to use the clien api to post the informatin

        try {
            // await successful response with TOKEN and USER information via setUser

            if (user.type === "O") {
                const response = await postNewOwnerData(formInputs);
            } else if (user.type === "W") {
                console.log("we have a a walker", formInputs);
                const response = await postNewWasherData(formInputs);
            }

            // GET JWT TOKEN FROM RESPONSE AND DECODE TO USER OBJECT IF NO TOKEN RETURNS NULL;
            // console.log(
            //     "The successful insert new user token is: ",
            //     jwtService.getUserFromResponseToken(response)
            // );
            // setUser(jwtService.getUserFromResponseToken(response));
        } catch (error) {
            console.log("Error in inserting a new user", error);
        }
    };
    return (
        <div>
            <h1>This is the PROFILE content screen</h1>

            <form className="susc-form" method="POST">
                <h3>Sign Up Here!</h3>
                <label htmlFor="firstname">
                    Firstname:
                    <input
                        type="text"
                        name="inputFirstname"
                        placeholder="Firstname"
                        onChange={handleChange}
                        value={formInputs.inputFirstname}
                    />
                </label>
                <label htmlFor="lastname">
                    Lastname:
                    <input
                        type="text"
                        name="inputLastname"
                        placeholder="Lastname"
                        onChange={handleChange}
                        value={formInputs.inputLastname}
                    />
                </label>
                <label htmlFor="streetAddresss">
                    Street Address:
                    <input
                        type="text"
                        name="inputStreetAddress"
                        placeholder="Street Address"
                        onChange={handleChange}
                        value={formInputs.inputStreetAddress}
                    />
                </label>
                <label htmlFor="streetSuburb">
                    Suburb:
                    <input
                        type="text"
                        name="inputSuburb"
                        placeholder="Suburb"
                        onChange={handleChange}
                        value={formInputs.inputSuburb}
                    />
                </label>
                <label htmlFor="state">
                    State:
                    <input
                        type="text"
                        name="inputState"
                        placeholder="State"
                        onChange={handleChange}
                        value={formInputs.inputState}
                    />
                </label>
                <label htmlFor="postcode">
                    Postcode:
                    <input
                        type="text"
                        name="inputPostcode"
                        placeholder="Postcode"
                        onChange={handleChange}
                        value={formInputs.inputPostcode}
                    />
                </label>

                <label htmlFor="mobile">
                    Mobile:
                    <input
                        type="number"
                        name="inputMobile"
                        placeholder="Your Mobile"
                        onChange={handleChange}
                        value={formInputs.inputMobile}
                    />
                </label>
                <label htmlFor="carPhoto">
                    Car Image:
                    <input
                        type="text"
                        name="inputCarPhoto"
                        placeholder="Your Car"
                        onChange={handleChange}
                        value={formInputs.inputCarPhoto}
                    />
                </label>

                {user.type === "W" && (
                    <div>
                        <label htmlFor="dob">
                            DOB:
                            <input
                                type="data"
                                name="inputDOB"
                                placeholder="Your DOB"
                                onChange={handleChange}
                                value={formInputs.inputDOB}
                            />
                        </label>
                        <label htmlFor="bankName">
                            Bank Name:
                            <input
                                type="text"
                                name="inputBankName"
                                placeholder="Your Bank Name"
                                onChange={handleChange}
                                value={formInputs.inputBankName}
                            />
                        </label>
                        <label htmlFor="bsb">
                            BSB:
                            <input
                                maxLength="6"
                                type="number"
                                name="inputBSB"
                                placeholder="Your Bank BSB"
                                onChange={handleChange}
                                value={formInputs.inputBSB}
                            />
                        </label>
                        <label htmlFor="accountNumber">
                            Account Number:
                            <input
                                maxLength="10"
                                type="number"
                                name="inputAccountNumber"
                                placeholder="Your Account Number"
                                onChange={handleChange}
                                value={formInputs.inputAccountNumber}
                            />
                        </label>
                        <label htmlFor="acceptTerms">
                            Accept Terms:
                            <input
                                checked={checked}
                                type="checkbox"
                                name="inputAcceptTerms"
                                onChange={handleChange}
                                value={checked}
                            />
                        </label>
                    </div>
                )}

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
