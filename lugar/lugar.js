const axios = require('axios');

let Apikey = require('../api.json');

getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=${Apikey[0].key}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    let results = resp.data.results[0]
    let geometryLoc = results.geometry.location;

    return {
        direccion: results.formatted_address,
        lat: geometryLoc.lat,
        lng: geometryLoc.lng
    }

}

module.exports = {
    getLugarLatLng
}