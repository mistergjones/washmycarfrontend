import React from "react";
import MasterScreen from "../Master/MasterScreen";
import DashboardScreenWasherContent from "./DashboardScreenWasherContent.jsx";

export default function DashboardScreenWasher() {
    return (
        <div>
            <MasterScreen
                ScreenComponent={DashboardScreenWasherContent}
                heading="Both DAshboard Screen Contents"
            />
        </div>
    );
}
