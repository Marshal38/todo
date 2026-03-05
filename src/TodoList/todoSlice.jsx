import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  // здесь был затык как вытащить из todos данные, подсмотрел только сам todos: [], остальное сам

  todos: [],
  filter: 'all'

}

const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers: {
    getTodos(state, action){
      state.todos = action.payload
    },

    getFilter(state, action){
      state.filter = action.payload
    }


    
  }
})






export const {getTodos, getFilter} = todoSlice.actions;

export default todoSlice.reducer;