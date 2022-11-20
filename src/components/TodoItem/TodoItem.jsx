import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';
import { Item, TodoText } from './TodoItem.styled';

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(task.id);
    dispatch(deleteTask(task.id));
  };

  const handleChange = () => {
    console.log(task);
    dispatch(toggleCompleted(task));
  };
  return (
    <Item key={task.id}>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <TodoText>{task.text}</TodoText>
      <button type="button" onClick={handleClick}>
        X
      </button>
    </Item>
  );
};

export default TodoItem;
