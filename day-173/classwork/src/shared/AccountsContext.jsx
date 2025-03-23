import { createContext, useState, useEffect } from "react";

export const AccountsContext = createContext();

const AccountsProvider = ({ children }) => {

    const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem("accounts")) || []);
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn") || false));

    useEffect(() => {
      localStorage.setItem("accounts", JSON.stringify(accounts));
    }, [accounts]);
  
    useEffect(() => {
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

  return (
    <AccountsContext.Provider value={{ accounts, setAccounts, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AccountsContext.Provider>
  )
}

export default AccountsProvider
