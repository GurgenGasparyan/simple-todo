
import { Get, Post, Body, Controller, Param } from "routing-controllers";
import { ToDoRepository } from '../repositories/todo-repository';

@Controller('/todos')
export class ToDoController {
    constructor(private toDoRepository: ToDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    @Get('/')
    getToDos(){
        return {
            todo: 'aaaa'
        }
    }

    @Get('/:id')
    getToDoById (@Param('id') id: any){
        return {
            todo: id
        }
    }

    @Post('/')
    addTodo(@Body() todo: any) {
        this.toDoRepository.addToDo();
    }
}