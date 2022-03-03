import React from "react";
import MasterScreen from "../Master/MasterScreen";
import LoginScreenContent from "./LoginScreenContent";

export default function LoginScreen(props) {
    return (
        <div>
            <MasterScreen
                ScreenComponent={LoginScreenContent}
                heading={"Login"}
            />
        </div>
    );
}
