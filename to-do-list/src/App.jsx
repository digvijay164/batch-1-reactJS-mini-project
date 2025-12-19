import React, { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setTasks((p) => [...p, { id: Date.now(), text: trimmed, done: false }])
    
    setText('')
  }

  const toggleTask = (id) => {
    setTasks((p) => p.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const deleteTask = (id) => {
    setTasks((p) => p.filter((t) => t.id !== id))
  }

  const clearAll = () => setTasks([])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">To‑Do List</h1>

        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            aria-label="New task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
          <span>{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</span>
          <button
            onClick={clearAll}
            className="text-red-500 hover:underline disabled:opacity-50"
            disabled={tasks.length === 0}
          >
            Clear all
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.length === 0 ? (
            <li className="text-center text-gray-400">No tasks yet</li>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    className="w-4 h-4"
                  />
                  <span className={task.done ? 'line-through text-gray-400' : ''}>{task.text}</span>
                </label>
                <div className="flex items-center gap-2">
                  <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
