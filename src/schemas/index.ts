import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { ToDo, ToDos } from "./todo-schema";


export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            todo: ToDo,
            todos: ToDos
        }
    })
})