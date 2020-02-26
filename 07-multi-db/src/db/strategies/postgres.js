const ICrud = require('./interfaces/interfaceCrud')

class PostgresDB extends ICrud {
    constructor() {
        super()
    }
    create(item) {
        console.log("Criando um heroi", item)
    }
}

module.exports = PostgresDB