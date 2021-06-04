// TodoForm.js file:
function TodoForm({addTask}) {
    const onSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      addTask(form.title.value);
      form.reset();

    };
  
    return (
      <form className="todo-form" onSubmit={onSubmit}>
        <input name="title" type="text" placeholder="Add new task…" />
      </form>
    );
  }
  
  export default TodoForm;