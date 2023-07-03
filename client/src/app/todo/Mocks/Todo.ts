export interface Todo {
    TodoItemId: string // serialized guid
    Title: string;
    TotalCompletions: number;
    CurrentCompletions: number;
    IsComplete: boolean;

    // constructor() {
    //     this.TodoItemId = "";
    //     this.Title = "";
    //     this.TotalCompletions = 1;
    //     this.CurrentCompletions = 0;
    //     this.IsComplete = false;
    // }
}