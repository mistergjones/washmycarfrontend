import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../Routes/routes";
import "./HomeScreenContent.css";

import lottie from "lottie-web";
import washCarLottieAnim from "../../Images/Homepage/68958-washing-new-model.json";

export default function HomeScreenContent() {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#washCarLottie"),
            animationData: washCarLottieAnim,
        });
    }, []);

    return (
        <>
            <h3>This is the homescreen H3 content</h3>

            <div className="hsc-form">
                <div className="hsc-lottie-container">
                    <div className="hsc-lottie-animation">
                        <h3>Local Car washers come to you!</h3>
                        <div id="washCarLottie"></div>
                    </div>
                    <div className="hsc-form-buttons">
                        <NavLink
                            className="hsc-navlink-formatting"
                            to={routes.SIGNUP}
                        >
                            Sign Up
                        </NavLink>

                        <NavLink
                            className="hsc-navlink-formatting"
                            to={routes.LOGIN}
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
