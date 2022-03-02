import React from "react";
import "./HomeScreen.css";
import MasterScreen from "../Master/MasterScreen";
import HomeScreenContent from "./HomeScreenContent";

export default function HomeScreen() {
    return (
        <div>
            <MasterScreen
                ScreenComponent={HomeScreenContent}
                heading="02/03/22 Welcome to Wash My Car (under development)"
            />
        </div>
    );
}
