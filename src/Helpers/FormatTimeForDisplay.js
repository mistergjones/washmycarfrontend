export default function FormatTimeForDisplay(dataObj) {
    // create a new key in each data object to display the correct time
    dataObj.forEach((element) => {
        element.humanTime = new Date(
            parseInt(element.start_time)
        ).toLocaleTimeString();
    });

    return dataObj;
}
