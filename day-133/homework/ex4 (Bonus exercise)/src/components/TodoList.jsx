import React, { useState } from 'react'

const TodoList = () => {

  const [inputValue, setInputValue] = useState("");  
  const [todoList, setTodoList] = useState([]);  

  const addTodo = () => {
    if (inputValue !== "") {
      setTodoList(prev => [...prev, inputValue])
      setInputValue("");
    } else {
      alert("Can't add empty todo")
    }
  }

  const removeTodo = (index) => {
    setTodoList((prev) => prev.filter((todo, i) => i !== index))
  }

  return (
    <div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todoList.map((todo, index) => <div key={index}>
          <li key={index}>{todo}</li>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </div>)}
      </ul>
    </div>
  )
}

export default TodoList