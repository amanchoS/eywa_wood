// TodoForm.js file:
import TextField from '@material-ui/core/TextField';

function TodoForm({addTask}) {
    const onSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      addTask(form.title.value);
      form.reset();

    };
  
    return (
      <form className="todo-form" onSubmit={onSubmit}>
        <TextField 
          name="title" 
          label="Add a new task" 
          variant="outlined"
          fullWidth
        />
      </form>
    );
  }
  
  export default TodoForm;