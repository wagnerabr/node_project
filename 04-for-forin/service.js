const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterHerois(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

// obterHerois('r2')
//     .then(function(result) {
//         console.log("resultado", result)
//     })
//     .catch(function (error) {
//         console.error("Deu errado", error)
//     })

module.exports = {
    obterHerois
}