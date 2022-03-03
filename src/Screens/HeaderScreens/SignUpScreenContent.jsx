import React, { useState } from "react";
import "./SignUpScreenContent.css";
import * as Yup from "yup";

export default function SignUpScreenContent() {
    // establish object for all Form Inputs
    const [formInputs, setformInputs] = useState({
        inputFirstname: "",
        inputLastname: "",
        inputEmail: "",
        inputOwnerWasher: "",
        inputPassword: "",
        inputPasswordConfirm: "",
    });

    // obtain the input name and update the value based on it
    const handleChange = (event) => {
        const inputName = event.target.name;
        setformInputs({
            ...formInputs,
            [inputName]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit -> firstname", formInputs);
    };
    return (
        <div>
            <h1>This is the signup content screen</h1>

            <form className="susc-form" action="" method="POST">
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
