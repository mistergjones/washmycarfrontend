import client from "./client";
const endpoint = "/owners/";

const getCurrentOwner = (data) => {
    var credential_id = data.credential_id;
    return client.get(endpoint + credential_id);
};

// this will pass all New Onwer or DATA to server. Server will split it
const insertNewOwner = (data) => {
    return client.post(endpoint, data);
};

const updateOwner = (data) => {
    var credential_id = data.credential_id;
    console.log(data);
    return client.post(endpoint + credential_id, data);
};

export default {
    getCurrentOwner,
    insertNewOwner,
    updateOwner,
};
