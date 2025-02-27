import { createContext } from "react"
import Child from "./components/Child";

export const AuthContext = createContext();

const App = () => {

  return (
    <div>
      <AuthContext.Provider value={{email: "email@gmail.com", password: "maili321"}}>
        <Child />
      </AuthContext.Provider>

      <AuthContext.Provider value={{email: "lama@gmail.com", password: "bama321"}}>
        <Child />
      </AuthContext.Provider>

      <AuthContext.Provider value={{email: "lukasmaili@gmail.com", password: "luka123"}}>
        <Child />
      </AuthContext.Provider>
    </div>
  )
}

export default App;