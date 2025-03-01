import { useState } from 'react'

const useForm = (initialValue) => {
 const [values, setValues] = useState(initialValue);

  const handleChange = e => {
    const { name, value } = e.target;

    setValues(prev => ({ ...prev, [name]: value }));
  }

  return { handleChange, values }
}

export default useForm