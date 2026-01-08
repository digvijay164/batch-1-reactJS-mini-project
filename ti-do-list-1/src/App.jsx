import React, { useState } from 'react'
import Cards from './components/Cards'

const App = () => {
  const [contentpass, setContent] = useState("")
  return (
    <>
      <div className="w-full h-screen bg-black flex items-center justify-center">
        {/* <Cards/> */}
        <input
          className='w-70 h-10 rounded-xl bg-white '
          type="text"
          placeholder='Enter yout Task'
          value={contentpass}
          onChange={(e)=>{setContent(e.target.value)}}
        />
        <button 
        className='h-10 w-30 bg-blue-500 text-white rounded-xl' 
        onClick={() => {
          console.log(contentpass);
        }}>Submit</button>

        <Cards 
        content={contentpass}
        />
      </div>
    </>
  )
}

export default App
