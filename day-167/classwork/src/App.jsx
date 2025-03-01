import { useContext, useEffect } from "react"
import { AuthContext } from "./context/AuthContext"
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import Register from "./components/Register";


const App = () => {

  const { isLoggedIn, accounts } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts])

  return (
    <div>
      {
        isLoggedIn ? (
          <AdminPanel />
        ) : (
          <div>
            <Login />
            <Register />
          </div>
        )
      }
    </div>
  )
}

export default App