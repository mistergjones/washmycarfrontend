import React from "react";
import MasterScreen from "../Master/MasterScreen";
import WasherProfileEditScreenContent from "./WasherProfileEditScreenContent";

export default function WasherProfileEditScreen() {
    return (
        <div>
            <MasterScreen ScreenComponent={WasherProfileEditScreenContent} />
        </div>
    );
}
