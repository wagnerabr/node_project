/*
    obter usuario
    obter telefone por id usuario
    obter endereco por id usuario
*/
//importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function() {
            //return reject(new Error ("Deu Ruim de verdade"))
            return resolve({
                id: 1,
                nome: "Wagner"
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function() {
            return resolve({
                ddd: 15,
                telefone: "996767799"
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            endereco: "Estrada José Ribeiro Leite",
            numero: 780
        })
    }, 2000)
}

main()
async function main() {
    try {
        console.time('medida')
        const usuario = await obterUsuario()

        //Faz isso, pois as funções não precisam do resultado uma da outra para executarem, então podem executarem de forma assincrona e tornar o processo mais rapido
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)

        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.endereco} ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
        `)
        console.timeEnd('medida')
    } catch (error) {
        console.error('Erro ao puxar usuario', error)
    }
}

// function obterEndereco(idUsuario) {
//     return new Promise(function resolvePromise(resolve, reject) {
//         setTimeout(function() {
//             return resolve({
//                 endereco: "Estrada José Ribeiro Leite",
//                 numero: 780
//             })
//         }, 3000)
//     })
// }

// para manipular o sucesso usamos a função .then
// para manipular erros, usamos o .catch
// usuario -> telefone -> telefone
// const usuarioPromise = obterUsuario()
// usuarioPromise
//     .then(function (usuario) {
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result) {
//                 return {
//                     usuario: {
//                         nome: usuario.nome,
//                         id: usuario.id
//                     },
//                     telefone: result
//                 }
//             })
//     })
//     .then(function (resultado) {
//         return obterEnderecoAsync(resultado.usuario.id)
//             .then(function resolverEndereco(result) {
//                 return {
//                     usuario:  resultado.usuario,
//                     telefone: resultado.telefone,
//                     endereco: result
//                 }
//             })
//     })
//     .then(function (resultado) {
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereço: ${resultado.endereco.endereco} ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//         `)
//     })
//     .catch(function (error) {
//         console.error("Nao deu certo", error)
//     })


// obterUsuario(function resolverUsuario(error, usuario) {
//     // null || "" || 0 === false
//     if(error) {
//         console.error("Usuario está com problemas", error)
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if(error1) {
//             console.error("Telefone está com problemas", error1)
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if(error2) {
//                 console.error("Endereço está com problemas", error2)
//                 return;
//             }

//             console.log(`
//               Nome: ${usuario.nome},
//               Endereço: ${endereco.endereco}, ${endereco.numero}
//               Telefone: (${telefone.ddd}) ${telefone.telefone}
//             `)
//         })
//     })

// })