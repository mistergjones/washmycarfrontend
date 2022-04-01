import client from "./client";
const endpoint = "/washers/";

const getCurrentWasher = (data) => {
    var credential_id = data.credential_id;
    return client.get(endpoint + credential_id);
};

// this will pass all WALKER or DATA to server. Server will split it
const insertNewWasher = (data) => {
    return client.post(endpoint, data);
};

const updateWasher = (data) => {
    var credential_id = data.credential_id;
    return client.post(endpoint + credential_id, data);
};

export default {
    // getUsers,
    // getUser,
    getCurrentWasher,
    insertNewWasher,
    updateWasher,
};
