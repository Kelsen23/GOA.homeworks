import React, { useState } from 'react'

const TodoList = () => {

  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(prevTodo => [...prevTodo, inputValue]);
    setInputValue('');
  }

  const handleDelete = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  }
 
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} required />
        <button type='submit'>Submit</button>
      </form>

      <ul>
        {todo.map((value, index) => {
          return (
            <li key={index}>{value} <button onClick={() => handleDelete(index)}>Delete</button></li>
          )
        })}
      </ul>

    </div>
     
  )
}

export default TodoList