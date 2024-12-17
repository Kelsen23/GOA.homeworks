import React, { useEffect, useState } from 'react'

const RegistrationForm = () => {

  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("accounts") || []));
  const [responseSignUp, setResponseSignUp] = useState("");
  const [responseLogIn, setResponseLogIn] = useState("");

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (data.some(acc => acc.email === email)) {
      setResponseSignUp("Email you entered already in use. Please try again.")
      setTimeout(() => {
        setResponseSignUp("");
      }, 1500)
    } else {
      setData(prevData => [{username: username, email: email, password: password}, ...prevData]);
      setResponseSignUp("Succesfully Signed Up!");
      form.reset();
      { /* Redirect to main website as signed up account */ }
    }
  }

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (data.some(acc => acc.email === email && acc.password === password)) {
      setResponseLogIn("Succesfully Logged In!");
      form.reset();
    } else if (data.some(acc => acc.email !== email || acc.password !== password)) {
      setResponseLogIn("Account with this Email doesn't exist or Incorrect password");
      setTimeout(() => {
        setResponseLogIn("");
      }, 3000);
    }
  }

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(data));
  }, [data])

  return (
    <div>
      <form name="signUpForm" onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <input type="text" name="username" placeholder='Username' required />
        <input type="email" name="email" placeholder='Email' required />
        <input type="password" name="password" placeholder='Password' max={11} min={5} required />
        <button type='submit'>Submit</button>
        <p>{responseSignUp}</p>
      </form>

      <form name="logInForm" onSubmit={handleLogIn}>
        <h1>Log In</h1>
        <input type="email" name="email" placeholder='Email' required />
        <input type="password" name="password" placeholder='Password' max={11} min={5} required />
        <button type='submit'>Submit</button>
        <p>{responseLogIn}</p>
        <p>{responseLogIn === "Succesfully Logged In!" ? "Welcome Back!" : ""}</p>
      </form>
    </div>
    
  )
}

export default RegistrationForm