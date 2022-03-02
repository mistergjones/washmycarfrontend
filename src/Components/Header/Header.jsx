import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div className="header-menu">
            <div id="item-0">
                <a href="/">Logo</a>
            </div>
            <div id="item-1">
                <a href="/">Home</a>
            </div>
            <div id="item-2">
                <a href="/">How It Works</a>
            </div>
            <div id="item-3">
                <a href="/">Sign Up</a>
            </div>
            <div id="item-4">
                <a href="/">Login</a>
            </div>
        </div>
    );
}
