import { createContext, useState } from "react"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || null);
  const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem("accounts")) || []);

  return (
    <div>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, accounts, setAccounts}}>
        { children }      
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider