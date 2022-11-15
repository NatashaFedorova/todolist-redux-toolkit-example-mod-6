import { Item, TodoText, Box } from './Todolist.styled';

const TodoList = () => {
  return (
    <Box>
      <ul>
        {[].map(task => (
          <Item key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => console.log(task.id)}
            />
            <TodoText>{task.text}</TodoText>
            <button type="button" onClick={() => console.log(task.id)}>
              X
            </button>
          </Item>
        ))}
      </ul>
    </Box>
  );
};
export default TodoList;
