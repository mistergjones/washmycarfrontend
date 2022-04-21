import React from "react";
import "./HomeScreen.css";
import MasterScreen from "../Master/MasterScreen";
import HomeScreenContent from "./HomeScreenContent";

export default function HomeScreen() {
    return (
        <div>
            <MasterScreen
                ScreenComponent={HomeScreenContent}
                heading="Welcome to Wash My Car (prototype)"
            />
        </div>
    );
}
