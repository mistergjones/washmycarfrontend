// This function takes a dataset and cretes a geolocation data object for the GEOKIT ot calcaulate distance
export default function makeGeoLocationDataObject(result) {
    var aa = result.data;

    aa.forEach((record) => {
        record["lat"] = Number(record.lat);
        record["lng"] = Number(record.lng);
        record["geolocation"] = {
            lat: Number(record.lat),
            lng: Number(record.lng),
        };
    });

    return aa;
}
