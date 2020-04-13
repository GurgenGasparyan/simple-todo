import { Typegoose, prop } from 'typegoose';

export class ToDo extends Typegoose{
    @prop()
    title: string;
    @prop()
    description: string;
    @prop()
    completed: boolean
    @prop()
    priority: number
}