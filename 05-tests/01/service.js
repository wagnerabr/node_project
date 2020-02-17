const { 
    get 
} = require('axios')
const URL = `https://swapi.co/api/people`

async function obterHerois(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await get(url)
    console.log(response.data)
    return response.data.results.map(mapearHerois)
}

function mapearHerois (item) {
    return {
        nome: item.name,
        peso: item.height
    }
}

module.exports = {
    obterHerois
}