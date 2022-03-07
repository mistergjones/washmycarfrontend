import client from "./client";
const endpoint = "/owners/";

// this will pass all WALKER or DATA to server. Server will split it
const insertNewOwner = (data) => {
    return client.post(endpoint, data);
};

export default {
    // getUsers,
    // getUser,
    insertNewOwner,
};
