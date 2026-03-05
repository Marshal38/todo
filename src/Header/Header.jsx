import SearchToDo from "./SearchToDo"
import TodoFilter from "./TodoFilter"

function Header() {
  return (
    <header className="flex flex-col items-center mt-8 w-auto px-6 py-5">
    <p className="text-2xl font-bold tracking-wider">
      TODO LIST
    </p>

    <div className="flex items-center mt-6 justify-between px-4 py-3">
<SearchToDo/>
<TodoFilter/>
    </div>

    </header>

  )
}

export default Header
