import React, { useState } from 'react'

const Inputs = () => {

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />

      <h2>Input Value: {inputValue}</h2>
    </div>
  )
}

export default Inputs