import React, { useState, useContext } from "react";
import "./LoginScreenContent.css";

import ProfileRedirect from "../../ProfileRedirect/ProfileRedirect";
import LoginForm from "../../Components/Forms/LoginForm";

export default function LoginScreenContent() {
    return (
        <div>
            <ProfileRedirect />
            <h1>Login to use our services</h1>
            <LoginForm />
        </div>
    );
}
