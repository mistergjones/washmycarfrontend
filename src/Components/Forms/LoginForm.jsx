import React, { useState, useContext } from "react";
import "./LoginForm.css";

import useApi from "../../hooks/useApi";
import usersApi from "../../api/users";

import AuthContext from "../../context/authContext";
import jwtService from "../../storage/jwt";
import ProfileRedirect from "../../ProfileRedirect/ProfileRedirect";

export default function LoginForm() {
    const { setUser } = useContext(AuthContext);

    const [formInputs, setformInputs] = useState({
        inputEmail: "",
        inputPassword: "",
    });

    // establish which specific API function we are invoking
    const { request: loginUser } = useApi(usersApi.loginUser);

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
        //console.log("LOGIN -> handleSubmit -> Form Inputs-> ", formInputs);
        // need to use the clien api to get the informatin
        const response = await loginUser(formInputs);
        //console.log("The Specific suer is:", response);

        setUser(jwtService.getUserFromResponseToken(response));
    };
    return (
        <div>
            <form className="form-container" action="" method="POST">
                <h3>Login Here!</h3>
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

                <button
                    className="btn btn-primary mt-3 mb-3"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
