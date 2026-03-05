import { useDispatch } from "react-redux"
import { getFilter } from "../TodoList/todoSlice"

function TodoFilter() {

  const dispatch = useDispatch();

  function handleFilter(e){
    dispatch(getFilter(e.target.value))
  }


  return (
    

    <select onChange={handleFilter} className="px-6 bg-violet-600 text-violet-100 text-center rounded-md w-l h-8 ml-4">
      <option value={'all'}>Все</option>
      <option value={'complete'}>Выполнены</option>
      <option value={'notComplete'}>Не выполнены</option>

    </select>
    
  )
}

export default TodoFilter
