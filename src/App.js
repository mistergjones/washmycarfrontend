import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import routes from "./Routes/routes";
import HomeScreen from "./Screens/HeaderScreens/HomeScreen";
import LoginScreen from "./Screens/HeaderScreens/LoginScreen";
import SignUpScreen from "./Screens/HeaderScreens/SignUpScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import DashboardScreenOwner from "./Screens/DashboardScreens/DashboardScreenOwner";
import DashboardScreenWasher from "./Screens/DashboardScreens/DashboardScreenWasher";
import OwnerBookingScreen from "./Screens/OwnerScreens/OwnerBookingScreen";
import OwnerProfileEditScreen from "./Screens/OwnerScreens/OwnerProfileEditScreen";
import WasherProfileEditScreen from "./Screens/WasherScreens/WasherProfileEditScreen";
import WasherViewOpenJobsScreen from "./Screens/WasherScreens/WasherViewOpenJobsScreen";

import ProtectedRoute from "./Components/protectedRoute";

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
                        <Route
                            path={routes.CREATE_BOOKINGS_OWNER}
                            element={<OwnerBookingScreen />}
                        />
                        <Route
                            path={routes.DASHBOARD_OWNER}
                            element={<DashboardScreenOwner />}
                        />
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
                        <Route
                            path={routes.DASHBOARD_WASHER}
                            element={<DashboardScreenWasher />}
                        />
                        />
                        <Route
                            path={routes.EDIT_PROFILE_OWNER}
                            element={<OwnerProfileEditScreen />}
                        />
                        <Route
                            path={routes.EDIT_PROFILE_WASHER}
                            element={<WasherProfileEditScreen />}
                        />
                        <Route
                            path={routes.NEW_LISTINGS}
                            element={<WasherViewOpenJobsScreen />}
                        />
                    </Routes>
                </Router>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
