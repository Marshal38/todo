function NewTodo() {
  return (
 
    

    

      <div className="absolute inset-0 flex  flex-col items-center justify-center bg-gray-500/80">
        <div className="bg-white flex flex-col w-xl h-56 rounded-2xl border-2 border-violet-600 items-center justbe">
          <span className="py-6 font-bold text-2xl">НОВАЯ ЗАДАЧА</span>
          <input
      placeholder="Найти задачу..."
      className="border-3 border-violet-600 rounded-md w-md h-8 px-4 " />
      
          <div className="flex  mt-14 justify-between px-4 py-3 w-full">
          <button className="px-6 bg-violet-100 text-violet-600 text-center rounded-md w-l h-8 ml-4 uppercase tracking-wide">Закрыть</button>
          <button className="px-6 bg-violet-600 text-violet-100 text-center rounded-md w-l h-8 mr-3 uppercase tracking-wide">Добавить</button>
         </div>
        </div>
      
      </div>
    
  )
}

export default NewTodo

// это только набросок, еще не реализовывал
