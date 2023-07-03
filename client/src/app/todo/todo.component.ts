import { Component } from '@angular/core';
import { Todo } from "./Mocks/Todo";
import { v4 as uuid } from "uuid";
import { Todos } from './Mocks/Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  name: string = "";
  total?: number;
  todo?: Todo;
  todos: Todo[] = Todos;
  title: string = "Todo";

  AddTodo(name: string, completions: number = 1) {
    if (name){

      var id = uuid();
      
      var todo: Todo = {
        TodoItemId: id.toString(),
        Title: name,
        TotalCompletions: completions,
        CurrentCompletions: 0,
        IsComplete: false
      };
      
      this.todos.push(todo);
      this.name = '';
      this.total = 1;
    }
    else {
      alert("Error adding todo.");
    }
  }
  
  AddCompletion(todo: Todo){
    console.table(todo);
    
    todo.CurrentCompletions++;
    this.CheckComplete(todo);
    
    console.table(todo);
  }
  
  RemoveCompletion(todo: Todo){
    console.table(todo);
    
    if (todo.CurrentCompletions >= 1)
    todo.CurrentCompletions--;
    
    this.CheckComplete(todo);
    
    console.table(todo);
  }
  
  CheckComplete(todo: Todo) {
    console.table(todo);
    
    todo.IsComplete = todo.CurrentCompletions >= todo.TotalCompletions;
    
    console.table(todo);
  }
  
  ClearCompleted(){
    console.table(this.todos);
    
    this.todos = this.todos.filter(t => t.IsComplete === false);
    
    console.table(this.todos);
  }

  ClearList(){
    this.todos = [];
  }
}