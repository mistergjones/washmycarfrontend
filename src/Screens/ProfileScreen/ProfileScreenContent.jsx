import React, { useContext } from "react";
import "./ProfileScreenContent.css";

import AuthContext from "../../context/authContext";
import ProfileForm from "../../Components/Forms/ProfileForm";

export default function ProfileScreenContent() {
    const { user, setUser } = useContext(AuthContext);
    return (
        <div>
            <h5>Prifile Profile Screen</h5>

            <ProfileForm />
        </div>
    );
}
