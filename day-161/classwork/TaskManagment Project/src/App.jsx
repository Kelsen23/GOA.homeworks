import { useState, useEffect } from "react"
import Form from "./components/Form";
import TaskManager from "./components/TaskManager";


const App = () => {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))
  })

  return (
    <div>
      {isLoggedIn === false ? <Form  users={users} setUsers={setUsers} setIsLoggedIn={setIsLoggedIn} /> : <TaskManager setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )
}

export default App