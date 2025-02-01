import { useEffect, useState } from "react";


const TaskManager = ({ setIsLoggedIn }) => {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [isEditing, setIsEditing] = useState(null);

  const handleAddTask = e => {
    e.preventDefault();
    const newTask = e.target.taskInput.value;
    setTaskList(prevTasks => [newTask, ...prevTasks]);
    e.target.taskInput.value = ""
  }

  const handleDelete = (index) => {
    setTaskList(prevTask => prevTask.filter((_, i) => i !== index));
  }

  const handleLogOut = () => {
    setIsLoggedIn(false);
  }

  const handleEdit = (index) => {
    setIsEditing(index);
  }

  const handleSaveEdit = (e, index) => {
    e.preventDefault();

    const updatedTask = e.target.editInput.value;

    if (!updatedTask) return;

    setTaskList((prevTasks) => prevTasks.map((task, i) => (i === index ? updatedTask : task)));
    setIsEditing(null);
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList])

  return (
    <div>

      <div onClick={handleLogOut} style={{marginBottom: 25}}>Log Out</div>

      <form onSubmit={handleAddTask} name="form">
        <input type="text" placeholder="Enter Task" name="taskInput" required />
        <button type="submit">Add Task</button>
      </form>

      <div>
        <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            {isEditing === index ? (
              <form onSubmit={e => handleSaveEdit(e, index)}>
                <input type="text" name="editInput" required />
                <button type="submit">Save</button>
              </form>
            ) : (
              <div>
                <button onClick={() => handleDelete(index)}>X</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default TaskManager