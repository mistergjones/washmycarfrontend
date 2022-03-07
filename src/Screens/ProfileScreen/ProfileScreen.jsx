import React from "react";
import MasterScreen from "../Master/MasterScreen";
import ProfileScreenContent from "./ProfileScreen.css";

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
