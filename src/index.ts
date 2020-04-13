import "reflect-metadata";
import graphqlHTTP from 'express-graphql';
import { createExpressServer, useContainer as routingContainer } from 'routing-controllers';
import { useContainer as validatorContainer } from 'class-validator';
import { Container } from "typedi";

import { schema } from './schemas';
import { configureDb } from "./db";

routingContainer(Container);
validatorContainer(Container);

const app = createExpressServer({
    classTransformer: true,
    controllers: [__dirname + "/controllers/**/*.ts"],
})

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: {
        hello: () => 'Hello world!'
    },
    graphiql: true
}))

configureDb().then(() => {
    app.listen(9000, () => {
        console.log('running on port: 9000');
    })
})