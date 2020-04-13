import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList } from "graphql";
import Container from "typedi";
import { ToDoRepository } from "../repositories/todo-repository";

type ToDoArgs = {
    id: string
}

export const ToDoType = new GraphQLObjectType({
    name: 'ToDoType',
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        completed: { type: GraphQLBoolean },
        priority: { type: GraphQLInt }
    }
})

export const ToDo = {
    type: ToDoType,
    args: { id: { type: GraphQLString } },
    resolve: async (p: any, { id }: ToDoArgs) => {
        const toDoRepository = Container.get(ToDoRepository)
        return await toDoRepository.getToDo(id)
    }
}

export const ToDos = {
    type: new GraphQLList(ToDoType),
    resolve: async () => {
        const toDoRepository = Container.get(ToDoRepository)
        return await toDoRepository.getTodos();
    }
}