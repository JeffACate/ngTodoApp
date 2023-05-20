using Microsoft.EntityFrameworkCore;
using testApp.Models;

#nullable disable
public class TodoItemContext : DbContext
{
    public DbSet<TodoItem> TodoItems { get; set; }

    public string DbPath { get; }

    public TodoItemContext()
    {
        var folder = @"/home/jeff/dev/ngTodoApp/TodoApi/Data/Providers/";
        DbPath = System.IO.Path.Join(folder, "TodoItems.db");
        System.Console.WriteLine(DbPath);
    }

    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}
#nullable restore