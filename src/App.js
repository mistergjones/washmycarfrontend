import "./App.css";
import routes from "./Routes/routes";
import HomeScreen from "./Screens/HeaderScreens/HomeScreen";
import LoginScreen from "./Screens/HeaderScreens/LoginScreen";
import SignUpScreen from "./Screens/HeaderScreens/SignUpScreen";
import {
    Route,
    Routes,
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={routes.HOME} element={<HomeScreen />} />
                    <Route path={routes.LOGIN} element={<LoginScreen />} />
                    <Route path={routes.SIGNUP} element={<SignUpScreen />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
