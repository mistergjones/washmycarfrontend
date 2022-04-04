import client from "./client";
const endpoint = "/bookings/";

const insertNewBooking = (data) => {
    return client.post(endpoint, data);
};

const updateBookingWithAssignedWasher = (data) => {
    var booking_id = data.booking_id;
    return client.patch(endpoint + booking_id, data);
};

// just get all the open bookings
const getOpenBookings = () => {
    return client.get(endpoint + "openlistings/");
};

const getAssignedBookings = (data) => {
    var credential_id = data.credential_id;

    const assignedJobsEndpoint = endpoint + "assigned/" + credential_id;

    return client.get(assignedJobsEndpoint);
};
// Washer - get copmleted bookings
const getAllWasherCompletedJobs = (data) => {
    // just obtain the credential id
    var credential_id = data.credential_id;

    const completedJobsEndpoint = endpoint + "completed/" + credential_id;

    return client.get(completedJobsEndpoint);
};

// OWNER - get their completed jobs
const getAllOwnerCompletedJobs = (data) => {
    // just obtain the credential id
    var credential_id = data.credential_id;
    const completedJobsEndpoint = endpoint + "completed/" + credential_id;
    return client.get(completedJobsEndpoint);
};

export default {
    insertNewBooking,
    updateBookingWithAssignedWasher,
    getOpenBookings,
    getAssignedBookings,
    getAllWasherCompletedJobs,
    getAllOwnerCompletedJobs,
};
