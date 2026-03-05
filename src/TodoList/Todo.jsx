import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem"
import { useEffect } from "react";
import { getTodos } from './todoSlice'

function Todo() {

  const dispatch = useDispatch()
  const {todos, filter} = useSelector((state)=>state.todo)

  const filteredTodos = todos.filter((todo) => {
    if (filter === "complete") return todo.isCompleted;
    if (filter === "notComplete") return !todo.isCompleted;
    return true;
  });

  useEffect(()=> {

    
     
       async function fetchTodo() {

        //во тут была проблема в том, что сервер не пускал из-за CORS, не мог понять почему, он подсказал добавить сервер в vite.config.js
        
        const res = await fetch(`/todos`);
    
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
