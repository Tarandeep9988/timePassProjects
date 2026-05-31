import React, { useState } from 'react'
import Form from './Form'
import Todos from './Todos'

const Body = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Buy groceries', isCompleted: false },
    { id: 2, title: 'Finish React project', isCompleted: true },
    { id: 3, title: 'Read 10 pages of book', isCompleted: false },
  ]);
  return (
    <div className='h-[90vh] p-10 flex items-center flex-col max-w-200 mx-auto'>
        <Form todos={todos} setTodos={setTodos}/>
        <Todos todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Body