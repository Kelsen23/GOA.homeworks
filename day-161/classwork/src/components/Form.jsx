import React, { useEffect } from 'react'

const Form = ({ users, setUsers, setIsLoggedIn }) => {

  const handleRegister = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const newUser = {name: name, email: email, password: password};

    if (users.some(user => user.email === email)) {
      alert("Email is already taken.");
    } else {
      setUsers(prevUsers => [...prevUsers, newUser]);
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users])
 
  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>

        <input type="text" placeholder="Enter Name" name="name" required />
        <input type="email" placeholder="Enter Email" name="email" required />
        <input type="password" placeholder="Enter Password" name="password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
    
  )
}

export default Form