const API_URL = "https://api.github.com"
const axios = require("axios")

let ghAPI = {}

/**
 * Petición Ajax para obtener datos de usuario
 * 
 * @param {string} username nombre de usuario a consultar
 * @param {function} callback funcion que recibe respuesta de la petición
 */
ghAPI.getUser = function (username, callback) {
    axios.get(`${API_URL}/users/${username}`)
        .then(resp => callback(null, resp.data))
        .catch(err => callback(err))
}


ghAPI.getUserRepos = function (username, callback) {
    axios.get(`${API_URL}/users/${username}/repos`)
        .then(resp => callback(null, resp.data))
        .catch(err => callback(err))
}

export default ghAPI