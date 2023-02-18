import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  /**
   *
   */
  constructor() {
    
    const todos: string[] = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
  }
}
