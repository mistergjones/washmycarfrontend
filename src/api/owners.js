import client from "./client";
const endpoint = "/owners/";

const getCurrentOwner = (data) => {
    var credential_id = data.credential_id;
    console.log("DO WE GET GERE");
    return client.get(endpoint + credential_id);
};

// this will pass all New Onwer or DATA to server. Server will split it
const insertNewOwner = (data) => {
    return client.post(endpoint, data);
};

export default {
    getCurrentOwner,
    insertNewOwner,
};
