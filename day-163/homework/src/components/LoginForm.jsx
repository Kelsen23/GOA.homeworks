import React, { useState } from "react";
import useForm from "../hooks/useForm";

const LoginForm = ({ accounts, setIsLoggedIn }) => {
  const { formData, setFormData, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    if (
      accounts.some(
        (account) =>
          account.name === formData.name &&
          account.email === formData.email &&
          account.password === formData.password
      )
    ) {
      setIsLoggedIn(true);
      setFormData({ name: "", email: "", password: "" });
    } else {
      setError("Incorrect Name, Email or Password");
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleLogIn}>
      <h1>Log In</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
    </form>
  );
};

export default LoginForm;
