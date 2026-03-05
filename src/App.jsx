import Header from "./Header/Header"

import NewTodoButton from "./TodoList/NewTodoButton"
import Todo from "./TodoList/Todo"



function App() {
  

  return (
<div className="grid h-screen grid-rows-[auto_1fr_auto] max-w-4xl mx-auto px-4">
    <Header/>
    <div className="overflow-scroll">
    
      <Todo/>
    
    </div>
    <NewTodoButton/>

</div>

      )
}

export default App
