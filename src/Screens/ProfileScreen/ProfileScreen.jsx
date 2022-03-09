import React from "react";
import "./ProfileScreen.css";
import MasterScreen from "../Master/MasterScreen";
import ProfileScreenContent from "./ProfileScreenContent";

export default function ProfileScreen() {
    return (
        <div>
            <MasterScreen
                ScreenComponent={ProfileScreenContent}
                heading="Both PRifile Screen Input"
            />
        </div>
    );
}
