const axios = require("axios")
const API_URL = "https://api.github.com"
const MAX_REPOS_X_PAGE = 30
const DEFAULT_PAGE = 1

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
    axios.get(`${API_URL}/users/${username}/repos?per_page=${MAX_REPOS_X_PAGE}`)
        .then(resp => callback(null, resp.data))
        .catch(err => callback(err))
}


ghAPI.getUserReposByPage = function (username, page, callback) {
    axios.get(`${API_URL}/users/${username}/repos?per_page=${MAX_REPOS_X_PAGE}&page=${page}`)
        .then(resp => callback(null, resp.data))
        .catch(err => callback(err))
}

ghAPI.MAX_REPOS_X_PAGE = MAX_REPOS_X_PAGE
ghAPI.DEFAULT_PAGE = DEFAULT_PAGE

export default ghAPI