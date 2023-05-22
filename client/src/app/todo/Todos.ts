import { Todo } from "./Todo";
import { v4 as uuid } from "uuid";
export const Todos: Todo[] = [];


for (let i = 0; i < 10; i++) {
    let id = uuid();
    var total = 0;

    while(total ===  0){
        total = Math.floor(Math.random() * 10);
    }

    let todo: Todo = {
        TodoItemId: id.toLowerCase(),
        Title: `Todo ${i}`,
        TotalCompletions: total,
        CurrentCompletions: 0,
        IsComplete: false
    }
    
    Todos.push(todo);
}
