import React, { useState, useContext, useEffect } from "react";
import "./ProfileForm.css";

import useApi from "../../hooks/useApi";
import ownersApi from "../../api/owners";
import washersApi from "../../api/washers";

import AuthContext from "../../context/authContext";
import jwtService from "../../storage/jwt";

import loadBMaps from "../../maps/bingMaps";
import axios from "axios";
import ProfileRedirect from "../../ProfileRedirect/ProfileRedirect";

export default function ProfileForm() {
    const { user, setUser } = useContext(AuthContext);
    const [isSubmittedTrue, setSubmittedTrue] = useState(false);
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const [checked, setChecked] = useState(false);

    // obtain the Bing Maps address object resuilt
    //const [bingMapsAddressObj, setAddress] = useState(null);

    const splitAddressUpdateAddressFields = (result) => {
        setformInputs({
            ...formInputs,
            ["inputStreetAddress"]: result.address.addressLine,
            ["inputSuburb"]: result.address.locality,
            ["inputState"]: result.address.adminDistrict,
            ["inputPostcode"]: result.address.postalCode,
        });
    };
    useEffect(() => {
        window.selectedSuggestion = function (result) {
            //setAddress(result);
            splitAddressUpdateAddressFields(result);
        };
        loadBMaps(() => console.log("call back"));
    }, []);

    // establish object for all Form Inputs
    const [formInputs, setformInputs] = useState({
        inputFirstname: user.firstname,
        inputLastname: user.lastname,
        inputStreetAddress: "",
        inputSuburb: "",
        inputState: "",
        inputPostcode: "",
        inputMobile: "",
        inputEmail: user.email,
        inputDOB: "",
        inputCarPhoto: "",
        inputProfilePhoto: "",
        inputBankName: "",
        inputBSB: "",
        inputAccountNumber: "",
    });

    // obtain both specific API function we are invoking
    const { request: postNewOwnerData } = useApi(ownersApi.insertNewOwner);
    const { request: postNewWasherData } = useApi(washersApi.insertNewWasher);

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
        setIsImageLoaded(true);
        setImage("");

        if (user.type === "O") {
            setformInputs({
                ...formInputs,
                ["inputCarPhoto"]: cloudinaryResponse.data.secure_url,
            });
        } else {
            setformInputs({
                ...formInputs,
                ["inputProfilePhoto"]: cloudinaryResponse.data.secure_url,
            });
        }
    };

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
            credential_id: user.credential_id,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("handleSubmit -> ProfileScreen:", formInputs);

        try {
            // await successful response with TOKEN and USER information via setUser
            if (user.type === "O") {
                const response = await postNewOwnerData(formInputs);
                // GET JWT TOKEN FROM RESPONSE AND DECODE TO USER OBJECT IF NO TOKEN RETURNS NULL;
                // console.log(
                //     "The successful update new user token is: ",
                //     jwtService.getUserFromResponseToken(response)
                // );
                setUser(jwtService.getUserFromResponseToken(response));
                //set to true so the ProfileContext can exectute
                setSubmittedTrue(true);
            } else if (user.type === "W") {
                const response = await postNewWasherData(formInputs);

                // GET JWT TOKEN FROM RESPONSE AND DECODE TO USER OBJECT IF NO TOKEN RETURNS NULL;
                // console.log(
                //     "The successful update new user token is: ",
                //     jwtService.getUserFromResponseToken(response)
                // );
                setUser(jwtService.getUserFromResponseToken(response));
                //set to true so the ProfileContext can exectute
                setSubmittedTrue(true);
            }
        } catch (error) {
            console.log("Error in inserting a new user", error);
        }
    };
    return (
        <>
            {isSubmittedTrue && <ProfileRedirect />}
            <div>
                <h1>This is the BOTH PROFILE content screen</h1>

                <form className="profile-form" method="POST">
                    <h3>Your Profile info here</h3>

                    <label htmlFor="firstname">
                        Firstname:
                        <input
                            style={{ backgroundColor: "#f7f7f5" }}
                            readOnly
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
                            style={{ backgroundColor: "#f7f7f5" }}
                            readOnly
                            type="text"
                            name="inputLastname"
                            placeholder="Lastname"
                            onChange={handleChange}
                            value={formInputs.inputLastname}
                        />
                    </label>

                    <div id="searchBoxContainer">
                        <label htmlFor="streetAddresss">
                            Street Address:
                            <input
                                id="searchBox"
                                type="text"
                                name="inputStreetAddress"
                                placeholder="Street Address"
                                onChange={handleChange}
                                value={formInputs.inputStreetAddress}
                            />
                        </label>
                    </div>

                    <label htmlFor="streetSuburb">
                        Suburb:
                        <input
                            style={{ backgroundColor: "#f7f7f5" }}
                            readOnly
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
                            style={{ backgroundColor: "#f7f7f5" }}
                            readOnly
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
                            style={{ backgroundColor: "#f7f7f5" }}
                            readOnly
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

                    <label htmlFor="email">
                        Email:
                        <input
                            style={{ backgroundColor: "#f7f7f5" }}
                            readOnly
                            type="email"
                            name="inputEmail"
                            placeholder="Your Email"
                            onChange={handleChange}
                            value={formInputs.inputEmail}
                        />
                    </label>

                    {user.type === "O" ? (
                        <label htmlFor="inputCarPhoto">
                            Car To Be Washed:
                            <input
                                name="inputCarPhoto"
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            ></input>
                            {image && (
                                <button type="button" onClick={uploadImage}>
                                    Upload
                                </button>
                            )}
                        </label>
                    ) : (
                        <label htmlFor="inputProfilePhoto">
                            Your Profile Photo:
                            <input
                                name="inputProfilePhoto"
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            ></input>
                            {image && (
                                <button type="button" onClick={uploadImage}>
                                    Upload
                                </button>
                            )}
                        </label>
                    )}

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
                    <div>
                        <button className="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
