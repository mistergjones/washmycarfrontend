import React from "react";
import MasterScreen from "../Master/MasterScreen";
import OwnerBookingScreenContent from "./OwnerBookingScreenContent";

export default function OwnerBookingScreen() {
    return (
        <div>
            <MasterScreen ScreenComponent={OwnerBookingScreenContent} />
        </div>
    );
}
