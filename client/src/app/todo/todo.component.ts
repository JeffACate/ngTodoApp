import { Component, OnInit } from '@angular/core';
import { Todo } from './Mocks/Todo';
// import { v4 as uuid } from "uuid";
import { TodoService } from './Services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  title: string = 'Todo';
  name: string = '';
  total?: number;
  todo?: Todo;
  todos: Todo[] = [];

  constructor(private todoServices: TodoService) {}
  ngOnInit(): void {
    this.todoServices.getAll().subscribe((res) => {
      this.todos = [...res]
      console.log(this.todos[0]);
    });
  }

  // AddTodo(name: string, completions: number = 1) {
  //   if (name){

  //     var id = uuid();

  //     var todo: Todo = {
  //       TodoItemId: id.toString(),
  //       Title: name,
  //       TotalCompletions: completions,
  //       CurrentCompletions: 0,
  //       IsComplete: false
  //     };

  //     this.todos.push(todo);
  //     this.name = '';
  //     this.total = 1;
  //   }
  //   else {
  //     alert("Error adding todo.");
  //   }
  // }

  AddCompletion(todo: Todo){
    console.table(todo);

    todo.currentCompletions++;
    this.CheckComplete(todo);

    console.table(todo);
  }

  RemoveCompletion(todo: Todo){
    console.table(todo);

    if (todo.currentCompletions >= 1)
    todo.currentCompletions--;

    this.CheckComplete(todo);

    console.table(todo);
  }

  CheckComplete(todo: Todo) {
    console.table(todo);

    todo.isComplete = todo.currentCompletions >= todo.totalCompletions;

    console.table(todo);
  }

  // ClearCompleted(){
  //   console.table(this.todos);

  //   this.todos = this.todos.filter(t => t.IsComplete === false);

  //   console.table(this.todos);
  // }

  // ClearList(){
  //   this.todos = [];
  // }
}
