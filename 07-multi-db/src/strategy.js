class ICrud {
    create(item) {
        throw new NotImplementedException()
    }
    read(query) {
        throw new NotImplementedException()
    }
    update(id, item) {
        throw new NotImplementedException()
    }
    delete(id) {
        throw new NotImplementedException()
    }
}

class ContextStrategy {
    constructor(strategy) {
        this._database = strategy
    }
    create(item) {
        return this._database.create(item)
    }
    read(query) {
        return this._database.read(query)
    }
    update(id, item) {
        return this._database.update(id, item)
    }
    delete(id) {
        return this._database.delete(id)
    }
}

class MongoDB extends ICrud {
    constructor() {
        super()
    }
    create(item) {
        console.log("Criando um heroi", item)
    }
}

class PostgresDB extends ICrud {
    constructor() {
        super()
    }
    create(item) {
        console.log("Criando um heroi", item)
    }
}

const contextMongoDB = new ContextStrategy(new MongoDB)

contextMongoDB.create("teste")

