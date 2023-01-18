import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "I have to make project prepare",
        completed: true,
      },
      {
        id: "2",
        title: "I will go to cinema next week",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const selectTodos = (state) => state.todos.items;

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
