const service = require('./service')

async function main () {
    try {
        const resultado = await service.obterHerois('a')
        const names = []
        // console.time('for')
        // for (let i = 0; i < resultado.results.length; i++) {
        //     const pessoa = resultado.results[i]
        //     names.push(pessoa.name)
        // }
        // console.timeEnd('for')
        // console.log('names', names)
        // console.time('forin')
        // for (const i in resultado.results) {
        //     const pessoa = resultado.results[i]
        //     names.push(pessoa.name)
        // }
        // console.timeEnd('forin')
        // console.log('names', names)

        console.time('forof')
        for (const pessoa of resultado.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('forof')
        console.log('names', names)
    } catch (error) {
        console.error('error interno', error)
    }
}

main()