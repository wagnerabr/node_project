const {
    readFile,
    writeFile
} = require('fs')

const {
    promisify
} = require('util')

//Transformando em promise
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivo(params) {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    async escreverArquivo(dados) {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true 
    }
    async cadastrar(heroi) {
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now()
        //concatenando objetos
        const heroisComId = {
            id,
            ...heroi
        }
        const dadosFinal = [
            ...dados,
            heroisComId
        ]
        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }
    async listar(id) {
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }

    async remover(id) {
        if(!id) {
            return await this.escreverArquivo([])
        }
        const dados = await this.obterDadosArquivo()
        //findIndex permite passar uma function para dentro dele para que ele retorne boolean 
        const indice = dados.findIndex(item => item.id === parseInt(id))
        
        if(indice === -1) {
            throw Error('O usuário não existe')
        }
        dados.splice(indice, 1)
        return await this.escreverArquivo(dados)
    }

    async atualizar(id, modificacoes) {
        const dados = await this.obterDadosArquivo()
        
        const indice = dados.findIndex(item => item.id === parseInt(id))
        
        if(indice === -1) {
            throw Error('Heroi não existe')
        }
        const atual = dados[indice]

        const objetosAtualizar = {
            ...atual,
            ...modificacoes
        }
        //remove da lista
        dados.splice(indice, 1)

        return await this.escreverArquivo([
            ...dados,
            objetosAtualizar
        ])
        //return false
    }
}

module.exports = new Database()