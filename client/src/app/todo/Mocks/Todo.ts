export interface Todo {
    CurrentCompletions: number;
    IsComplete: boolean;
    Title: string;
    TodoItemId: string // serialized guid
    TotalCompletions: number;

    // constructor() {
    //     this.TodoItemId = "";
    //     this.Title = "";
    //     this.TotalCompletions = 1;
    //     this.CurrentCompletions = 0;
    //     this.IsComplete = false;
    // }
}