const axios = require('axios');

async function getCoordsForAddress(address) {
    // return {
    //     lat: 40.7484474,
    //     lng: -73.9871516
    // };

    const response = await axios.get(
        `https://nominatim.openstreetmap.org/?addressdetails=1&q=${encodeURIComponent(address)}&format=json&limit=1`
    );

    const data = response.data;

    if (!data) {
        const error = new HttpError("Could not find location for this address", 422);
        throw error;
    };

    const coordinates = {
        lat: data[0].lat,
        lng: data[0].lon,
    };

    return coordinates;
}

module.exports = getCoordsForAddress;
