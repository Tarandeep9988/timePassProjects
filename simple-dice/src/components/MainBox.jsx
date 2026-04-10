import React, { useState } from 'react'
import Dice from './Dice'

const MainBox = () => {
    const [number, setNumber] = useState(0);
    const changeNumber = () => {
        setNumber(Math.floor(Math.random() * 6 + 1));
    }
  return (
    <div className='h-[80vh] border flex items-center justify-center flex-col gap-5'>
        <Dice number={number} />
        <button className='border p-3 rounded-2xl cursor-pointer ' onClick={changeNumber}>Click me</button>
    </div>
  )
}

export default MainBox