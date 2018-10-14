const axios = require('axios');

let Apikey = require('../api.json');


getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${lat}&lon=${lng}&appid=${Apikey[1].keyW}`);

    // if (resp.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para la ciudad ${direccion}`)
    // }


    //console.log(`https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${lat}&lon=${lng}&appid=${Apikey[1].keyW}`);

    return {
        temp: resp.data.main.temp
    };

}

module.exports = {
    getClima
}