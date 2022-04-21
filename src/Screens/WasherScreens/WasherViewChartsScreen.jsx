import React from "react";
import MasterScreen from "../Master/MasterScreen";
import WasherViewContentScreenContent from "./WasherViewChartsScreenContent";

export default function WasherViewContentScreen() {
    return (
        <div>
            <MasterScreen ScreenComponent={WasherViewContentScreenContent} />
        </div>
    );
}
