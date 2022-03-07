import client from "./client";
const endpoint = "/washers/";

// this will pass all WALKER or DATA to server. Server will split it
const insertNewWasher = (data) => {
    return client.post(endpoint, data);
};

export default {
    // getUsers,
    // getUser,
    insertNewWasher,
};
