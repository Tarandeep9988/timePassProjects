import React, { useEffect } from 'react'
import { FaRegCircle, FaRegCircleCheck } from 'react-icons/fa6';
import { MdDelete  } from "react-icons/md";

const Todo = ({id, index, title, isCompleted, setTodos, todos}) => {
  const handleDeleteTodo = () => {
    setTodos(todos.filter(todo => todo.id != id));
  }
  const handleTodoComplete = () => {
    setTodos(todos.map(todo =>
      todo.id === id 
      ? {...todo, isCompleted: !todo.isCompleted}
      : todo
    ))
  }
  return (
    <div className='my-2 border rounded-md px-2 flex justify-between gap-2'>
      <div>{index + 1}.</div>
      <div className={`grow overflow-hidden ${isCompleted && 'line-through text-gray-500'}`}>{title}</div>
      <div className='flex items-center justify-center'>
        <button className='mx-2'>
          {
            isCompleted ? 
            <FaRegCircleCheck onClick={handleTodoComplete} className='cursor-pointer' />
            :
            <FaRegCircle onClick={handleTodoComplete} className='cursor-pointer' />
          }
        </button>
        <button className='mx-2'>
          <MdDelete onClick={handleDeleteTodo} className='cursor-pointer'/>
        </button>
      </div>
    </div>
  )
}

export default Todo