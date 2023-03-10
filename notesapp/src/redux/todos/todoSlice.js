import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    filtered: "",
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            title,
          },
        };
      },
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    findNote: (state, action) => {
      state.filtered = action.payload;
    },
  },
});

export const selectTodos = (state) => state.todos.items;
export const filterTodos = (state) => state.todos.filtered;

export const { addTodo, toggle, destroy, findNote } = todoSlice.actions;

export default todoSlice.reducer;
