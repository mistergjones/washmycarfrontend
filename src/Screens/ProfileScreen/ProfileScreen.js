import React from "react";
import MasterScreen from "../Master/MasterScreen";
import ProfileScreenContent from "./ProfileScreenContent";

export default function ProfileScreen() {
    return (
        <div className="glen">
            <MasterScreen
                ScreenComponent={ProfileScreenContent}
                heading="WHERE IS THE HEADING"
            />
        </div>
    );
}
