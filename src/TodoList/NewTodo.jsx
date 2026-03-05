function NewTodo() {
  return (
    <div className="absolute inset-32 flex  flex-col items-center justify-center bg-slate-200/40 backdrop-blur-sm border-4">
      <span>НОВАЯ ЗАДАЧА</span>
      <input
      placeholder="Найти задачу..."
      className="border-3 border-violet-600 rounded-md w-auto h-8 px-4 " />
      
      <div className="flex items-center mt-6 justify-between px-4 py-3">
        <button>Закрыть</button>
        <button>Добавить</button>
      </div>
      
    </div>
  )
}

export default NewTodo

// это только набросок, еще не реализовывал
