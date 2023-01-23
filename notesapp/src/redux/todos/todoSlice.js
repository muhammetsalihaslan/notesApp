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
    filtered: (state, action) => {
      const filtered = state.items.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(action.toLocaleLowerCase())
        );
      });
      state.items = filtered;
    },
  },
});

export const selectTodos = (state) => state.todos.items;

export const { addTodo, toggle, destroy, filtered } = todoSlice.actions;

export default todoSlice.reducer;
