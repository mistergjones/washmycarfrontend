import client from "./client";
const endpoint = "/users/";

const insertNewUser = (data) => {
    return client.post(endpoint, data);
};

export default {
    // getUsers,
    // getUser,
    insertNewUser,
};
