import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoList/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})

export default store;