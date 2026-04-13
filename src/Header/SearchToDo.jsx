import { useDispatch, useSelector } from "react-redux"
import { getSearch } from "../TodoList/todoSlice"


function SearchToDo() {

  const dispatch = useDispatch()
  const {search} = useSelector(state=> state.todo)

  function handleSearch(e) {
    dispatch(getSearch(e.target.value))
    }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
      placeholder="Найти задачу..."
      value={search}
      onChange={handleSearch}
      className="border-3 border-violet-600 rounded-md w-xl h-8 px-4 " 
      />
      
    </form>
  )
}

export default SearchToDo
