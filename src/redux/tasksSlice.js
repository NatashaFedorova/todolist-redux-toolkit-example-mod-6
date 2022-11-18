import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learm HTML', completed: true },
  { id: 1, text: 'Learm CSS', completed: false },
  { id: 2, text: 'Learm JS', completed: true },
  { id: 3, text: 'Learm React', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const idx = state.findIndex(task => task.id === action.payload);
      state.splice(idx, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
