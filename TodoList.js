import React, { useState, useEffect } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([]) // array to store the list of todos
  const [newTodo, setNewTodo] = useState('') // variable to store the new todo text

  useEffect(() => {
    const storageTodos = localStorage.getItem('todos')
    if (storageTodos) {
      setTodos(JSON.parse(storageTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = event => {
    event.preventDefault()
    if(newTodo != ''){
    setTodos([...todos, { text: newTodo, completed: false }])
    setNewTodo('')
    }else{
      alert("Please use ur hands to type something")
    }
  }

  const handleDelete = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleCompleted = index => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleCompleted(index)}>{todo.completed ? 'undo' : 'completed'}</button>
          </li>
        ))}
      </ul>
      <footer id="footer" className="footer-class">Made by Harshit Kumar in 7 minutes 49 seconds.</footer>
    </div>
  )
}

export default TodoList
