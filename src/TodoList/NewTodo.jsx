import { useDispatch, useSelector } from "react-redux";
import { getPost, getTodos } from "../TodoList/todoSlice"


function NewTodo({onClose}) {

  const dispatch = useDispatch()
  const {value} = useSelector(state=> state.todo)
  
  
  async function fetchTodos() {
    const res = await fetch('http://localhost:3000/todos');
    const data = await res.json();
    dispatch(getTodos(data));
  }
  

  async function postTodo () {
    await fetch('http://localhost:3000/todo', {
      method: 'POST',
     
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value,
      })
    });

    
    await fetchTodos()
    dispatch(getPost(''))
    onClose()
    
    

  }

  function handlePost(e) {
    dispatch(getPost(e.target.value))
    }

  return (
 
    <div>
      { close && (
      <div className="absolute inset-0 flex  flex-col items-center justify-center bg-gray-500/80">
        <div className="bg-white flex flex-col w-xl h-56 rounded-2xl border-2 border-violet-600 items-center justify-between">
          <span className="py-6 font-bold text-2xl">НОВАЯ ЗАДАЧА</span>
          <input
      placeholder="Добавить задачу..."
      value={value}
      onChange={handlePost}
      autoFocus={true}
      className="border-3 border-violet-600 rounded-md w-md h-8 px-4 " />
      
          <div className="flex  mt-14 justify-between px-4 py-3 w-full">
          
          <button className="px-6 bg-violet-100 text-violet-600 text-center rounded-md w-l h-8 ml-4 uppercase tracking-wide" onClick={onClose}>Закрыть</button>
          
          <button className="px-6 bg-violet-600 text-violet-100 text-center rounded-md w-l h-8 mr-3 uppercase tracking-wide" onClick={postTodo}>Добавить</button>
         </div>
        </div>
      
      </div> )}
    </div>
    
  )
}

export default NewTodo

// это только набросок, еще не реализовывал
