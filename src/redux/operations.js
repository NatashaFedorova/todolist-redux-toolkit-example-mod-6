import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://637929d37419b414df8b4256.mockapi.io/example';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/todos');
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/todos', { text });
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskiId, thunkAPI) => {
    try {
      const response = await axios.delete(`/todos/${taskiId}`);
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
