import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasksSlice';
import { StyledForm, BtnSubmit, Input } from './Form.styled';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form.elements.text.value);
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type="text" name="text" placeholder="text..." />
      <BtnSubmit type="submit">Add</BtnSubmit>
    </StyledForm>
  );
};
export default Form;
