import "./App.css";
import { useState } from "react";
import routes from "./Routes/routes";
import HomeScreen from "./Screens/HeaderScreens/HomeScreen";
import LoginScreen from "./Screens/HeaderScreens/LoginScreen";
import SignUpScreen from "./Screens/HeaderScreens/SignUpScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreenContent";
import {
    Route,
    Routes,
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";
import AuthContext from "./context/authContext";

function App() {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    return (
        <div className="App">
            <AuthContext.Provider
                value={{ user, setUser, errorMessage, setErrorMessage }}
            >
                <Router>
                    <Routes>
                        <Route path={routes.HOME} element={<HomeScreen />} />
                        <Route path={routes.LOGIN} element={<LoginScreen />} />
                        <Route
                            path={routes.SIGNUP}
                            element={<SignUpScreen />}
                        />
                        <Route
                            path={routes.PROFILE_WASHER}
                            element={<ProfileScreen />}
                        />
                        <Route
                            path={routes.PROFILE_OWNER}
                            element={<ProfileScreen />}
                        />
                    </Routes>
                </Router>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
