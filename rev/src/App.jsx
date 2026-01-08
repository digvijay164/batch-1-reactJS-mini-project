import React from 'react'
import Button from './components/button'
import { useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)
  return (
    <div className='h-screen w-full bg-red-500 flex items-center justify-center'>
      <div className="main">
        <h1 className='text-center m-[1rem] text-white text-4xl'>{number < 0 ? `negative numbers are not allowed ${setNumber(0)}` :number}</h1>
        <Button
          className="w-[4rem] h-[3rem] bg-red-600 text-white"
          cbfn={() => { setNumber(number + 1) }}
          btnName="Add"
        />
        <Button
          className="w-[4rem] h-[3rem] bg-red-600 text-white"
          cbfn={() => { setNumber(number - 1) }}
          btnName="Sub"
        />
      </div>
    </div>
  )
}

export default App
