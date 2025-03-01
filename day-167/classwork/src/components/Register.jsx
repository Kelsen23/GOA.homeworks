import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import useForm from '../hooks/useForm';

const Register = () => {

  const { setIsLoggedIn, accounts, setAccounts } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const { handleChange, values } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = e => {
    e.preventDefault();

    if (accounts.some(acc => acc.email === values.email)) {
      setError("Account with this email already exists.");
    } else {

      setIsLoggedIn({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      setAccounts(prev => [...prev, {
        name: values.name,
        email: values.email,
        password: values.password,
      }])

    }
  }

  return (
    <form onSubmit={handleRegister}>

      <label>Register</label>

      <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
      <button type="submit">Submit</button>
      {error && <p style={{color: "red"}}>{error}</p>}
    </form>
  )
}

export default Register