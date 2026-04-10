import React from 'react'

const Dice = ({ number }) => {
  const positions = [
    [],
    [4],
    [0, 8],
    [0, 4, 8],
    [0, 2, 6, 8],
    [0, 2, 4, 6, 8],
    [0, 2, 3, 5, 6, 8]
  ]
  return (
    <div className='grid grid-cols-3 grid-rows-3 justify-center place-items-center border h-80 aspect-square'>
      {
        positions[number].map((n) => {
          ;
          return <div
            style={{
              gridColumnStart: (n % 3) + 1,
              gridRowStart: Math.floor(n / 3) + 1,
            }}
            className={`flex items-center justify-center h-5 aspect-square rounded-[100%] bg-black`}></div>;
        })
      }
    </div>
  )
}

export default Dice