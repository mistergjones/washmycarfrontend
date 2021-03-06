import React, { useState, useContext, useEffect } from "react";
import "./SignUpForm.css";
import * as Yup from "yup";

import useApi from "../../hooks/useApi";
import usersApi from "../../api/users";

import AuthContext from "../../context/authContext";
import jwtService from "../../storage/jwt";
import ProfileRedirect from "../../ProfileRedirect/ProfileRedirect";
import axios from "axios";

export default function SignUpForm() {
    const { user, setUser } = useContext(AuthContext);

    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const [widget, setWidget] = useState(null);
    const [profileUrl, setProfileUrl] = useState("");

    // establish object for all Form Inputs
    const [formInputs, setformInputs] = useState({
        inputFirstname: "",
        inputLastname: "",
        inputEmail: "",
        inputOwnerWasher: "",
        inputPassword: "",
        inputPasswordConfirm: "",
    });

    // establish which specific API function we are invoking
    const { request: postSomeData } = useApi(usersApi.insertNewUser);

    // obtain the input name and update the value based on it
    const handleChange = (event) => {
        const inputName = event.target.name;

        setformInputs({
            ...formInputs,
            [inputName]: event.target.value,
        });
    };

    // useEffect(() => {
    //     setWidget(
    //         window.cloudinary.createUploadWidget(
    //             {
    //                 cloud_name: "dwndlszzc",
    //                 upload_preset: "s2g31ynm",
    //                 sources: ["url", "local"],
    //                 multiple: false,
    //             },

    //             function (err, info) {
    //                 if (!err) {
    //                     console.log(
    //                         "Upload Widget event - ",
    //                         info.info.secure_url
    //                     );
    //                     setError(error);
    //                     setResult(info);
    //                     setProfileUrl(info.info.secure_url);
    //                 }
    //             }
    //         )
    //     );
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit -> SignUpScreen:", formInputs);
        // need to use the clien api to post the informatin

        try {
            // await successful response with TOKEN and USER information via setUser
            const response = await postSomeData(formInputs);

            // GET JWT TOKEN FROM RESPONSE AND DECODE TO USER OBJECT IF NO TOKEN RETURNS NULL;
            // console.log(
            //     "The successful insert new user token is: ",
            //     jwtService.getUserFromResponseToken(response)
            // );
            setUser(jwtService.getUserFromResponseToken(response));
        } catch (error) {
            console.log("Error in inserting a new user", error);
        }
    };

    return (
        <div>
            <ProfileRedirect />
            {/* <h1>This is the signup content screen</h1> */}

            <form className="su-form" method="POST">
                <h3>Sign Up Here!</h3>
                <div className="mb-1 row p-0 m-0">
                    <label className="form-label" htmlFor="firstname">
                        Firstname:
                    </label>
                    <input
                        className="form-control col"
                        type="text"
                        name="inputFirstname"
                        placeholder="Firstname"
                        onChange={handleChange}
                        value={formInputs.inputFirstname}
                    />
                </div>
                <div className="mb-1 row p-0 m-0">
                    <label htmlFor="">Lastname:</label>
                    <input
                        className="form-control col"
                        type="text"
                        name="inputLastname"
                        placeholder="Lastname"
                        onChange={handleChange}
                        value={formInputs.inputLastname}
                    />
                </div>
                <div className="mb-1 row p-0 m-0">
                    <label htmlFor="email">Email:</label>
                    <input
                        className="form-control col"
                        type="email"
                        name="inputEmail"
                        placeholder="Your Email"
                        onChange={handleChange}
                        value={formInputs.inputEmail}
                    />
                </div>
                <div className="mb-1 p-0 m-0">
                    <input
                        type="radio"
                        id="owner"
                        name="inputOwnerWasher"
                        onChange={handleChange}
                        value="O"
                    />
                    ?? <label htmlFor="owner">Owner</label>
                    <input
                        type="radio"
                        id="washer"
                        name="inputOwnerWasher"
                        onChange={handleChange}
                        value="W"
                    />
                    ?? <label htmlFor="washer">Washer</label>
                </div>

                <div className="mb-1 row p-0 m-0">
                    <label htmlFor="password">Password:</label>
                    <input
                        className="form-control col"
                        type="password"
                        name="inputPassword"
                        placeholder="Your Password"
                        onChange={handleChange}
                        value={formInputs.InputPassword}
                    />
                </div>
                <div className="mb-1 row p-0 m-0">
                    <label htmlFor="">Confirm Password:</label>
                    <input
                        className="form-control col"
                        type="password"
                        name="inputPasswordConfirm"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={formInputs.inputPasswordConfirm}
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
