import client from "./client";
const endpoint = "/bookings/";

const insertNewBooking = (data) => {
    return client.post(endpoint, data);
};

const updateBookingWithAssignedWasher = (data) => {
    var booking_id = data.booking_id;
    return client.patch(endpoint + booking_id, data);
};

const updateBookingOwnerConfirmsCompleted = (data) => {
    const carPhoto = { washer_completed_proof: data };

    return client.post(endpoint + "ownerverifies/", carPhoto);
};

const updateBookingOwnerMakesPayment = (data) => {
    var booking_id = data.booking_id;
    return client.post(endpoint + "ownermakespayment/" + booking_id, data);
};

// WASHER HAS COMPLETD / VERIRIED THAT THE JOB IS COMPLETE
const updateBookingThatIsWasherCompleted = (data) => {
    var booking_id = data.booking_id;
    return client.post(endpoint + booking_id, data);
};

// just get all the open bookings
const getOpenBookings = () => {
    return client.get(endpoint + "openlistings/");
};

const getAssignedBookings = (data) => {
    var washer_id = data.washer_id;

    const assignedJobsEndpoint = endpoint + "assigned/" + washer_id;
    return client.get(assignedJobsEndpoint);
};
// Washer - get copmleted bookings
const getAllWasherCompletedJobs = (data) => {
    // just obtain the credential id
    var washer_id = data.washer_id;
    const completedJobsEndpoint = endpoint + "completed/" + washer_id;
    console.log("ADAFD", completedJobsEndpoint);
    return client.get(completedJobsEndpoint);
};

// OWNER - get their completed jobs
const getAllOwnerCompletedJobs = (data) => {
    // just obtain the credential id
    var credential_id = data.credential_id;
    const completedJobsEndpoint = endpoint + "completedwashes/" + credential_id;
    return client.get(completedJobsEndpoint);
};

// OWNER - get who is assigned to their jobs
const getOwnerAssignedBookings = (data) => {
    var credential_id = data.credential_id;
    const assignedJobsEndpoint = endpoint + "assignedwashes/" + credential_id;
    return client.get(assignedJobsEndpoint);
};
// OWNER - get who is assigned to their jobs
const getOwnerOpenBookings = (data) => {
    var credential_id = data.credential_id;
    const assignedJobsEndpoint = endpoint + "openwashes/" + credential_id;
    return client.get(assignedJobsEndpoint);
};

export default {
    insertNewBooking,
    updateBookingWithAssignedWasher,
    updateBookingThatIsWasherCompleted,
    updateBookingOwnerConfirmsCompleted,
    updateBookingOwnerMakesPayment,
    getOpenBookings,
    getAssignedBookings,
    getAllWasherCompletedJobs,
    getAllOwnerCompletedJobs,
    getOwnerAssignedBookings,
    getOwnerOpenBookings,
};
