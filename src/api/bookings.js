import client from "./client";
const endpoint = "/bookings/";

const insertNewBooking = (data) => {
    return client.post(endpoint, data);
};

export default {
    insertNewBooking,
};
