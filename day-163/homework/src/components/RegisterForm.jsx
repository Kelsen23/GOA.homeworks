import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";

const RegisterForm = ({ isLoggedIn, setIsLoggedIn, accounts, setAccounts }) => {
  
  const { formData, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (accounts.some((account) => account.email === formData.email)) {
      setError("Account with this email already exists");
      return;
    }

    setAccounts((prev) => [
      ...prev,
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    ]);
    setIsLoggedIn(true);
    setError("");
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [isLoggedIn, accounts]);

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>

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

export default RegisterForm;
