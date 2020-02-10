const service = require('./service')

// Array.prototype.meuMap = function (callback) {
//     const novoArrayMapeado = []
//     for (let indice = 0; indice < this.length; indice++) {
//         const resultado =  callback(this[indice], indice)
//         novoArrayMapeado.push(resultado)
//     }

//     return novoArrayMapeado
// }

async function main () {
    try {
        const results = await service.obterHerois('a')
        //const names = []
        // results.results.forEach(function (item) {
        //     names.push(item.name)
        // });
        // const names = results.results.map(function (pessoa) {
        //     return pessoa.name
        // })
        //const names = results.results.map((pessoa) => pessoa.name)
        const names = results.results.meuMap(function (pessoa, indice) {
            return pessoa.name
        })
        console.log(names)
    } catch (error) {
        console.error("Erro", error)
    }
}

//main()

Array.prototype.meuMap = function(callback) {
    const novoArrayMapeado = []
    for (let index = 0; index < this.length; index++) {
        const resultado = callback(this[index], index)
        novoArrayMapeado.push(resultado)
        
    }
    return novoArrayMapeado
}

async function main2 () {
    try {
        const herois = await service.obterHerois("a")

        //aprendendo forEach
        // const names = []
        // herois.results.forEach(hero => {
        //     names.push(hero.name)
        // });

        //aprendendo map -> mesma coisa que o foreach, porém ele retorna uma array com os itens que estão sendo retornados pela função
        // const names = herois.results.map(hero => {
        //     return hero.name
        // })
        const names = herois.results.meuMap(function(hero, index) {
            return `Nome: ${hero.name} ID: ${index}`
        })
        console.log(names)
    } catch (error) {
        console.error("Erro", error)
    }
}
main2()