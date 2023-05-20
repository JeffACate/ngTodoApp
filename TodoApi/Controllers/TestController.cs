using Microsoft.AspNetCore.Mvc;
using testApp.Models;

namespace testApp.Controllers
{
    [Route("[controller]")]
    public class TodoController : Controller
    {
        private readonly TodoItemContext _context;

        public TodoController(TodoItemContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("all")]
        public ObjectResult GetMany()
        {
            return Ok(_context.TodoItems.ToList());
        }

        [HttpGet]
        [Route("Detail/{id}")]
        public ObjectResult GetMany([FromRoute] Guid id)
        {
            return Ok(_context.TodoItems.Where(t => t.TodoItemId == id));
        }

        [HttpPost]
        [Route("Create")]
        public ObjectResult Post([FromQuery] string title, [FromQuery] int completions)
        {
            var todo = new TodoItem()
            {
                TodoItemId = Guid.NewGuid(),
                CurrentCompletions = 0,
                TotalCompletions = completions,
                Title = title
            };

            _context.TodoItems.Add(todo);
            _context.SaveChanges();

            return Ok(Json(todo));
        }

        [HttpPost]
        [Route("TestCreate")]
        public ObjectResult TestPost([FromQuery] string title, [FromQuery] int completions, [FromQuery] bool isComplete)
        {
            var todo = new TodoItem()
            {
                TodoItemId = Guid.NewGuid(),
                CurrentCompletions = 0,
                TotalCompletions = completions,
                Title = title,
                IsComplete = isComplete
            };

            _context.TodoItems.Add(todo);
            _context.SaveChanges();

            return Ok(Json(todo));
        }

        [HttpPut]
        [Route("Edit/{id}")]
        public ObjectResult Put([FromRoute] Guid id, [FromBody] TodoItem todo)
        {
            if (id == Guid.Empty)
                return BadRequest(new { message = $"Invalid id: {id}." });

            var old = _context.TodoItems.Where(t => t.TodoItemId == id).FirstOrDefault();

            if (old is null)
                return NotFound(new { message = $"Todo {id} not found." });

            try
            {
                old.Title = todo.Title;
                old.TotalCompletions = todo.TotalCompletions;
                old.IsComplete = todo.IsComplete;
                old.CurrentCompletions = todo.CurrentCompletions;

                _context.Update(old);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(new { error = e.Message.ToString() });
            }

            return Ok(Json(todo));
        }

        [HttpDelete]
        [Route("{id}/Delete")]
        public bool Delete([FromRoute] Guid id)
        {
            var todo = _context.TodoItems.Where(t => t.TodoItemId == id).FirstOrDefault();
            if (todo is not null)
            {
                _context.TodoItems.Remove(todo);
                _context.SaveChanges();

                return true;
            }

            return false;
        }

        [HttpDelete]
        [Route("Clear")]
        public int Clear()
        {
            var todosToClear = _context.TodoItems.Where(t => t.IsComplete == true).ToArray();

            _context.TodoItems.RemoveRange(todosToClear);
            _context.SaveChanges();

            return todosToClear.Count();
        }
    }
}
