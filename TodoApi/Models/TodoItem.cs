using System;
using System.ComponentModel.DataAnnotations;

namespace testApp.Models;

public class TodoItem
{
    [Key]
    public Guid TodoItemId { get; set; }
    public String? Title { get; set; }
    public int TotalCompletions { get; set; }
    public int CurrentCompletions { get; set; }
    public bool IsComplete { get; set; }
}
