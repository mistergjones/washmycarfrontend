import React, { useState } from "react";

export default function LoginScreenContent() {
    const [formInputs, setformInputs] = useState({
        inputEmail: "",
        inputPassword: "",
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
            <h1>This is the Llogin content screen</h1>

            <div className="lsc-grid">
                <div id="item-0">
                    <form className="lsc-form" action="" method="POST">
                        <h3>Login Here!</h3>

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

                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
                <div id="item-1">THIS IS THE LOGIN IMAGE</div>
            </div>
        </div>
    );
}
