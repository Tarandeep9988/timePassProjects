import React, { useRef } from 'react'

const Form = ({todos, setTodos}) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = Date.now();
        const title = inputRef.current.value;
        const isCompleted = false;
        const newTodo = {id, title, isCompleted};
        setTodos([...todos, newTodo]);
        inputRef.current.value = "";
    }
  return (
    <div className='w-[100%] max-w-200'>
        <form className='flex gap-5 justify-center' action="" onSubmit={handleSubmit}>
            <input
            ref={inputRef}
            className='border grow rounded-xl px-3'
            type="text" 
            placeholder='Enter your todo'/>
            <button className='bg-black text-white rounded-2xl px-5 cursor-pointer' type="submit">Add</button>
        </form>
    </div>
  )
}

export default Form