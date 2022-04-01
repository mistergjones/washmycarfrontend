import React from "react";
import MasterScreen from "../Master/MasterScreen";
import WasherViewOpenJobsScreenContent from "./WasherViewOpenJobsScreenContent";

export default function WasherViewOpenJobsScreen() {
    return (
        <div>
            <MasterScreen ScreenComponent={WasherViewOpenJobsScreenContent} />
        </div>
    );
}
