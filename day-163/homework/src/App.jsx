import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import ProductsForm from "./components/ProductsForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
      return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  });

  const [accounts, setAccounts] = useState(() => {
    try {
      const storedAccounts = localStorage.getItem("accounts");
      return storedAccounts ? JSON.parse(storedAccounts) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  if (!isLoggedIn) document.title = "Regitration Form"
  else document.title = "My Cart"

  return (
    <div>
      {isLoggedIn ? (
        <ProductsForm setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div>
          <RegisterForm
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            accounts={accounts}
            setAccounts={setAccounts}
          />
          <LoginForm accounts={accounts} setIsLoggedIn={setIsLoggedIn} />
        </div>
      )}
    </div>
  );
};

export default App;
