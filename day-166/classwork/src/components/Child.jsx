import { useContext } from "react";
import { AuthContext } from "../App"; 

const Child = () => {
  const { email, password } = useContext(AuthContext);

  return (
    <div>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Child;
