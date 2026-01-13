import React, { useState } from 'react'
import Cards from './components/Cards'

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [cards, setCards] = useState([])
  
  return (
    <>
      <div className="w-full h-screen bg-black relative">
        <div className="input-container absolute left-1/2 top-52 -translate-x-1/2">
          <input
            className='w-70 h-10 rounded-xl bg-white '
            type="text"
            placeholder='Enter yout Task'
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value) }}
          />
          <button
            className='h-10 w-30 bg-blue-500 text-white rounded-xl'
            onClick={() => {
              const text = inputValue.trim()
              if (!text) return
              setCards(prev => [...prev, { id: Date.now(), content: text }])
              setInputValue("")
            }}
          >Submit</button>
        </div>

        {cards.length > 0 && (
          <div className="card-container w-full h-1/2 flex items-center  gap-4 p-[1rem] absolute bottom-0 ">
            {cards.map(card => (
              <Cards key={card.id} id={card.id} content={card.content} onDelete={(id) => setCards(cards.filter(c => c.id !== id))} />
            ))}
          </div>
        )}

      </div>
    </>
  )
}

export default App
