import React, { useEffect } from "react";
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
                        <button>Sign Up</button>
                        <button>Log In</button>
                    </div>
                </div>
            </div>
        </>
    );
}
