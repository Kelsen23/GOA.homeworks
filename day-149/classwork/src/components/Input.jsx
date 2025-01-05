import React, { useState } from 'react';

const Input = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = ({target}) => {
    const { name, value } = target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetInputs = () => {
    setData({
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    });
  }

  return (
    <div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />

        <button onClick={resetInputs}>Reset</button>
      </div>

      <div> 
        {data.name !== "" && data.email !== "" && data.firstName !== "" && data.lastName !== "" ? (
          <div>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
          </div>
      ) : ""}
      </div>
    </div>
  );
};

export default Input;
