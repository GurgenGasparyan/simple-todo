import { connect, connection, Schema } from "mongoose"

const registerAllModels = () => require('../models');

export const configureDb = () => {
    return connect('mongodb://admin:user@localhost:27017', { useNewUrlParser: true }).then(() => {
        connection.useDb('test')
        registerAllModels()
    })
}