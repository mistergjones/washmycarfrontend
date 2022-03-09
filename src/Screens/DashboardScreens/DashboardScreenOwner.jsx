import React from "react";
import MasterScreen from "../Master/MasterScreen";
import DashboardScreenOwnerContent from "./DashboardScreenOwnerContent.jsx";

export default function DashboardScreenContent() {
    return (
        <div>
            <MasterScreen
                ScreenComponent={DashboardScreenOwnerContent}
                heading="Both DAshboard Screen Contents"
            />
        </div>
    );
}
