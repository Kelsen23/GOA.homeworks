import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AdminPanel = () => {
  const { isLoggedIn, accounts, setAccounts } = useContext(AuthContext);
  
  const [editing, setEditing] = useState(null);
  const [editedName, setEditedName] = useState("");

  const handleAccountRemoval = (i) => {
    setAccounts(prev => prev.filter((_, index) => index !== i));
  };

  const handleEdit = (e, index) => {
    e.preventDefault();
    setAccounts(prev =>
      prev.map((acc, i) =>
        i === index ? { ...acc, name: editedName } : acc
      )
    );
    setEditing(null); 
  };

  return (
    <div>
      <div>
        <p>Your Name: {isLoggedIn.name}</p>
        <p>Your Email: {isLoggedIn.email}</p>
        <p>Your Password: {isLoggedIn.password}</p>
      </div>

      <div>
        <ul>
          {accounts.map((acc, index) => {
            if (editing === index) {
              return (
                <form key={index} onSubmit={(e) => handleEdit(e, index)}>
                  <input
                    type="text"
                    placeholder="Edit Name"
                    value={editedName}
                    onChange={e => setEditedName(e.target.value)}
                    required
                  />
                  <button type="submit">Save</button>
                </form>
              );
            } else {
              return (
                <li key={index}>
                  {acc.name}
                  <button onClick={() => handleAccountRemoval(index)}>Remove</button>
                  <button onClick={() => {
                    setEditing(index);
                    setEditedName(acc.name);
                  }}>Edit</button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
