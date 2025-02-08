import React from 'react'
import useForm from '../hooks/useForm'

const Form = () => {

  const { formData, setFormData, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form