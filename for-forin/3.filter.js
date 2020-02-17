const { 
    obterHerois 
} = require('./service')

//tecnica destructuring do javascript
//A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript 
//que possibilita extrair dados de arrays ou objetos em variáveis distintas.
// const jogador = {
//     nome: 'Wagner',
//     idade: 23
// }
// const { nome, idade } = jogador
// console.log(nome, idade)

async function main () {
    const { results } = await obterHerois('a')
    const resultado = results.filter(function(hero){
        return hero.name.toLowerCase().indexOf(`Lars`) !== 1
    })
    const names = resultado.map(hero => hero.name)
    console.log(names)
}

main()