import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "t1",
      title: "Set up project",
      description: "Vite + Tailwind",
      column: "todo",
    },
    {
      id: "t2",
      title: "Create Redux slice",
      description: "tasks slice",
      column: "inprogress",
    },
    {
      id: "t3",
      title: "Persist state",
      description: "redux-persist",
      column: "done",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title, description }) => ({
        payload: { id: nanoid(), title, description, column: "todo" },
      }),
    },
    moveTask: (state, action) => {
      const { id, column } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) task.column = column;
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, moveTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
