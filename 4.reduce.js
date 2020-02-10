const {
    obterHerois
} = require('./service')

//objetivo do reduce é reduzir uma array a um objeto/resultado
Array.prototype.meuReduce = function (callback, valorInicial) {
    //dentro de function é usado let
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let indice = 0; indice < this.length; indice++) {
        valorFinal =  callback(valorFinal, this[indice])
    }
    return valorFinal
}

async function main() {
    try {
        const {
            results 
        } = await obterHerois('a')
        const pesos = results.map(item => parseInt(item.height))
        const minhaLista = [
            ['Wagner', 'Mayara'],
            ['Pretinha', 'Branquinha']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo) 
        }, [])
        .join(', ')
        console.log(total)
    } catch (error) {
        console.error(`DEU RUIM`, error)
    }
}

main()