import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      uid: 0,
      text: 'Become a superhero',
      completed: false
    },
    {
      uid: 1,
      text: 'Create todo app',
      completed: true
    }
  ]
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.uid === action.payload);
      todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.uid !== action.payload);
    }
  }
})

export const {addTodo, toggleTodo, removeTodo} = todosSlice.actions;
export default todosSlice.reducer;
