import { useState } from "react"
import { getTodos } from "./todoSlice"
import { useDispatch } from "react-redux";


function TodoItem({todo}) {

  const [check, setCheck] = useState(todo.isCompleted)
  const dispatch = useDispatch()

  async function fetchTodos() {
    const res = await fetch('http://localhost:3000/todos');
    const data = await res.json();
    dispatch(getTodos(data));
  }

  const handleChange = async (e) => {
    setCheck(e.target.checked)

    await fetch(`http://localhost:3000/todo/${todo.id}`, 
    { method: 'PUT', 

    headers: {
      'Content-Type': 'application/json'
    },

       
      body: JSON.stringify({ isCompleted: e.target.checked }),
    })

    await fetchTodos()
    
  }

  const handleDelete = async (e) => {
    e.preventDefault(),
    await fetch(`http://localhost:3000/todo/${todo.id}`, 
    { method: 'DELETE'}),


    await fetchTodos()
  }



  return (
   
    <div className="flex items-center mb-4 justify-between max-w-2xl mx-auto border-b border-violet-400 pb-5">
      <input
      type='checkbox'
      checked={check}
      onChange={handleChange}

      className="w-5 h-5 border-violet-600 border-3 accent-violet-600"/>
      
      <label className={`px-5 uppercase font-bold text-xl ${check ? " text-stone-400 line-through" : ""} `}> {todo.value}</label>

      <button onClick={handleDelete} className=" px-2 ml-3 rounded-md bg-red-600   border-red-600 text-xl accent-violet-600 font-bold"> x </button>
      
    </div>
    
  )
} 

export default TodoItem
