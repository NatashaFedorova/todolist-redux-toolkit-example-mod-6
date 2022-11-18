import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import statusFilters from '../../redux/constants';
import { getTasks, getStatusFilter } from '../../redux/selectors';
import { Item, TodoText, Box } from './Todolist.styled';

const getVisilbleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

const TodoList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visilbleTasks = getVisilbleTasks(tasks, statusFilter);

  const dispatch = useDispatch();
  const handleDelete = taskId => dispatch(deleteTask(taskId));
  const handleToggle = taskId => dispatch(toggleCompleted(taskId));

  return (
    <Box>
      <ul>
        {visilbleTasks.map(task => (
          <Item key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            <TodoText>{task.text}</TodoText>
            <button type="button" onClick={() => handleDelete(task.id)}>
              X
            </button>
          </Item>
        ))}
      </ul>
    </Box>
  );
};
export default TodoList;
