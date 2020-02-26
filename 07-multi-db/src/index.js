const ICrud = require('./db/strategies/interfaces/interfaceCrud')
const PostgresDB = require('./db/strategies/postgres')
const MongoDB = require('./db/strategies/mongodb')
const ContextStrategy = require('./db/strategies/base/contextStrategy')

const contextPostgres = new ContextStrategy(new PostgresDB)

const contextMongoDB = new ContextStrategy(new MongoDB)

contextMongoDB.create("teste")