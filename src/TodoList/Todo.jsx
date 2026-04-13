import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem"
import { useEffect, useState } from "react";
import { getTodos } from './todoSlice'


function Todo() {

  const dispatch = useDispatch()
  const {todos, filter, search} = useSelector((state)=>state.todo)



  const filteredTodos = todos.filter((todo) => {
    
    const filterTodo = 
      filter === "complete"
    ? todo.isCompleted
    : filter === "notComplete"
    ? !todo.isCompleted
    : true;

    const searchTodo = todo.value
  .toLowerCase()
  .includes(search.toLowerCase());

return filterTodo && searchTodo;
  });

  

  

  useEffect(()=> {

       async function fetchTodo() {
        
        const res = await fetch('http://localhost:3000/todos');
    
        const data = await res.json();
        
        dispatch(getTodos(data))
      }

      fetchTodo()
    
  },[dispatch])


  return (
    <div className="flex flex-col items-center ">
     

     {filteredTodos.map((todo) => (
        
        <TodoItem key={todo.id} todo={todo}/>))}
      
    </div>
  )
}

export default Todo
