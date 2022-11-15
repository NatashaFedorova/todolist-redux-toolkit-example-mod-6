import Form from 'components/Form';
import StatusFilter from 'components/StatusFilter';
import TaskCounter from 'components/TaskCounter';
import TodoList from 'components/TodoList';
import { Container, Header, Main } from './App.styled';

const App = () => {
  return (
    <Container>
      <Header>
        <TaskCounter />
        <StatusFilter />
      </Header>
      <Main>
        <Form />
        <TodoList />
      </Main>
    </Container>
  );
};

export default App;
