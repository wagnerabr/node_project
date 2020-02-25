const Commander = require("commander")
const Database = require("./database")
const Vilao = require("./vilao")

async function main() {
    Commander
        .version("v1")
        .option("-n, --nome [value]", "Nome do Vilao")
        .option("-p, --poder [value]", "Poder do Vilao")
        .option("-i, --id [value]", "Id do Vilao")

        .option("-c, --cadastrar", "Cadastrar Vilao")
        .option("-l, --listar", "Listar Viloes")
        .option("-d, --deletar [value]", "Apagar Vilao")
        .option("-a, --atualizar [value]", "Atualizar Vilao")
        .parse(process.argv);
    const vilao = new Vilao(Commander)

    try {
        if (Commander.cadastrar) {
            delete vilao.id
            const resultado = await Database.cadastrar(vilao)
            if (!resultado) {
                console.error("Não cadastrou o vilao")
                return
            }
            console.log("Vilao Cadastrado com Sucesso")
        }
        if (Commander.listar) {
            const resultado = await Database.listar()
            if (!resultado) {
                console.error("Não listou viloes")
            }
            console.log("Listagem de viloes realizadas com sucesso.")
            console.log(resultado)
            return
        }
        if (Commander.deletar) {
            const idParaDeletar = parseInt(Commander.deletar)
            const resultado = await Database.remover(idParaDeletar)
            if(!resultado) {
                console.error("Não apagou o vilao")
            }
            console.log("Vilao deletado com sucesso")
        }
        if (Commander.atualizar) {
            const idParaAtualizar = parseInt(Commander.atualizar)
            //converte um objeto para json
            const dado = JSON.stringify(vilao)

            //converte um json em objeto
            const vilaoAtualiazar = JSON.parse(dado)
            const resultado = await Database.atualizar(idParaAtualizar, vilaoAtualiazar)
            if (!resultado) {
                console.error("Não cadastrou o vilao")
                return
            }
            console.log("Vilao Cadastrado com Sucesso")
        }
    } catch (error) {
        console.error("Não funciona", error)
    }
}

main()