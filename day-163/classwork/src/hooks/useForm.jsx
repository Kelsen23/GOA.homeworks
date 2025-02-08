import { useState } from "react";

const useForm = (initialValue) => {

  const [formData, setFormData] = useState(initialValue);

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => ({...prev, [name]: value}))
  }

  return { formData, setFormData, handleChange }
};

export default useForm;
