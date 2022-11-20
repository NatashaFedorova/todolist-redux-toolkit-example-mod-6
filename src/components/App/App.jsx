import Form from 'components/Form';
import StatusFilter from 'components/StatusFilter';
import TaskCounter from 'components/TaskCounter';
import TodoList from 'components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Main, Loading, Error } from './App.styled';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';
import { getIsLoading, getError } from '../../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  console.log(error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <TaskCounter />
        <StatusFilter />
      </Header>
      <Main>
        <Form />
        {isLoading && !error && <Loading>Loading...</Loading>}
        {error && <Error>{error}</Error>}
        <TodoList />
      </Main>
    </Container>
  );
};

export default App;
