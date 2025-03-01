import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useForm from "../hooks/useForm"

const Login = () => {

  const { setIsLoggedIn, accounts } = useContext(AuthContext);

  const [error, setError] = useState(null);

  const { handleChange, values } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleLogIn = e => {
    e.preventDefault();

    if (accounts.some(acc => acc.name === values.name && acc.email == values.email && acc.password === values.password)) {
      setIsLoggedIn({
        name: values.name,
        email: values.email,
        password: values.password,
      });
    } else {
      setError("Name, Email or Passsword Incorrect.");
    }
  }

  return (
    <form onSubmit={handleLogIn}>

      <label>Log In</label>


      <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
      <button type="submit">Submit</button>
      {error && <p style={{color: "red"}}>{error}</p>}
    </form>
  )
}

export default Login