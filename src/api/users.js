import client from "./client";
const endpoint = "/users/";

const insertNewUser = (data) => {
    return client.post(endpoint, data);
};

// retrieve a specific user
const loginUser = (userInfo) => {
    console.log("userInfo = ", userInfo);
    const userEndpoint = endpoint + "login";
    console.log("LOGIN USER: user end point is", userEndpoint);
    return client.post(userEndpoint, userInfo);
};

export default {
    // getUsers,
    // getUser,
    insertNewUser,
    loginUser,
};
