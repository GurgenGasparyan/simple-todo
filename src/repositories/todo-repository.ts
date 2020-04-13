import { Service } from 'typedi';
import { connection } from 'mongoose';

@Service()
export class ToDoRepository {
    constructor() {
        
    }

    getToDo(id: string) {
        return connection.model('ToDo').findById(id)
    }

    getTodos() {
        return connection.model('ToDo').find({});
    }

    addToDo() {
        connection.model('ToDo').create({
            title: 'aaa',
            description: 'aaaaa',
            priority: 5,
            completed: false,
        }).catch(e => console.log(e))
    }
}