import React from "react";
import MasterScreen from "../Master/MasterScreen";
import OwnerProfileEditScreenContent from "./OwnerProfileEditScreenContent";

export default function OwnerProfileEditScreen() {
    return (
        <div>
            <MasterScreen ScreenComponent={OwnerProfileEditScreenContent} />
        </div>
    );
}
