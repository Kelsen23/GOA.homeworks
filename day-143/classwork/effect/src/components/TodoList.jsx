import React, { useState, useEffect } from 'react'

const TodoList = () => {

  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || []);

  const addTask = e => {
    e.preventDefault();
    const inputValue = form.elements.input.value;
    setList(prevTasks => [...prevTasks, inputValue]);
  }

  const deleteTask = (index) => {
    setList(prevList => prevList.filter((_, i) => index !== i));
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list]);

  return (
    <div>
      <form name="form" onSubmit={addTask}>
        <input type="text" name="input" placeholder="Enter Todo" required />
        <button>Submit</button>
      </form>

      <ul>
        {list.map((task, index) => {
          return (
            <li key={index}>{task} <button onClick={() => deleteTask(index)}>Delete</button></li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList