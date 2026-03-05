import NewTodo from './NewTodo';
import {useState} from 'react';


function NewTodoButton() {

  const [ open, setOpen] = useState(false)
  
  function handleNewTodo () {

    setOpen((e) => !e)

    
    
  }
  
  return (
    <>
    <button onClick={handleNewTodo} className="bg-violet-500 px-3 pb-1 rounded-full items-center text-violet-100 font-extralight text-3xl m-auto mr-9 mb-7
    "> 

      +
    </button>
    {open && <NewTodo/>}
    </>
  )
}







export default NewTodoButton
