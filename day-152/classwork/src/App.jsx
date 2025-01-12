import React, { useEffect, useState } from 'react'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [acc, setAcc] = useState(JSON.parse(localStorage.getItem("accounts")) || []);
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem("students")) || []);

  const handleRegister = e => {
    e.preventDefault();

    const name = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (acc.some(account => account.name === name)) {
      alert("Acount already exists with this name");
      return;
    }

    if (acc.some(account => account.email === email)) {
      alert("Acount already exists with this email");
      return;
    }

    setIsLoggedIn(true);
    setAcc(prevAcc => [...prevAcc, {name: name, gmail: email, password: password}])
  }

  const handleLogIn = e => {
    e.preventDefault();

    const name = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (acc.some(account => account.name === name && account.password === password && account.email === email)) {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect name, email or password")
    }
  }

  const handleAddStudent = e => {
    e.preventDefault();
    const student = e.target.studentInput.value;

    setStudents(prevStudents => [...prevStudents, student]);
  }

  const handleStudentRemove = (index) => {
    setStudents(prevStudents => prevStudents.filter((_, i) => i !== index))
  }

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(acc));
  }, [acc]);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);
 
  return (
    <div>
      {isLoggedIn === false ? (
        <div>
          <form onSubmit={handleRegister} name='registrationForm'>
            <h2>Register</h2>
            
            <input type="text" name='username' placeholder='Enter Your Username' required />
            <input type="email" name='email' placeholder='Enter Your Email' required />
            <input type="password" name='password' placeholder='Enter Your Password' required />
            <button type='submit'>Register</button>
          </form>

          <form onSubmit={handleLogIn} name='logInForm'>
            <h2>Log In</h2>
            
            <input type="text" name='username' placeholder='Enter Your Username' required />
            <input type="email" name='email' placeholder='Enter Your Email' required />
            <input type="password" name='password' placeholder='Enter Your Password' required />
            <button type='submit'>Log In</button>
          </form>

        </div>
      ) : (
        <div>
          <form onSubmit={handleAddStudent} name="studentForm">
            <input type="text" placeholder='Enter Student Name' name='studentInput' required />
            <button type='submit'>Add Student</button>
          </form>

          <h2>Students</h2>

          <div>
            <ul>
              {students.length > 0 ? students.map((student, index) => {
                return <li key={index} onClick={() => handleStudentRemove(index)}>{student}</li>;
              }) : <p>No Students In The List</p>}
            </ul>
          </div>  
        </div>
      )}
    </div>
  )
}

export default App;