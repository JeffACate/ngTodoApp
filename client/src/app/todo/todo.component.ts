import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todo: string =  'Todo';
  todos: string[] = ['todo1', 'todo2', 'todo3'];
  
  constructor() {}

  AddTodo(todo:string) {
    this.todos.push(todo);
  }

  ClearList(){
    this.todos = [];
  }
}