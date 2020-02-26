const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud {
    constructor() {
        super()
    }
    create(item) {
        console.log("Criando um heroi", item)
    }
}

module.exports = MongoDB