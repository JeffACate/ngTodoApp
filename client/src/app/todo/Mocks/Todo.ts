export interface Todo {
    currentCompletions: number;
    isComplete: boolean;
    title: string;
    todoItemId: string // serialized guid
    totalCompletions: number;

    // constructor() {
    //     this.TodoItemId = "";
    //     this.Title = "";
    //     this.TotalCompletions = 1;
    //     this.CurrentCompletions = 0;
    //     this.IsComplete = false;
    // }
}
