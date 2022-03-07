import React, { useState, useContext } from "react";
import "./SignUpForm.css";
import * as Yup from "yup";

import useApi from "../../hooks/useApi";
import usersApi from "../../api/users";

import AuthContext from "../../context/authContext";
import jwtService from "../../storage/jwt";
import ProfileRedirect from "../../ProfileRedirect/ProfileRedirect";

export default function SignUpForm() {
    const { user, setUser } = useContext(AuthContext);
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
            <h1>This is the signup content screen</h1>

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
                <label htmlFor="">
                    Lastname:
                    <input
                        type="text"
                        name="inputLastname"
                        placeholder="Lastname"
                        onChange={handleChange}
                        value={formInputs.inputLastname}
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="inputEmail"
                        placeholder="Your Email"
                        onChange={handleChange}
                        value={formInputs.inputEmail}
                    />
                </label>
                <div>
                    <input
                        type="radio"
                        id="owner"
                        name="inputOwnerWasher"
                        onChange={handleChange}
                        value="O"
                    />
                      <label htmlFor="owner">Owner</label>
                    <input
                        type="radio"
                        id="washer"
                        name="inputOwnerWasher"
                        onChange={handleChange}
                        value="W"
                    />
                      <label htmlFor="washer">Washer</label>
                </div>

                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        name="inputPassword"
                        placeholder="Your Password"
                        onChange={handleChange}
                        value={formInputs.InputPassword}
                    />
                </label>
                <label htmlFor="">
                    Confirm Password:
                    <input
                        type="password"
                        name="inputPasswordConfirm"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={formInputs.inputPasswordConfirm}
                    />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
