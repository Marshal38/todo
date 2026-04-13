import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  todos: [],
  filter: 'all',
  search: '',
  value: ''

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
    },

    getSearch(state, action) {
      state.search = action.payload
    },

    getPost(state, action) {
      state.value = action.payload
    }



    
  }
})






export const {getTodos, getFilter, getSearch, getPost} = todoSlice.actions;

export default todoSlice.reducer;