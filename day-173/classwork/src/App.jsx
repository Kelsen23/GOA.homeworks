import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountsProvider, { AccountsContext } from "./shared/AccountsContext";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import Home from "./components/Home";

const App = () => {
  return (
    <AccountsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </AccountsProvider>
  );
};

export default App;
