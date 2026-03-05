import { useState } from "react"


function TodoItem({todo}) {

  const [check, setCheck] = useState(todo.isCompleted)

  return (
   
    <div className="flex items-center mb-4 justify-between max-w-2xl mx-auto border-b border-violet-400 pb-5">
      <input
      type='checkbox'
      checked={check}
      onChange={e => 
        setCheck(e.target.checked) }
      className="w-5 h-5 border-violet-600 border-3 accent-violet-600"/>
      {!check ? (
      <label className="px-5 uppercase font-bold text-xl " >{todo.value}</label>)  :  <label className="px-5 uppercase font-bold text-xl  text-stone-400 line-through" >{todo.value}</label>}
      
    </div>
    
  )
} 

export default TodoItem
