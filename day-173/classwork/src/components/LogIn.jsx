import { useContext, useState } from "react";
import { AccountsContext } from "../shared/AccountsContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

    const { accounts, setIsLoggedIn } = useContext(AccountsContext);
    const [error, setError] = useState(null);
    navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (accounts.some(account => account.name === name && account.email === email && account.password === password)) {
            setIsLoggedIn(true);
            setError(null);
            navigate("/");  
        } else {
          setError("Name, Email or Password incorrect.");
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' required />
      <input type="email" name='email' required />
      <input type="password" name='password' required />
      <button type='submit'>Submit</button>
      {error ? <p style={{ color: "red" }}>{error}</p> : ""}
    </form>
  )
}

export default LogIn
