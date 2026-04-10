import React from 'react'
import Todo from './Todo'

const Todos = ({todos, setTodos}) => {
  return (
    <div className='h-[90%] w-full overflow-y-auto'>
      {
        todos.map((todo, index) => {
          return <Todo key={index} index={index} id={todo.id} title={todo.title} isCompleted={todo.isCompleted} setTodos={setTodos} todos={todos}/>
        })
      }
    </div>
  )
}

export default Todos