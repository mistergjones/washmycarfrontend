import jwtDecode from "./node_modules/jwt-decode";
import storageService from "./localStorage";

const jwtService = {};

jwtService.getUserFromResponseToken = (response) => {
    const token = response.headers["x-auth-token"];
    console.log("***** storage/jwt.js *****");
    console.log("jwt token = ", token);
    if (token) {
        storageService.setToken(token);
        console.log("decode = ", jwtDecode(token));
        return jwtDecode(token);
    }
    return null;
};

export default jwtService;
