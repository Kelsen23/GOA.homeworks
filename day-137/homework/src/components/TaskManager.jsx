import React, { useState } from 'react'

const TaskManager = () => {

  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [option, setOption] = useState('Work');
  const [date, setDate] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTaskInput, setEditTaskInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(prevData => [...prevData, {title: input, option: option, date: date}]);
    setInput('');
    setDate('');
  }

  const deleteTask = (index) => {
    setData(prevData => prevData.filter((value, i) => index !== i));
  }

  const startEditTask = (index) => {
    setEditIndex(index);
    setEditTaskInput(data[index].title);
  }

  const saveEditedTask = (index) => {
    setData(prevData => prevData.map((task, i) => i === index ? { ...task, title: editTaskInput } : task));
    setEditIndex(null);
    setEditTaskInput('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input value={input} placeholder='Enter Task' onChange={(e) => setInput(e.target.value)} required />
          <input value={date} type='date' title='Last date for execution' onChange={(e) => setDate(e.target.value)} required />
          <select onChange={(e) => setOption(e.target.value)}>
            <option value="Work">Work</option>
            <option value="Personel">Personel</option>
            <option value="Study">Study</option>
          </select>
          <button>Submit</button>
        </div>
      </form>

      <div>
      {data.map((value, index) => (
          <div key={index}>
            {editIndex === index ? (
              <div>
                <input type="text" value={editTaskInput} onChange={(e) => setEditTaskInput(e.target.value)}placeholder="Edit Task Title"/>
                <button onClick={() => saveEditedTask(index)}>Save</button>
              </div>
            ) : (
              <div>
                <h2>{value.title}</h2>
                <p>{value.option}</p>
                <p>Last date for execution: {value.date}</p>
                <span>
                  Executed: <input type="checkbox" />
                </span>
                <button onClick={() => startEditTask(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskManager