import React from "react";
import "./SignUpScreen.css";
import MasterScreen from "../Master/MasterScreen";
import SignUpScreenContent from "./SignUpScreenContent";

export default function SignUpScreen() {
    return (
        <div>
            <MasterScreen
                ScreenComponent={SignUpScreenContent}
                heading={"Sign up to use our services"}
            />
        </div>
    );
}
